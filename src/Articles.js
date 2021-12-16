import React, { Component } from 'react';
import ArticleItem from './ArticleItem';
import { blogData } from './DataBase';
import { v4 as uuidv4 } from 'uuid';

const Articles = () => {
    return (
            <div className="Articles">
                {blogData.map(a =>
                    <ArticleItem 
                        id = {a.id}
                        key = {uuidv4()}
                        src = {a.img_url}
                        title = {a.title}
                    />
                )}
                {/* {console.log(this.state.dataBase)} */}
            </div>
                );}
 
export default Articles;