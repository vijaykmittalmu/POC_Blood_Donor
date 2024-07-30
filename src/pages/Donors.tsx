import { FC, lazy, Profiler, Suspense } from "react";
import mockResponse from "../mockData.json";
import ErrorBoundary from "../components/ErrorBoundry";
import { BloodDonorProps } from "./Home";
const ListItem = lazy(() => import("../components/ListItem"));

const DonorLists: FC<BloodDonorProps> = ({ title = "" }) => {
  const onRender = (
    id: any,
    phase: any,
    actualDuration: any,
    baseDuration: any,
    startTime: any,
    commitTime: any
  ) => {
    console.log("ID : ", id);
    console.log("phase :", phase);
    console.log("actualDuration :", actualDuration);
    console.log("baseDuration :", baseDuration);
    console.log("startTime :", startTime);
    console.log("commitTime :", commitTime);
    console.log("***************************************");
  };

  return (
    <div className="list-wrapper">
      <section className="filter">
        <label>Sort by:</label>
        <select className="sortby">
          <option>A - Z</option>
          <option>Z - A</option>
          <option>Nearest</option>
        </select>
      </section>

      <hr className="horizontal" />

      <Suspense fallback={<p style={{ margin: "10px" }}>Loading...</p>}>
        {mockResponse.map((user) => {
          return (
            <Profiler id={`listitem-${user.name}`} onRender={onRender}>
              <ErrorBoundary>
                <ListItem user={user} />
              </ErrorBoundary>
            </Profiler>
          );
        })}
      </Suspense>
    </div>
  );
};

export default DonorLists;
