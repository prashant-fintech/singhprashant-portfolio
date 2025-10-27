// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    },
    excerpt: {
      type: "string",
      description: "The excerpt of the post",
      required: true
    },
    tags: {
      type: "list",
      of: { type: "string" },
      description: "Tags for the post",
      default: []
    },
    draft: {
      type: "boolean",
      description: "Whether the post is a draft",
      default: false
    },
    cover: {
      type: "string",
      description: "Cover image for the post",
      required: false
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath.replace("blog/", "")}`
    },
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath.replace("blog/", "")
    }
  }
}));
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the project",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the project",
      required: true
    },
    excerpt: {
      type: "string",
      description: "The excerpt of the project",
      required: true
    },
    tags: {
      type: "list",
      of: { type: "string" },
      description: "Technologies used in the project",
      default: []
    },
    cover: {
      type: "string",
      description: "Cover image for the project",
      required: false
    },
    demo: {
      type: "string",
      description: "Demo URL for the project",
      required: false
    },
    repo: {
      type: "string",
      description: "Repository URL for the project",
      required: false
    },
    featured: {
      type: "boolean",
      description: "Whether the project is featured",
      default: false
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (project) => `/projects/${project._raw.flattenedPath.replace("projects/", "")}`
    },
    slug: {
      type: "string",
      resolve: (project) => project._raw.flattenedPath.replace("projects/", "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Project],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: {
            dark: "github-dark",
            light: "github-light"
          },
          keepBackground: false,
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word"];
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  Post,
  Project,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-AN2YJKNH.mjs.map
