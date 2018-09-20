<template>
    <transition name="work-slide">
        <div class="work-wrap">
            <div class="work">
                <h1 class="title">Sun Valley Gold Team</h1>
                <span class="tag-line">Web development</span>
                <div class="project-info">
                    <div class="description">
                        <p>This is a site I built for the Sun Valley XC Gold team.  It is a wordpress site with 
                    a custom child theme.  I am responsible for all design, hosting and maintenance.</p>
                    </div>
                    <div class="details">
                        <h4>Year</h4>
                        <h5>2015</h5>
                        <h4>Client</h4>
                        <h5>Sun Valley SEF</h5>
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
