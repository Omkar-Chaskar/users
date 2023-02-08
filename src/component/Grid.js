import React from "react";
import Card from "./Card";
import { useUser } from "../context/userProvider";
import { Grid as LoadingGrid } from "react-loader-spinner";

function Grid() {
  const { user, loading } = useUser();

  return (
    <div className="grid">
      {user.data && loading === false ? (
        <div className="row">
          {user.data &&
            user.data.map((user) => {
              return <Card user={user} key={user.id} />;
            })}
        </div>
      ) : (
        <div className="row-init">
          {loading === false ? (
            <h1>Click on Get User button to load users.</h1>
          ) : (
            <div>
              <LoadingGrid
                height="80"
                width="80"
                color="#f34646"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Grid;
