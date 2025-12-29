import bibtexParse from '@orcid/bibtex-parse-js';
import fs from 'fs';

function formatAPAAuthors(authorString: string): string {
  if (!authorString) return "";

  // BibTeX separates authors with " and "
  const authors = authorString.split(/\s+and\s+/i);
  
  const formattedAuthors = authors.map(author => {
    let last = "", first = "";
    
    if (author.includes(",")) {
      // Format: Last, First
      [last, first] = author.split(",").map(s => s.trim());
    } else {
      // Format: First Last
      const parts = author.split(" ");
      last = parts.pop() || "";
      first = parts.join(" ");
    }

    // Convert "First Name" to "F. N."
    const initials = first
      ? first.split(/[\s-]+/).map(name => `${name.charAt(0)}.`).join(" ")
      : "";

    return `${last}, ${initials}`;
  });

  if (formattedAuthors.length === 0) return "";
  if (formattedAuthors.length === 1) return formattedAuthors[0];
  if (formattedAuthors.length === 2) return `${formattedAuthors[0]} & ${formattedAuthors[1]}`;
  
  // For 3 or more authors: Author 1, Author 2, & Author 3
  const lastAuthor = formattedAuthors.pop();
  return `${formattedAuthors.join(", ")}, & ${lastAuthor}`;
}

function formatPages(pages: string): string {
  if (!pages) return "";
  // Replaces -- with the Unicode En-Dash (–)
  // Also handles single - by ensuring it looks consistent
  return pages.replace(/--/g, '–').replace(/-/g, '–');
}

export function getBibPublications(filePath: string) {
  const bibFile = fs.readFileSync(filePath, 'utf8');
  const JSONp = bibtexParse.toJSON(bibFile);
  
  const pubs = JSONp.map((entry: any) => {
    const t = entry.entryTags;
    const clean = (str: string) => str?.replace(/[{}]/g, '') || '';

    // Logic: Use DOI URL if it exists, otherwise use the raw URL field
    const doi = clean(t.doi);
    const rawUrl = clean(t.url);

    let preferredLink = "";
    if (doi) {
      preferredLink = `https://doi.org/${doi}`;
    } else if (rawUrl) {
      preferredLink = rawUrl;
    }

    return {
      type: entry.entryType.toLowerCase(), // Capture 'article' or 'inproceedings'
      title: clean(t.title),
      authors: formatAPAAuthors(clean(t.author)),
      rawAuthors: clean(t.author), // Keep raw for highlighting your own name
      journal: clean(t.journal || t.booktitle),
      year: parseInt(clean(t.year)) || 0,
      month: clean(t.month), // Useful for secondary sorting
      volume: clean(t.volume),
      number: clean(t.number),
      pages: formatPages(clean(t.pages)),
      doi: doi,
      link: preferredLink,
      highlight: clean(t.highlight),
      highlightLabel: clean(t.highlight_label) || "Featured", // Default if label is missing
    };
  });

  // Sort by Year (Descending)
  return pubs.sort((a, b) => b.year - a.year);
}
