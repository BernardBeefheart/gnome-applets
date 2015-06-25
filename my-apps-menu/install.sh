#!/bin/sh

dst=~/.local/share/gnome-shell/extensions
edir=my_apps_menu-bernard@pc9
files="extension.js metadata.json"

mkdir -p $dst/$edir 2>/dev/null
for f in $files
do
	cp -av $edir/$f $dst/$edir
done
