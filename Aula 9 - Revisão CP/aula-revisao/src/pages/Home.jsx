import Section from "../components/Section";
import Cards from "../components/Cards";
import { useEffect, useState } from "react";
import Tag from "../components/Tag";

export default function Home() {
  const [reactRepos, setReactRepos] = useState([]);
  const [nodeRepos, setNodeRepos] = useState([]);
  const [pythonRepos, setPythonRepos] = useState([]);
  const API = import.meta.env.VITE_GITHUB_API;
  
  useEffect(() => {
    fetch(`${API}react&per_page=5`)
      .then(res => res.json())
      .then(data => setReactRepos(data.items))
  }, [])
    useEffect(() => {
    fetch(`${API}node&per_page=5`)
      .then(res => res.json())
      .then(data => setNodeRepos(data.items))
  }, [])
    useEffect(() => {
    fetch(`${API}python&per_page=5`)
      .then(res => res.json())
      .then(data => setPythonRepos(data.items))
  }, [])
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">GitHub Repositories Explorer</h1>
      <Section titulo="Repositórios do React" className="grid grid-cols-3 grid-rows-2 gap-4">
        {reactRepos.map(pegaItem => (
          <Cards {...pegaItem}/>
        ))}
      </Section>
      <Section titulo="Repositórios do Node" >
        {nodeRepos.map(pegaItem => (
          <Cards {...pegaItem}/>
        ))}
      </Section>
      <Section titulo="Repositórios do Angular" >
               {pythonRepos.map(pegaItem => (
          <Cards {...pegaItem}/>
        ))}
      </Section>
    </div>
  );
}
