var store = [{
        "title": "Quick-Start Guide",
        "excerpt":"Minimal Mistakes has been developed as a Gem-based theme for easier use, and 100% compatible with GitHub Pages when used as a remote theme. If you enjoy this theme, please consider supporting me for developing and maintaining it. Installing the theme If you’re running Jekyll v3.7+ and self-hosting you can...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/quick-start-guide/"
      },{
        "title": "Structure",
        "excerpt":"Nothing clever here :wink:. Layouts, data files, and includes are all placed in their default locations. Stylesheets and scripts in assets, and a few development related files in the project’s root directory. Please note: If you installed Minimal Mistakes via the Ruby Gem method, theme files like _layouts, _includes, _sass,...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/structure/"
      },{
        "title": "Installation",
        "excerpt":"Install the theme 1. For a new site, install the minimal-mistakes-jekyll gem, remote theme, or fork the Minimal Mistakes repo on GitHub following the steps outlined in the Quick-Start Guide. If you plan to host with GitHub Pages be sure to properly setup jekyll-remote-theme as it is required for the...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/installation/"
      },{
        "title": "Upgrading",
        "excerpt":"If you’re using the Ruby Gem or remote theme versions of Minimal Mistakes, upgrading is fairly painless. To check which version you are currently using, view the source of your built site and you should see something similar to: &lt;!-- Minimal Mistakes Jekyll Theme 4.19.3 by Michael Rose Copyright 2013-2020...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/upgrading/"
      },{
        "title": "Configuration",
        "excerpt":"Settings that affect your entire site can be changed in Jekyll’s configuration file: _config.yml, found in the root of your project. If you don’t have this file you’ll need to copy or create one using the theme’s default _config.yml as a base. Note: for technical reasons, _config.yml is NOT reloaded...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/configuration/"
      },{
        "title": "Overriding Theme Defaults",
        "excerpt":"When installing the theme as a Ruby Gem its layouts, includes, stylesheets, and other assets are all bundled in the gem. Meaning they’re not easily visible in your project. Each of these files can be modified, but you’ll need to copy the default version into your project first. For example,...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/overriding-theme-defaults/"
      },{
        "title": "Navigation",
        "excerpt":"Customize site navigational links through a Jekyll data file. Masthead The masthead links use a “priority plus” design pattern. Meaning, show as many navigation items that will fit horizontally with a toggle to reveal the rest. To define these links add titles and URLs under the main key in _data/navigation.yml:...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/navigation/"
      },{
        "title": "UI Text",
        "excerpt":"Text for UI elements, _layouts, and _includes grouped together as a set of translation keys. This is by no means a full-on i18n solution, but it does help make customizing theme text a bit easier. The English1 main keys in _data/ui-text.yml are translated in the following languages: Brazilian Portuguese (Português...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ui-text/"
      },{
        "title": "Authors",
        "excerpt":"Sites that may have content authored from various individuals can be accommodated by using data files. To assign an author to a post or page that is different from the site author specified in _config.yml: Step 1. Create _data/authors.yml and add authors using the following format. Any variables found under...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/authors/"
      },{
        "title": "Layouts",
        "excerpt":"The bread and butter of any theme. Below you’ll find the layouts included with Minimal Mistakes, what they look like and the type of content they’ve been built for. Default layout The base layout all other layouts inherit from. There’s not much to this layout apart from pulling in several...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/layouts/"
      },{
        "title": "Working with Posts",
        "excerpt":"Posts are stored in the _posts directory and named according to the YEAR-MONTH-DAY-title.MARKUP format as per the usual. Where YEAR is a four-digit number, MONTH and DAY are both two-digit numbers, and MARKUP is the file extension representing the format used in the file. For example, the following are examples...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/posts/"
      },{
        "title": "Working with Pages",
        "excerpt":"To better organize all of your pages you can centralize them into a single location similar to posts and collections. Step 1: Start by placing pages (.md or .html files) into a _pages directory. Meaningfully naming files should be the goal. Avoid patterns like /about/index.md as it makes distinguishing between...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/pages/"
      },{
        "title": "Working with Collections",
        "excerpt":"Collections like posts and pages work as you’d expect. If you’re new to them be sure to read Jekyll’s documentation. The theme has been built with collections in mind and you will find several examples on the demo site (portfolio, recipes, pets). Collections in the Wild: This set of documentation...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/collections/"
      },{
        "title": "Utility Classes",
        "excerpt":"Using the Kramdown Markdown renderer with Jekyll allows you to add block and inline attributes. This is nice if you want to add custom styling to text and image, and still write in Markdown. Jekyll 3: Kramdown is the default for jekyll new sites and those hosted on GitHub Pages....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/utility-classes/"
      },{
        "title": "Stylesheets",
        "excerpt":"The theme’s assets/css/main.css file is built from several SCSS partials located in _sass/ and is structured as follows: minimal-mistakes├── _sass| └── minimal-mistakes| ├── vendor # vendor SCSS partials| | ├── breakpoint # media query mixins| | ├── magnific-popup # Magnific Popup lightbox| | └── susy # Susy grid system| ├──...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/stylesheets/"
      },{
        "title": "JavaScript",
        "excerpt":"The theme’s assets/js/main.min.js script is built from several vendor, jQuery plugins, and other scripts found in assets/js/. minimal mistakes├── assets| ├── js| | ├── plugins| | | ├── gumshoe.js # simple scrollspy| | | ├── jquery.ba-throttle-debounce.js # rate-limit functions| | | ├── jquery.fitvids.js # fluid width video embeds| | |...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/javascript/"
      },{
        "title": "History",
        "excerpt":"4.19.3 Enhancements Update GreedyNav.js to reduce masthead link overflow/shifting on mobile devices. #2551 Replace &lt;section id=\"custom-comments\"&gt;&lt;/section&gt; in comments.html include and add custom_scripts.html include for loading custom comment provider JavaScript in the footer. #2549 Move page date Liquid to include. #2544 Strip trailing whitespace in seo_description. #2542 Improve sticky sidebar’s appearance...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/history/"
      },{
        "title": "Contributing",
        "excerpt":"Having trouble working with the theme? Found a typo in the documentation? Interested in adding a feature or fixing a bug? Then by all means submit an issue or pull request. If this is your first pull request, it may be helpful to read up on the GitHub Flow first....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/contributing/"
      },{
        "title": "2.2 Documentation",
        "excerpt":"Installation Minimal Mistakes now requires Jekyll 3.0. Make sure to run bundle update if you aren’t on the latest version to update all gem dependencies. If you are creating a new Jekyll site using Minimal Mistakes follow these steps: Fork the Minimal Mistakes repo. Clone the repo you just forked...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/docs-2-2/"
      },{
        "title": "License",
        "excerpt":"The MIT License (MIT) Copyright (c) 2013-2020 Michael Rose and contributors Permission is hereby granted, free of charge, to any person obtaining a copyof this software and associated documentation files (the “Software”), to dealin the Software without restriction, including without limitation the rightsto use, copy, modify, merge, publish, distribute, sublicense,...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/license/"
      },{
        "title": "Baz Boom Identity",
        "excerpt":"Pictures of Goats section West Seattle Blog dingbat newspaper rubber cement Google+ newsroom cafe news.me rubber cement, Ushahidi Kindle Single syndicated Instagram HuffPo community mthomps, Mozilla iPhone app should isn’t a business model curmudgeon Snarkmarket Tim Carmody production of innocence. Fuego tweets community DocumentCloud metered model Gardening &amp; War section...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/gallery/baz-boom-identity/"
      },{
        "title": "Fizz Bang Identity",
        "excerpt":"Pictures of Goats section West Seattle Blog dingbat newspaper rubber cement Google+ newsroom cafe news.me rubber cement, Ushahidi Kindle Single syndicated Instagram HuffPo community mthomps, Mozilla iPhone app should isn’t a business model curmudgeon Snarkmarket Tim Carmody production of innocence. Fuego tweets community DocumentCloud metered model Gardening &amp; War section...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/gallery/fizz-bang-identity/"
      },{
        "title": "Foo Bar Identity",
        "excerpt":"Pictures of Goats section West Seattle Blog dingbat newspaper rubber cement Google+ newsroom cafe news.me rubber cement, Ushahidi Kindle Single syndicated Instagram HuffPo community mthomps, Mozilla iPhone app should isn’t a business model curmudgeon Snarkmarket Tim Carmody production of innocence. Fuego tweets community DocumentCloud metered model Gardening &amp; War section...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/gallery/foo-bar-website/"
      },{
        "title": "Ginger Gulp Identity",
        "excerpt":"Pictures of Goats section West Seattle Blog dingbat newspaper rubber cement Google+ newsroom cafe news.me rubber cement, Ushahidi Kindle Single syndicated Instagram HuffPo community mthomps, Mozilla iPhone app should isn’t a business model curmudgeon Snarkmarket Tim Carmody production of innocence. Fuego tweets community DocumentCloud metered model Gardening &amp; War section...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/gallery/ginger-gulp-identity/"
      },{
        "title": "Lhasa Apso",
        "excerpt":"The Lhasa Apso (/ˈlɑːsə ˈæpsoʊ/ lah-sə ap-soh) is a non-sporting dog breed originating in Tibet. It was bred as an interior sentinel in the Buddhist monasteries, to alert the monks to any intruders who entered. Lhasa is the capital city of Tibet, and apso is a word in the Tibetan...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/pets/2020-04-12-lhasa-apso/"
      },{
        "title": "Tabby",
        "excerpt":"A tabby is any domestic cat that has a coat featuring distinctive stripes, dots, lines or swirling patterns, usually together with a mark resembling an ‘M’ on its forehead. Tabbies are sometimes erroneously assumed to be a cat breed. In fact, the tabby pattern is found in many breeds, as...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/pets/2020-04-16-tabby/"
      },{
        "title": "Welsh Corgi",
        "excerpt":"click!!! - cute pet photo. 특징 몸통이 길고 다리가 짧은 영국의 웨일스산의 개이다. 웰시 코기는 펨브로크 웰시 코기 와 카디건 웰시 코기, 이 두 가지의 종류로 나뉘는데 펨브로크 종이 더 흔하다. 웰시 코기 카디건과 펨브룩은 꼬리 길이나 귀 크기, 몸집 등으로 알 수 있다. 펨브룩은 꼬리가 없는 종류도 있지만, 카디건은...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/pets/2020-07-10-welsh-corgi/"
      },{
        "title": "Edge Case: Nested and Mixed Lists",
        "excerpt":"Nested and mixed lists are an interesting beast. It’s a corner case to make sure that lists within lists do not break the ordered list numbering order and list styles go deep enough. Ordered – Unordered – Ordered ordered item ordered item unordered unordered ordered item ordered item ordered item...","categories": ["Edge Case"],
        "tags": ["content","css","edge case","lists","markup"],
        "url": "http://localhost:4000/edge%20case/2009/05/15/edge-case-nested-and-mixed-lists.html"
      },{
        "title": "Edge Case: Many Tags",
        "excerpt":"This post has many tags. ","categories": ["Edge Case"],
        "tags": ["8BIT","alignment","Articles","captions","categories","chat","comments","content","css","dowork","edge case","embeds","excerpt","Fail","featured image","FTW","Fun","gallery","html","image","Jekyll","layout","link","Love","markup","Mothership","Must Read","Nailed It","Pictures","Post Formats","quote","standard","Success","Swagger","Tags","template","title","twitter","Unseen","video","YouTube"],
        "url": "http://localhost:4000/edge%20case/2009/06/01/edge-case-many-tags.html"
      },{
        "title": "Edge Case: Many Categories",
        "excerpt":"This post has many categories. ","categories": ["aciform","antiquarianism","arrangement","asmodeus","broder","buying","championship","chastening","disinclination","disinfection"],
        "tags": ["categories","edge case"],
        "url": "http://localhost:4000/aciform/antiquarianism/arrangement/asmodeus/broder/buying/championship/chastening/disinclination/disinfection/2009/07/02/edge-case-many-categories.html"
      },{
        "title": "Edge Case: No Body Content",
        "excerpt":"","categories": ["Edge Case"],
        "tags": ["content","edge case","layout"],
        "url": "http://localhost:4000/edge%20case/2009/08/06/edge-case-no-body-content.html"
      },{
        "title": "Edge Case No Yaml Title",
        "excerpt":"This post has no title specified in the YAML Front Matter. Jekyll should auto-generate a title from the filename. For example 2009-09-05-edge-case-no-yaml-title.md becomes Edge Case No Yaml Title. ","categories": ["Edge Case"],
        "tags": ["edge case","layout","title"],
        "url": "http://localhost:4000/edge%20case/2009/09/05/edge-case-no-yaml-title.html"
      },{
        "title": "Antidisestablishmentarianism",
        "excerpt":"This post title has a long word that could potentially overflow the content area. A few things to check for: Non-breaking text in the title should have no adverse effects on layout or functionality. Check the browser window / tab title.The following CSS property will help you support non-breaking text....","categories": ["Edge Case"],
        "tags": ["content","css","edge case","html","layout","title"],
        "url": "http://localhost:4000/edge%20case/2009/10/05/edge-case-title-should-not-overflow-the-content-area.html"
      },{
        "title": "Suspicio? Bene ... tunc ibimus? Quis uh ... CONEXUS locus his diebus? Quisque semper aliquid videtur, in volutpat mauris. Nolo enim dicere. Vobis neque ab aliis. Ego feci memetipsum explicans. Gus mortuus est. Lorem opus habeo. Jackson Isai? Tu quoque ... A te quidem a ante. Vos scitis quod blinking res Ive 'been vocans super vos? Et conteram illud, et conteram hoc. Maledicant druggie excors. Iam hoc tu facere conatus sum ad te in omni tempore? Ludum mutavit. Verbum est ex. Et ... sunt occid",
        "excerpt":"Check for long titles and how they might break layouts. ","categories": ["Edge Case"],
        "tags": ["content","css","edge case","html","layout","title"],
        "url": "http://localhost:4000/edge%20case/2009/10/05/edge-case-very-long-title.html"
      },{
        "title": "Post: Modified Date",
        "excerpt":"This post has been updated and should show a modified date if last_modified_at is used in the layout. Plugins like jekyll-sitemap use this field to add a &lt;lastmod&gt; tag your sitemap.xml. ","categories": ["Post Formats"],
        "tags": ["Post Formats","readability","standard"],
        "url": "http://localhost:4000/post%20formats/2010/01/07/post-modified.html"
      },{
        "title": "Post: Standard",
        "excerpt":"All children, except one, grow up. They soon know that they will grow up, and the way Wendy knew was this. One day when she was two years old she was playing in a garden, and she plucked another flower and ran with it to her mother. I suppose she...","categories": ["Post Formats"],
        "tags": ["Post Formats","readability","standard"],
        "url": "http://localhost:4000/post%20formats/2010/01/07/post-standard.html"
      },{
        "title": "Post: Quote",
        "excerpt":"  Only one thing is impossible for God: To find any sense in any copyright law on the planet.   Mark Twain ","categories": ["Post Formats"],
        "tags": ["Post Formats","quote"],
        "url": "http://localhost:4000/post%20formats/2010/02/05/post-quote.html"
      },{
        "title": "Post: Link",
        "excerpt":"This theme supports link posts, made famous by John Gruber. To use, just add link: http://url-you-want-linked to the post’s YAML front matter and you’re done.   And this is how a quote looks. Some link can also be shown. ","categories": ["Post Formats"],
        "tags": ["link","Post Formats"],
        "url": "http://localhost:4000/post%20formats/2010/03/07/post-link.html"
      },{
        "title": "Post: Video (YouTube)",
        "excerpt":"This post tests YouTube video embeds. Simply use the responsive-embed helper include like so: {% include responsive-embed url=\"https://www.youtube.com/watch?v=-PVofD2A9t8\" ratio=\"16:9\" %}Or wrap embeds with a &lt;div&gt; element and the appropriate classes: &lt;!-- 21:9 aspect ratio --&gt;&lt;div class=\"responsive-embed responsive-embed-21by9\"&gt; &lt;iframe class=\"responsive-embed-item\" src=\"...\"&gt;&lt;/iframe&gt;&lt;/div&gt;&lt;!-- 16:9 aspect ratio --&gt;&lt;div class=\"responsive-embed responsive-embed-16by9\"&gt; &lt;iframe class=\"responsive-embed-item\" src=\"...\"&gt;&lt;/iframe&gt;&lt;/div&gt;&lt;!-- 4:3...","categories": ["Post Formats"],
        "tags": ["Post Formats"],
        "url": "http://localhost:4000/post%20formats/2010/06/02/post-video-youtube.html"
      },{
        "title": "Post: Twitter Embed",
        "excerpt":"Oh I dunno. It&#39;s probably been over 15 years since I smudged out a face with a pencil and kneaded eraser. #WIP #Sktchy pic.twitter.com/PwqbMddyVK &mdash; Michael Rose (@mmistakes) February 1, 2017This post tests Twitter Embeds. ","categories": ["Media"],
        "tags": ["content","embeds","media","twitter"],
        "url": "http://localhost:4000/media/2010/09/10/post-twitter-embeds.html"
      },{
        "title": "Layout: Post with Table Of Contents",
        "excerpt":"Enable table of contents on post or page by adding {% include toc %} where you’d like it to appear. &lt;h2 id=\"toc-toggle\" class=\"no_toc\"&gt; Table of Contents &lt;i class=\"toc-toggle-icon fas fa-chevron-down\"&gt;&lt;/i&gt;&lt;/h2&gt;1. toc{:toc} HTML Elements Below is are some HTML elements. Check the source code to see the many embedded elements within...","categories": ["Layout"],
        "tags": ["table of contents"],
        "url": "http://localhost:4000/layout/2012/03/04/layout-table-of-contents.html"
      },{
        "title": "Layout: Author Override",
        "excerpt":"Sites that may have content authored from various individuals can be accommodated by using data files. To attribute an author to a post or page that is different from the site author specified in _config.yml: Step 1. Create _data/authors.yml and add authors using the following format. Anything variables found under...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/2012/03/14/layout-author-override.html"
      },{
        "title": "Layout: Excerpt (Defined)",
        "excerpt":"This is the start of the post content. This paragraph should be absent from an index page where post.excerpt is shown. ","categories": ["Layout","Uncategorized"],
        "tags": ["content","excerpt","layout"],
        "url": "http://localhost:4000/layout/uncategorized/2012/03/14/layout-excerpt-defined.html"
      },{
        "title": "Layout: Excerpt (Generated with Separator Tag)",
        "excerpt":"This is the post content. Archive-index pages should display an auto-generated excerpt of all the content preceding the excerpt_separator, as defined in the YAML Front Matter or globally in _config.yml. Be sure to test the formatting of the auto-generated excerpt, to ensure that it doesn’t create any layout problems. Lorem...","categories": ["Layout","Uncategorized"],
        "tags": ["content","excerpt","layout"],
        "url": "http://localhost:4000/layout/uncategorized/2012/03/14/layout-excerpt-generated.html"
      },{
        "title": "Layout: Hero Image",
        "excerpt":"This post should display a large hero image at the top of a page. This post tests a horizontal image using the following YAML Front Matter: image: path: /assets/images/eder-oliveira-180877.jpgHero images can also be assigned more succinctly when thumbnail or caption are not used. image: /assets/images/eder-oliveira-180877.jpgTall images will push content down...","categories": ["Layout"],
        "tags": ["content","image","layout"],
        "url": "http://localhost:4000/layout/2012/03/14/layout-hero-image.html"
      },{
        "title": "Markup: Text Readability Test",
        "excerpt":"Portland in shoreditch Vice, labore typewriter pariatur hoodie fap sartorial Austin. Pinterest literally occupy Schlitz forage. Odio ad blue bottle vinyl, 90’s narwhal commodo bitters pour-over nostrud. Ugh est hashtag in, fingerstache adipisicing laboris esse Pinterest shabby chic Portland. Shoreditch bicycle rights anim, flexitarian laboris put a bird on it...","categories": [],
        "tags": ["sample post","readability","test"],
        "url": "http://localhost:4000/2012/05/22/markup-text-readability.html"
      },{
        "title": "Markup: Title *with* **Markdown**",
        "excerpt":"Using Markdown in the title should have no adverse effect on the layout or functionality. page.title example: title: \"Markup: Title *with* **Markdown**\"\"","categories": ["Markdown"],
        "tags": ["css","html","title"],
        "url": "http://localhost:4000/markdown/2013/01/05/markup-title-with-markdown.html"
      },{
        "title": "Markup: Title with Special&nbsp;---&nbsp;Characters",
        "excerpt":"Putting special characters in the title should have no adverse effect on the layout or functionality. The title above has none-breaking spaces before and after the m-dash. &amp;nbsp;---&amp;nbsp;Latin Character Tests This is a test to see if the fonts used in this theme support basic Latin characters. ! &#8220; #...","categories": ["Markup"],
        "tags": ["html","markup","post","title"],
        "url": "http://localhost:4000/markup/2013/01/05/markup-title-with-special-characters.html"
      },{
        "title": "Markup: Text Alignment and Transformations",
        "excerpt":"Sample text to demonstrate alignment and transformation classes. Easily realign text with alignment classes via HTML: &lt;p class=\"text-left\"&gt;Left aligned text.&lt;/p&gt;&lt;p class=\"text-center\"&gt;Center aligned text.&lt;/p&gt;&lt;p class=\"text-right\"&gt;Right aligned text.&lt;/p&gt;&lt;p class=\"text-justify\"&gt;Justified text.&lt;/p&gt;&lt;p class=\"text-nowrap\"&gt;No wrap text.&lt;/p&gt;Or with Kramdown and inline attribute lists: Left aligned text.{: .text-left}Center aligned text.{: .text-center}Right aligned text.{: .text-right}Justified text.{: .text-justify}No wrap...","categories": ["Markup"],
        "tags": ["alignment","content","css","markup"],
        "url": "http://localhost:4000/markup/2013/01/09/markup-text-alignment.html"
      },{
        "title": "Markup: Image Alignment",
        "excerpt":"The best way to demonstrate the ebb and flow of the various image positioning options is to nestle them snuggly among an ocean of words. Grab a paddle and let’s get started. Assign classes with HTML: &lt;img src=\"image.jpg\" class=\"align-left\" alt=\"\"&gt;&lt;img src=\"image.jpg\" class=\"align-center\" alt=\"\"&gt;&lt;img src=\"image.jpg\" class=\"align-right\" alt=\"\"&gt;Or use Kramdown and inline...","categories": ["Markup"],
        "tags": ["alignment","captions","content","css","image","markup"],
        "url": "http://localhost:4000/markup/2013/01/10/markup-image-alignment.html"
      },{
        "title": "Markup: HTML Elements and Formatting",
        "excerpt":"A variety of common HTML elements to demonstrate the theme’s stylesheet and verify they have been styled appropriately. Header one Header two Header three Header four Header five Header six Blockquotes Single line blockquote: Stay hungry. Stay foolish. Multi line blockquote with a cite reference: People think focus means saying...","categories": ["Markup"],
        "tags": [],
        "url": "http://localhost:4000/markup/2013/01/11/markup-html-elements-and-formatting.html"
      },{
        "title": "Markup: Syntax Highlighting",
        "excerpt":"Syntax highlighting is a feature that displays source code, in different colors and fonts according to the category of terms. This feature facilitates writing in a structured language such as a programming language or a markup language as both structures and syntax errors are visually distinct. Highlighting does not affect...","categories": [],
        "tags": ["code","syntax highlighting"],
        "url": "http://localhost:4000/2013/08/16/markup-syntax-highlighting.html"
      },{
        "title": "MathJax Example",
        "excerpt":"MathJax is a simple, yet powerful, way ofincluding Tex/LaTex/MathML based mathematics in HTML webpages. Usage To enable MathJax support configure your _config.xml to: Set kramdown as the Markdown parser. Enable MathJax.The version of MathJax enabled is v3. An example setting for _config.xml is shown below: markdown: kramdownmathjax: enable: true combo:...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/2015/08/10/mathjax-example.html"
      },{
        "title": "Hidden Post",
        "excerpt":"This post has YAML Front Matter of hidden: true and should not appear in paginator.posts. ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/2018/02/25/hidden-post.html"
      },{
        "title": "Chocolate Chip Cookies",
        "excerpt":"A chocolate chip cookie is a drop cookie that originated in the United States and features chocolate chips as its distinguishing ingredient. The traditional recipe combines a dough composed of butter and both brown and white sugar with semi-sweet chocolate chips. Variations include recipes with other types of chocolate as...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/recipes/chocolate-chip-cookies/"
      },{
        "title": "Oatmeal Cookies",
        "excerpt":"Oatmeal cookies are a proverbial favorite with both kids and adults. This crisp and chewy cookie is loaded with oats, dried fruit, and chopped nuts. Ingredients 1 cup butter, softened 1 cup white sugar 1 cup packed brown sugar 2 eggs 1 teaspoon vanilla extract 2 cups all-purpose flour 1...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/recipes/oatmeal-cookies/"
      },{
        "title": "Peanut Butter Cookies",
        "excerpt":"A peanut butter cookie is a type of cookie that is distinguished for having peanut butter as a principal ingredient. The cookie generally originated in the United States, its development dating back to the 1910s. Ingredients 1 cup unsalted butter 1 cup crunchy peanut butter 1 cup white sugar 1...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/recipes/peanut-butter-cookies/"
      }]