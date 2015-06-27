#!/bin/sh

dst=~/.local/share/gnome-shell/extensions
edir=MyApps-in-UserMenu-bernard@pc9
ldir=libs
files="extension.js Entry.js Application.js metadata.json"

rm -fRv $dst/$edir
mkdir -p $dst/$edir
cp -Rav ../libs $dst/$edir

for f in $files
do
	cp -av $edir/$f $dst/$edir
done
