{\rtf1\ansi\ansicpg936\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 ---\
layout: page\
title: \uc0\u25991 \u31456 \u24402 \u26723 \
permalink: /archive/\
---\
\
# \uc0\u25991 \u31456 \u24402 \u26723 \
\
\
\
  \{% for post in site.posts %\}\
    \{% unless post.next %\}\
      \
\{\{ post.date | date: '%Y' \}\}\
\
    \{% else %\}\
      \{% capture year %\}\{\{ post.date | date: '%Y' \}\}\{% endcapture %\}\
      \{% capture nyear %\}\{\{ post.next.date | date: '%Y' \}\}\{% endcapture %\}\
      \{% if year != nyear %\}\
        \
\{\{ post.date | date: '%Y' \}\}\
\
      \{% endif %\}\
    \{% endunless %\}\
    \
    \
\
      \{\{ post.date | date: "%m-%d" \}\}\
      \{\{ post.title \}\}\
    \
\
  \{% endfor %\}\
\
\
\
\
}