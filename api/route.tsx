import { StateType } from "@/app/context/globalStateContext";

export default async function getOwners(
  nameQuery: string,
  perPageQuery: string,
  dispatch?: Function,
  state?: StateType
) {
  const token = process.env.NEXT_PUBLIC_AUTH_TOKEN;
  const res = await fetch(
    `https://gorest.co.in/public/v2/users?page=1${
      perPageQuery && `&per_page=${perPageQuery}`
    }${nameQuery && `&name=${nameQuery}`}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (dispatch && state) {
    dispatch({ cats: state.cats + 1 });
  }

  return res.json();
}
