import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  // urlの「?」以降を取得
  const { search } = useLocation();
  // クエリを簡単に取得できるようにする
  const query = new URLSearchParams(search);

  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメータは {id} です</p>
      <p>クエリパラメータは {query.get("name")} です</p>
    </div>
  );
};
