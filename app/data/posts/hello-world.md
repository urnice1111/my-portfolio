---
title: "The Kitchen Sink Post"
date: "2026-05-31"
description: "A test post that uses every markdown feature so I can style each one."
tags: ["test", "styling", "markdown"]
featured: false
---

# Heading Level 1 — The Title of the Post

A short intro paragraph. This is just plain prose so you can verify your base paragraph styles — line-height, max-width, color, and bottom margin. The next paragraph should have a comfortable amount of breathing room above it.

This is a second paragraph. It contains **bold text**, *italic text*, ***bold italic***, ~~strikethrough~~, and a bit of `inline code` so you can check how each inline formatting renders inside a normal paragraph. There's also a [normal link to Vercel](https://vercel.com) and a [link with a title](https://nextjs.org "Next.js homepage").

## Heading Level 2 — A Section

Each heading level should have a clearly different visual weight. The contrast between H1 and H2 is usually the most important.

### Heading Level 3 — A Subsection

Subsections should still feel like part of the same section above. Less dramatic than H2.

#### Heading Level 4

Used rarely. Still should look like a heading though.

##### Heading Level 5

Almost never used in articles.

###### Heading Level 6

The smallest heading. Often styled like bold body text.

---

## Lists

### Unordered list

- First item with some longer text so you can see how the line wraps when a single list item runs past the width of the container.
- Second item
- Third item with **bold** and `code` inside it
  - Nested item 1
  - Nested item 2
    - Deeper nested item
- Fourth item

### Ordered list

1. Step one — do the thing
2. Step two — do the other thing
3. Step three with a nested list:
   1. Sub-step A
   2. Sub-step B
4. Step four

### Task list (requires `remark-gfm`)

- [x] Ship the portfolio
- [x] Write a first post
- [ ] Add syntax highlighting
- [ ] Add an RSS feed

---

## Blockquotes

> This is a short blockquote. A single sentence to test the indent and the border on the left side.

> A longer blockquote that spans multiple lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
>
> A second paragraph inside the same blockquote, separated by a blank `>` line.
>
> — Someone Important

> **Note:** blockquotes can also contain **bold**, *italic*, `inline code`, and even [links](https://example.com).

---

## Code

Inline code looks like `const greeting = "hello"` inside a sentence.

A short JavaScript block:

​```js
function greet(name) {
  if (!name) throw new Error("name required");
  return `Hello, ${name}!`;
}

console.log(greet("world"));
​```

A Python block:

​```python
def fibonacci(n: int) -> list[int]:
    seq = [0, 1]
    for _ in range(n - 2):
        seq.append(seq[-1] + seq[-2])
    return seq

print(fibonacci(10))
​```

A TypeScript block with longer lines so you can test horizontal scroll:

​```ts
type Project = { name: string; featured: boolean; description: string; main_language: string; links: { link: string; name: string }[]; };

export async function getFeaturedProjects(): Promise<Project[]> {
  const all = await getProjects();
  return all.filter((p) => p.featured);
}
​```

A shell block:

​```bash
npm install -D @tailwindcss/typography
npm run dev
​```

A code block with no language (should still get a code-block background):

​```
plain unformatted block — no language tag
line 2
line 3
​```

---

## Tables (requires `remark-gfm`)

| Language     | Year | Paradigm           | Fun? |
| ------------ | ---- | ------------------ | ---- |
| C            | 1972 | Procedural         | Yes  |
| C++          | 1985 | Multi-paradigm     | Yes  |
| Python       | 1991 | Multi-paradigm     | Yes  |
| Swift        | 2014 | Multi-paradigm     | Yes  |
| Rust         | 2010 | Systems / Safe     | Yes  |

Alignment test:

| Left aligned | Center aligned | Right aligned |
| :----------- | :------------: | ------------: |
| foo          | foo            | foo           |
| longer text  | longer text    | longer text   |

---

## Images

A standard image (replace src with something real in `/public`):

![Alt text describing the image](/next.svg)

A linked image:

[![A clickable image](/vercel.svg)](https://vercel.com)

---

## Horizontal rule

Above the line.

---

Below the line.

---

## Inline edge cases

- A link with code in it: [`getProjects()`](https://example.com)
- Bold containing code: **the `useEffect` hook**
- Italic containing a link: *see [the docs](https://example.com) for more*
- A line with    multiple   spaces (collapsed by markdown).
- A hard line break, made with two trailing spaces  
  this should appear on a new line.
- An autolink: <https://nextjs.org>
- An email autolink: <hello@example.com>

---

## Footnotes (requires `remark-gfm`)

Here is a sentence with a footnote.[^1] And here is another one.[^longnote]

[^1]: This is the first footnote.
[^longnote]: This is a longer footnote with **formatting** and a [link](https://example.com).

---

## HTML inside markdown

<div style="padding: 1rem; border: 1px dashed currentColor;">
  Raw HTML block (requires <code>rehype-raw</code> if you want it to render instead of being escaped).
</div>

---

## The end

That's everything. If your styles look good against this file, they'll look good against any real post.