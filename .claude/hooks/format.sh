#!/usr/bin/env bash
# PostToolUse hook (Edit|Write): format the file Claude just changed with the
# site's Prettier config.
file=$(jq -r '.tool_response.filePath // .tool_input.file_path // empty')
[ -n "$file" ] || exit 0

root="${CLAUDE_PROJECT_DIR:-$(git rev-parse --show-toplevel)}"
case "$file" in
  "$root"/frontend-astro/*) pkg="$root/frontend-astro" ;;
  *) exit 0 ;;
esac

case "$file" in
  *.astro | *.ts | *.mjs | *.js | *.css | *.json) ;;
  *) exit 0 ;;
esac

cd "$pkg" && ./node_modules/.bin/prettier --write --ignore-unknown "$file" > /dev/null
