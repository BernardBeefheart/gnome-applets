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
const Lang = imports.lang;
const Shell = imports.gi.Shell;
const GLib = imports.gi.GLib;
const PopupMenu = imports.ui.popupMenu;

let appSystem, menu, entries;

function Entry (appId, appName) {
	var _button = null;
	var _appId = appId;
	var _appName = appName;

	this.enable = function() {
		_button = new PopupMenu.PopupMenuItem(_appName);
		_button.connect('activate', 
						Lang.bind(_button,
								  function () {
									  Main.overview.hide();
									  let app = appSystem.lookup_app(_appId);
									  if (app) {
										  app.activate();
									  }
								  }));
		menu.addMenuItem(_button, 5);
	};
	this.disable = function() {
		if (_button) {
			_button.destroy();
		}
	};
}


function init(metadata) {
	entries = [
		new Entry('netbeans-8.0.1.desktop', 'NetBeans 8'),
		new Entry('gnome-terminal.desktop', 'Gnome Terminal'),
		new Entry('kde4-kate.desktop', 'Kate'),
		new Entry('shotwell-viewer.desktop', 'Shotwell')
	];
    menu = Main.panel._statusArea.userMenu.menu;
	appSystem = Shell.AppSystem.get_default();
}

function enable() {
	var len = entries.length;
	for (var i=0; i<len; i++) {
		entries[i].enable();
	}
}

function disable() {
	var len = entries.length;
	for (var i=0; i<len; i++) {
		entries[i].enable();
	}
}

