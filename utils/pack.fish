# Compress the dist and the source code.

set dist_dir "dist_hw"
set project_name (jq -r .name package.json)
set prefix "$dist_dir/$project_name"
set readme_dir "docs/readme"
set readme_file $readme_dir"/readme.tex"

rm -rf $dist_dir
mkdir $dist_dir

# Compress source and dist
git archive HEAD --format=zip --output={$prefix}"_src.zip" &

# Compress dist
pnpm build
zip -jr {$prefix}"_dist.zip" dist &

# Build `readme.tex` and copy it on the dist folder.
fish utils/build-readme.fish &
