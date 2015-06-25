#!/bin/sh

dst=~/.local/share/gnome-shell/extensions
edir=MyApps-in-UserMenu-bernard@pc9
files="extension.js metadata.json"

rmdir $dst/$edir
mkdir -p $dst/$edir
for f in $files
do
	cp -av $edir/$f $dst/$edir
done
