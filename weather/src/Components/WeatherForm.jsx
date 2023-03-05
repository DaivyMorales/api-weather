import { useContext, useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

import { WeatherContext } from "../Context/WeatherContextProvider";

export const WeatherForm = () => {
  const { place, handleChangeCity } = useContext(WeatherContext);

  useEffect(() => {
    handleChangeCity();
  }, []);

  return (
    <Formik
      initialValues={place}
      onSubmit={(values, { resetForm }) => {
        handleChangeCity(values.city);
        console.log(values.city);
        resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div className=" container mx-auto flex justify-center items-center ">
            <div className="flex flex-col justify-center items-center gap-y-1">
              <label htmlFor="" className="font-bold text-purple-500">
                Write a city
              </label>
              <div className="flex gap-x-2">
                <Field
                  // type="text"
                  name="city"
                  placeholder="¿Where you to go?"
                  className="Field"
                />
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
