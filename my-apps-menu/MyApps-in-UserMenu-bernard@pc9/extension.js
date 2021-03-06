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

const Extension = imports.misc.extensionUtils.getCurrentExtension();
const Joose = Extension.imports.libs.Joose;
const App = Extension.imports.Application;
const Entry = Extension.imports.Entry;

let entries = null;

function init(metadata) {
	App.Application.init();
	entries = [
		new Joose.Entry('shotwell-viewer.desktop', 'Shotwell'),
		new Joose.Entry('chromium-app-list.desktop', 'Chromium applications'),
		new Joose.Entry('gnome-terminal.desktop', 'Gnome Terminal'),
		new Joose.Entry('kde4-kate.desktop', 'Kate'),
		new Joose.Entry('netbeans-8.0.1.desktop', 'NetBeans 8'),
	];
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

