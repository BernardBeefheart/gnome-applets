/* -*- mode: js2; js2-basic-offset: 4; indent-tabs-mode: nil -*- */
/*
 * extension.js
 * Copyright (C) 2015 bernard <bernard.beefheart@gmail.com>
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name ``bernard'' nor the name of any other
 *    contributor may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * my-apps-menu IS PROVIDED BY bernard ``AS IS'' AND ANY EXPRESS
 * OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL bernard OR ANY OTHER CONTRIBUTORS
 * BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
 * BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/*
 * this code is based upon :
 * https://github.com/DeanF/Terminal-in-UserMenu-Gnome-Extension
 */
const St = imports.gi.St;
const Main = imports.ui.main;
// const Tweener = imports.ui.tweener;
const Lang = imports.lang;
const Shell = imports.gi.Shell;
const GLib = imports.gi.GLib;
const PopupMenu = imports.ui.popupMenu;

// Other javascript files in the my_apps_menu-bernard@pc9 directory are accesible via Extension.<file name>
const Extension = imports.ui.extensionSystem.extensions['my_apps_menu-bernard@pc9'];

let button, menu;


function init(metadata) {
    menu = Main.panel._statusArea.userMenu.menu;
}

function _buttonActivate() {
    Main.overview.hide();
    let app = Shell.AppSystem.get_default().lookup_app('firefox');
    app.activate();
}

function enable() {
    button = new PopupMenu.PopupMenuItem("Firefox");
    button.connect('activate', Lang.bind(button, _buttonActivate));
    menu.addMenuItem(button, 5);
}

function disable() {
    if (button) {
        button.destroy();
    }
}

