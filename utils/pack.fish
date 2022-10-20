# Compress the dist and the source code.

set dist_dir "dist_hw"
set project_name (jq -r .name package.json)
set prefix "$dist_dir/$project_name"

rm -rf $dist_dir
mkdir $dist_dir

# Compress source and dist
git archive HEAD --format=zip --output={$prefix}"_src.zip" &

# Compress dist
pnpm build
zip -jr {$prefix}"_dist.zip" dist &
