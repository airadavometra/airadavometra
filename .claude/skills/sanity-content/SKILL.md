---
name: sanity-content
description: How to add, change or remove a Sanity CMS field end to end (schema, GROQ query, component) and how to run content migrations safely. Use when touching cms/schemaTypes, GROQ queries in frontend-astro, or when existing CMS documents need to be reshaped.
---

# Changing CMS content end to end

The Studio (`cms/`) and the site (`frontend-astro/`) share one dataset: project `wvlqa5od`, dataset `production`. The site reads it at build time, so a field only reaches the page after **schema → Studio deploy → content → query → rebuild**.

## Add or change a field

1. **Schema.** Edit the type in `cms/schemaTypes/` (`homePage.ts`, `settings.ts`, `manga.ts`).
   - Use `defineField` and put the field in the right `fieldset`.
   - Add `validation` for anything the page can't render without.
   - Images that carry meaning get an `alt` field (`validation: (Rule) => Rule.required()`).
   - File fields get `options.accept`, such as `'image/svg+xml'` or `'application/pdf'`.
2. **Validate.** In `cms/`, run `npx sanity schema validate` and then `npm run build`.
3. **Query.** Add the field to the GROQ projection that feeds the component, then render it.
   - Project images as whole objects (`image`, not `image{asset}`), so crop, hotspot and `alt` survive.
   - Guard optional fields, because the dataset can lag behind the schema.
4. **Deploy the Studio** with `npm run deploy` in `cms/`, so the editor can fill the new field. This publishes to Sanity hosting, so **ask the user first**.
5. **Content.** The user fills the field in the Studio. Never write production content yourself unless the user asks.
6. **Verify.** Run `npm run build` in `frontend-astro/`, then follow the `verify-ui` skill.

## Remove or rename a field

Removing a field from the schema doesn't delete stored data; the Studio just flags it as an unknown field. Use this order:

1. Add the new field and keep the old one with `hidden: true`.
2. Migrate the data (next section).
3. Switch the query to the new field.
4. Delete the old field from the schema.

## Content migrations (they write to production)

1. **Back up:** `npx sanity dataset export production <scratchpad>/backup-<date>.tar.gz`, in `cms/`.
2. **Create:** `npx sanity migration create "<what it does>"`. Write the migration so it is idempotent: skip documents that are already migrated.
3. **Dry run:** `npx sanity migration run <id>`. Dry run is the default. Check the printed mutations.
4. **Ask the user before the real run**, show them the dry-run output, then run `npx sanity migration run <id> --no-dry-run`.
5. Re-run the dry run. It should report nothing left to change.

Migration scripts live in `cms/migrations/` and can be committed. Backups stay out of the repo.
