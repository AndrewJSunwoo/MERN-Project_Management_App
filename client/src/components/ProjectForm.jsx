import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_PROJECT, GET_PROJECTS } from "../graphql/projects";

export function ProjectForm() {
  const [project, setProject] = useState({
    name: "",
    description: "",
  });

  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
    refetchQueries: [
      {
        query: GET_PROJECTS,
      },
      "GetProjects",
    ],
  });

  const handleChange = ({ target: { name, value } }) => {
    setProject({
      ...project,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject({
      variables: {
        name: project.name,
        description: project.description,
      },
    });
    e.target.reset();
    e.target.name.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="w-2/5">
      {error && <p>{error.message}</p>}
      <input
        type="text"
        name="name"
        placeholder="Write a title"
        onChange={handleChange}
        className="bg-zinc-800 text-white rounded-lg shadow-lg p-4 block w-full mb-3"
      />
      <textarea
        name="description"
        rows="3"
        placeholder="Write a description"
        onChange={handleChange}
        className="bg-zinc-800 text-white rounded-lg shadow-lg p-4 block w-full mb-3"
      ></textarea>
      <button
        disabled={!project.name || !project.description || loading}
        onClick={handleSubmit}
        className="bg-blue-500 px-4 py-1 rounded-md text-lg mb-3 disabled:bg-zinc-400"
      >
        Save
      </button>
    </form>
  );
}
