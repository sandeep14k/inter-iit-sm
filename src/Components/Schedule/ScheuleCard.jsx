export default function SheduleCard({ match }) {
  return (
    <>
      <div key={match.matchId} className="match-card">
        <div className="details">
          <h3>Match {match.matchId}</h3>
          <p className="dete-font">Pool A</p>
          <div className="time">
            <p className="dete-font">Time:{match.time}</p>
            <p className="dete-font">Venue:{match.venue}</p>
          </div>
        </div>
      </div>
    </>
  );
}
