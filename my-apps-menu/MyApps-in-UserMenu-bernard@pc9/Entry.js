/* -*- mode: js2; js2-basic-offset: 4; indent-tabs-mode: nil -*- */
/*
 * Entry.js
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


const Main = imports.ui.main;
const Lang = imports.lang;
const PopupMenu = imports.ui.popupMenu;


const Extension = imports.misc.extensionUtils.getCurrentExtension();
const Joose = Extension.imports.libs.Joose;
const App= Extension.imports.Application;



Joose.Class("Entry", {
	has: {
		_button: {is: 'n/a', init: null},
		_appId: {is: 'n/a', init: null},
		_appName: {is: 'n/a', init: null},
	},
	methods: {
		initialize: function(appId, appName) {
			this._appId = appId;
			this._appName = appName;
		},
		enable: function() {
			this._button = new PopupMenu.PopupMenuItem(this._appName);
			this._button.connect('activate', 
							Lang.bind(this._button,
									  function () {
										  Main.overview.hide();
										  let app = App.Application.getAppSystem.lookup_app(this._appId);
										  if (app) {
											  app.activate();
										  }
									  }));
									  App.Application.getMenu().addMenuItem(this._button, 5);
		},

		disable: function() {
			if (this._button) {
				this._button.destroy();
			}
		}
	}
});

