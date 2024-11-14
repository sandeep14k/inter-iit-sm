import SchedulePage from "../Components/Schedule/SchedulePage";

export default function Schedule({role}) {
  return (
    <>
      <SchedulePage role={role} pageStatus="live" />
    </>
  );
}
