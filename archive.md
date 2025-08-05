---
layout: page
title: 文章归档
permalink: /archive/
---

# 文章归档



  {% for post in site.posts %}
    {% unless post.next %}
      
{{ post.date | date: '%Y' }}

    {% else %}
      {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
      {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
      {% if year != nyear %}
        
{{ post.date | date: '%Y' }}

      {% endif %}
    {% endunless %}
    
    

      {{ post.date | date: "%m-%d" }}
      {{ post.title }}
    

  {% endfor %}




