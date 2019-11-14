module.exports = (schema) => {
  /**
   * Create entry type Post
   *
   * This entry type represents blog post entries
   */
  schema.entry('post', function () {
    this.title('Post', 'Posts');
    this.desc('Each post represents single blog entry');

    /**
     * Excerpt section
     */
    this.section('excerpt_section', function () {
      this.title('Excerpt Section');
      this.desc('Excerpt it a short blog preview shown on blog list');

      this.textarea('excerpt', function () {
        this.label('Excerpt');
      });
    });

    /**
     * Hero section
     */
    this.section('hero_section', function () {
      this.title('Hero section');
      this.desc('Above the fold content of a blog post');

      this.textarea('hero_text', function () {
        this.label('Hero text');
        this.desc('Text for the hero content');
      });

      this.file('hero_image', function () {
        this.label('Hero image');
        this.desc('Full height background hero image');
      });
    });

    /**
     * Content section
     */
    this.section('content', function () {
      this.title('Content Section');
      this.richtext('content', function () {
        this.label('Content');

        this.required(true);
      });
    });
  });

  /**
   * Create entry type Page
   *
   * This entry type represents blog post entries
   */
  schema.entry('page', function () {
    /**
     * Entry type title & description
     *
     * Provide both singular and plural form for the entry title
     */
    this.title('Page', 'Pages');
    this.desc('Static blog pages like contact & about us page');

    /**
     * Content section
     *
     * Section are logical grouping of entry fields
     */
    this.section('content', function () {
      this.title('Content Section');

      /**
       * Add richtext field to the section
       *
       * Available field types:
       * text, textarea, richtext (wysiwyg)
       * file, select, repeater
       **/
      this.richtext('content', function () {
        this.label('Content');

        this.required(true);
      });
    });
  });

  schema.menu('footer_menu', function () {
    this.title('Footer menu');
    this.desc('Menu rendered in the footer');
  });

  schema.settings('author_bio', function() {
    this.title('Author');
    this.desc('Author bio information');

    this.text('author_name', function () {
      this.title('Author name');
    });

    this.textarea('author_bio', function () {
      this.title('Author bio');
      this.desc('Short author biography shown on homepage');
    });
  });
};
