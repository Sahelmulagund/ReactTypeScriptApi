import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import './App.module.css';
import fetch from 'node-fetch';

import ReactDOM from 'react-dom';
import { PostService } from '../services/PostService';
 
 

 
test("renders api calls",async () => {
     
    const postService = new PostService()
    const res = await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=rage=story&page=${0}`);
    const result = await res.json();
    
    expect(result.page).toBe(0);
    console.log(result)
     
})
