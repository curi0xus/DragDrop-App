import React from "react";
import ReactDOM from "react-dom";
import Provider from './components/Provider';
import Layout from "./components/Layout";
import ProjectItem from "./components/ProjectItem";
import ToDoForm from "./components/ToDoForm";

const app = document.getElementById('app');
ReactDOM.render(<Provider><Layout/></Provider>, app);