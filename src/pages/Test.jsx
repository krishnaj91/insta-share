import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { testApi } from "../redux/actions/testActions";

const Test = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.testData);

  useEffect(() => {
    dispatch(testApi());
  }, [dispatch]);

  console.log(data);
  return (
    <div>
      <ul>
        {data &&
          data.map((items) => {
            return (
              <div key={items.id} className="border border-bottom-1 mb-3 p-3">
                <li>Name : {items.name}</li>
                <li>Email : {items.email}</li>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default Test;
