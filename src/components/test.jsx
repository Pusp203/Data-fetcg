import React from "react";
import { useLocation } from "react-router-dom";

export function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Test = () => {
  let query = useQuery();
  const slug = query.get("slug");

  console.log("query", slug);
  return <div>Test</div>;
};

export default Test;
