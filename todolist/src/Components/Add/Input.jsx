import React from "react";

export default function Input({ onChange, value, name }) {
  return <input type="text" value={value} name={name} onChange={onChange} />
};
