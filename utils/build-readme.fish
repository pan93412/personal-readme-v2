# Build the readme.tex with latexmk.

set dist_dir "dist_hw"
set readme_dir "docs/readme"
set readme_file "$readme_dir/readme.tex"

set tmpdir $(mktemp -d)

latexmk -lualatex -synctex=1 --outdir="$tmpdir" -cd $readme_file
cp $tmpdir/readme.pdf $dist_dir
rm -rf $tmpdir
