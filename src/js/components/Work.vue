<template>
    <transition name="work-slide">
        <div class="work-wrap">
            <div class="work">
                <h1 class="title">Fantasy Enduro</h1>
                <span class="tag-line">Web development</span>
                <div class="project-info">
                    <div class="description">
                        <p>This site is a fantasy contest that follows the Enduro World Series.
                        Built with Laravel 5, I was responsible for both back end and front end development. We have almost
                        300 people playing this season!</p>
                    </div>
                    <div class="details">
                        <h4>Year</h4>
                        <h5>2016</h5>
                        <h4>Client</h4>
                        <h5>Self Initiated</h5>
                        <a href="https://fantasyews.com" class="link" target="_blank"> View Project </a>
                    </div>
                </div>
                <ul class="route-nav">
                    <li><router-link to="/work">01 Fantasy Enduro</router-link></li>
                    <li><router-link to="/gold">02 Sun Valley Gold Team</router-link></li>
                </ul>
            </div>
        </div>
    </transition>
</template>