import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';

import { addBook, retrieveBooks } from '../../store/books/books.actions';
import { sleep } from '../../utils/helpers/async.helpers';

const Label = styled.label`
  margin: 10px 0;
`;

const FormField = styled(Field)`
  display: block;
  width: 100%;
  margin-top: 5px;
  box-sizing: border-box;
`;

const Button = styled.button`
  font-size: 20px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  max-width: 300px;
`;

const AddBookForm = () => {
  const dispatch = useDispatch();

  const isBookListLoading = useSelector((state) => state.books.isLoading);
  const bookListLength = useSelector((state) => state.books.books.length);

  const onSubmitForm = async (values, { resetForm }) => {
    const { title, description } = values;

    await sleep(2000);

    if (title) {
      dispatch(addBook({
        title,
        description,
        id: uuid(),
      }));

      resetForm();
    }
  };
  const onLoadBooks = () => {
    dispatch(retrieveBooks());
  };

  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
      }}
      onSubmit={onSubmitForm}
    >
      {({ isSubmitting, errors, touched }) => (
        <StyledForm>
          <Label htmlFor="book-title-field">
            <span>Title:</span>
            <FormField
              id="book-title-field"
              type="text"
              name="title"
              required
              validate={(value) => {
                let error;

                if (value.trim().toLowerCase().includes('lorem')) {
                  error = 'Lorem is forbidden for books!';
                }

                return error;
              }}
            />
            {errors.title && touched.title && (
              <span>{errors.title}</span>
            )}
          </Label>
          <Label htmlFor="book-description-field">
            <span>Description:</span>
            <FormField id="book-description-field" type="text" name="description" />
          </Label>
          <Button type="submit" disabled={isSubmitting}>Add a new Book</Button>
          {isSubmitting && (
            <p>Saving your book...</p>
          )}
          <Button
            type="button"
            disabled={bookListLength || isBookListLoading}
            onClick={onLoadBooks}
            style={{ margin: '10px 0 0' }}
          >
            {isBookListLoading ? 'Loading...' : 'Load book list'}
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default AddBookForm;
