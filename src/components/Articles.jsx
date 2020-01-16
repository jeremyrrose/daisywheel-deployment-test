import React from 'react';
import { getArticlesToEdit } from '../services/ApiMethods.js'
import ArticleCard from './shared/ArticleCard.jsx'
import '../styles/Articles.css'

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        this.setArticles();
    }

    setArticles = async () => {
        // const articles = await getArticlesToEdit(this.props.section_id);
        // this.setState({
        //     articles: articles
        // })
    }

    articleCards = () => {
        return this.props.articles && this.props.articles.map((article, index) => {
            return (<ArticleCard
                key={index}
                isTop={this.props.top_story === article.id}
                featured={this.props.feature_ids.includes(article.id)}
                articleId={article.id}
                image={article.image}
                title={article.title}
                dek={article.dek}
                author={article.author.name}
                date={article.created_at}
                published={article.published}
                topToggle={this.props.topToggle}
                featureToggle={this.props.featureToggle}
                />)
        });
    }

    render() {


        return (
            <div className="articleList">
                {this.articleCards()}
            </div>
        )
    }
}

export default Articles