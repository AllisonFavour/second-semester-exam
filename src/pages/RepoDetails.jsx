import {useState, useEffect} from "react";
import Repos from "../components/Repos";
import Pagination from "../components/Pagination";

function RepoDetails() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(3);

  useEffect(() => {
    const fetchGitRepos = async () => {
      setLoading(true);
      const result = await fetch('https://api.github.com/users/AllisonFavour/repos');
      const repoData = await result.json();
      setRepos(repoData);
      setLoading(false);
    };

    fetchGitRepos();
  }, []);


    // get current posts
    const indexOfLastPost = currentPage * reposPerPage;
    const indexOfFirstPost = indexOfLastPost - reposPerPage;
    const currentRepos = repos.slice(indexOfFirstPost, indexOfLastPost);
  
    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <>
    <SearchAndFilter repos={repos} />
    <Repos loading={loading} repos={currentRepos} />
    <Pagination reposPerPage={reposPerPage} totalRepos={repos.length} paginate={paginate} />
    </>
  )
}
  
export default RepoDetails;