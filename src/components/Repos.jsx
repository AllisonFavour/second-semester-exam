// import RepoDetails from "./pages/RepoDetails";

function Repos( {repos, loading}) {
  if (loading) {
    return <p style={{textAlign: 'center'}}>Loading Repos...</p>
  }
  

  return (
    <div className="repos">
    {repos.map((repo) => (
      <div className="repo" key={repo.id}>
        <h3>Repo full name: <span className="green">{repo.full_name}</span></h3>
        
        <p>Repo URL: <span className="green">{repo.url}</span></p>
        <p> Repo Description: <span className="green">{repo.description}</span></p>
      </div>
    ))}
  </div>
  )
}

export default Repos;