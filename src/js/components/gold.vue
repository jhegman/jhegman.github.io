<template>
    <transition name="work-slide">
        <div class="work-wrap">
            <div class="work">
                    <h1>Sun Valley Gold Team
                    </h1>
                    <span class="tag-line">Web development</span>
                    <p> This is a site I built for the Sun Valley XC Gold team.  It is a wordpress site with 
                    a custom child theme.  I am responsible for all design, hosting and maintenance.  Take a look! 
                    </p>
                    <a href="http://xcgold.svsef.org" class="link" target="_blank"> Link to site </a>
                    <ul>
                    	<li><router-link to="/work">01 Fantasy Enduro</router-link></li>
                    	<li><router-link to="/gold">02 Sun Valley Gold Team</router-link></li>
                    </ul>
            </div>
        </div>
    </transition>
</template>