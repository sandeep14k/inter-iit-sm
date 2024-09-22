export default function (
  category,
  liveStreamUrl,
  matchId,
  sport,
  status,
  team1,
  team2,
  time,
  venue
) {
  return {
    category: category,
    liveStreamUrl: liveStreamUrl,
    matchId: matchId,
    sport: sport,
    status: status,
    team1: team1,
    team2: team2,
    time: time,
    venue: venue
  }
}
