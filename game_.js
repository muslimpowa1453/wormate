var _0x1543e5 = _0x563d;
(function(_0x459531, _0x19524f) {
    var _0x13d5fe = _0x563d,
        _0x7ffb14 = _0x459531();
    while (!![]) {
        try {
            var _0x3ce7a2 = -parseInt(_0x13d5fe(0x367)) / 0x1 + -parseInt(_0x13d5fe(0x857)) / 0x2 * (-parseInt(_0x13d5fe(0x63f)) / 0x3) + -parseInt(_0x13d5fe(0x6c1)) / 0x4 + -parseInt(_0x13d5fe(0x210)) / 0x5 * (parseInt(_0x13d5fe(0x6e1)) / 0x6) + -parseInt(_0x13d5fe(0x2d9)) / 0x7 + -parseInt(_0x13d5fe(0x7a8)) / 0x8 + parseInt(_0x13d5fe(0x69b)) / 0x9;
            if (_0x3ce7a2 === _0x19524f) break;
            else _0x7ffb14['push'](_0x7ffb14['shift']());
        } catch (_0x1cdc2e) {
            _0x7ffb14['push'](_0x7ffb14['shift']());
        }
    }
}(_0x584d, 0x71eb5));
var v, v2;
window[_0x1543e5(0x525)] = {
    'settings': {
        'lineWidth': 0.15,
        'lineColor': 0xff0000,
        'lineAlpha': 0.3,
        'backgroundColor': 0x0,
        'backgroundAlpha': 0.6,
        'sectorTextStyle': {
            'fontFamily': _0x1543e5(0x697),
            'fontSize': 0xe,
            'fill': 0xffffff
        },
        'quarterTextStyle': {
            'fontFamily': 'Arial',
            'fontSize': 0x14,
            'fill': 0xffffff
        },
        'showLines': !0x0
    },
    'state': {
        'container': null,
        'graphics': null,
        'isActive': !0x1,
        'currentMode': null,
        'texts': [],
        'initialized': !0x1,
        'renderContainer': null,
        'restored': !0x1
    },
    'findRenderContainer': function() {
        var _0x5a3561 = _0x1543e5;
        if (this['state'][_0x5a3561(0x817)]) return this[_0x5a3561(0x855)][_0x5a3561(0x817)];
        if (window[_0x5a3561(0x452)]?.[_0x5a3561(0x4d7)]) return this['state']['renderContainer'] = window['laserGraphics'][_0x5a3561(0x4d7)], this[_0x5a3561(0x855)][_0x5a3561(0x817)];
        if (window['ooo']?.['Mh']?.['Lh']?.['Wf']) return this[_0x5a3561(0x855)][_0x5a3561(0x817)] = window[_0x5a3561(0x2de)]['Mh']['Lh']['Wf'], this[_0x5a3561(0x855)][_0x5a3561(0x817)];
        const _0x29378b = (_0xc99233, _0x3f1f5 = new Set(), _0x4f5012 = 0x0) => {
            var _0x390135 = _0x5a3561;
            if (!_0xc99233 || typeof _0xc99233 !== _0x390135(0x5ac) || _0x4f5012 > 0x3 || _0x3f1f5[_0x390135(0x49a)](_0xc99233)) return null;
            _0x3f1f5[_0x390135(0x535)](_0xc99233);
            if (_0xc99233['Wf'] instanceof PIXI[_0x390135(0x65f)]) return this[_0x390135(0x855)]['renderContainer'] = _0xc99233['Wf'], _0xc99233['Wf'];
            for (let _0x571425 in _0xc99233) {
                if (_0x571425 !== 'parent' && _0x571425 !== _0x390135(0x734) && _0xc99233[_0x571425] && typeof _0xc99233[_0x571425] === _0x390135(0x5ac)) {
                    const _0x891b5d = _0x29378b(_0xc99233[_0x571425], _0x3f1f5, _0x4f5012 + 0x1);
                    if (_0x891b5d) return _0x891b5d;
                }
            }
            return null;
        };
        return _0x29378b(window[_0x5a3561(0x2de)]);
    },
    'cachedRadius': 0x0,
    'lastRadiusTime': 0x0,
    'getRadius': function() {
        var _0x113344 = _0x1543e5;
        const _0x299790 = Date[_0x113344(0x458)]();
        return _0x299790 - this[_0x113344(0x548)] > 0x3e8 && (this[_0x113344(0x475)] = window[_0x113344(0x2de)]?.['Mh']?.['Qh']?.['gh'] || window[_0x113344(0x2de)]?.['Mh']?.['Lh']?.['Qh']?.['gh'] || 0x1f4, this[_0x113344(0x548)] = _0x299790), this[_0x113344(0x475)];
    },
    'clearTexts': function() {
        var _0x414ff4 = _0x1543e5;
        this[_0x414ff4(0x855)][_0x414ff4(0x40c)]['forEach'](_0x5d205d => {
            var _0x434eb3 = _0x414ff4;
            _0x5d205d && _0x5d205d[_0x434eb3(0x4d7)] && _0x5d205d['parent'][_0x434eb3(0x5e8)](_0x5d205d);
        }), this['state']['texts'] = [];
    },
    'initDrawing': function(_0x42e2c5) {
        var _0x3a088c = _0x1543e5;
        return this[_0x3a088c(0x585)](), this[_0x3a088c(0x855)][_0x3a088c(0x2f2)][_0x3a088c(0x867)](), this[_0x3a088c(0x855)][_0x3a088c(0x2f2)][_0x3a088c(0x22c)](this[_0x3a088c(0x35a)][_0x3a088c(0x721)], this[_0x3a088c(0x35a)][_0x3a088c(0x559)], this[_0x3a088c(0x35a)][_0x3a088c(0x78f)]), this[_0x3a088c(0x855)][_0x3a088c(0x2f2)][_0x3a088c(0x555)](this[_0x3a088c(0x35a)][_0x3a088c(0x430)], this[_0x3a088c(0x35a)][_0x3a088c(0x2e5)]), this[_0x3a088c(0x855)][_0x3a088c(0x2f2)][_0x3a088c(0x2d7)](0x0, 0x0, _0x42e2c5), this[_0x3a088c(0x855)][_0x3a088c(0x2f2)][_0x3a088c(0x826)](), _0x42e2c5;
    },
    'drawSectors': function() {
        var _0x52f94b = _0x1543e5;
        const _0x2d2e85 = this[_0x52f94b(0x657)](this[_0x52f94b(0x34d)]()),
            _0x1e5c84 = _0x2d2e85 / 0x3;
        if (this['settings'][_0x52f94b(0x235)]) {
            for (let _0x35c372 = 0x1; _0x35c372 < 0x3; _0x35c372++) {
                this['state'][_0x52f94b(0x2f2)][_0x52f94b(0x2d7)](0x0, 0x0, _0x2d2e85 - _0x35c372 * _0x1e5c84);
            }
            for (let _0x4561e8 = 0x0; _0x4561e8 < 0x4; _0x4561e8++) {
                const _0x3e5939 = _0x4561e8 * Math['PI'] / 0x2;
                this[_0x52f94b(0x855)][_0x52f94b(0x2f2)][_0x52f94b(0x1cf)](0x0, 0x0), this[_0x52f94b(0x855)][_0x52f94b(0x2f2)][_0x52f94b(0x32d)](Math['cos'](_0x3e5939) * _0x2d2e85, Math['sin'](_0x3e5939) * _0x2d2e85);
            }
        }
        for (let _0x2fd4fa = 0x0; _0x2fd4fa < 0x4; _0x2fd4fa++) {
            const _0x3c0892 = _0x2fd4fa * Math['PI'] / 0x2;
            for (let _0x52e86d = 0x0; _0x52e86d < 0x3; _0x52e86d++) {
                const _0x51c3b2 = _0x2d2e85 - (_0x52e86d * _0x1e5c84 + _0x1e5c84 / 0x2),
                    _0x71a42b = _0x3c0892 + Math['PI'] / 0x4,
                    _0x518042 = ['S', 'D', 'F'][_0x52e86d] + (_0x2fd4fa + 0x1),
                    _0x2c98ba = new PIXI[(_0x52f94b(0x20e))](_0x518042, this['settings'][_0x52f94b(0x471)]);
                _0x2c98ba['anchor']['set'](0.5), _0x2c98ba['position'][_0x52f94b(0x448)](Math[_0x52f94b(0x802)](_0x71a42b) * _0x51c3b2, Math[_0x52f94b(0x73c)](_0x71a42b) * _0x51c3b2), this['state'][_0x52f94b(0x6a0)][_0x52f94b(0x371)](_0x2c98ba), this[_0x52f94b(0x855)][_0x52f94b(0x40c)][_0x52f94b(0x31a)](_0x2c98ba);
            }
        }
    },
    'drawQuarters': function() {
        var _0x29b3bf = _0x1543e5;
        const _0x5b93c4 = this['initDrawing'](this['getRadius']());
        this[_0x29b3bf(0x35a)][_0x29b3bf(0x235)] && (this[_0x29b3bf(0x855)][_0x29b3bf(0x2f2)][_0x29b3bf(0x1cf)](-_0x5b93c4, 0x0), this[_0x29b3bf(0x855)][_0x29b3bf(0x2f2)][_0x29b3bf(0x32d)](_0x5b93c4, 0x0), this[_0x29b3bf(0x855)][_0x29b3bf(0x2f2)][_0x29b3bf(0x1cf)](0x0, -_0x5b93c4), this['state'][_0x29b3bf(0x2f2)][_0x29b3bf(0x32d)](0x0, _0x5b93c4)), [{
            'n': _0x29b3bf(0x837),
            'x': 0x1,
            'y': -0x1
        }, {
            'n': _0x29b3bf(0x35b),
            'x': -0x1,
            'y': -0x1
        }, {
            'n': _0x29b3bf(0x2d0),
            'x': -0x1,
            'y': 0x1
        }, {
            'n': _0x29b3bf(0x489),
            'x': 0x1,
            'y': 0x1
        }][_0x29b3bf(0x1c0)](_0x3153d6 => {
            var _0x4aa063 = _0x29b3bf;
            const _0x3aaa60 = new PIXI[(_0x4aa063(0x20e))](_0x3153d6['n'], this['settings']['quarterTextStyle']);
            _0x3aaa60['anchor'][_0x4aa063(0x448)](0.5), _0x3aaa60['position'][_0x4aa063(0x448)](_0x3153d6['x'] * _0x5b93c4 / 0x3, _0x3153d6['y'] * _0x5b93c4 / 0x3), this['state']['container'][_0x4aa063(0x371)](_0x3aaa60), this['state'][_0x4aa063(0x40c)][_0x4aa063(0x31a)](_0x3aaa60);
        });
    },
    'initGraphics': function() {
        var _0x5c346 = _0x1543e5;
        if (this['state'][_0x5c346(0x34a)]) return !0x0;
        const _0x311a5a = this[_0x5c346(0x21d)]();
        if (!_0x311a5a) return !0x1;
        return this['state'][_0x5c346(0x6a0)] = new PIXI['Container'](), this['state'][_0x5c346(0x2f2)] = new PIXI[(_0x5c346(0x42c))](), this[_0x5c346(0x855)][_0x5c346(0x6a0)][_0x5c346(0x371)](this[_0x5c346(0x855)][_0x5c346(0x2f2)]), _0x311a5a[_0x5c346(0x371)](this[_0x5c346(0x855)]['container']), this[_0x5c346(0x855)][_0x5c346(0x6a0)][_0x5c346(0x4e3)] = 0xa, this[_0x5c346(0x855)][_0x5c346(0x6a0)][_0x5c346(0x287)] = !0x1, this[_0x5c346(0x855)][_0x5c346(0x34a)] = !0x0, !0x0;
    },
    'toggleMode': function(_0x5753f6) {
        var _0x575ec7 = _0x1543e5;
        if (!this[_0x575ec7(0x748)]()) return;
        if (this['state'][_0x575ec7(0x3bd)] && this[_0x575ec7(0x855)]['currentMode'] === _0x5753f6) {
            this[_0x575ec7(0x855)][_0x575ec7(0x6a0)][_0x575ec7(0x287)] = !0x1, this[_0x575ec7(0x855)][_0x575ec7(0x3bd)] = !0x1, this[_0x575ec7(0x855)][_0x575ec7(0x3e9)] = null;
            document[_0x575ec7(0x804)]('sector_system_toggle') && (document[_0x575ec7(0x804)](_0x575ec7(0x589))[_0x575ec7(0x74b)] = !0x1);
            this[_0x575ec7(0x249)]();
            return;
        }
        this[_0x575ec7(0x855)][_0x575ec7(0x3bd)] = !0x0, this[_0x575ec7(0x855)][_0x575ec7(0x3e9)] = _0x5753f6, this['state'][_0x575ec7(0x6a0)][_0x575ec7(0x287)] = !0x0, document[_0x575ec7(0x804)](_0x575ec7(0x589)) && (document[_0x575ec7(0x804)](_0x575ec7(0x589))['checked'] = !0x0), _0x5753f6 === _0x575ec7(0x631) ? this[_0x575ec7(0x27a)]() : this['drawQuarters'](), this['saveSettings']();
    },
    'setupKeyboardEvents': function() {
        var _0x90bc16 = _0x1543e5;
        const _0x53d8a3 = {
            0x53: () => this[_0x90bc16(0x722)](_0x90bc16(0x631)),
            0xbb: () => this[_0x90bc16(0x722)](_0x90bc16(0x631)),
            0x3d: () => this[_0x90bc16(0x722)](_0x90bc16(0x631)),
            0x58: () => this[_0x90bc16(0x722)](_0x90bc16(0x4d0))
        };
        document['addEventListener'](_0x90bc16(0x628), _0x10afc7 => {
            var _0x431eb4 = _0x90bc16;
            const _0x582f93 = _0x10afc7[_0x431eb4(0x490)] || _0x10afc7[_0x431eb4(0x750)];
            _0x53d8a3[_0x582f93] && (_0x53d8a3[_0x582f93](), typeof this[_0x431eb4(0x454)] === _0x431eb4(0x387) && this[_0x431eb4(0x454)]());
        });
    },
    'saveSettings': function() {
        var _0x30e89a = _0x1543e5;
        try {
            localStorage[_0x30e89a(0x5c0)](_0x30e89a(0x1d4), JSON[_0x30e89a(0x32a)](this[_0x30e89a(0x35a)])), localStorage[_0x30e89a(0x5c0)](_0x30e89a(0x43d), this[_0x30e89a(0x855)][_0x30e89a(0x3bd)] ? '1' : '0'), this[_0x30e89a(0x855)][_0x30e89a(0x3e9)] && localStorage['setItem']('sectorSystemMode', this['state']['currentMode']), console['log'](_0x30e89a(0x5f4), {
                'active': this[_0x30e89a(0x855)][_0x30e89a(0x3bd)],
                'mode': this[_0x30e89a(0x855)][_0x30e89a(0x3e9)]
            });
        } catch (_0x806b9d) {
            console[_0x30e89a(0x1c4)]('Error\x20saving\x20sector\x20system\x20settings:', _0x806b9d);
        }
    },
    'loadSettings': function() {
        var _0x4c1293 = _0x1543e5;
        try {
            const _0x518e7b = JSON[_0x4c1293(0x78e)](localStorage[_0x4c1293(0x1b3)](_0x4c1293(0x1d4)));
            _0x518e7b && (this[_0x4c1293(0x35a)] = {
                ...this[_0x4c1293(0x35a)],
                ..._0x518e7b
            });
            const _0x54fcd7 = localStorage['getItem'](_0x4c1293(0x43d)) === '1';
            let _0x2d9729 = localStorage[_0x4c1293(0x1b3)]('sectorSystemMode');
            !_0x2d9729 && (_0x2d9729 = 'sectors'), this[_0x4c1293(0x437)] = {
                'isActive': _0x54fcd7,
                'currentMode': _0x2d9729
            };
        } catch (_0x5f51a3) {
            console[_0x4c1293(0x1c4)](_0x4c1293(0x624), _0x5f51a3);
        }
    },
    'applySettings': function() {
        var _0x40308d = _0x1543e5;
        this[_0x40308d(0x855)][_0x40308d(0x3bd)] && this['state'][_0x40308d(0x3e9)] && (this[_0x40308d(0x855)][_0x40308d(0x3e9)] === 'sectors' ? this[_0x40308d(0x27a)]() : this[_0x40308d(0x613)]());
    },
    'init': function() {
        var _0x47586b = _0x1543e5;
        if (typeof PIXI === _0x47586b(0x328)) {
            setTimeout(() => this[_0x47586b(0x762)](), 0x3e8);
            return;
        }
        this[_0x47586b(0x67b)]();
        const _0x137b33 = this['initGraphics']();
        this[_0x47586b(0x792)]();
        if (!_0x137b33) {
            setTimeout(() => this[_0x47586b(0x762)](), 0x3e8);
            return;
        }
        setTimeout(() => {
            var _0x42c1ad = _0x47586b;
            this['savedState'] && this[_0x42c1ad(0x437)]['isActive'] && (this['state'][_0x42c1ad(0x3bd)] = !0x0, this[_0x42c1ad(0x855)][_0x42c1ad(0x3e9)] = this['savedState'][_0x42c1ad(0x3e9)], this[_0x42c1ad(0x855)][_0x42c1ad(0x6a0)][_0x42c1ad(0x287)] = !0x0, this[_0x42c1ad(0x855)][_0x42c1ad(0x3e9)] === 'sectors' ? this[_0x42c1ad(0x27a)]() : this[_0x42c1ad(0x613)](), document[_0x42c1ad(0x804)]('sector_system_toggle') && (document['getElementById'](_0x42c1ad(0x589))[_0x42c1ad(0x74b)] = !0x0), this['state'][_0x42c1ad(0x2b7)] = !0x0, $(_0x42c1ad(0x23d))[_0x42c1ad(0x883)] > 0x0 && this[_0x42c1ad(0x454)]());
        }, 0x3e8);
    },
    'initUserInterface': function() {
        var _0x706ed6 = _0x1543e5;

        function _0x31e118(_0xc5c242) {
            var _0x238fb9 = _0x563d;
            return '#' + _0xc5c242[_0x238fb9(0x699)](0x10)[_0x238fb9(0x62e)](0x6, '0');
        }

        function _0x16884e(_0x41334d) {
            var _0x1625f6 = _0x563d;
            return parseInt(_0x41334d[_0x1625f6(0x5b7)]('#', ''), 0x10);
        }!this['state'][_0x706ed6(0x2b7)] && this[_0x706ed6(0x437)] && this[_0x706ed6(0x437)][_0x706ed6(0x3bd)] && (console[_0x706ed6(0x1be)](_0x706ed6(0x723)), this[_0x706ed6(0x722)](this[_0x706ed6(0x437)][_0x706ed6(0x3e9)] || 'sectors'), this['state'][_0x706ed6(0x2b7)] = !0x0);
        const _0x597c32 = () => {
            var _0x42e91c = _0x706ed6;
            $('#sector_system_toggle')['prop'](_0x42e91c(0x74b), this[_0x42e91c(0x855)][_0x42e91c(0x3bd)]), $(_0x42e91c(0x512))['val'](this[_0x42e91c(0x855)][_0x42e91c(0x3e9)] || _0x42e91c(0x631)), $('#sector_bg_color')['val'](_0x31e118(this[_0x42e91c(0x35a)]['backgroundColor'])), $(_0x42e91c(0x726))['val'](_0x31e118(this[_0x42e91c(0x35a)][_0x42e91c(0x559)])), $(_0x42e91c(0x795))[_0x42e91c(0x223)](this['settings'][_0x42e91c(0x2e5)] * 0x64), $(_0x42e91c(0x769))[_0x42e91c(0x2a5)](Math[_0x42e91c(0x7c5)](this[_0x42e91c(0x35a)]['backgroundAlpha'] * 0x64) + '%'), $(_0x42e91c(0x343))['val'](this['settings'][_0x42e91c(0x78f)] * 0x64), $(_0x42e91c(0x5a6))[_0x42e91c(0x2a5)](Math[_0x42e91c(0x7c5)](this[_0x42e91c(0x35a)][_0x42e91c(0x78f)] * 0x64) + '%'), $(_0x42e91c(0x1e0))[_0x42e91c(0x84a)](_0x42e91c(0x74b), this[_0x42e91c(0x35a)]['showLines']), !this[_0x42e91c(0x35a)][_0x42e91c(0x235)] ? $(_0x42e91c(0x316))[_0x42e91c(0x3f7)](0xc8) : $(_0x42e91c(0x316))[_0x42e91c(0x460)](0xc8), this[_0x42e91c(0x855)][_0x42e91c(0x3bd)] ? $(_0x42e91c(0x6c0))['slideDown'](0x12c) : $('#sector_settings_panel')['slideUp'](0xc8);
        };
        $(_0x706ed6(0x23d))[_0x706ed6(0x203)](_0x706ed6(0x84d))['on'](_0x706ed6(0x84d), function() {
            var _0x56e682 = _0x706ed6;
            const _0x5a916d = $(this)[_0x56e682(0x84a)](_0x56e682(0x74b));
            if (_0x5a916d) {
                const _0x57082f = $(_0x56e682(0x512))[_0x56e682(0x223)]() || 'sectors';
                window[_0x56e682(0x525)][_0x56e682(0x722)](_0x57082f);
            } else window[_0x56e682(0x525)][_0x56e682(0x855)][_0x56e682(0x3bd)] && window[_0x56e682(0x525)][_0x56e682(0x722)](window[_0x56e682(0x525)][_0x56e682(0x855)][_0x56e682(0x3e9)]);
            _0x597c32();
        }), $(_0x706ed6(0x512))[_0x706ed6(0x203)](_0x706ed6(0x84d))['on'](_0x706ed6(0x84d), function() {
            var _0x48b02b = _0x706ed6;
            const _0x1d1fff = $(this)[_0x48b02b(0x223)]();
            window[_0x48b02b(0x525)][_0x48b02b(0x855)][_0x48b02b(0x3bd)] && (window[_0x48b02b(0x525)]['toggleMode'](window[_0x48b02b(0x525)][_0x48b02b(0x855)][_0x48b02b(0x3e9)]), window[_0x48b02b(0x525)][_0x48b02b(0x722)](_0x1d1fff), _0x597c32());
        }), $(_0x706ed6(0x49c))['off'](_0x706ed6(0x84d))['on'](_0x706ed6(0x84d), function() {
            var _0x34d0cb = _0x706ed6;
            window['sectorSystem']['settings'][_0x34d0cb(0x430)] = _0x16884e($(this)['val']()), window[_0x34d0cb(0x525)][_0x34d0cb(0x772)](), window['sectorSystem'][_0x34d0cb(0x249)]();
        }), $('#sector_line_color')['off']('change')['on'](_0x706ed6(0x84d), function() {
            var _0x41b7cb = _0x706ed6;
            window[_0x41b7cb(0x525)][_0x41b7cb(0x35a)][_0x41b7cb(0x559)] = _0x16884e($(this)[_0x41b7cb(0x223)]()), window['sectorSystem'][_0x41b7cb(0x772)](), window[_0x41b7cb(0x525)][_0x41b7cb(0x249)]();
        }), $('#sector_bg_opacity')[_0x706ed6(0x203)](_0x706ed6(0x749))['on']('input', function() {
            var _0x250cbe = _0x706ed6;
            const _0x192b41 = parseInt($(this)[_0x250cbe(0x223)]()) / 0x64;
            window[_0x250cbe(0x525)][_0x250cbe(0x35a)][_0x250cbe(0x2e5)] = _0x192b41, $('#sector_bg_opacity_value')['text'](Math['round'](_0x192b41 * 0x64) + '%'), window[_0x250cbe(0x525)][_0x250cbe(0x772)](), window[_0x250cbe(0x525)][_0x250cbe(0x249)]();
        }), $(_0x706ed6(0x343))[_0x706ed6(0x203)](_0x706ed6(0x749))['on'](_0x706ed6(0x749), function() {
            var _0x5b1eb6 = _0x706ed6;
            const _0x386a5f = parseInt($(this)['val']()) / 0x64;
            window[_0x5b1eb6(0x525)]['settings'][_0x5b1eb6(0x78f)] = _0x386a5f, $(_0x5b1eb6(0x5a6))[_0x5b1eb6(0x2a5)](Math['round'](_0x386a5f * 0x64) + '%'), window[_0x5b1eb6(0x525)][_0x5b1eb6(0x772)](), window[_0x5b1eb6(0x525)]['saveSettings']();
        }), $(_0x706ed6(0x1e0))[_0x706ed6(0x203)](_0x706ed6(0x84d))['on']('change', function() {
            var _0x242aeb = _0x706ed6;
            window[_0x242aeb(0x525)][_0x242aeb(0x35a)][_0x242aeb(0x235)] = $(this)['prop']('checked'), !window[_0x242aeb(0x525)]['settings'][_0x242aeb(0x235)] ? $('#sector_lines_options')[_0x242aeb(0x3f7)](0xc8) : $(_0x242aeb(0x316))[_0x242aeb(0x460)](0xc8), window['sectorSystem'][_0x242aeb(0x772)](), window[_0x242aeb(0x525)][_0x242aeb(0x249)]();
        }), _0x597c32();
    }
};

function _0x563d(_0x41a3ff, _0x57248c) {
    _0x41a3ff = _0x41a3ff - 0x1ae;
    var _0x584d50 = _0x584d();
    var _0x563d47 = _0x584d50[_0x41a3ff];
    return _0x563d47;
}
var v26;
$(document)[_0x1543e5(0x65c)](function() {
    var _0x5cd70b = _0x1543e5;
    $('.store-view-cont')[_0x5cd70b(0x883)] && ($(_0x5cd70b(0x860))[_0x5cd70b(0x4e4)]('<div\x20id=\x22idReplaceSkin\x22></div>'), v26 = $('#idReplaceSkin'));
});
var vO2 = {
    'unlimitedRespawn': !0x1,
    'respawnDelay': 0x32
};
window[_0x1543e5(0x543)] = {
    'enabled': !0x1,
    'color': 0xffd700,
    'opacity': 0.5,
    'thickness': 0.1
}, window['laserGraphics'] = null;
const vO3 = {
    'fontStyle': {
        'blanco': new PIXI[(_0x1543e5(0x382))]({
            'align': _0x1543e5(0x429),
            'fill': _0x1543e5(0x522),
            'fontSize': 0xe,
            'fontWeight': _0x1543e5(0x388),
            'lineJoin': _0x1543e5(0x7c5),
            'stroke': _0x1543e5(0x259),
            'strokeThickness': 1.5,
            'whiteSpace': _0x1543e5(0x1ed),
            'wordWrap': !0x0
        })
    }
};
vO3['pointsContainer'] = new PIXI[(_0x1543e5(0x65f))]();

function _0x584d() {
    var _0x25120d = ['#popup-menu-coins-val', '#store-view-canv', '/get_store.phpitem=bg_sky_8.png', '#final-score', 'frameCount', 'index.game.popup.menu.leaders.tab', '#error-game-connection-retry', 'btn_in_t', 'https://wormx.store/images/arkaplan/bg3.jpg', '#laser_color_picker', ':visible', 'data-server-name', 'nowrap', 'stopAllMonitoring', 'wormate-io_970x250', '/images/cors-proxy.phpimg=cursors/17.png', '.selectSala', 'es_ES', '#mm-skin-next', 'pwrFlex2', '\x22\x20id=\x22btn_in_t\x22\x20style=\x22display:none;\x22/>', 'toLowerCase', '\x22\x20alt=\x22User\x20Icon\x22\x20style=\x22width:\x2020px;\x20height:\x2020px;\x20margin-right:\x205px;\x20border-radius:\x2050%;\x22>', 'textureCache', 'ze-snippet', 'div_zigzag', '#sound-laser-settings-tab,\x20#sound_effect_selector,\x20#monster_kill_selector,\x20#volume_slider', '#manage-favorites-skin', 'name', 'performance', '#f8d968', 'enableClasses', 'true', 'cos', '2px', 'getElementById', '<input\x20type=\x22hidden\x22\x20id=\x22port_name_s\x22\x20value=\x22\x22>', '#store-item-price', 'valid', 'Customer', 'Press\x20\x27(\x202\x20)\x27\x20to\x20toggle\x20hats\x20during\x20gameplay', 'REPEAT', '.selectSala[value=\x22', '#favorites-dialog,\x20#favorites-overlay', 'BaseTexture', 'getFloat64', 's_headshot', '.dd-select', 's_wft_', '0x4', 'server-image-with-link', '#default-cursor-btn', ';\x20uniform\x20mat3\x20', 'Prism', 'renderContainer', 'game-wrap', 'kills', '-o-transform', 'fpsDisplay', 'cmd', 'column', 'tab', 'id_token', '#eating_speed_toggle,\x20#performance-monitor-toggle,\x20#wftspeed,\x20#saveGame,\x20#pulse_effects_enabled', 'byHighScore', 'createElementNS', '</div><div\x20class=\x22toaster-levelup-close\x22>', 'url(', 'nonbuyable', 'endFill', 'xhrFields', 'please\x20don\x27t\x20copy\x20my\x20code', 'main', '_complete', 'hatButtonContainer', 'runtimeHash', 'Ø§Ø®ÙˆÙƒ', 'def_skin_glow', 'img_pf_1', 'No\x20Name\x20Player', 'joystick_mode', 'img_clock', 'F_bg', 'WebSocket\x20baÄŸlÄ±\x20deÄŸil.', 'devicePixelRatio', '.tab-content', 'WKQ\x201', '#div_Laser,\x20#Laserup,\x20#laser_color_picker,\x20#laser_opacity_slider', '/consent/change?value=', 'API\x20error:', 'Ø®Ø·Ø£\x20ÙÙŠ\x20Ø­ÙØ¸\x20Ø§Ø³Ù…\x20Ø§Ù„Ø³ÙŠØ±ÙØ±:', '#popup-menu-label', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cursor-item\x20', 'GLASSES', 'mousedown', 'classPrefix', '.cursor-container', 'preset', 'PortionAura', 'vendor', '#wftspeed', 'index.game.toaster.continue', 'gold', 'bg_sky_10.png', 'u3_', 'prop', 'myGameSettings', 'Pink\x20Dolphin\x20Cursor', 'change', '#skins-view', '</span></div>', '#delete-account-no', '.close-favorites', 'musicEnabled', '#kill_show_name', 'Ø§Ø¨ÙˆÙƒ', 'state', 'Galaxy\x20Star', '453154qknKpX', 'deleteDatabase', 'https://wormx.store/store/index.php', '[id^=\x27skin-info-text\x27]', '/images/cors-proxy.phpimg=cursors/16.png', '#food_size_slider', 'cpuSampleSize', '_init', 'index.game.toaster.consent.text', '.store-view-cont', 'black', '.settings-sidebar,\x20.settings-layout,\x20.settings-content', 'move', '#fdbf5f', '/get_store.phpitem=bg_sky_12.png', '/get_store.phpitem=bg_sky_7.png', 'clear', 'accessToken', 'prototype', '_request', '4px', '/images/cors-proxy.phpimg=cursors/10.png', 'URL', 'async', 'smoothCamera', '/images/cors-proxy.phpimg=cursors/26.png', 'hat-toggle-button', 'coins_16000', 'getLoginStatus', 'key', '#btn_copy', 'Shader', '#mm-player-avatar', 'Incognito', 'index.game.popup.menu.consent.tab', 'positionMode', 'skin', 'document', 'https://wormmedia.xyz:4000/api/live-scores?t=', 'CPU\x20monitoring\x20stopped\x20because\x20it\x20was\x20disabled', '#modal_wft\x20.modal-content', '0x3', 'pointer-events', 'pop', 'length', 'mouthVariantArray', ');\x20}', '.play-button', 'Red\x20Pepper\x20Cursor', '0000', 'game', '&nickname=', 'killMsg', '\x20dd-selected-description-truncated', '420px', 'data:image/png;base64,', 'userAgent', 'trim', 'glassesDict', 'canvas', 'restore', 'getItem', 'selected', 'Zoom\x20changing\x20from', 'pwrFlex3', '\x22\x20class=\x22toaster\x20toaster-coins\x22><img\x20class=\x22toaster-coins-img\x22\x20alt=\x22Wormate\x20Coin\x22\x20src=\x22/images/coin_320.png\x22\x20/><div\x20class=\x22toaster-coins-val\x22>', '#store-go-wear-button', 'ddslick', '#contact-support', 'ltmolilci1iurq1i', '470px', 'getInt8', 'log', 'space-between', 'forEach', 'joystick', 'from', '#div_server,\x20#div_save,\x20#div_sound,\x20#div_speed,\x20#div_zigzag,\x20#div_w1,\x20#div_top,\x20#div_killmsg,\x20#div_sm,\x20#div_pulse_effects,\x20#div_messages,\x20#div_background,\x20#div_game_enhancements,\x20#config_mobile,\x20#div_Laser,\x20#div_crsw', 'error', 'removeClass', '/get_store.phpitem=mo_1.png', 'Mushroom\x20Cursor', '#profile-stat-bestSurvivalTime', 'ArrayBuffer', 'selectedItem', 'onreadystatechange', 'bkgnd0.png', 'index.game.antiadblocker.msg3', '<div\x20id=\x22server-link-tooltip\x22></div>', 'moveTo', 'authResponse', 'c_4', 'playerY', 'textureDict', 'sectorSystemSettings', 'Are\x20you\x20sure\x20you\x20want\x20to\x20remove\x20all\x20favorite\x20hats?', '\x22><img\x20src=\x22data:\x20image/svg+xml;\x20base64,\x20PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\x22/><span>', '_config', '<style>#open-favorites-btn\x20{\x20position:\x20absolute;\x20top:\x2010px;\x20right:\x2010px;\x20background:\x20#4CAF50;\x20color:\x20white;\x20border:\x20none;\x20padding:\x205px\x2010px;\x20border-radius:\x205px;\x20cursor:\x20pointer;\x20z-index:\x201000;\x20}#open-favorites-btn:hover\x20{\x20background:\x20#45a049;\x20}</style>', 'https://gateway.wormate.io', '#aaa', '#store-buy-coins_50000', 'hatUnknown', 'html', '#mm-bottom-buttons', 'deltaY', '#sector_show_lines', 'hover', 'SaveGamewft', 'CPU:\x20', '[data-index]', 'eat_animation', 'showFpsCpu', 'Method\x20', '#loading-view', 'Heart\x20on\x20Stick\x20Cursor', 'bbs', 'width', 'innerHTML', 'normal', 'latitude', '/images/cors-proxy.phpimg=cursors/24.png', 'img_3', 'wftit', 'charAt', 'index.game.antiadblocker.msg1', 'LOADING_TEXT', 'anApp', 'programmer', 'index.game.floating.headshot', ';\x20void\x20main(){vec4\x20color=texture2D(', 'u5_', 'port_name_s', 'expOnLevel', 'active', '#mm-line-center', '.settings-sidebar,\x20.settings-layout,\x20.settings-content,\x20.settings-grid,\x20.tab-content,\x20.sidebar-item', 'description', 'fast', 'ðŸŽ¯\x20HS\x20GÃ¼ncelleme:\x20', 'ccg_2', 'off', '#ffcc00', '#joystick_size', 'rgba(0,\x200,\x200,\x200.5)', 'nome', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', 'embedCSS', 'region', '/images/lens.png', 'js$2', 'pressed', 'Text', 'server-name', '5ERGHEx', 'relative', '#sort-toggle', '#333', '#mm-params-game-mode', 'selectedCursor', 'streamer', '#2196F3', '/pub/leaders', 'drawImage', '/get_store.phpitem=mo_3.png', 'imagePosition', '8px', 'findRenderContainer', 'false', 'extend', '1fr\x201fr\x201fr', 'antialias', '_frame', 'val', '<span></span>', 'data-index', '_pulseStarted', 'image', 'hasClickHandler', ';\x20gl_Position=vec4((', 'closest', 'realServerName', 'lineStyle', 'text/css', 'Jugador\x20', 'unlimitedRespawn', 'https://lh3.googleusercontent.com', 'dd-container', '1000', 'selectSala', 'index.game.social.shareResult.caption', 'showLines', 'fbAsyncInit', 'defaultSelectedIndex', 'destroy', '\x22\x20title=\x22', '10px', 'onmessage', '/get_store.phpitem=bg_sky_9.png', '#sector_system_toggle', 'keys', 'selectedZigzag', '/images/cors-proxy.phpimg=cursors/21.png', 'projectionMatrix', '/static/assets/', '.clear-all-favorites', 'favoriteSkins', 'expires_in', 'servers', 'AudioState', 'eyesDict', 'saveSettings', ';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'There\x20was\x20a\x20problem\x20connecting!', 'POST', 'target', '#mm-player-username', 'Error\x20processing\x20file:', 'onchange', 'index.game.result.placeInBoard', '[id^=\x22div_\x22]', '<div\x20style=\x27text-align:center;padding:10px;color:#aaa;margin:20px\x200;grid-column:1/span\x202;\x27>You\x20don\x27t\x20have\x20any\x20favorite\x20skins\x20yet.</div>', '#stretch-box', '#store-groups', 'eyesUnknown', '0x1', '/get_store.phpitem=mp_3.png', '#FFFFFF', 'none', '\x20desconectado.', 'index.game.popup.menu.settings.tab', 'colorDict', 'resize', '\x22\x20class=\x22toaster\x20toaster-consent-accepted\x22><img\x20class=\x22toaster-consent-accepted-logo\x22\x20src=\x22', 'hat-button-container', 'https://graph.facebook.com/me?access_token=', 'label_kill', 'currentHatId', 'keepJSONItemsOnTop', '.dd-click-off-close', 'replaceAll', 'link', 'Mexico', '\x27></div>', 'White\x20Glove\x20Cursor', ';\x20void\x20main()\x20{\x20gl_FragColor\x20=\x20texture2D(', 'warn', 'Dagger\x20Cursor', '-tab', 'mo1', 'uk_UA', ';\x20const\x20float\x20ROT_ANGLE_DEG\x20=\x207.5;\x20const\x20float\x20ROT_COS\x20=\x20cos(ROT_ANGLE_DEG/180.0*3.14159265358979);\x20const\x20float\x20ROT_SIN\x20=\x20sin(ROT_ANGLE_DEG/180.0*3.14159265358979);\x20void\x20main()\x20{\x20', 'texture', 'https://apis.google.com/js/platform.js', '/images/cors-proxy.phpimg=flg/au.png', '&nbsp;', 'bg-name', '#headshot_show_name', 'skins', 'pointsContainer', 'drawSectors', '_animFrameId', '75px', 'wss://', 'bg_sky__2.png', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', '#final-board', 'getElementsByTagName', 'contextmenu', '32px', '.dd-selected-image', 'VUd4bFlYTmxJR1J2YmlkMElHTnZjSGtnYlhrZ1kyOWtaUT09', 'reload', 'visible', 'display', 'hide', 'style', '<div\x20class=\x27fav-buttons-container\x27\x20style=\x27margin:10px;display:flex;gap:5px;position:fixed;left:270px;top:0px;z-index:1000;\x27></div>', '/images/cors-proxy.phpimg=cursors/15.png', '_cpuMonitoringInterval', 'fadeIn', '#store-go-coins-button', '/images/', '#eating_speed_toggle', 'measureCpuUsage', 'zero', 'floor', '#spin_fast_value', '<link\x20href=\x27https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\x27\x20rel=\x27stylesheet\x27/>\x0a<link\x20rel=\x22stylesheet\x22\x20href=\x22https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css\x22>\x0a<button\x20id=\x22btn_crsw\x22\x20style=\x22display:\x20none;\x22>ðŸ’¡</button>\x20\x0a<button\x20id=\x22op_wft\x22\x20class=\x22op_wft\x22>âš™ï¸\x20Settings</button>\x20\x0a<div\x20id=\x22modal_wft\x22\x20class=\x22modal\x22>\x20\x0a\x20\x20<div\x20class=\x22modal-content\x22>\x20\x0a\x20\x20\x20\x20<div\x20class=\x22modal-header\x22>\x20\x0a\x20\x20\x20\x20\x20\x20<span\x20class=\x22close\x22>&times;</span>\x20\x0a\x20\x20\x20\x20\x20\x20<h2\x20class=\x22modal-title\x22>GAME\x20SETTINGS</h2>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20<div\x20id=\x22modal_wft_body\x22\x20class=\x22modal-body\x22>\x0a\x20\x20\x20\x20\x20\x20<!--\x20Settings\x20layout\x20with\x20sidebar\x20and\x20content\x20-->\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22settings-layout\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Sidebar\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22settings-sidebar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x20active\x22\x20data-tab=\x22game-settings\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M14.7\x206.3a1\x201\x200\x200\x200\x200\x201.4l1.6\x201.6a1\x201\x200\x200\x200\x201.4\x200l3.77-3.77a6\x206\x200\x200\x201-7.94\x207.94l-6.91\x206.91a2.12\x202.12\x200\x200\x201-3-3l6.91-6.91a6\x206\x200\x200\x201\x207.94-7.94l-3.76\x203.76z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Game\x20Settings</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22mobile-settings\x22\x20id=\x22mobile-tab-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x=\x225\x22\x20y=\x222\x22\x20width=\x2214\x22\x20height=\x2220\x22\x20rx=\x222\x22\x20ry=\x222\x22></rect>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2212\x22\x20y1=\x2218\x22\x20x2=\x2212\x22\x20y2=\x2218\x22></line>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Mobile\x20Controls</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22sound-laser-settings\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M22\x2012h-4l-3\x209L9\x203l-3\x209H2\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Laser\x20Settings</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22power-ups\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2210\x22></circle>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<polyline\x20points=\x2212\x206\x2012\x2012\x2016\x2014\x22></polyline>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Power-ups\x20&\x20Zoom</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22messages\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M21\x2015a2\x202\x200\x200\x201-2\x202H7l-4\x204V5a2\x202\x200\x200\x201\x202-2h14a2\x202\x200\x200\x201\x202\x202z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Messages</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22backgrounds\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x=\x223\x22\x20y=\x223\x22\x20width=\x2218\x22\x20height=\x2218\x22\x20rx=\x222\x22\x20ry=\x222\x22></rect>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x228.5\x22\x20cy=\x228.5\x22\x20r=\x221.5\x22></circle>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<polyline\x20points=\x2221\x2015\x2016\x2010\x205\x2021\x22></polyline>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Backgrounds</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22cursors\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203l7.07\x2016.97\x202.51-7.39\x207.39-2.51L3\x203z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M13\x2013l6\x206\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Cursors</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22about\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2210\x22></circle>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2212\x22\x20y1=\x2216\x22\x20x2=\x2212\x22\x20y2=\x2212\x22></line>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2212\x22\x20y1=\x228\x22\x20x2=\x2212\x22\x20y2=\x228\x22></line>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>About</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Content\x20Area\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22settings-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Game\x20Settings\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22game-settings-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Game\x20Settings</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_server\x22\x20style=\x22position:\x20absolute;\x20opacity:\x200;\x20top:\x20-9999px;\x20left:\x20-9999px;\x20pointer-events:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22sel_server\x22>Country</label>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22sel_country\x22></select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Game\x20Options\x20Section\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-title\x22>Game\x20Options</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22settings-grid\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Fast\x20Eating\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-bolt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Fast\x20Eating</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22eating_speed_toggle\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20ZigZag\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_zigzag\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-eye\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>ZigZag\x20Type</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20style=\x22height:\x2018px;\x22\x20src=\x22https://wormx.store/images/cors-proxy.phpimg=img/zigzag.png\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22zigzag_selector\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x220\x22>None</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x221\x22>Type\x201</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x222\x22>Type\x202</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x223\x22>Type\x203</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Show\x20Speed\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_speed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-tachometer-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Show\x20Speed</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20style=\x22height:\x2018px;\x22\x20src=\x22https://wormx.store/images/cors-proxy.phpimg=img/speed.png\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22wftspeed\x22\x20value=\x22true\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Total\x20Kill-Headshot\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_save\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-crosshairs\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22saveGame\x22>Total\x20Kill/Headshot</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22saveGame\x22\x20value=\x22true\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Show\x20FPS/CPU\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-microchip\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Show\x20FPS/CPU</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22performance-monitor-toggle\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Visual\x20Pulse\x20Effects\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_pulse_effects\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-wave-square\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Visual\x20Pulse\x20Effects</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22pulse_effects_enabled\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Screen\x20Mode\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_w1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-desktop\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Screen\x20Mode</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22sel_sc\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x220\x22>100%</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x221\x22>75%</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x222\x22>Center</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Smooth\x20Level\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-sliders-h\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Smooth\x20movement</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22sel_sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2220\x22>Normal</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2210\x22>High</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Top\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-trophy\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Top</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22sel_top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x220\x22>0</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x221\x22>1</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x222\x22>2</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x223\x22>3</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x224\x22>4</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x225\x22>5</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x226\x22>6</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x227\x22>7</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x228\x22>8</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x229\x22>9</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2210\x22>10</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Sound\x20Settings\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sound-settings-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22settings-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Sound\x20Effects\x20Label\x20on\x20Left\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-volume-up\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sound-effects-title\x22>Sound\x20Effects</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Headshot\x20Sound\x20Selector\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22sound_effect_selector\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/hs_2.mp3\x22>Default\x20Headshot</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3\x22>Headshot\x20Sound</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/emaat.mp3\x22>Emaat</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://www.myinstants.com/media/sounds/sniper-shot.mp3\x22>Sniper\x20Shot</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://www.myinstants.com/media/sounds/headshot_6.mp3\x22>Headshot\x202</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://www.myinstants.com/media/sounds/999_Z871W0o.mp3\x22>Alqm</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://www.myinstants.com/media/sounds/bye-bye-mikey-tokyo-revengers.mp3\x22>Bye\x20Bye</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/Aelo-Adi.MP3\x22>Adelo\x20Adi</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/alalobee.mp3\x22>Ala\x20Loby</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/laugh.mp3\x22>Laugh</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/mario-jump.mp3\x22>Mario\x20Jump</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/pew.mp3\x22>Pew</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/pingo.mp3\x22>Pingo</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/wak-wak.mp3\x22>Wak\x20Wak</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x2010th\x20Headshot\x20Sound\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22monster_kill_selector\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/monster-kill-hahaha.MP3\x22>Monster\x20Kill</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://www.myinstants.com/media/sounds/mk.mp3\x22>Monster\x20Kill\x202</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://www.myinstants.com/media/sounds/hea-hea-headshot.mp3\x22>Monster\x20Kill\x203</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Volume\x20Control\x20without\x20label\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22volume-slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22volume_slider\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22\x20value=\x2240\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22volume_value\x22\x20class=\x22slider-value\x22>40</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Toggle\x20Switch\x20on\x20far\x20right\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sound-toggle\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22wftsound\x22\x20value=\x22true\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x20round\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Custom\x20Skin\x20Upload\x20Section\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-title\x22>Custom\x20Skin</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22\x20id=\x22div_crsw\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-file-image\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Skin\x20File....\x20Only\x20(skin.json)</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20flex-grow:\x201;\x20gap:\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22file\x22\x20accept=\x22.json\x22\x20id=\x22fileSkin\x22\x20style=\x22flex-grow:\x201;\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btn_clear_file\x22>Clear</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Audio\x20elements\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<audio\x20id=\x22s_h\x22><source\x20src=\x22https://wormx.store/video/hs_2.mp3\x22\x20type=\x22audio/mpeg\x22></audio>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<audio\x20id=\x22monster_kill_sound\x22><source\x20src=\x22https://wormx.store/video/monster-kill-hahaha.MP3\x22\x20type=\x22audio/mpeg\x22></audio>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<audio\x20id=\x22sound_test_audio\x22></audio>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Mobile\x20Settings\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22mobile-settings-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Mobile\x20Controls</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-header\x22>Joystick\x20Settings</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-gamepad\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22joystick_checked\x22>Enable\x20Joystick</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22joystick_checked\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-palette\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22joystick_color\x22>Joystick\x20Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22joystick_color\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22red\x22>Red</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22blue\x22>Blue</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22green\x22>Green</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22yellow\x22>Yellow</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22purple\x22>Purple</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22orange\x22>Orange</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-cog\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22joystick_mode\x22>Joystick\x20Mode</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22joystick_mode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22static\x22>Static</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22dynamic\x22>Dynamic</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-map-marker-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22joystick_position\x22>Position</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22joystick_position\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22L\x22>Left</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22R\x22>Right</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-expand-arrows-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22joystick_size\x22>Size</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22joystick_size\x22\x20min=\x2250\x22\x20max=\x22150\x22\x20step=\x2210\x22\x20value=\x22100\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22joystick_size_value\x22\x20class=\x22slider-value\x22>100</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-adjust\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22joystick_pxy\x22>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22joystick_pxy\x22\x20min=\x2250\x22\x20max=\x22150\x22\x20step=\x2210\x22\x20value=\x22100\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22joystick_pxy_value\x22\x20class=\x22slider-value\x22>100</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22config_mobile\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Additional\x20mobile\x20settings\x20will\x20be\x20loaded\x20here\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Laser\x20Settings\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22sound-laser-settings-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Laser\x20Settings</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-title\x22>Laser\x20Settings</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22\x20id=\x22div_Laser\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-bullseye\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22Laserup\x22>Enable\x20Laser</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22Laserup\x22\x20value=\x22true\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-palette\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22laser_color_picker\x22>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22laser_color_picker\x22\x20value=\x22#FFD700\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-adjust\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22laser_opacity_slider\x22>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22laser_opacity_slider\x22\x20min=\x2210\x22\x20max=\x22100\x22\x20step=\x2210\x22\x20value=\x2250\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22laser_opacity_value\x22\x20class=\x22slider-value\x22>50</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22reset_laser_settings\x22\x20class=\x22reset-btn\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-keyboard\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Keyboard\x20Shortcuts:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20text-align:\x20right;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20inline-block;\x20margin-left:\x2010px;\x22><strong>L</strong>\x20-\x20Toggle\x20laser</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20inline-block;\x20margin-left:\x2010px;\x22><strong>O</strong>\x20-\x20Increase\x20opacity</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20inline-block;\x20margin-left:\x2010px;\x22><strong>P</strong>\x20-\x20Decrease\x20opacity</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Power-ups\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22power-ups-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Power-ups\x20&\x20Zoom\x20Settings</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-title\x22>Advanced\x20Controls</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Spin\x20Fast\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-sync-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spin_fast_slider\x22>Spin\x20Fast</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22spin_fast_slider\x22\x20min=\x220.3\x22\x20max=\x220.6\x22\x20step=\x220.1\x22\x20value=\x220.5\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22spin_fast_value\x22\x20class=\x22slider-value\x22>0.5</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22reset-btn\x22\x20data-reset=\x22spin_fast\x22\x20data-default=\x220.5\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Power-ups\x20Size\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-expand\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22portion_size_slider\x22>Power-ups\x20Size</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22portion_size_slider\x22\x20min=\x221\x22\x20max=\x226\x22\x20step=\x221\x22\x20value=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22portion_size_value\x22\x20class=\x22slider-value\x22>2</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22reset-btn\x22\x20data-reset=\x22portion_size\x22\x20data-default=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Power-ups\x20Aura\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-radiation-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22portion_aura_slider\x22>Power-ups\x20Aura</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22portion_aura_slider\x22\x20min=\x221.2\x22\x20max=\x223.2\x22\x20step=\x220.2\x22\x20value=\x221.2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22portion_aura_value\x22\x20class=\x22slider-value\x22>1.2</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22reset-btn\x22\x20data-reset=\x22portion_aura\x22\x20data-default=\x221.2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Food\x20Size\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-apple-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22food_size_slider\x22>Food\x20Size</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22food_size_slider\x22\x20min=\x220.5\x22\x20max=\x223\x22\x20step=\x220.5\x22\x20value=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22food_size_value\x22\x20class=\x22slider-value\x22>2</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22reset-btn\x22\x20data-reset=\x22food_size\x22\x20data-default=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Food\x20Shadow\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-moon\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22food_shadow_slider\x22>Food\x20Shadow</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22food_shadow_slider\x22\x20min=\x220.5\x22\x20max=\x223\x22\x20step=\x220.5\x22\x20value=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22food_shadow_value\x22\x20class=\x22slider-value\x22>2</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22reset-btn\x22\x20data-reset=\x22food_shadow\x22\x20data-default=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-title\x22>Zoom\x20Controls</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Zoom\x20Speed\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-search-plus\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22zoom_speed_slider\x22>Zoom\x20Speed</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22zoom_speed_slider\x22\x20min=\x220.001\x22\x20max=\x220.01\x22\x20step=\x220.001\x22\x20value=\x220.003\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22zoom_speed_value\x22\x20class=\x22slider-value\x22>0.003</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22reset-btn\x22\x20data-reset=\x22zoom_speed\x22\x20data-default=\x220.003\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_game_enhancements\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Messages\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22messages-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Messages</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Default\x20Kill&Headshot\x20Toggle\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-with-toggle\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Kill&Headshot\x20Settings</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22toggle-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-skull\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Default\x20Kill&Headshot</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22wftiq\x22\x20value=\x22true\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20New\x20Messages\x20Layout\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-header\x22>Messages</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22messages-container\x22\x20id=\x22custom-messages-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Left\x20side:\x20Kill\x20Messages\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-column\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-crosshairs\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Kill\x20Messages</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-select-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22kill_msg\x22\x20class=\x22message-select\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22KILLED\x22>KILLED</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22WASTED\x22>WASTED</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22ELIMINATED\x22>ELIMINATED</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22DESTROYED\x22>DESTROYED</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22FINISHED\x22>FINISHED</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22Well\x20Done!\x22>Well\x20Done!</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Show\x20Player\x20Name</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x20small-switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22kill_show_name\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22kill_name_position\x22\x20class=\x22message-select\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22after\x22>After\x20Message</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22before\x22>Before\x20Message</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-custom\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22kill_custom_text\x22\x20class=\x22custom-label\x22>Custom\x20Message</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22kill_custom_text\x22\x20maxlength=\x2220\x22\x20placeholder=\x22Maximum\x2020\x20characters\x22\x20class=\x22custom-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Right\x20side:\x20Headshot\x20Messages\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-column\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-bullseye\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Headshot\x20Messages</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-select-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22headshot_msg\x22\x20class=\x22message-select\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22HEADSHOT\x22>HEADSHOT</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22BOOM!\x20HEADSHOT\x22>BOOM!\x20HEADSHOT</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22PERFECT\x20AIM\x22>PERFECT\x20AIM</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22CRITICAL\x20HIT\x22>CRITICAL\x20HIT</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22BULLSEYE\x22>BULLSEYE</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Show\x20Player\x20Name</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x20small-switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22headshot_show_name\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22headshot_name_position\x22\x20class=\x22message-select\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22after\x22>After\x20Message</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22before\x22>Before\x20Message</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-custom\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22headshot_custom_text\x22\x20class=\x22custom-label\x22>Custom\x20Message</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22headshot_custom_text\x22\x20maxlength=\x2220\x22\x20placeholder=\x22Maximum\x2020\x20characters\x22\x20class=\x22custom-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_messages\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Backgrounds\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22backgrounds-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Game\x20Backgrounds</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Sector\x20System\x20Section\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-title\x22>Sector\x20System</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sector-system-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sector-toggle-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-th-large\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22toggle-label\x22>Enable\x20Sector\x20System</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22toggle-switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22sector_system_toggle\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22toggle-slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Settings\x20Panel\x20-\x20Hidden\x20until\x20enabled\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22sector_settings_panel\x22\x20class=\x22sector-settings-panel\x22\x20style=\x22display:\x20none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sector-main-settings\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-grip-horizontal\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-label\x22>Display\x20Mode</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22sector_display_mode\x22\x20class=\x22sector-select\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sectors\x22>Sectors\x20(12)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22quarters\x22>Quarters\x20(4)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Background\x20Settings\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-fill-drip\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-label\x22>Background\x20Color</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22sector_bg_color\x22\x20value=\x22#000000\x22\x20class=\x22color-picker\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Background\x20Opacity\x20-\x20Always\x20visible\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-adjust\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-label\x22>Background\x20Opacity</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-control\x20opacity-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22sector_bg_opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x225\x22\x20value=\x2260\x22\x20class=\x22small-slider\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-value\x22\x20id=\x22sector_bg_opacity_value\x22>60%</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-border-style\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-label\x22>Show\x20Lines</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22toggle-switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22sector_show_lines\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22toggle-slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Lines\x20Options\x20-\x20Hidden\x20when\x20Show\x20Lines\x20is\x20off\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22sector_lines_options\x22\x20class=\x22sector-lines-options\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-palette\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-label\x22>Line\x20Color</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22sector_line_color\x22\x20value=\x22#FF0000\x22\x20class=\x22color-picker\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-low-vision\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-label\x22>Line\x20Opacity</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-control\x20opacity-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22sector_line_opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x225\x22\x20value=\x2230\x22\x20class=\x22small-slider\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-value\x22\x20id=\x22sector_line_opacity_value\x22>30%</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sector-shortcuts\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-keyboard\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22shortcuts-title\x22>Keyboard\x20Shortcuts:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22shortcuts-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22shortcut-item\x22><strong>S</strong>\x20or\x20<strong>=</strong>\x20-\x20Toggle\x20Sectors</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22shortcut-item\x22><strong>X</strong>\x20-\x20Toggle\x20Quarters</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22background-grid\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Background\x20items\x20will\x20be\x20added\x20dynamically\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Cursors\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cursors-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Game\x20Cursors</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Ø§Ù„Ø¹Ù†ÙˆØ§Ù†\x20ÙÙŠ\x20Ø³Ø·Ø±\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-mouse-pointer\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Cursor\x20Selection</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Ø§Ù„Ø²Ø±\x20ÙÙŠ\x20Ø³Ø·Ø±\x20Ù…Ù†ÙØµÙ„\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x20cursor-controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22default-cursor-btn\x22\x20class=\x22secondary-button\x22>Default\x20Cursor</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22current-cursor-name\x22>Current:\x20Electrical\x20Plug\x20Cursor</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cursor-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Ø§Ù„Ù…Ø¤Ø´Ø±Ø§Øª\x20Ø³ØªØ¶Ø§Ù\x20Ø¯ÙŠÙ†Ø§Ù…ÙŠÙƒÙŠØ§Ù‹\x20Ù‡Ù†Ø§\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_cursors\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20About\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22about-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>About\x20WKQ</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22about-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-info-circle\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Platen:\x20Enhance\x20Your\x20Wormate.io\x20Experience\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[WKQ]\x20is\x20a\x20Chrome\x20extension\x20designed\x20to\x20improve\x20your\x20wormate.io\x20gameplay.\x20Quickly\x20select\x20rooms,\x20customize\x20your\x20worm\x20with\x20vibrant\x20skin\x20colors,\x20and\x20enjoy\x20extra\x20features\x20to\x20enhance\x20your\x20experience.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-calendar-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Release\x20Date:\x2030/03/2025.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-code-branch\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Version:\x202.0.1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22button-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22resetScript\x22\x20class=\x22reset-button\x22>Versiyon\x20Change</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-users\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Designed\x20by:\x20\x20TR-Team\x20âš¡\x20!\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin-top:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-keyboard\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Keyboard\x20Shortcuts:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20inline-block;\x20margin-right:\x2015px;\x20margin-top:\x205px;\x22><strong>L</strong>\x20-\x20Toggle\x20laser</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20inline-block;\x20margin-right:\x2015px;\x20margin-top:\x205px;\x22><strong>O</strong>\x20-\x20Increase\x20laser\x20opacity</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20inline-block;\x20margin-right:\x2015px;\x20margin-top:\x205px;\x22><strong>P</strong>\x20-\x20Decrease\x20laser\x20opacity</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20User\x20ID\x20Section\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-id-card\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22id_customer\x22>ID:\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20value=\x22', 'â˜…\x20Add', '/get_store.phpitem=close_z.png', '_start', 'textAlign', 'fill', 'index.game.floating.wellDone', 'cursor', 'containerImgS', 'detach', 'cookie', 'type', '500px', 'eyesId', 'removeData', 'text', 'killCustomText', 'index.game.main.menu.unlockSkins.comeAndPlay', '#wear-glasses-button', '#profile-experience-bar', 'index.game.popup.menu.skins.tab', '#mm-store', 'Press\x20\x27(\x201\x20)\x27\x20to\x20toggle\x20skins\x20during\x20gameplay', 'onclickServer', '\x22\x20alt=\x22', '\x20no\x20tiene\x20teamCode.\x20No\x20se\x20enviarÃ¡\x20la\x20actualizaciÃ³n\x20de\x20posiciÃ³n.', '/images/cors-proxy.phpimg=cursors/13.png', 'img_2', 'c_1', '#store-locked-bar-text', 'getImageData', 'cachedServers', 'height', 'restored', 'index.game.toaster.consent.link', 'âŒ\x20Ø®Ø·Ø£\x20ÙÙŠ\x20ØªØ¹Ø¯ÙŠÙ„\x20Ø¯Ø§Ù„Ø©\x20Ø¹Ø±Ø¶\x20Ø§Ø³Ù…\x20Ø§Ù„Ø³ÙŠØ±ÙØ±:', 'servers-australia', 'no-js(\x5cs|$)', 'aliases', 'http', '#mm-menu-cont', 'wft-modal', 'wftSettings', '/images/bg-pattern-pow2-TEAM2.png', 'title', '#mm-params-nickname', 'Pink\x20Octopus\x20Cursor', 'color', '#kill_custom_text', '#please-wait-view', 'reduce', 'skinArrayDict', '\x22\x20data-bg-name=\x22', '#5dade6', 'def_mouth', '#cursors-tab,\x20.cursor-container,\x20.cursor-item', 'CLAMP', 'Skin\x20not\x20found', 'WKQ\x203', '.dd-selected-description', 'totalPlayTimeSec', 'onSelected', 'imageSrc', 'soundEffect', 'Flame\x20Cursor', 'drawCircle', '\x20se\x20moviÃ³\x20a\x20(', '6324983ocPmna', 'headshotMsgType', 'setupKeyboardControls', '#congrats-bg', 'a2_', 'ooo', 'img_o_2', 'appId', 'Continue\x20(Home)', 'setTime', ';path=/', 'index.game.antiadblocker.continue', 'backgroundAlpha', 'v_z', 'ajax', 'Octopus\x20Glove\x20Cursor', 'list', '.setting-item', '#popup-login-gg', 'visibility', 'Error\x20loading\x20settings:', 'highScore', 'https://wormx.store/video/hs_2.mp3', 'savedGame', 'coins_50000', 'graphics', '.server-score', 'pwrFlex1', '#adbl-1', 'touchstart', '..10\x20..', 'view', '/images/bg-obstacle.png', 'bbsConfig', '#4CAF50', '_0x4c9ec5', 'consent_state_2', '-10px', '000000', 'dynamic', '<table>', '#ffffff', 'resource', 'createDisplayElements', '/get_store.phpitem=bg_sky__6.png', '<div\x20id=\x22image-tooltip\x22\x20class=\x22image-tooltip\x22></div>', 'img_f', 'portion_size', '30px', '<img\x20class=\x22dd-selected-image', 'Renderer', '.cursor-item', 'gg_116823912010482082044', 'teamColor', 'MOUTH', 'Rectangle', 'util.time.min', 'splice', 'exitFullscreen', '#food_size_value', '/get_store.phpitem=moo_3.png', '#sector_lines_options', 'default_icon.png', 'lastRespawnTime', 'left', 'push', 'dropShadowDistance', 'save\x20gm:\x20', '.dd-pointer', 'clipboard', 'getCurrentPosition', '#store-view', 'def_eyes', 'indexedDB', 'attach', 'c_v', 'arc', 'querySelectorAll', 'currentHatIndex', 'undefined', 'd_3', 'stringify', '#ff2222', 'index.game.result.share', 'lineTo', '#profile-stat-kills', '#kill_name_position', 'identifier', '#wear-mouths-button', '/images/cors-proxy.phpimg=flg/ca.png', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20margin:\x2010px\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22id_customer\x22\x20style=\x22display:\x20block;\x20margin-bottom:\x205px;\x20font-weight:\x20bold;\x20color:\x20#ddd;\x20text-align:\x20center;\x22>User\x20ID</label>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20margin:\x200\x20auto;\x20justify-content:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20value=\x22', 'miniclip', 'https://wormx.store/2025/check/index.php', 'img_4', 'nonbuyableCause', 'scrollTop', 'servers-peru', 'pwrFlex0', 'server-info', 'serverUrl', 'headshotCustomText', 'showHeadshotName', '#coins-view', '#wear-view-next', 'fixed', 'fail', '#sector_line_opacity', '_refresh', '\x22\x20style=\x22width:\x2060px;\x20height:\x2060px;\x20display:\x20inline-block;\x20margin:\x205px;\x20cursor:\x20pointer;\x20border:\x202px\x20solid\x20', 'ðŸ›‘\x20Pozisyon\x20gÃ¼ncellemesi\x20yapÄ±lmadÄ±:\x20teamCode\x20yok.', 'Web\x20SQL\x20otomatik\x20olarak\x20JavaScript\x20ile\x20temizlenemez.', 'extension', '/get_store.phpitem=open_q.png', 'initialized', 'serviceWorker', 'onopen', 'getRadius', 'showHeadshotMessage', 'Ù†Ø¸ÙŠÙ', '</span>', 'rgba(255,\x20255,\x20255,\x200.1)', 'op_wft', 'scale', '#mm-event-text', 'I18N_MESSAGES', 'de_DE', '\x22\x20style=\x22max-width:\x20200px;\x20width:\x20200px\x20!important;\x20height:\x2022px\x20!important;\x20border-radius:\x206px;\x20font-size:\x2014px;\x20text-align:\x20center;\x20background-color:\x20#fff;\x20color:\x20#0a6928;\x20font-weight:\x20630;\x20margin-right:\x2010px;\x22\x20type=\x22text\x22\x20id=\x22id_customer\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btn_copy\x22\x20style=\x22width:\x20100px;\x20height:\x2035px;\x20border-radius:\x206px;\x20font-size:\x2015px;\x20background-color:\x20#fff;\x20color:\x20white;\x20border:\x20none;\x20cursor:\x20pointer;\x22\x20onclick=\x22navigator.clipboard.writeText(\x27', 'flex', '#popup-logout', 'settings', 'WKQ\x202', '#headshot_name_position', '<span\x20class=\x22score-display\x20', 'GET', 'databases', '\x22/></span><span>', 'Timmap\x20Servers', 'fontWeight', '.sidebar-item[data-tab=\x27backgrounds\x27]', 'rotation', ',\x201.0)).xy,\x200.0,\x201.0);\x20vec4\x20ScreenParams\x20=\x20', 'JDHnkHtYwyXyVgG9', '4812DbemQo', 'https://wormx.store/2025/api/server.php', '#backgroundArena-value', 'DataView', '#laser_opacity_value', 'initialState', 'teamCode', 'EYES', 'sqrt', '2px\x206px', 'addChild', ';\x20uniform\x20vec4\x20', '<small\x20class=\x22dd-selected-description\x20dd-desc', 'stopPropagation', 'v14.0', '15px', '/get_store.phpitem=moi_2.png', 'flex_ability2', 'UAE', 'atan2', '5px', '/images/cors-proxy.phpimg=cursors/20.png', 'interactive', 'index.game.result.your', 'data', '[id^=\x22sel_\x22]', 'changedTouches', 'TextStyle', 'lastCpuTime', 'then', '.favorites-grid', 'dd-click-off-close', 'function', 'bold', 'pk6', 'touches', '#port_name', 'getInt32', 'close', 'fillStyle', 'https://wormx.store/store/check2.php', '/get_store.phpitem=mof_1.png', '#e03e42', 'cssText', 'outerHeight', 'test', '.flag', 'WRM_wormate-io_300x250', '/images/cors-proxy.phpimg=flg/mx.png', 'option', 'each', '#wear-buy-button', 'inline-block', 'id_customer', 'fontFamily', 'WRAP_MODES', 'MULTIPLY', 'servers-granbretana', 'Texture', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20object-fit:\x20contain;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '<div\x20style=\x22border-color:\x20', 'apply', 'websockets', 'saveGame', '/dynamic/assets/registry.json', 'requestFullScreen', 'showKillName', '#d4db19', '<div\x20class=\x22div_FullScreen\x22><input\x20type=\x22button\x22\x20value=\x22', '/images/cors-proxy.phpimg=cursors/23.png', 'container_count', 'fontSize', 'bestSurvivalTimeSec', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:center;\x20padding:20px;\x20color:#aaa;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20No\x20servers\x20available\x20in\x20this\x20region\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', ';\x20void\x20main(){', 'updateToggleButton', 'index.game.popup.menu.delete.tab', 'dropShadowBlur', 'username', '#f44336', 'relativePath', 'pk2', 'userId', '<input\x20type=\x22button\x22\x20value=\x22', 'href', '/images/cors-proxy.phpimg=cursors/8.png', 'isActive', 'find', '#portion_size_slider', 'portion_aura', 'slice', '(^|\x5cs)', 'headshotMsg', 'regDate', '#joystick_mode', '#wear-hats-button', '\x22\x20style=\x22width:\x2032px;\x20height:\x2032px;\x20margin-top:\x2014px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'lengthComputable', '.performance-monitor-container', 'hatId', '.dd-option-image', 'selectedServerInfo', 'https://static.zdassets.com/ekr/snippet.js?key=f337b28c-b66b-4924-bccd-d166fe3afe54', 'facebook-jssdk', 'dd-pointer-up', 'util.time.hours', '\x22\x20src=\x22', 'writeText', 'text,\x20span,\x20div', 'geolocation', '<input\x20type=\x22hidden\x22\x20id=\x22port_id_s\x22\x20value=\x22\x22>', '_hasSetupKeyboardControls', 'isCustom', 'prime', 'success', 'startPreRoll', 'index.game.result.title', 'playMonsterSound', '<style\x20id=\x22css-ddslick\x22\x20type=\x22text/css\x22>.dd-select{\x20border-radius:2px;\x20border:solid\x201px\x20#ccc;\x20position:relative;\x20cursor:pointer;}.dd-desc\x20{\x20color:#aaa;\x20display:block;\x20overflow:\x20hidden;\x20font-weight:normal;\x20line-height:\x201.4em;\x20}.dd-selected{\x20overflow:hidden;\x20display:block;\x20padding:2px;\x20font-weight:bold;}.dd-pointer{\x20width:0;\x20height:0;\x20position:absolute;\x20right:10px;\x20top:50%;\x20margin-top:-3px;}.dd-pointer-down{\x20border:solid\x205px\x20transparent;\x20border-top:solid\x205px\x20#000;\x20}.dd-pointer-up{border:solid\x205px\x20transparent\x20!important;\x20border-bottom:solid\x205px\x20#000\x20!important;\x20margin-top:-8px;}.dd-options{\x20border:solid\x201px\x20#ccc;\x20border-top:none;\x20list-style:none;\x20box-shadow:0px\x201px\x205px\x20#ddd;\x20display:none;\x20position:absolute;\x20z-index:2000;\x20margin:0;\x20padding:0;background:#fff;\x20overflow:auto;}.dd-option{\x20padding:2px;\x20display:block;\x20border-bottom:solid\x201px\x20#ddd;\x20overflow:hidden;\x20text-decoration:none;\x20color:#333;\x20cursor:pointer;-webkit-transition:\x20all\x200.25s\x20ease-in-out;\x20-moz-transition:\x20all\x200.25s\x20ease-in-out;-o-transition:\x20all\x200.25s\x20ease-in-out;-ms-transition:\x20all\x200.25s\x20ease-in-out;\x20}\x20ul.dd-options\x20{height:\x20130px;}\x20.dd-options\x20>\x20li:last-child\x20>\x20.dd-option{\x20border-bottom:none;}.dd-option:hover{\x20background:#f3f3f3;\x20color:#000;}.dd-selected-description-truncated\x20{\x20text-overflow:\x20ellipsis;\x20white-space:nowrap;\x20}.dd-option-selected\x20{\x20background:#f6f6f6;\x20}.dd-option-image,\x20.dd-selected-image\x20{\x20vertical-align:middle;\x20float:left;\x20margin-right:5px;\x20max-width:64px;}.dd-image-right\x20{\x20float:right;\x20margin-right:15px;\x20margin-left:5px;}.dd-container{display:\x20inline-block;\x20position:relative;}â€‹\x20.dd-selected-text\x20{\x20font-weight:bold}â€‹</style>', 'split', 'm_2', '#delete-account-yes', 'HAT', '\x20HS/Kill\x20actualizado:\x20HS\x20', '\x20/\x20', '.background-item[data-bg=\x22', 'attr', 'month', 'before', 'âœ…\x20ØªÙ…\x20ØªØ¹Ø¯ÙŠÙ„\x20Ø¯Ø§Ù„Ø©\x20Ø¹Ø±Ø¶\x20Ø§Ø³Ù…\x20Ø§Ù„Ø³ÙŠØ±ÙØ±\x20Ø¨Ù†Ø¬Ø§Ø­', 'currentMode', 'PortionSize', '/get_store.phpitem=open_z.png', 'byKillsAndHeadShots', 'arraybuffer', 'Ù…Ù„Ø¹ÙˆÙ†', 'Current:\x20', '#backgrounds-tab,\x20.background-grid,\x20.background-item', 'PTSans', 'sfxEnabled', '959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com', 'translationMatrix', 'joystick_pxy', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#333;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'slideUp', 'killMsgType', 'join', 'Indonesia', 'textContent', 'toFixed', 'body', 'locale', 'data-descriptione', '#laser_opacity_slider', 'openDatabase', 'scroll', 'string', 'Nebula', '_skin_g', 'Vietnam', '#css-ddslick', 'nodeName', '1\x20/\x20span\x202', 'beginPath', 'propertyList', 'texts', '#skin-group-description-text', ';\x20uniform\x20sampler2D\x20', 'webkitRequestFullScreen', 'mouseup', '#mm-action-login', 'shift', 'reverse', '.toaster-levelup-close', 'headshot-message', 'Mesh', 'beforeunload', '0lt0', '12px', 'guest', 'appendChild', 'Default', 'Geometry', '/deleteAccount', 'coords', 'modalFixed', 'a1_', 'hatToggleButton', 'red', 'antiadblocker', 'd_4', 'servers-canada', 'translate(-50%,\x20-50%)', '.green-dot', 'center', 'addAsyncTest', 'div_save', 'Graphics', 'match', '<img\x20src=\x22', 'reset', 'backgroundColor', 'concat', '/images/cors-proxy.phpimg=flg/gb.png', '/images/cors-proxy.phpimg=cursors/27.png', 'data-skin-id', '&skinId=', '#store-buy-coins_7000', 'savedState', 'flag', 'replaceWith', 'location', 'init2\x20pSC:\x20', '.switch,\x20.slider-control,\x20.section-title', 'sectorSystemActive', '#fileSkin', 'soundVolume', 'src', 'headshotNamePos', '87px', 'enableJSClass', '3px', '#current-cursor-name', '<div></div>', '#delete-account-timer', 'set', 'transition', 'new', 'u4_', 'joystick_checked', 'canvastext', 'alpha', 'wfti', 'BLEND_MODES', '#store-buy-button', 'laserGraphics', 'mode', 'initUserInterface', 'border-color', 'preventDefault', '\x20=\x20', 'now', 'shared', 'pk4', 'index.game.result.tryHit', 'selectedHats', '#food_shadow_value', 'custom_skin', '4px\x208px', 'slideDown', 'includes', 'flex_ability', 'data:', '\x20page', 'status', 'img_i_3', 'sel_top', 'enabled', 'isIPInEEA', 'Australia', '50px', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20id=\x22', '_originalColor', 'PerformanceMonitor', 'ccg', 'https://wormx.store', 'sectorTextStyle', '/images/cors-proxy.phpimg=cursors/4.png', '0\x200\x205px\x20rgba(0,0,0,0.5)', 'Visit\x20', 'cachedRadius', 'Bluemist', 'hideYouNameInMinimap', '#port_id', ';\x20attribute\x20vec2\x20', 'target=\x22_black\x22\x20href', 'pointer', '#333333', 'app', 'WellDone\x20!!', 'isInitialized', '#mm-loading', '99999', 'Watermelon\x20Cursor', 'remove', 'getTime', '/get_store.phpitem=close_q.png', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x202px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,0,0,0.6);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x201px\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'baseVal', 'note', 'WKQ\x204', 'savedData', '-ms-transform', 'c_white', 'kill', 'obj', 'Game\x20data\x20not\x20available', 'keyCode', '#game-canvas', '.sidebar-item', 'mm-params-nickname', 'index.game.popup.menu.profile.tab', '\x22\x20class=\x22toaster\x20toaster-levelup\x22><img\x20class=\x22toaster-levelup-img\x22\x20alt=\x22Wormate\x20Level\x20Up\x20Star\x22\x20src=\x22/images/level-star.svg\x22\x20/><div\x20class=\x22toaster-levelup-val\x22>', 'mm-action-play', '..2\x20..', '#Laserup', 'avatarUrl', 'has', '<div\x20style=\x27text-align:center;padding:10px;color:#ff6b6b;grid-column:1/span\x202;\x27>Error\x20loading\x20favorites</div>', '#sector_bg_color', 'performance-monitor-toggle', 'index.game.popup.menu.store.locked', '#zoom_speed_value', 'OPEN', 'longitude', '_pulseInterval', 'glow', 'performance-monitor-container', 'listVariant', 'user_data', '#chat-input', '\x20*\x20', '#results-view', 'fullscreen', '.wormate.io', '/get_store.phpitem=moi_3.png', '/images/cors-proxy.phpimg=cursors/22.png', 'stylesheet', '/images/guest-avatar-valday2024.png', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chat-message\x22\x20style=\x22background:\x20', 'url', '#pulse_effects_enabled', '<button\x20id=\x27add-to-favorites-skin\x27\x20class=\x27favorite-button2\x27\x20style=\x27background:#4CAF50;color:white;border:none;padding:5px\x2010px;border-radius:3px;cursor:pointer;white-space:nowrap;box-shadow:0\x202px\x204px\x20rgba(0,0,0,0.2);\x20margin:\x20410px\x2015px\x2015px\x205px;\x27><span\x20style=\x27font-size:14px;\x27>+</span>\x20Add</button>', '/get_store.phpitem=mp_2.png', 'wftPulseEnabled', '<div\x20id=\x22', 'create', 'img_p_2', 'loginUser', '#settings-music-enabled-switch', 'servers-japon', 'insertAfter', 'value2_hs', '#loading-progress-cont', 'd_5', 'min', 'font', 'Wormx\x20Error\x203', 'WebSocket', 'img_p_1', 'addSelectedHatButton', 'fuck', '<img>', '#settings-view', 'restricted', 'selectText', 'eyesVariantArray', 'clientX', 's_w', '#f9cc0b', '0\x200\x200\x205px', 'quarters', 'event', 'VkdWaGJWVlE=', 'wftsle', 'update', 'wssServer', 'level', 'parent', 'Crystalblue', 'country', '/images/cors-proxy.phpimg=flg/default-server.png', 'default', 'https://wormate.io', 'error-view', '<style>', '<li><a\x20class=\x22dd-option\x22>', '.error,\x20.alert,\x20.modal,\x20.popup,\x20.notification', 'v1_', 'abilityUnknown', 'zIndex', 'append', 'index.game.toaster.levelup', '#food_shadow_slider', 'lineHeight', 'pwr_flex', '360px', 'cpuSamples', 'fps', ',\x20Kill\x20', '.ui-tab', '#unl6wj4czdl84o9b', 'setInt16', 'window', '82px', 'hatDict', 'GIF\x20SKIN', 'favorites-overlay', 'displayNumber', 'servers-germania', 'index.game.main.menu.unlockSkins.share', 'navigationStart', 'https://wormate.io/images/confetti-valday2025.png', 'div_speed', '..1\x20..', 'coins_125000', 'killNamePos', '#kill_msg', '/get_store.phpitem=Galaxy-Star.png', '#FFF', 'loading\x20advertisement', '\x22\x20style=\x22color:\x20', 'd_2', 'Servidor\x20', 'monitor-element', 'wormate.io', 'readAsText', 'trace', 'mozRequestFullScreen', 'getRegistrations', 'SRV\x20WFT', '</a></div><div\x20class=\x22toaster-consent-close\x22>', 'Error\x20loading\x20banned\x20words:', 'ÙƒÙ„Ø¨', 'Your\x20account\x20has\x20been\x20locked.', 'fillRect', 'open', '#sector_display_mode', 'Api_listServer', '<input\x20type=\x22hidden\x22\x20id=\x22port_name\x22\x20value=\x22\x22>', '#mm-skin-prev', 'dsg', '\x20ha\x20muerto.', 'readyState', 'currentTime', '</div><div\x20class=\x22toaster-levelup-text\x22>', 'code', '/images/cors-proxy.phpimg=cursors/9.png', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 't_wft_', 'connected', 'portionDict', 'hatCyclingInitialized', '#FF0000', '.favorites-popup', '#wear-view-prev', 'sectorSystem', 'dispose', '\x20copied!\x27));\x22>Copy</button><button\x20id=\x22btn_activate\x22\x20style=\x22width:\x20100px;\x20height:\x2035px;\x20border-radius:\x206px;\x20font-size:\x2015px;\x20background-color:\x20#4CAF50;\x20color:\x20white;\x20border:\x20none;\x20cursor:\x20pointer;\x20margin-left:\x2010px;\x22\x20onclick=\x22window.open(\x27https://t.me/wormateactivate/\x27,\x20\x27_blank\x27);\x22>Activate</button><button\x20id=\x22resetScript\x22\x20style=\x22width:\x20120px;\x20height:\x2035px;\x20border-radius:\x206px;\x20font-size:\x2015px;\x20background-color:\x20#2196F3;\x20color:\x20white;\x20border:\x20none;\x20cursor:\x20pointer;\x20margin-left:\x2010px;\x22\x20onclick=\x22resetScript();\x22>Version\x20ðŸ”</button></div>', 'Three-colored\x20Glove\x20Cursor', '/images/confetti-valday2024.png', ';\x20varying\x20vec2\x20', 'testSkinCustom', '\x20dd-image-right', '#background-canvas', '1\x20/\x20span\x203', 'absolute', '#server-link-tooltip', '#joystick_position', 'csg', '_originalFontSize', 'offsetHeight', 'add', 'no-', '/get_store.phpitem=bg_sky__2.png', 'players', '#game-settings-tab', '{0}', 'css', 'zoomSpeed', '9999', '#zoom_speed_slider', 'ccg_0', 'onload', '/images/cors-proxy.phpimg=cursors/3.png', 'isArray', 'laserOptions', 'isFpsVisible', 'call', 'label_hs', 'monster_kill_sound', 'lastRadiusTime', '\x22></div>', 'login', '#adbl-2', 'FoodSize', 'ðŸŸ¢\x20GÃ¶nderildi\x20HS:\x20', 'openSettingsModal', 'fn_o', '.settings-sidebar', '#adbl-continue', ';\x20uniform\x20vec2\x20', '#mm-line-bottom', 'orig', 'beginFill', '.dd-selected-value', 'custom_wear', 'pageY', 'lineColor', 'send', 'get_group.phpimg=Group_customer.png', 'skin-info-text', '/get_store.phpitem=mo_4.png', 's_h', '9998', '#mm-skin-over-button-list', '.dd-selected-text', 'getInt16', 'head', '#markup-footer', 'ccg_1', '110px', 'servers-mexico', 'timmap', '#error-game-connection-view', 'FoodTransparent', 'Canada', '\x20ha\x20enviado\x20un\x20mensaje:\x20', 'click.ddslick', 'globalHatTextureCache', 'playHeadshotSound', '#popup-view', '#loading-progress-text', 'unregister', 'div_background', '/login', 'Singapore', 'index.game.antiadblocker.msg2', 'I18N_LANG', 'div_sound', '*vec3(', 'top', '#wftiq', '.dd-option-text', 'ARENA', 'div_sm', 'imagesrc', '#skin-description-text', 'preroll', '/pub/wuid/', '.description-text', 'pwrFlex', 'clearTexts', 'addAttribute', 'You\x20don\x27t\x20have\x20any\x20favorite\x20hats\x20yet.', 'server_url', 'sector_system_toggle', ',\x201.0)).xy,\x200.0,\x201.0);\x20}', 'PIXI', '#adbl-continue\x20span', 'auth2', 'pk5', 'https://wormx.store/images/arkaplan/bg2.jpg', 'addTest', 'pk3', '100%', 'TextureCache', 'Germany', 'wftsw', 'filter', 'count', 'FPS:\x20', '#adbl-4', 'show', 'not', 'resetScript', ':selected', 'div_killmsg', 'startMonitoring', '0xFFFFFF', 'cloneNode', 'closeSettingsModal', '</div></div>', '.reset-btn', 'trigger', '#sector_line_opacity_value', '999', '#toaster-stack', 'bg_sky__6.png', 'port_id_s', 'values', 'object', 'removeChildren', 'handleNicknameChange', '#delete-account-view', 'Error\x20saving\x20wft\x20settings:', '#monster_kill_selector', 'anchor', '/get_store.phpitem=open_w.png', '#wear-tint-chooser', '270px', 'currentDisplayMode', 'replace', 'England', '46px', 'zigzag_selector', '<div\x20class=\x22dd-select\x22><input\x20class=\x22dd-selected-value\x22\x20id=\x22backgroundArena-value\x22\x20type=\x22hidden\x22\x20/><a\x20class=\x22dd-selected\x22></a><span\x20class=\x22dd-pointer\x20dd-pointer-down\x22></span></div>', 'pause', 'decoder', 'indexOf', '&eyesId=', 'setItem', '/images/skins/', 'removeItem', 'keyup', 'crossorigin', 'isFinite', 'onprogress', '&hatId=', 'querySelector', 'wormworld', 'playerDeath', 'glassesId', 'Turkey', 'outerWidth', 'class', 'blendMode', 'playerDisconnect', 'clientY', '<div\x20class=\x27favorites-popup\x27\x20style=\x27display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1e1e2f;border:1px\x20solid\x20#333345;border-radius:8px;padding:0;width:450px;max-height:400px;overflow:hidden;z-index:1000;box-shadow:0\x204px\x208px\x20rgba(0,0,0,0.5);color:white;\x27><div\x20style=\x27padding:15px\x2020px;background-color:#252538;border-bottom:1px\x20solid\x20#333345;position:relative;display:flex;justify-content:space-between;align-items:center;\x27><button\x20class=\x27close-favorites\x27\x20style=\x27position:absolute;top:8px;left:10px;font-size:22px;background:none;border:none;color:#aaa;cursor:pointer;padding:0\x205px;line-height:1;font-weight:bold;\x27>&times;</button><h3\x20style=\x27margin:0\x200\x200\x205px;font-size:18px;color:white;padding-left:15px;\x27>Favorite</h3><button\x20class=\x27clear-all-favorites\x27\x20style=\x27padding:4px\x208px;background-color:#f44336;color:white;border:none;border-radius:4px;cursor:pointer;font-size:12px;\x27>Clear\x20All</button></div><div\x20class=\x27favorites-content\x27\x20style=\x27padding:15px\x2020px;overflow-y:auto;max-height:330px;\x27><div\x20class=\x27favorites-grid\x27\x20style=\x27display:grid;grid-template-columns:1fr\x201fr;gap:15px;padding:0;margin:0;\x27></div></div></div>', 'get', 'overflow', 'baseTexture', 'position', '<div\x20class=\x22idwormate\x22><input\x20type=\x22text\x22\x20value=\x22', 'symbol', 'precision\x20highp\x20float;\x20varying\x20vec2\x20', 'logout', 'delete', 'after', '861926850619051', 'Kill\x20and\x20Headshot\x20stats\x20will\x20be\x20removed?', '#mm-player-exp-val', 'getFloat32', '#adbl-3', 'options', 'mouthId', 'size', 'Crystalblue\x202', '.dd-option', 'auto', 'removeChild', 'hidden', 'green-dot', 'skinUnknown', '#leaders-button-kills', '_end', 'defer', 'showFavoritesDialog', 'opera', '\x20.online)', 'toggle', 'skinGroupArrayDict', 'Saved\x20sector\x20system\x20state:', 'constructor', 'AIP_REMOVE', '#headshot_msg', 'shown', 'blanco', '#div_customer', 'script', '/images/cors-proxy.phpimg=cursors/5.png', '#leaders-view', '\x20\x20\x20\x20<button\x20id=\x22op_wft\x22\x20class=\x22op_wft\x22>', 'loading', '),\x20default', '#addflag', '#popup-menu-back', '#popup-delete-account', '..4\x20..', 'fillText', 'No\x20conectado,\x20esperando\x20a\x20que\x20se\x20restablezca\x20la\x20conexiÃ³n...', '#loa831pibur0w4gv', '.ddslick', '[By\x20YÄ±Ldo\x20OWNER]', 'Background\x20change\x20error:', 'currentUser', 'en_US', 'addClass', 'setSelectionRange', 'CLOSING', '\x20<input\x20class=\x22dd-option-value\x22\x20type=\x22hidden\x22\x20value=\x22', '_tick', 'config', 'drawQuarters', 'regular', 'click', '3.3.1', 'zigzag', '#store-go-skins-button', '#custom-messages-container', 'substring', ',\x20Kill:\x20', 'offset', '/start?gameMode=', '1px\x205px', 'd_1', 's_n', 'index.game.popup.menu.wear.tab', 'Platen\x20âš¡', '#toaster-view', 'Error\x20loading\x20sector\x20system\x20settings:', '&glassesId=', 'fileSize', 'startsWith', 'keydown', 'empty', 'setAttribute', 'opacity', 'https://wormx.store/images/arkaplan/bg1.jpg', 'img_o_3', 'padStart', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22background-item\x20', '.dd-selected', 'sectors', '#mm-advice-cont', 'div_top', '.server-number', '\x22\x20style=\x22max-width:\x20220px;\x22\x20type=\x22text\x22\x20id=\x22id_customer\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btn_copy\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22tooltiptext\x22\x20id=\x22myTooltip\x22>id\x20copy</span>Copy\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>\x0a\x20\x20\x20\x20\x0a<!--\x20Headshot\x20Message\x20Display\x20-->\x0a<div\x20id=\x22headshot-message\x22></div>\x0a', 'servers-singapur', '\x22\x20/>', 'coins_7000', '/sdk.js', '#joystick_pxy', 'clip', 'index.game.antiadblocker.msg4', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#333;\x0a\x20\x20\x20\x20', 'Stopping\x20CPU\x20monitoring\x20completely', '3bLXaAV', 'translate(-50%,\x20-50%)\x20scale(', '#wftsound', 'map', 'monsterKillSound', '#1e1e2f', '#wear-view', '.favorites-content', 'random', 'rgba(0,0,0,0.9)', 'scrollTo', '#btn_clear_file', ';\x20vec2\x20uv\x20=\x20', 'load', 'charCodeAt', '6px', 'Server\x20', 'banner', 'utils', 'index.game.popup.menu.coins.tab', 'webWidget:\x20on', 'opacity\x200.3s\x20ease-in-out', 'uri', 'max', 'initDrawing', '#popup-menu-coins-box', '#portion_size_value', 'caches', 'abilityDict', 'ready', 'onwheel', 'dropShadow', 'Container', 'application/json', 'cpuDisplay', '&times;', 'mouthDict', '#fff', 'padEnd', '#relojHelp', '#popup-logout-container', 'skinId', '#joystick_color', 'addEventListener', 'WormWorld\x20Servers', 'price', 'wftObjects', 'consented', 'get_group.phpimg=Group_show_gif.png', 'mo2', 'fadeOut', 'ADD', 'https://i.imgur.com/hfx52LI.png', 'Stopping\x20FPS\x20monitoring\x20completely', '#chat-history', 'tooltip', 'feed', 'div', '/get_store.phpitem=bg_sky_10.png', 'bg_sky__5.png', 'loadSettings', 'revokeObjectURL', '#modal_wft', 'Error\x20loading\x20laser\x20options:', '#252538', 'day', 'pk0', 'teamDict', 'hsKillUpdate', 'xfbml', '/pub/wuid/guest/start?gameMode=', 'â˜°\x20Favorites', 'c_2', 'flag\x20', 'bg_sky_7.png', '16px', '.background-item', 'webWidget', 'catch', 'FoodShadow', 'dropShadowColor', '18px', 'eie', 'Red\x20Lipstick\x20Cursor', 'sortableChildren', 'transparent', 'Name\x20Error*', 'byLevel', 'Arial', '#mm-settings', 'toString', 'bg_sky_12.png', '22007052GlKtoD', '/images/def-look.png', 'Stardust', 'playerX', 'glassesVariantArray', 'container', 'openHatFavorites', '#reset_laser_settings', '/images/server-flags/tur.png', 'hatInfoText', 'sort', 'pageX', '\x22\x20id=\x22btnRePlay\x22>', 'mapText', '/get_store.phpitem=bg_sky__5.png', '#modal_backdrop', 'skinData', '#custom-tooltip', '#saveGame', 'headShots', 'search', '#f00', 'Ø·ÙŠØ¨Ø©', '#store-view-next', 'img_o_4', ':nth-child(', 'img_i_2', 'Modernizr', 'id_user', 'regionDict', '#volume_value', 'favorites-dialog', '#store-buy-coins_16000', 'VlZBPQ==', 'performance-monitor-style', 'onerror', '#game-view', '#sector_settings_panel', '322676AdJeaT', 'block', '/images/cors-proxy.phpimg=cursors/11.png', 'appendTo', 'util.time.sec', '/get_store.phpitem=z_i.png', '&gh=', 'startCpuMonitoring', 'className', 'loaded', 'def_skin_base', '#highscore-table', 'data-region-name', '\x22\x20alt=\x22Wormate.io\x20logo\x22/><div\x20class=\x22toaster-consent-accepted-container\x22><span\x20class=\x22toaster-consent-accepted-text\x22>', 'angle', 'value1_hs', 'c_3', 'render', 'Turquoise\x20Mouse\x20Pointer', 'expires=', '_pulseFunctionInstalled', '.servers-peru,\x20.servers-mexico,\x20.servers-eeuu,\x20.servers-canada,\x20.servers-germania,\x20.servers-francia,\x20.servers-singapur,\x20.servers-japon,\x20.servers-australia,\x20.servers-granbretana', 'player', 'Thailand', 'teamwft', 'img_1', 'Sprite', 'timing', 'resolution', 'server-score', 'value2_kill', 'food_shadow', '4193652AWwcul', 'siblings', 'aqnvgcpz05orkobh', 'Ã¢Å¡\x20Ã¯Â¸\u008f\x20Advertencia:\x20No\x20se\x20encontrÃƒÂ³\x20el\x20elemento\x20\x27teamNickname\x27.', 'not_connect', 'servers-eeuu', '20px\x200', 'messages-disabled', 'hatVariantArray', '#myTooltip', 'touchend', 'rgba(0,\x200,\x200,\x200.7)', '30%', 'textDict', '/images/bg-pattern-pow2-ARENA.png', '/images/cors-proxy.phpimg=flg/sg.png', '<div\x20class=\x22player-tooltip\x22></div>', '<br/>', '\x20does\x20not\x20exists.', 'ctrl', '#final-share-fb', 'hasOwnProperty', 'custom', '#final-caption', '#main-menu-view', 'settings-show-names-switch', '5px\x2010px', 'spin_fast', 'value', 'data-region-flag', 'year', 'Favorite\x20Hats', 'btnRePlay', '#e74a94', 'adplayer', 'cpuUsage', 'Ø§Ù…Ùƒ', 'createElement', 'SKIN', 'WFT\x20Game\x20modifications\x20applied\x20successfully!', 'wear', 'getContext', '#markup-wrap', 'Rose\x20Branch\x20Cursor', 'teamNickname', '.player-tooltip', '<div>', 'removeHatButtons', '.dd-options', '/get_store.phpitem=mo_2.png', 'WFT_', 'sel_sc', 'offsetWidth', 'account_type', 'headshot', 'btnFullScreen', 'Ø¬Ø­Ø´', 'https://resources.wormate.io', 'urlRequest:\x20', '/images/cors-proxy.phpimg=cursors/25.png', '#volume_slider', '11px', '/images/cors-proxy.phpimg=cursors/18.png', 'not_empty', 'lineWidth', 'toggleMode', 'Restoring\x20state\x20from\x20UI\x20initialization', 'currentFavSkinIndex', 'server-region', '#sector_line_color', '---', 'c_5', 'files', 'substr', 'Ø®Ø·Ø£\x20ÙÙŠ\x20ØªØ­Ø¯ÙŠØ«\x20Ø¹Ø±Ø¶\x20Ø§Ø³Ù…\x20Ø§Ù„Ø³ÙŠØ±ÙØ±:', 'favorites-grid', '-moz-transform', 'source', '0\x205px', '#restricted-view', 'merge', 'mousemove', ');\x20vec4\x20colorMix=', 'children', '/images/linelogo-valday2024.png', '{2}', '#portion_aura_slider', 'hat-favorites-button', 'select', 'playerUpdate', 'gray', 'sin', 'clearRect', '#performance-monitor-toggle', 'some', 'base', '#portion_aura_value', '#joystick_pxy_value', 'right', 'bg_sky_11.png', '#mm-player-info', '#mm-loading-progress-text', 'KILL', 'initGraphics', 'input', '15px\x2020px', 'checked', 'https://i.imgur.com/lVsu2MC.png', 'AIP_COMPLETE', '#backgroundArena', 'bg_sky_9.png', 'which', 'index.game.result.place.i', '/images/wear-ability.png', 'buttonMode', '<button>', 'value1_kill', 'ðŸ§ \x20Player\x20state:', 'bg_sky__1.png', '#skin-info-text', 'https://i.imgur.com/LFiCido.png', 'joystick_color', 'PortionTransparent', 's_kill', 'SaveGameXT', 'getAuthResponse', 'https://wormx.store/2025/check/check3.php', 'pulseEnabled', '#mobile-tab-item', 'init', 'Player', '.toaster-consent-close', 'textShadow', '#zigzag_selector', '2px\x202px\x204px\x20rgba(0,\x200,\x200,\x200.7)', '#00a8ff', '#sector_bg_opacity_value', 'message', '#store-buy-coins_3250', '/get_store.phpitem=', 'oco', 'coins', 'pxy', '0lt2', 'unbind', 'applySettings', '#sound_effect_selector', '/images/cors-proxy.phpimg=flg/jp.png', '#mm-player-level', 'radian', '/images/cors-proxy.phpimg=clock/clock.png', 'Headshot', 'Cambodia', 'fromCharCode', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.performance-monitor-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x209999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20Arial,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20user-select:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.monitor-element\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,\x200,\x200,\x200.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-shadow:\x201px\x201px\x202px\x20rgba(0,0,0,0.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'favorites-content', 'million', 'isSignedIn', 'revision', '/images/cors-proxy.phpimg=flg/us.png', 'volume', '18px\x20Arial', 'background', '0x0', 'Spray\x20Can\x20Cursor', '_lastPulseTime', '#game-cont,\x20#game-canvas,\x20body', 'save', 'USA', '#settings-sfx-enabled-switch', 'tint', '#port_name_s', 'img', 'parse', 'lineAlpha', 'item', '#settings-show-names-switch', 'setupKeyboardEvents', 'soundEnabled', 'json', '#sector_bg_opacity', 'mouthUnknown', '\x0a<div\x20class=\x22title-wormate-server\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ðŸ—ºï¸\x20ALL\x20SERVERS\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22description-text-hiep\x22>\x0a\x20\x0a\x20\x20\x20\x20<div\x20style=\x22position:sticky;\x20top:0;\x20z-index:100;\x20background:#242424;\x22>\x0a\x20\x20\x20\x20<BR>\x0a\x20\x20\x20\x20<ul\x20style=\x22margin-top:5px\x22\x20class=\x22ui-tabs-nav\x22>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive0\x20ui-tab-active\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20br\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/server-flags/tur.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive1\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20mx\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/mx.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive2\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20us\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/us.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive3\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20ca\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/ca.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive4\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20de\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/de.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive5\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20fr\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/fr.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive6\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20sg\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/sg.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive7\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20jp\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/jp.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive8\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20au\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/au.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive9\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20gb\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/gb.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20</ul>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<!--\x20Ø²Ø±\x20Ø§Ù„ØªØ¨Ø¯ÙŠÙ„\x20Ø£Ø³ÙÙ„\x20Ø§Ù„Ø£Ø¹Ù„Ø§Ù…\x20Ù…Ø¨Ø§Ø´Ø±Ø©\x20-->\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20margin:\x202px\x200;\x20padding:\x202px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22sort-toggle\x22\x20style=\x22font-size:\x2010px;\x20padding:\x201px\x206px;\x20background-color:\x20#333;\x20color:\x20#ddd;\x20border:\x201px\x20solid\x20#666;\x20border-radius:\x203px;\x20cursor:\x20pointer;\x20outline:\x20none;\x22>Timmap\x20Servers</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22gachngang\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22server-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-name\x22>SERVER</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-region\x22>REGION</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-status\x22>STATUS</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-score\x22>SCORE</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22gachngang\x22></div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20<!--\x20Ø¥Ø¶Ø§ÙØ©\x20ØµÙˆØ±Ø©\x20Ø§Ù„Ø®Ù„ÙÙŠØ©\x20Ù‡Ù†Ø§\x20Ù‚Ø¨Ù„\x20Ø­Ø§ÙˆÙŠØ©\x20Ø§Ù„Ø³ÙŠØ±ÙØ±Ø§Øª\x20-->\x0a\x20\x20\x20\x20<div\x20class=\x22background-image-container\x22>\x0a\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://wormx.store/images/cors-proxy.phpimg=Background/serverbg.jpg\x22\x20class=\x22background-image\x22>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20<div\x20class=\x22servers-container\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-peru\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-mexico\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-eeuu\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-canada\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-germania\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-francia\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-singapur\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-japon\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-australia\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-granbretana\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>\x0a\x20\x20', 'https://wormate.io/images/og-share-img-new.jpg', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'client_id', '50%', 'lastTime', '#mm-skin-canv', 'updateDisplays', ':</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>', 'backgroundArena', 'portion', 'Error\x20loading\x20wft\x20settings:', 'magnet_ability', 'background-color', '/images/cors-proxy.phpimg=cursors/12.png', '#eee', '&mouthId=', '4137600xNepLE', 'nickname', 'customer', 'index', 'fontStyle', 'index.game.popup.menu.login.tab', '.\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.', '{1}', '.fav-buttons-container', 'done', '/get_store.phpitem=bg_sky__1.png', 'documentElement', '#store-locked-bar', '#op_wft', '</span><span>', 'gdprConsent', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>', 'ccc', '.ui-tabs-nav\x20.ui-tab', 'transform', '<a\x20class=\x22mm-skin-over-button\x22\x20id=\x22mm-skin-over-fb\x22\x20target=\x22_blank\x22\x20href=\x22https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=', 'isCpuVisible', 's_l', 'hskill', '#mm-line-top', 'precision\x20mediump\x20float;\x20attribute\x20vec2\x20', 'data-hat-id', '0x2', '#markup-header', 'round', 'img_p_3', 'pow', 'wrapMode', 'WFT', 'Cloudscape', '/get_store.phpitem=close_w.png', 'ui-tab-active', '#mm-player-exp-bar', 'stop', 'mobile', 'white', 'file', '#spin_fast_slider', '\x22\x20>', 'startAllMonitoring', '#fff009', 'total', 'data-server-number', 'play', '#final-continue', 'disableFlex', 'zoom_speed', 'defineProperty', 'pk1', 'setInt8', '</span><span><img\x20src=\x22', '#port_id_s'];
    _0x584d = function() {
        return _0x25120d;
    };
    return _0x584d();
}
let vO4 = {
        'x': null,
        'y': null
    },
    v27 = null,
    v28 = null;
const vF3 = function() {
    var _0x59ec16 = _0x1543e5;
    if (!window[_0x59ec16(0x41f)] || typeof window[_0x59ec16(0x41f)][_0x59ec16(0x69e)] === 'undefined' || typeof window[_0x59ec16(0x41f)]['playerY'] === _0x59ec16(0x328)) return;
    let _0x56ffb5 = _0x59ec16(0x3df);
    if (vO4['x'] !== null) {
        const _0x4de743 = Math[_0x59ec16(0x36f)](Math['pow'](window['coords']['playerX'] - vO4['x'], 0x2) + Math[_0x59ec16(0x7c7)](window['coords'][_0x59ec16(0x1d2)] - vO4['y'], 0x2));
        _0x4de743 > 0x64 && (vO3[_0x56ffb5] && (vO3['pointsContainer'] && vO3[_0x59ec16(0x279)]['children']['includes'](vO3[_0x56ffb5]) && vO3[_0x59ec16(0x279)][_0x59ec16(0x5e8)](vO3[_0x56ffb5]), vO3[_0x56ffb5] = null), v27 && (clearInterval(v27), v27 = null), v28 && (clearTimeout(v28), v28 = null));
    }
    vO4['x'] = window[_0x59ec16(0x41f)][_0x59ec16(0x69e)], vO4['y'] = window[_0x59ec16(0x41f)][_0x59ec16(0x1d2)];
    if (!vO3[_0x56ffb5]) {
        vO3[_0x56ffb5] = new PIXI[(_0x59ec16(0x20e))]('X', vO3[_0x59ec16(0x7ac)][_0x59ec16(0x5f9)]), vO3[_0x56ffb5][_0x59ec16(0x4e3)] = 0x2, vO3[_0x56ffb5]['alpha'] = 0.9, vO3[_0x56ffb5][_0x59ec16(0x5b2)][_0x59ec16(0x448)](0.5, 0.5);
        vO3[_0x59ec16(0x279)] && (vO3[_0x59ec16(0x279)][_0x59ec16(0x693)] = !0x0, vO3[_0x59ec16(0x279)][_0x59ec16(0x4e3)] = 0x2);
        if (!v27) {
            let _0x4e3bf9 = !0x0;
            v27 = setInterval(() => {
                var _0x4976a1 = _0x59ec16;
                vO3[_0x56ffb5] ? (_0x4e3bf9 = !_0x4e3bf9, vO3[_0x56ffb5][_0x4976a1(0x287)] = _0x4e3bf9) : (clearInterval(v27), v27 = null);
            }, 0x1f4);
        }!v28 && (v28 = setTimeout(() => {
            var _0x334f92 = _0x59ec16;
            vO3[_0x56ffb5] && (vO3[_0x334f92(0x279)] && vO3[_0x334f92(0x279)]['children']['includes'](vO3[_0x56ffb5]) && vO3[_0x334f92(0x279)][_0x334f92(0x5e8)](vO3[_0x56ffb5]), vO3[_0x56ffb5] = null), v27 && (clearInterval(v27), v27 = null), v28 = null;
        }, 0x4e20));
    }
    vO3[_0x56ffb5] && (vO3[_0x56ffb5]['x'] = window[_0x59ec16(0x41f)][_0x59ec16(0x69e)], vO3[_0x56ffb5]['y'] = window['coords'][_0x59ec16(0x1d2)], vO3[_0x59ec16(0x279)] && !vO3[_0x59ec16(0x279)][_0x59ec16(0x734)][_0x59ec16(0x461)](vO3[_0x56ffb5]) && vO3[_0x59ec16(0x279)][_0x59ec16(0x371)](vO3[_0x56ffb5])), window[_0x59ec16(0x2de)] && ooo['Xg'] && ooo['Xg']['Kf'] && ooo['Xg']['Kf']['Wg'] && ooo['Xg']['Kf']['Wg']['Ah'] && ooo['Xg']['Kf']['Wg']['Ah']['Sh'] && (ooo['Xg']['Kf']['Wg']['Ah']['Sh'][_0x59ec16(0x4e3)] = 0x270f, ooo['Xg']['Kf']['Wg']['Ah'][_0x59ec16(0x693)] !== !0x0 && (ooo['Xg']['Kf']['Wg']['Ah'][_0x59ec16(0x693)] = !0x0), ooo['Xg']['Kf']['Wg'][_0x59ec16(0x693)] !== !0x0 && (ooo['Xg']['Kf']['Wg']['sortableChildren'] = !0x0));
};

function f3(_0x75c76a) {
    var _0x39e67f = _0x1543e5;
    return (f3 = typeof Symbol == 'function' && typeof Symbol['iterator'] == _0x39e67f(0x5d8) ? function(_0x747ed0) {
        return typeof _0x747ed0;
    } : function(_0x3be2f3) {
        var _0x4d2161 = _0x39e67f;
        return _0x3be2f3 && typeof Symbol == _0x4d2161(0x387) && _0x3be2f3[_0x4d2161(0x5f5)] === Symbol && _0x3be2f3 !== Symbol[_0x4d2161(0x869)] ? _0x4d2161(0x5d8) : typeof _0x3be2f3;
    })(_0x75c76a);
}(function() {
    var _0x1219f1 = _0x1543e5,
        _0x158a86 = {},
        _0x2171ac = {},
        _0x239c2a = {},
        _0x39b888 = {};
    _0x239c2a['a'] = function(_0x1f14a8) {
        var _0x1d185b = _0x563d,
            _0x367e38 = new String(),
            _0x409206 = parseInt(_0x1f14a8[_0x1d185b(0x61a)](0x0, 0x2), 0x10);
        for (var _0xa6874f = 0x2; _0xa6874f < _0x1f14a8[_0x1d185b(0x883)]; _0xa6874f += 0x2) {
            var _0xb2427 = parseInt(_0x1f14a8[_0x1d185b(0x61a)](_0xa6874f, _0xa6874f + 0x2), 0x10);
            _0x367e38 += String[_0x1d185b(0x77a)](_0xb2427 ^ (_0x409206 = 0xed1 + _0x409206 * 0x11a1 & 0xff));
        };
        return _0x367e38;
    }, _0x239c2a['b'] = function(_0x30c78f) {
        return Function('return\x20' + _0x30c78f + ';\x20')();
    }, _0x158a86['c'] = _0x239c2a['b'](_0x1219f1(0x4f0)), _0x158a86['d'] = _0x158a86['c'][_0x1219f1(0x87c)], _0x239c2a['e'] = function() {
        var _0x2c95b0 = _0x1219f1;
        return _0x158a86['c'][_0x2c95b0(0x835)] || 0x1;
    }, _0x158a86['c'][_0x1219f1(0x66a)](_0x1219f1(0x64c), function() {
        var _0x2b6b48 = _0x1219f1;
        let _0x2cbd14 = {
            'eie': null,
            'joystick': {
                'positionMode': 'L',
                'checked': !0x0,
                'size': 0x5a,
                'mode': _0x2b6b48(0x300),
                'position': {
                    'left': _0x2b6b48(0x566),
                    'bottom': _0x2b6b48(0x566)
                },
                'color': _0x2b6b48(0x423),
                'pxy': 0x6e
            },
            'on': !0x1,
            'vj': null,
            'uj': null,
            'm': null,
            'n': null
        };
        var _0x5b37ef = {
            'id_user': '',
            'nickname': _0x2b6b48(0x7c9),
            'enemyNameHs': _0x2b6b48(0x830),
            'teamCode': '',
            'playerX': 0x0,
            'playerY': 0x0,
            'hs': 0x0,
            'kill': 0x0,
            'message': '',
            'teamColor': localStorage[_0x2b6b48(0x1b3)]('teamColor') || '0xffffff',
            'wssServer': ''
        };
        let _0x3c448a = 0x0;
        const _0x101c40 = 0x3e8;

        function _0x11d55c(_0x57c0f3) {
            var _0x573cc9 = _0x2b6b48;
            const _0x54c71f = Date[_0x573cc9(0x458)]();
            _0x54c71f - _0x3c448a > _0x101c40 && (debugLog(_0x57c0f3), _0x3c448a = _0x54c71f);
        }
        let _0x23cd07;
        const _0x30df82 = {
            'YT': new Map()
        };
        let _0x482bd6 = !0x1;
        const _0x34798f = 0x1388;
        window['addEventListener'](_0x2b6b48(0x417), () => {
            var _0x4480ff = _0x2b6b48;
            _0x23cd07 && _0x23cd07[_0x4480ff(0x518)] === WebSocket[_0x4480ff(0x4a0)] && _0x23cd07['close']();
        });

        function _0x59b221(_0x99936a) {
            var _0x360bae = _0x2b6b48;
            _0x99936a[_0x360bae(0x6b7)] === _0x360bae(0x30d) && (createServerMessage(_0x360bae(0x609), _0x99936a[_0x360bae(0x76a)]), debugLog(_0x360bae(0x504) + _0x99936a['id_user'] + _0x360bae(0x56c) + _0x99936a[_0x360bae(0x76a)]));
            if (_0x99936a['wssServer'] !== _0x5b37ef['wssServer']) return;
            switch (_0x99936a[_0x360bae(0x2a1)]) {
                case _0x360bae(0x36c):
                    _0x1f8ab0(_0x99936a['YT']);
                    break;
                case _0x360bae(0x73a):
                    _0x5b720d(_0x99936a);
                    break;
                case _0x360bae(0x683):
                    _0x161ab9(_0x99936a);
                    break;
                case _0x360bae(0x5ca):
                    _0x2f82e0(_0x99936a);
                    break;
                case _0x360bae(0x5d0):
                    _0x330c8d(_0x99936a['id']);
                    break;
                default:
                    debugLog('Mensaje\x20desconocido:', _0x99936a);
            }
        }

        function _0x250c43() {
            var _0x263c18 = _0x2b6b48;
            if (!_0x482bd6) {
                debugLog(_0x263c18(0x606));
                return;
            }
            const _0x6886d5 = $('#chat-input')[_0x263c18(0x223)]()[_0x263c18(0x1af)]();
            if (_0x6886d5 === '') return;
            const _0x57ad6d = _0x5b37ef[_0x263c18(0x7a9)][_0x263c18(0x61a)](0x0, 0x10),
                _0x38727b = getUserData(_0x5b37ef['id_user']),
                _0x1724e5 = {
                    'type': 'chatMessage',
                    'id_user': _0x5b37ef[_0x263c18(0x6b7)],
                    'nickname': _0x57ad6d,
                    'message': _0x6886d5,
                    'wssServer': _0x5b37ef[_0x263c18(0x4d5)],
                    'color': _0x38727b ? _0x38727b['color'] : _0x263c18(0x351),
                    'image': _0x38727b ? _0x38727b['image'] : _0x263c18(0x317)
                };
            _0x23cd07['send'](JSON[_0x263c18(0x32a)](_0x1724e5)), _0x496aeb(_0x57ad6d, _0x6886d5, _0x5b37ef[_0x263c18(0x6b7)], _0x1724e5['color'], _0x1724e5[_0x263c18(0x227)], !0x0), $(_0x263c18(0x4a7))[_0x263c18(0x223)]('');
        }

        function _0x496aeb(_0x58bcf6, _0x490760, _0x13f842, _0x4d7e4f, _0x89d9ef, _0x31e107 = !0x1) {
            var _0x5957d2 = _0x2b6b48;
            const _0x3c48ea = _0x89d9ef ? _0x5957d2(0x42e) + _0x89d9ef + _0x5957d2(0x7f7) : '',
                _0x355eb2 = _0x31e107 ? 'lightblue' : 'white',
                _0x2d7eba = _0x5957d2(0x4b0) + (_0x4d7e4f || _0x5957d2(0x351)) + _0x5957d2(0x24a) + _0x3c48ea + _0x5957d2(0x46c) + _0x13f842 + _0x5957d2(0x502) + _0x355eb2 + '\x22>' + _0x58bcf6 + _0x5957d2(0x79f) + _0x490760 + _0x5957d2(0x208);
            $(_0x5957d2(0x675))[_0x5957d2(0x4e4)](_0x2d7eba)[_0x5957d2(0x338)]($(_0x5957d2(0x675))[0x0]['scrollHeight']);
        }

        function _0x1f8ab0(_0x5522aa) {
            var _0x123ceb = _0x2b6b48;
            _0x5522aa['forEach'](_0x1db579 => _0x30df82[_0x123ceb(0x538)][_0x123ceb(0x448)](_0x1db579[_0x123ceb(0x6b7)], _0x1db579)), debugLog('Estado\x20inicial\x20recibido:', _0x5522aa);
        }

        function _0x5b720d(_0x55d747) {
            var _0x2dc67a = _0x2b6b48;
            _0x30df82['YT'][_0x2dc67a(0x448)](_0x55d747['id_user'], {
                ..._0x55d747
            }), updateTop8Hs(), _0x55d747[_0x2dc67a(0x36d)] === _0x5b37ef['teamCode'] && (createTeamUbication(_0x55d747['teamCode'], _0x55d747[_0x2dc67a(0x30e)]), createTeamMessage(_0x55d747[_0x2dc67a(0x36d)], _0x55d747[_0x2dc67a(0x7a9)], _0x55d747[_0x2dc67a(0x76a)]));
        }

        function _0x161ab9(_0x5d21e6) {
            var _0x2ba2e3 = _0x2b6b48;
            debugLog(_0x2ba2e3(0x201) + _0x5d21e6[_0x2ba2e3(0x7a9)]);
            const _0x2fc267 = _0x30df82['YT']['get'](_0x5d21e6[_0x2ba2e3(0x6b7)]);
            _0x2fc267 ? (_0x2fc267[_0x2ba2e3(0x7bf)]['hs'] += _0x5d21e6[_0x2ba2e3(0x7bf)]['hs'], _0x2fc267['hskill']['kill'] += _0x5d21e6[_0x2ba2e3(0x7bf)][_0x2ba2e3(0x48d)]) : _0x30df82['YT'][_0x2ba2e3(0x448)](_0x5d21e6[_0x2ba2e3(0x6b7)], {
                ..._0x5d21e6,
                'hskill': {
                    ..._0x5d21e6['hskill']
                },
                'position': {
                    'x': 0x0,
                    'y': 0x0
                }
            });
            const _0x1c2b89 = _0x30df82['YT'][_0x2ba2e3(0x5d3)](_0x5d21e6[_0x2ba2e3(0x6b7)]);
            debugLog(_0x2ba2e3(0x756), _0x1c2b89), updateTop8Hs();
        }

        function _0x2f82e0(_0x264c1f) {
            var _0x110992 = _0x2b6b48;
            _0x30df82['YT'][_0x110992(0x5db)](_0x264c1f[_0x110992(0x6b7)]), debugLog('El\x20jugador\x20' + _0x264c1f[_0x110992(0x7a9)] + _0x110992(0x517)), updateTop8Hs(), clearTeamUbication();
        }

        function _0x330c8d(_0x2b4ba1) {
            var _0x3117d5 = _0x2b6b48;
            _0x30df82['YT'][_0x3117d5(0x5db)](_0x2b4ba1), debugLog(_0x3117d5(0x22e) + _0x2b4ba1 + _0x3117d5(0x25b));
        }

        function _0x4086ad(_0x1e70b3, _0x1df2ad = {}) {
            var _0x3ed394 = _0x2b6b48;
            if (!_0x482bd6) {
                debugLog(_0x3ed394(0x834));
                return;
            }
            if (_0x1e70b3 === 'playerUpdate' && (!_0x5b37ef[_0x3ed394(0x36d)] || _0x5b37ef['teamCode'] === '')) {
                debugLog(_0x3ed394(0x346));
                return;
            }
            const _0x5b6989 = {
                'type': _0x1e70b3,
                'id_user': _0x5b37ef['id_user'],
                'nickname': _0x5b37ef[_0x3ed394(0x7a9)],
                'enemyNameHs': _0x5b37ef['enemyNameHs'],
                'hskill': {
                    'hs': _0x5b37ef['hs'],
                    'kill': _0x5b37ef['kill']
                },
                'position': {
                    'x': _0x5b37ef[_0x3ed394(0x69e)],
                    'y': _0x5b37ef[_0x3ed394(0x1d2)]
                },
                'message': _0x5b37ef[_0x3ed394(0x76a)],
                'teamCode': _0x5b37ef[_0x3ed394(0x36d)],
                'teamColor': _0x5b37ef[_0x3ed394(0x30e)],
                'wssServer': _0x5b37ef[_0x3ed394(0x4d5)],
                ..._0x1df2ad
            };
            debugLog('ðŸ“¤\x20Veri\x20gÃ¶nderiliyor:', _0x5b6989), _0x23cd07[_0x3ed394(0x55a)](JSON[_0x3ed394(0x32a)](_0x5b6989));
        }
        let _0x31459b = 0x0,
            _0x4e8a4e = [];
        const _0x29d074 = 0x64,
            _0x520c9d = 0xa;

        function _0x2ecaf7() {
            var _0x39794f = _0x2b6b48;
            if (_0x4e8a4e[_0x39794f(0x883)] > 0x0) {
                const _0x34296e = _0x4e8a4e['splice'](0x0, _0x520c9d);
                _0x4086ad(_0x39794f(0x73a), {
                    'batch': _0x34296e
                });
            }
        }
        setInterval(() => {
            _0x2ecaf7();
        }, _0x29d074);

        function _0x58723c(_0x1b3501, _0x53f416) {
            var _0x54d283 = _0x2b6b48;
            const _0x39004c = Date[_0x54d283(0x458)]();
            if (_0x39004c - _0x31459b < 0x64) return;
            _0x31459b = _0x39004c;
            if (!_0x5b37ef[_0x54d283(0x36d)] || _0x5b37ef[_0x54d283(0x36d)] === '') {
                debugLog(_0x54d283(0x22e) + _0x5b37ef['id_user'] + _0x54d283(0x2af));
                return;
            }
            _0x5b37ef[_0x54d283(0x69e)] = _0x1b3501, _0x5b37ef[_0x54d283(0x1d2)] = _0x53f416, _0x4e8a4e['push']({
                'x': _0x1b3501,
                'y': _0x53f416
            }), debugLog(_0x54d283(0x22e) + _0x5b37ef[_0x54d283(0x6b7)] + _0x54d283(0x2d8) + _0x1b3501 + ',\x20' + _0x53f416 + ')');
        }

        function _0x4a70df(_0x1c3f29, _0xd99d97) {
            var _0x498dd2 = _0x2b6b48;
            _0x4086ad(_0x498dd2(0x5ca), {
                'hskill': {
                    'hs': _0x1c3f29,
                    'kill': _0xd99d97
                }
            }), debugLog(_0x498dd2(0x22e) + _0x5b37ef[_0x498dd2(0x6b7)] + '\x20ha\x20muerto.');
        }

        function _0x38f52a(_0x3f2b49, _0x2c62ca) {
            var _0x2e3da9 = _0x2b6b48;
            debugLog('ðŸŸ¡\x20sendHSKillUpdate\x20Ã§aÄŸrÄ±ldÄ±'), _0x4086ad(_0x2e3da9(0x683), {
                'hskill': {
                    'hs': _0x3f2b49,
                    'kill': _0x2c62ca
                }
            }), debugLog(_0x2e3da9(0x54d) + _0x3f2b49 + _0x2e3da9(0x61b) + _0x2c62ca), debugLog('Jugador\x20' + _0x5b37ef[_0x2e3da9(0x6b7)] + _0x2e3da9(0x3e2) + _0x3f2b49 + _0x2e3da9(0x4ec) + _0x2c62ca);
        }
        var _0x1c4d62;
        let _0x1a98d3 = {
                's_l': _0x2b6b48(0x470),
                'fullscreen': null,
                'headshot': 0x0,
                's_headshot': 0x0,
                'mobile': !0x1,
                'mo': 0x1,
                'mo1': {
                    'x': -0x1,
                    'y': -0x1
                },
                'mo2': {
                    'x': -0x1,
                    'y': -0x1
                },
                's_kill': 0x0,
                'kill': 0x0,
                'died': 0x0,
                'saveGame': !0x1,
                'forceUseLocalImages': !0x1,
                'localStorageEnabled': !0x0,
                'pm': {},
                'joystick': _0x2cbd14[_0x2b6b48(0x1c1)],
                'j': null,
                'pk': 0x0,
                'pk0': '',
                'pk1': '',
                'pk2': '',
                'pk3': '',
                'pk4': '',
                'pk5': '',
                'pk6': '',
                'z': 0x1,
                'c_v': 0xde,
                'c_1': 'WFT',
                'c_2': 'TeamWFT',
                'c_3': _0x2b6b48(0x6d9),
                'c_4': 'wormate.io',
                'c_5': _0x2b6b48(0x828),
                'd_1': _0x2b6b48(0x6bc),
                'd_2': _0x2b6b48(0x4d2),
                'd_3': 'ZDI5eWJYVnc=',
                'd_4': 'VjI5eWJXRjBaUzVwYnc9PQ==',
                'd_5': _0x2b6b48(0x285),
                'a': 0x0,
                'b': 0x0,
                'c': 0x0,
                'd': 0x0,
                'e': 0x0,
                'f': '',
                'g': 0x24,
                's_w': !0x1,
                's_n': '',
                'v_z': 0x0,
                'h': !0x1,
                'sn': !0x0,
                's': !0x1,
                'hz': !0x1,
                'fz': !0x0,
                'tt': !0x1,
                'vh': !0x1,
                'vp': !0x1,
                'iq': !0x1,
                'ctrl': !0x1,
                'r1': !0x0,
                'sc': 0x0,
                'wi': 0x0,
                'to': 0xa,
                'sm': 0x14,
                'pi': '',
                'pn': '',
                'se': {
                    'a': [],
                    'b': [],
                    'c': [],
                    'd': [],
                    'e': [],
                    'f': [],
                    'g': [],
                    'h': [],
                    'i': [],
                    'j': [],
                    'k': []
                },
                'st': !0x1,
                'hh': 0x0,
                'sh': [],
                'ws': [],
                'we': [],
                'wm': [],
                'wg': [],
                'wh': [],
                'sg': [],
                'gg': null,
                'ig': -0x1,
                'so': 0x1,
                're': !0x1,
                'dg': null
            },
            _0x458b72 = localStorage['getItem'](_0x2b6b48(0x1e2));
        if (_0x458b72 && _0x458b72 !== 'null') {
            let _0x50c605 = JSON[_0x2b6b48(0x78e)](_0x458b72);
            for (let _0x31e3de in _0x50c605) {
                _0x1a98d3[_0x31e3de] = _0x50c605[_0x31e3de];
            }
        };
        !_0x1a98d3[_0x2b6b48(0x244)] && (_0x1a98d3[_0x2b6b48(0x244)] = [], localStorage[_0x2b6b48(0x5c0)](_0x2b6b48(0x1e2), JSON[_0x2b6b48(0x32a)](_0x1a98d3)));
        _0x1a98d3['currentFavSkinIndex'] === undefined && (_0x1a98d3[_0x2b6b48(0x724)] = 0x0, localStorage[_0x2b6b48(0x5c0)](_0x2b6b48(0x1e2), JSON[_0x2b6b48(0x32a)](_0x1a98d3)));
        !_0x1a98d3['selectedHats'] && (_0x1a98d3[_0x2b6b48(0x45c)] = [], localStorage['setItem']('SaveGamewft', JSON['stringify'](_0x1a98d3)));
        _0x1a98d3[_0x2b6b48(0x327)] === undefined && (_0x1a98d3[_0x2b6b48(0x327)] = 0x0, localStorage['setItem']('SaveGamewft', JSON[_0x2b6b48(0x32a)](_0x1a98d3)));
        !window['globalHatTextureCache'] && (window['globalHatTextureCache'] = {});
        try {
            if (localStorage[_0x2b6b48(0x75d)]) {
                const _0x56cfcb = JSON[_0x2b6b48(0x78e)](localStorage[_0x2b6b48(0x75d)]);
                for (const _0x5216cf in _0x56cfcb) {
                    wftObjects['hasOwnProperty'](_0x5216cf) && (wftObjects[_0x5216cf] = _0x56cfcb[_0x5216cf]);
                }
            }
        } catch (_0x1a8086) {
            console[_0x2b6b48(0x1c4)](_0x2b6b48(0x2ed), _0x1a8086);
        };

        function _0x2c14d4() {
            var _0x229446 = _0x2b6b48;
            try {
                if (typeof localStorage === _0x229446(0x328)) return console[_0x229446(0x1c4)](_0x229446(0x4c2)), !0x1;
                var _0x128dc0 = localStorage['getItem'](_0x229446(0x44f)),
                    _0x33960e = localStorage[_0x229446(0x1b3)](_0x229446(0x1f1));
                return _0x128dc0 && _0x33960e ? (typeof _0x1a98d3 !== _0x229446(0x328) && (_0x1a98d3[_0x229446(0x2e6)] = _0x33960e, _0x1a98d3['forceUseLocalImages'] = !0x0, localStorage['setItem'](_0x229446(0x1e2), JSON[_0x229446(0x32a)](_0x1a98d3))), !0x0) : (console[_0x229446(0x1be)]('Wormx\x20Error\x202'), !0x1);
            } catch (_0x25683f) {
                return console[_0x229446(0x1c4)]('Wormx\x20Error\x201', _0x25683f), !0x1;
            }
        }
        _0x2c14d4();
        let _0xda46a3 = function() {
                var _0x27bfbf = _0x2b6b48;
                let _0x216440 = !0x1;
                _0x1a98d3[_0x27bfbf(0x7cf)] = !0x1;
                var _0x1cfc12 = navigator[_0x27bfbf(0x1ae)] || navigator[_0x27bfbf(0x844)] || window[_0x27bfbf(0x5f0)];
                return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i [_0x27bfbf(0x394)](_0x1cfc12) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i [_0x27bfbf(0x394)](_0x1cfc12[_0x27bfbf(0x72a)](0x0, 0x4))) && (_0x216440 = !0x0, _0x1a98d3[_0x27bfbf(0x7cf)] = !0x0), _0x216440;
            },
            _0x4f8d2b = _0x1a98d3['z'] || 0x1,
            _0x4a5d94 = _0x1a98d3['z'];
        Object[_0x2b6b48(0x7dc)](_0x1a98d3, 'z', {
            'get': function() {
                return _0x4a5d94;
            },
            'set': function(_0x1937a3) {
                var _0x32da5a = _0x2b6b48;
                Math['abs'](_0x1937a3 - _0x4a5d94) > 0.1 && (console[_0x32da5a(0x1be)](_0x32da5a(0x1b5), _0x4a5d94, 'to', _0x1937a3), console[_0x32da5a(0x508)]()), _0x4a5d94 = _0x1937a3;
            }
        });
        let _0x3f8263 = function(_0x520871) {
                var _0x57361a = _0x2b6b48;
                _0x1a98d3['joystick'] ||= _0x2cbd14[_0x57361a(0x1c1)], _0x1a98d3[_0x57361a(0x1c1)]['checked'] = _0x520871[_0x57361a(0x74b)], localStorage['setItem']('SaveGamewft', JSON[_0x57361a(0x32a)](_0x1a98d3));
            },
            _0x2e0292 = function(_0x256a66) {
                var _0x57c186 = _0x2b6b48;
                _0x1a98d3[_0x57c186(0x1c1)] ||= _0x2cbd14[_0x57c186(0x1c1)], _0x1a98d3[_0x57c186(0x1c1)][_0x57c186(0x2c5)] = _0x256a66[_0x57c186(0x6fd)], localStorage[_0x57c186(0x5c0)](_0x57c186(0x1e2), JSON[_0x57c186(0x32a)](_0x1a98d3));
            },
            _0x227252 = function(_0x34ca94) {
                var _0x756c64 = _0x2b6b48;
                _0x1a98d3[_0x756c64(0x1c1)] ||= _0x2cbd14['joystick'], _0x1a98d3[_0x756c64(0x1c1)][_0x756c64(0x453)] = _0x34ca94[_0x756c64(0x6fd)], localStorage['setItem'](_0x756c64(0x1e2), JSON[_0x756c64(0x32a)](_0x1a98d3));
            },
            _0x59e7a9 = function(_0x3b00f8) {
                var _0x5d6fb0 = _0x2b6b48;
                _0x1a98d3['joystick'] ||= _0x2cbd14['joystick'], _0x1a98d3[_0x5d6fb0(0x1c1)][_0x5d6fb0(0x5d6)] = {
                    'left': _0x5d6fb0(0x27c),
                    'bottom': _0x5d6fb0(0x27c)
                }, _0x3b00f8[_0x5d6fb0(0x6fd)] === 'R' && (_0x1a98d3[_0x5d6fb0(0x1c1)][_0x5d6fb0(0x5d6)] = {
                    'right': _0x5d6fb0(0x27c),
                    'bottom': _0x5d6fb0(0x27c)
                }), _0x1a98d3[_0x5d6fb0(0x1c1)][_0x5d6fb0(0x87a)] = _0x3b00f8['value'], localStorage[_0x5d6fb0(0x5c0)](_0x5d6fb0(0x1e2), JSON['stringify'](_0x1a98d3));
            },
            _0x42ce38 = function(_0x32424c) {
                var _0x5cba8a = _0x2b6b48;
                _0x1a98d3[_0x5cba8a(0x1c1)] ||= _0x2cbd14[_0x5cba8a(0x1c1)], _0x1a98d3[_0x5cba8a(0x1c1)][_0x5cba8a(0x5d6)] = {
                    'left': (parseInt(_0x32424c['value']) + 0xa)['toString']() + 'px',
                    'bottom': _0x32424c['value'] + 'px'
                }, _0x1a98d3[_0x5cba8a(0x1c1)][_0x5cba8a(0x87a)] === 'R' && (_0x1a98d3[_0x5cba8a(0x1c1)][_0x5cba8a(0x5d6)] = {
                    'right': (parseInt(_0x32424c[_0x5cba8a(0x6fd)]) + 0xa)[_0x5cba8a(0x699)]() + 'px',
                    'bottom': _0x32424c[_0x5cba8a(0x6fd)] + 'px'
                }), _0x1a98d3[_0x5cba8a(0x1c1)]['pxy'] = _0x32424c['value'], localStorage[_0x5cba8a(0x5c0)](_0x5cba8a(0x1e2), JSON[_0x5cba8a(0x32a)](_0x1a98d3));
            },
            _0x51f831 = function(_0x1a1141) {
                var _0xcd4daf = _0x2b6b48;
                _0x1a98d3['joystick'] ||= _0x2cbd14[_0xcd4daf(0x1c1)], _0x1a98d3['joystick'][_0xcd4daf(0x5e4)] = _0x1a1141[_0xcd4daf(0x6fd)], localStorage[_0xcd4daf(0x5c0)](_0xcd4daf(0x1e2), JSON[_0xcd4daf(0x32a)](_0x1a98d3));
            },
            _0x3f33d6 = function(_0x3c6576, _0x11b427, _0x236bbc, _0x2900f5, _0x2257b2, _0x5bcc2b) {
                var _0x82087 = _0x2b6b48;
                let _0x538813 = {
                    'a': '',
                    'b': 0x0,
                    'c': ''
                };
                _0x3c6576 > _0x1a98d3['g'] * 0x64 + 0x64 || _0x3c6576 < _0x1a98d3['g'] * 0xa || _0x3c6576 === undefined ? (_0x1a98d3['a'] = _0x3c6576, _0x3c6576 === undefined && (_0x1a98d3['a'] = Math[_0x82087(0x294)](Math[_0x82087(0x647)]() * (_0x1a98d3['g'] / 0x9) + (_0x1a98d3['g'] - _0x1a98d3['g'] / 0x9))), _0x538813['a'] = '00') : (_0x1a98d3['a'] = _0x3c6576 - _0x1a98d3['g'] * 0xa, _0x538813['b'] = _0x1a98d3['a'], _0x1a98d3['a'] = _0x1a98d3['a'] % (_0x1a98d3['g'] / 0x9), _0x538813['b'] = (_0x538813['b'] - _0x1a98d3['a']) / (_0x1a98d3['g'] / 0x9) + 0x1, _0x1a98d3['a'] = _0x1a98d3['a'] + (_0x1a98d3['g'] - _0x1a98d3['g'] / 0x9), _0x538813['a'] = _0x538813['b'][_0x82087(0x699)](_0x1a98d3['g'])[_0x82087(0x62e)](0x2, 0x0));
                _0x11b427 > _0x1a98d3['g'] * 0x14 || _0x11b427 < _0x1a98d3['g'] / 0x9 * 0x64 || _0x11b427 === undefined ? _0x11b427 > _0x1a98d3['g'] * 0x14 && _0x11b427 < _0x1a98d3['g'] * 0x1e ? (_0x1a98d3['b'] = _0x11b427 - _0x1a98d3['g'] * 0x14, _0x538813['a'] = _0x538813['a'] + _0x1a98d3['b']['toString'](_0x1a98d3['g']), _0x1a98d3['b'] = 0x0, _0x538813['c'] = _0x538813['c'] + '1') : (_0x1a98d3['b'] = _0x11b427, _0x11b427 === undefined && (_0x1a98d3['b'] = 0x0), _0x538813['a'] = _0x538813['a'] + '0', _0x538813['c'] = _0x538813['c'] + '0') : (_0x1a98d3['b'] = _0x11b427 - _0x1a98d3['g'] / 0x9 * 0x64 + _0x1a98d3['g'] / _0x1a98d3['g'], _0x538813['a'] = _0x538813['a'] + _0x1a98d3['b'][_0x82087(0x699)](_0x1a98d3['g']), _0x1a98d3['b'] = 0x0, _0x538813['c'] = _0x538813['c'] + '0');
                _0x236bbc > _0x1a98d3['g'] * 0x14 || _0x236bbc < _0x1a98d3['g'] / 0x9 * 0x64 || _0x236bbc === undefined ? _0x236bbc > _0x1a98d3['g'] * 0x14 && _0x236bbc < _0x1a98d3['g'] * 0x1e ? (_0x1a98d3['c'] = _0x236bbc - _0x1a98d3['g'] * 0x14, _0x538813['a'] = _0x538813['a'] + _0x1a98d3['c'][_0x82087(0x699)](_0x1a98d3['g']), _0x1a98d3['c'] = 0x0, _0x538813['c'] = _0x538813['c'] + '1') : (_0x1a98d3['c'] = _0x236bbc, _0x236bbc === undefined && (_0x1a98d3['c'] = 0x0), _0x538813['a'] = _0x538813['a'] + '0', _0x538813['c'] = _0x538813['c'] + '0') : (_0x1a98d3['c'] = _0x236bbc - _0x1a98d3['g'] / 0x9 * 0x64 + _0x1a98d3['g'] / _0x1a98d3['g'], _0x538813['a'] = _0x538813['a'] + _0x1a98d3['c'][_0x82087(0x699)](_0x1a98d3['g']), _0x1a98d3['c'] = 0x0, _0x538813['c'] = _0x538813['c'] + '0');
                _0x2900f5 > _0x1a98d3['g'] * 0x14 || _0x2900f5 < _0x1a98d3['g'] / 0x9 * 0x64 || _0x2900f5 === undefined ? _0x2900f5 > _0x1a98d3['g'] * 0x14 && _0x2900f5 < _0x1a98d3['g'] * 0x1e ? (_0x1a98d3['d'] = _0x2900f5 - _0x1a98d3['g'] * 0x14, _0x1a98d3['d'][_0x82087(0x699)](_0x1a98d3['g']) === 'N' ? _0x538813['a'] = _0x538813['a'] + '0' : _0x538813['a'] = _0x538813['a'] + _0x1a98d3['d'][_0x82087(0x699)](_0x1a98d3['g']), _0x1a98d3['d'] = 0x0, _0x538813['c'] = _0x538813['c'] + '1') : (_0x1a98d3['d'] = _0x2900f5, _0x2900f5 === undefined && (_0x1a98d3['d'] = 0x0), _0x538813['a'] = _0x538813['a'] + '0', _0x538813['c'] = _0x538813['c'] + '0') : (_0x1a98d3['d'] = _0x2900f5 - _0x1a98d3['g'] / 0x9 * 0x64 + _0x1a98d3['g'] / _0x1a98d3['g'], _0x1a98d3['d'][_0x82087(0x699)](_0x1a98d3['g']) === 'N' ? _0x538813['a'] = _0x538813['a'] + '0' : _0x538813['a'] = _0x538813['a'] + _0x1a98d3['d'][_0x82087(0x699)](_0x1a98d3['g']), _0x1a98d3['d'] = 0x0, _0x538813['c'] = _0x538813['c'] + '0');
                if (_0x2257b2 > _0x1a98d3['g'] * 0x14 || _0x2257b2 < _0x1a98d3['g'] / 0x9 * 0x64 || _0x2257b2 === undefined) {
                    if (_0x2257b2 > _0x1a98d3['g'] * 0x14 && _0x2257b2 < _0x1a98d3['g'] * 0x1e) {
                        _0x538813['b'] = _0x1a98d3['g'] / _0x1a98d3['g'];
                        if (_0x2257b2 <= _0x1a98d3['g'] * 0x14 + (_0x1a98d3['g'] - 0x1)) _0x1a98d3['e'] = _0x2257b2 - _0x1a98d3['g'] * 0x14;
                        else {
                            if (_0x2257b2 <= _0x1a98d3['g'] * 0x14 + (_0x1a98d3['g'] - 0x1) * 0x2) _0x538813['b'] = _0x538813['b'] * 0x2, _0x1a98d3['e'] = _0x2257b2 - _0x1a98d3['g'] * 0x14 - (_0x1a98d3['g'] - 0x1);
                            else {
                                if (_0x2257b2 <= _0x1a98d3['g'] * 0x14 + (_0x1a98d3['g'] - 0x1) * 0x3) _0x1a98d3['e'] = _0x2257b2 - _0x1a98d3['g'] * 0x14 - (_0x1a98d3['g'] - 0x1) * 0x2;
                                else _0x2257b2 <= _0x1a98d3['g'] * 0x14 + (_0x1a98d3['g'] - 0x1) * 0x4 ? (_0x538813['b'] = _0x538813['b'] * 0x2, _0x1a98d3['e'] = _0x2257b2 - _0x1a98d3['g'] * 0x14 - (_0x1a98d3['g'] - 0x1) * 0x3) : _0x1a98d3['e'] = 0x0;
                            }
                        }
                        _0x1a98d3['e'] >= _0x1a98d3['g'] && (_0x538813['b'] = 0x2, _0x1a98d3['e'] = _0x1a98d3['e'] - (_0x1a98d3['g'] - 0x1)), _0x538813['a'] = _0x538813['a'] + _0x1a98d3['e']['toString'](_0x1a98d3['g']), _0x1a98d3['e'] = 0x0, _0x538813['c'] = _0x538813['c'] + '1';
                    } else _0x1a98d3['e'] = _0x2257b2, _0x2257b2 === undefined && (_0x1a98d3['e'] = 0x0), _0x538813['a'] = _0x538813['a'] + '0', _0x538813['c'] = _0x538813['c'] + '0', _0x538813['b'] = 0x0;
                } else _0x538813['b'] = _0x1a98d3['g'] / _0x1a98d3['g'], _0x2257b2 - _0x1a98d3['g'] / 0x9 * 0x64 + 0x1 >= _0x1a98d3['g'] ? (_0x1a98d3['e'] = _0x2257b2 - (_0x1a98d3['g'] / 0x9 * 0x64 + (_0x1a98d3['g'] - 0x1)), _0x538813['b'] = _0x538813['b'] * 0x2) : _0x1a98d3['e'] = _0x2257b2 - _0x1a98d3['g'] / 0x9 * 0x64 + _0x538813['b'], _0x538813['a'] = _0x538813['a'] + _0x1a98d3['e'][_0x82087(0x699)](_0x1a98d3['g']), _0x1a98d3['e'] = 0x0, _0x538813['c'] = _0x538813['c'] + '0';
                if (_0x538813['a'] == _0x82087(0x2ff)) _0x1a98d3['f'] = _0x5bcc2b['substr'](0x0, 0x16)[_0x82087(0x665)](0x16);
                else {
                    let _0x546a87 = parseInt(_0x538813['c'], 0x2);
                    _0x2257b2 > 0x316 && _0x2257b2 <= 0x35c && (_0x546a87 += 0x10), _0x538813['b'] <= 0x1 ? _0x538813['a'] = _0x538813['a'][_0x82087(0x72a)](0x0, 0x5) + '.' + _0x538813['a'][_0x82087(0x72a)](0x5, 0x1) : _0x538813['a'] = _0x538813['a'][_0x82087(0x72a)](0x0, 0x4) + '.' + _0x538813['a'][_0x82087(0x72a)](0x4, 0x2), _0x5bcc2b == '' && (_0x5bcc2b = _0x82087(0x7ae)), _0x538813['c'] == '0000' ? (_0x5bcc2b[_0x82087(0x72a)](0x17, 0x1) == '.' && (_0x5bcc2b = _0x5bcc2b['substr'](0x0, 0x17)['padEnd'](0x17) + '\x20' + _0x5bcc2b['substr'](0x18, 0x1)[_0x82087(0x665)](0x1)), _0x1a98d3['f'] = (_0x5bcc2b[_0x82087(0x883)] >= 0x20 ? _0x5bcc2b[_0x82087(0x72a)](0x0, 0x19) : _0x5bcc2b[_0x82087(0x72a)](0x0, 0x19)['padEnd'](0x19)) + _0x538813['a']) : _0x1a98d3['f'] = (_0x5bcc2b['length'] >= 0x20 ? _0x5bcc2b['substr'](0x0, 0x17) : _0x5bcc2b[_0x82087(0x72a)](0x0, 0x17)[_0x82087(0x665)](0x17)) + '.' + _0x546a87[_0x82087(0x699)](_0x1a98d3['g']) + _0x538813['a'], _0x1a98d3['f'] = _0x1a98d3['f'][_0x82087(0x266)]('\x20', '_');
                }
            },
            _0x25ec2a = function(_0xaf461e) {
                var _0x2dd0ae = _0x2b6b48;
                let _0x3a761b;
                try {
                    return _0x1a98d3[_0x2dd0ae(0x1c1)] ||= _0x2cbd14[_0x2dd0ae(0x1c1)], _0xda46a3() && _0xaf461e && _0x1a98d3[_0x2dd0ae(0x1c1)][_0x2dd0ae(0x74b)] && (_0x3a761b = nipplejs[_0x2dd0ae(0x4b7)](_0x1a98d3[_0x2dd0ae(0x1c1)]))['on'](_0x2dd0ae(0x863), function(_0x2a031c, _0x1398ed) {
                        var _0x543003 = _0x2dd0ae;
                        _0x2cbd14['eie']['fo'] = _0x1398ed[_0x543003(0x6cf)][_0x543003(0x776)] <= Math['PI'] ? _0x1398ed[_0x543003(0x6cf)]['radian'] * -0x1 : Math['PI'] - (_0x1398ed['angle']['radian'] - Math['PI']);
                    }), _0x3a761b;
                } catch (_0x56a067) {
                    console[_0x2dd0ae(0x1c4)](_0x56a067);
                }
            },
            _0xbbcaaf = function(_0x147661) {
                var _0x258ab9 = _0x2b6b48;
                let _0x5eadbb = {
                        'a': 0x0,
                        'b': 0x0,
                        'c': 0x0,
                        'd': 0x0,
                        'e': 0x0,
                        'f': '',
                        'g': 0x0,
                        'h': '',
                        'i': ''
                    },
                    _0xca1910 = 0x0;
                _0x5eadbb['h'] = _0x147661['substr'](-0x9);
                if (_0x5eadbb['h'][_0x258ab9(0x72a)](0x0, 0x1) != '.') _0x5eadbb['i'] = _0x258ab9(0x888);
                else(_0xca1910 = parseInt(_0x5eadbb['h'][_0x258ab9(0x72a)](0x1, 0x1), _0x1a98d3['g'])) > 0xf ? (_0xca1910 -= 0x10, _0x5eadbb['i'] = _0xca1910['toString'](0x2)[_0x258ab9(0x62e)](0x4, 0x0)) : (_0x5eadbb['i'] = _0xca1910[_0x258ab9(0x699)](0x2)[_0x258ab9(0x62e)](0x4, 0x0), _0xca1910 = 0x0);
                return _0x5eadbb['f'] = _0x147661[_0x258ab9(0x72a)](-0x7), _0x5eadbb['f'][_0x258ab9(0x72a)](0x0, 0x2) != '00' && (_0x5eadbb['a'] = parseInt(_0x5eadbb['f']['substr'](0x0, 0x2), _0x1a98d3['g']), _0x5eadbb['a'] = (_0x5eadbb['a'] - 0x1) * (_0x1a98d3['g'] / 0x9) + _0x1a98d3['g'] * 0xa - (_0x1a98d3['g'] - 0x4)), _0x5eadbb['f'][_0x258ab9(0x72a)](0x5, 0x1) == '.' ? _0x5eadbb['f']['substr'](0x6, 0x1) != '0' && (_0x5eadbb['e'] = parseInt(_0x5eadbb['f'][_0x258ab9(0x72a)](0x6, 0x1), _0x1a98d3['g']), _0x5eadbb['i'][_0x258ab9(0x72a)](0x3, 0x1) != '0' ? _0xca1910 > 0x0 ? _0x5eadbb['e'] = _0x5eadbb['e'] + _0x1a98d3['g'] * 0x14 + (_0x1a98d3['g'] - 0x1) * 0x2 : _0x5eadbb['e'] = _0x5eadbb['e'] + _0x1a98d3['g'] * 0x14 : _0x5eadbb['e'] = _0x5eadbb['e'] - 0x1 + _0x1a98d3['g'] / 0x9 * 0x64) : (_0x5eadbb['e'] = parseInt(_0x5eadbb['f'][_0x258ab9(0x72a)](0x6, 0x1), _0x1a98d3['g']), _0x5eadbb['i']['substr'](0x3, 0x1) != '0' ? _0xca1910 > 0x0 ? _0x5eadbb['e'] = _0x5eadbb['e'] + _0x1a98d3['g'] * 0x14 + (_0x1a98d3['g'] - 0x1) * 0x3 : _0x5eadbb['e'] = _0x5eadbb['e'] + _0x1a98d3['g'] * 0x14 + (_0x1a98d3['g'] - 0x1) : _0x5eadbb['e'] = _0x5eadbb['e'] + (_0x1a98d3['g'] / 0x9 * 0x64 + (_0x1a98d3['g'] - 0x1))), _0x5eadbb['f'] = _0x5eadbb['f'][_0x258ab9(0x5b7)]('.', ''), _0x5eadbb['f'][_0x258ab9(0x72a)](0x2, 0x1) != '0' && (_0x5eadbb['b'] = parseInt(_0x5eadbb['f']['substr'](0x2, 0x1), _0x1a98d3['g']), _0x5eadbb['i'][_0x258ab9(0x72a)](0x0, 0x1) != '0' ? _0x5eadbb['b'] = _0x5eadbb['b'] + _0x1a98d3['g'] * 0x14 : _0x5eadbb['b'] = _0x5eadbb['b'] - 0x1 + _0x1a98d3['g'] / 0x9 * 0x64), _0x5eadbb['f']['substr'](0x3, 0x1) != '0' && (_0x5eadbb['c'] = parseInt(_0x5eadbb['f'][_0x258ab9(0x72a)](0x3, 0x1), _0x1a98d3['g']), _0x5eadbb['i']['substr'](0x1, 0x1) != '0' ? _0x5eadbb['c'] = _0x5eadbb['c'] + _0x1a98d3['g'] * 0x14 : _0x5eadbb['c'] = _0x5eadbb['c'] - 0x1 + _0x1a98d3['g'] / 0x9 * 0x64), _0x5eadbb['f'][_0x258ab9(0x72a)](0x4, 0x1) != '0' && (_0x5eadbb['d'] = parseInt(_0x5eadbb['f'][_0x258ab9(0x72a)](0x4, 0x1), _0x1a98d3['g']), _0x5eadbb['i'][_0x258ab9(0x72a)](0x2, 0x1) != '0' ? _0x5eadbb['d'] = _0x5eadbb['d'] + _0x1a98d3['g'] * 0x14 : _0x5eadbb['d'] = _0x5eadbb['d'] - 0x1 + _0x1a98d3['g'] / 0x9 * 0x64), _0x5eadbb;
            },
            _0x22ef8 = function(_0x337053) {
                return !(_0x337053 > _0x1a98d3['g'] * 0x1e) && !(_0x337053 < _0x1a98d3['g'] / 0x9 * 0x64) || _0x337053 == 0x0;
            },
            _0xaabe1d = function(_0x59ce88) {
                var _0x5709d2 = _0x2b6b48;
                return /^(.{25})(\w{5}\.\w{1})$/ [_0x5709d2(0x394)](_0x59ce88) || /^(.{25})(\w{4}\.\w{2})$/ ['test'](_0x59ce88);
            },
            _0x1e6116 = function(_0x166e9c) {
                var _0x1a3751 = _0x2b6b48;
                _0x166e9c = _0x166e9c['replaceAll']('_', '\x20');
                if (/^(.{25})(\w{7})$/ [_0x1a3751(0x394)](_0x166e9c)) {
                    for (_0x166e9c = _0x166e9c[_0x1a3751(0x72a)](0x0, 0xf)[_0x1a3751(0x1af)](); _0x166e9c[_0x1a3751(0x72a)](_0x166e9c[_0x1a3751(0x883)] - 0x1, 0x1) == '.';) {
                        _0x166e9c = _0x166e9c[_0x1a3751(0x72a)](0x0, _0x166e9c[_0x1a3751(0x883)] - 0x1);
                    };
                    return _0x166e9c;
                };
                return /^(.{25})(\w{5}\.\w{1})$/ [_0x1a3751(0x394)](_0x166e9c) || /^(.{25})(\w{4}\.\w{2})$/ [_0x1a3751(0x394)](_0x166e9c) ? _0x166e9c[_0x1a3751(0x72a)](-0x9)[_0x1a3751(0x72a)](0x0, 0x1) != '.' ? _0x166e9c[_0x1a3751(0x72a)](0x0, 0x19)[_0x1a3751(0x1af)]() : _0x166e9c[_0x1a3751(0x72a)](0x0, 0x17)[_0x1a3751(0x1af)]() : _0x166e9c;
            };
        _0x1a98d3[_0x2b6b48(0x5ff)] = !0x0;
        var _0x3be6af = localStorage[_0x2b6b48(0x1b3)](_0x2b6b48(0x76d));
        localStorage['setItem'](_0x2b6b48(0x53f), _0x2b6b48(0x5de)), localStorage[_0x2b6b48(0x5c0)](_0x2b6b48(0x565), _0x2b6b48(0x24b)), localStorage[_0x2b6b48(0x5c0)](_0x2b6b48(0x202), _0x2b6b48(0x50f));
        var _0x193eb2 = localStorage[_0x2b6b48(0x1b3)](_0x2b6b48(0x595)),
            _0x3271a1 = localStorage[_0x2b6b48(0x1b3)](_0x2b6b48(0x44f)) != null ? localStorage['getItem'](_0x2b6b48(0x44f))[_0x2b6b48(0x3de)](',') : localStorage['getItem'](_0x2b6b48(0x44f)),
            _0x3f4d06 = localStorage[_0x2b6b48(0x1b3)](_0x2b6b48(0x1f1)),
            _0x308d60 = localStorage['getItem'](_0x2b6b48(0x557)),
            _0x18b6dd = localStorage[_0x2b6b48(0x1b3)](_0x2b6b48(0x45e));
        $('<input\x20type=\x22hidden\x22\x20id=\x22port_id\x22\x20value=\x22\x22>')['insertAfter'](_0x2b6b48(0x583)), $(_0x2b6b48(0x3d5))[_0x2b6b48(0x4bc)]('.description-text'), $(_0x2b6b48(0x514))[_0x2b6b48(0x4bc)]('.description-text'), $(_0x2b6b48(0x805))[_0x2b6b48(0x4bc)]('.description-text'), $('#mm-action-buttons')[_0x2b6b48(0x1e1)](function() {
            var _0x212894 = _0x2b6b48;
            $(_0x212894(0x478))[_0x212894(0x223)](''), $(_0x212894(0x38b))['val']('');
        }), $(_0x2b6b48(0x6f5))[_0x2b6b48(0x53b)]('display', _0x2b6b48(0x25a)), $(_0x2b6b48(0x4ee))[_0x2b6b48(0x53b)](_0x2b6b48(0x288), _0x2b6b48(0x25a)), $('#mm-action-guest')[_0x2b6b48(0x53b)]('display', 'none'), $(_0x2b6b48(0x2be))['css'](_0x2b6b48(0x288), _0x2b6b48(0x6c2)), $(_0x2b6b48(0x1de))[_0x2b6b48(0x53b)](_0x2b6b48(0x288), _0x2b6b48(0x6c2)), $(_0x2b6b48(0x745))[_0x2b6b48(0x53b)](_0x2b6b48(0x288), 'block'), $(_0x2b6b48(0x877))[_0x2b6b48(0x5dc)](), $('#mm-player-info')[_0x2b6b48(0x53b)]('display', _0x2b6b48(0x6c2)), $(_0x2b6b48(0x666))[_0x2b6b48(0x53b)](_0x2b6b48(0x5d6), _0x2b6b48(0x52f)), $('#relojHelp')['css']('top', _0x2b6b48(0x419)), $(_0x2b6b48(0x666))['css'](_0x2b6b48(0x319), _0x2b6b48(0x37b)), $(_0x2b6b48(0x5af))[_0x2b6b48(0x53b)](_0x2b6b48(0x288), _0x2b6b48(0x25a));
        var _0xd66ce6 = null,
            _0x598970 = null,
            _0x12badb = !0x1,
            _0x93ba91 = 0x37,
            _0x39f5db = 0x1,
            _0x31c07e = !0x0;
        if (_0x3271a1 && _0x3f4d06 && _0x3f4d06 == _0x1a98d3[_0x2b6b48(0x2e6)]);
        else fetch(_0x2b6b48(0x859), {
            'headers': {
                'Content-Type': _0x2b6b48(0x660)
            },
            'method': _0x2b6b48(0x24c),
            'body': JSON['stringify']({
                'img': 'i2'
            })
        })[_0x2b6b48(0x384)](async function(_0x36a9e8) {
            var _0x4d3083 = _0x2b6b48;
            _0x3271a1 = (_0x36a9e8 = await _0x36a9e8[_0x4d3083(0x794)]())['i'][_0x4d3083(0x3de)]('.'), localStorage[_0x4d3083(0x5c0)](_0x4d3083(0x44f), _0x3271a1), localStorage[_0x4d3083(0x5c0)](_0x4d3083(0x1f1), _0x36a9e8['vs']), _0x1a98d3[_0x4d3083(0x2e6)] = _0x36a9e8['vs'], window[_0x4d3083(0x43a)][_0x4d3083(0x286)]();
        })[_0x2b6b48(0x68d)](function(_0x522568) {});;
        var _0x30cfd0 = PIXI['Texture']['from'](_0x1a98d3[_0x2b6b48(0x7be)] + _0x2b6b48(0x485)),
            _0x4fbc00 = PIXI[_0x2b6b48(0x3a1)][_0x2b6b48(0x1c2)](_0x1a98d3[_0x2b6b48(0x7be)] + _0x2b6b48(0x349)),
            _0x1b024d = PIXI[_0x2b6b48(0x3a1)][_0x2b6b48(0x1c2)](_0x1a98d3[_0x2b6b48(0x7be)] + _0x2b6b48(0x7cb)),
            _0xb11556 = PIXI[_0x2b6b48(0x3a1)][_0x2b6b48(0x1c2)](_0x1a98d3['s_l'] + _0x2b6b48(0x5b3)),
            _0x168c20 = PIXI[_0x2b6b48(0x3a1)][_0x2b6b48(0x1c2)](_0x1a98d3[_0x2b6b48(0x7be)] + _0x2b6b48(0x298)),
            _0x3b95dc = PIXI['Texture']['from'](_0x1a98d3['s_l'] + _0x2b6b48(0x3eb)),
            _0x20cce3 = PIXI[_0x2b6b48(0x3a1)][_0x2b6b48(0x1c2)](_0x1a98d3[_0x2b6b48(0x7be)] + _0x2b6b48(0x6c6)),
            _0xfa38fe = PIXI[_0x2b6b48(0x3a1)]['from'](_0x1a98d3[_0x2b6b48(0x7be)] + '/get_store.phpitem=z_o.png'),
            _0x2add7a = new PIXI[(_0x2b6b48(0x6db))](_0x30cfd0);
        _0x2add7a[_0x2b6b48(0x753)] = !0x0, _0x2add7a[_0x2b6b48(0x5b2)][_0x2b6b48(0x448)](0.5), _0x2add7a['x'] = -0x41, _0x2add7a['y'] = 0x19, _0x2add7a[_0x2b6b48(0x37d)] = !0x0, _0x2add7a['buttonMode'] = !0x0;
        var _0x2da668 = new PIXI['Sprite'](_0x1b024d);
        _0x2da668['buttonMode'] = !0x0, _0x2da668[_0x2b6b48(0x5b2)]['set'](0.5), _0x2da668['x'] = -0x21, _0x2da668['y'] = 0x19, _0x2da668[_0x2b6b48(0x37d)] = !0x0, _0x2da668['buttonMode'] = !0x0;
        var _0x423a56 = new PIXI[(_0x2b6b48(0x6db))](_0x168c20);
        _0x423a56[_0x2b6b48(0x753)] = !0x0, _0x423a56[_0x2b6b48(0x5b2)][_0x2b6b48(0x448)](0.5), _0x423a56['x'] = -0x1, _0x423a56['y'] = 0x19, _0x423a56[_0x2b6b48(0x37d)] = !0x0, _0x423a56[_0x2b6b48(0x753)] = !0x0;
        var _0x23edd9 = new PIXI[(_0x2b6b48(0x6db))](_0xfa38fe);
        _0x23edd9['buttonMode'] = !0x0, _0x23edd9[_0x2b6b48(0x5b2)]['set'](0.5), _0x23edd9['x'] = -0x1, _0x23edd9['y'] = 0x19, _0x23edd9['interactive'] = !0x0, _0x23edd9['buttonMode'] = !0x0;
        var _0x53d535 = new PIXI[(_0x2b6b48(0x6db))](_0x20cce3);
        _0x53d535[_0x2b6b48(0x753)] = !0x0, _0x53d535[_0x2b6b48(0x5b2)][_0x2b6b48(0x448)](0.5), _0x53d535['x'] = -0x21, _0x53d535['y'] = 0x19, _0x53d535['interactive'] = !0x0, _0x53d535[_0x2b6b48(0x753)] = !0x0, _0x2da668[_0x2b6b48(0x44e)] = 0.25, _0x2add7a[_0x2b6b48(0x44e)] = 0.25, _0x423a56['alpha'] = 0.25, _0x53d535['alpha'] = 0.25, _0x23edd9[_0x2b6b48(0x44e)] = 0.25;
        var _0x29b35c = new PIXI[(_0x2b6b48(0x20e))](_0x2b6b48(0x50b), {
            'fontFamily': 'PTSans',
            'fill': _0x2b6b48(0x7d5),
            'fontSize': 0xc
        });
        _0x29b35c[_0x2b6b48(0x5b2)]['x'] = 0.5, _0x29b35c[_0x2b6b48(0x5d6)]['x'] = 0x6e;
        var _0x27797a = document[_0x2b6b48(0x804)]('game-cont'),
            _0x4103df = document[_0x2b6b48(0x804)]('game-view'),
            _0x40372e = $(_0x2b6b48(0x214));
        _0x158a86['d'][_0x2b6b48(0x804)](_0x2b6b48(0x818))[_0x2b6b48(0x28a)]['display'] = _0x2b6b48(0x6c2),
            function(_0x389fc9, _0x31e59a, _0x476e90) {
                var _0x50f7d8 = _0x2b6b48;

                function _0x3167b7(_0x5b2ec8, _0x37310e) {
                    return f3(_0x5b2ec8) === _0x37310e;
                }

                function _0x1b82a1() {
                    var _0x357e8f = _0x563d;
                    if (f3(_0x31e59a[_0x357e8f(0x706)]) != _0x357e8f(0x387)) return _0x31e59a[_0x357e8f(0x706)](arguments[0x0]);
                    else return _0xd8cafb ? _0x31e59a[_0x357e8f(0x822)][_0x357e8f(0x545)](_0x31e59a, 'http://www.w3.org/2000/svg', arguments[0x0]) : _0x31e59a['createElement']['apply'](_0x31e59a, arguments);
                }
                var _0x2ed859 = [],
                    _0xb10cdd = [],
                    _0x1981cc = {
                        '_version': _0x50f7d8(0x616),
                        '_config': {
                            'classPrefix': '',
                            'enableClasses': !0x0,
                            'enableJSClass': !0x0,
                            'usePrefixes': !0x0
                        },
                        '_q': [],
                        'on': function(_0x4327b6, _0x1f0e36) {
                            var _0x5cc10d = this;
                            setTimeout(function() {
                                _0x1f0e36(_0x5cc10d[_0x4327b6]);
                            }, 0x0);
                        },
                        'addTest': function(_0x5a84cb, _0x3dd346, _0x15a8d6) {
                            var _0x924325 = _0x50f7d8;
                            _0xb10cdd[_0x924325(0x31a)]({
                                'name': _0x5a84cb,
                                'fn': _0x3dd346,
                                'options': _0x15a8d6
                            });
                        },
                        'addAsyncTest': function(_0x209bb5) {
                            var _0x8656a3 = _0x50f7d8;
                            _0xb10cdd[_0x8656a3(0x31a)]({
                                'name': null,
                                'fn': _0x209bb5
                            });
                        }
                    };

                function _0x27fb1e() {}
                _0x27fb1e[_0x50f7d8(0x869)] = _0x1981cc, _0x27fb1e = new _0x27fb1e();
                var _0x5db7e7 = !0x1;
                try {
                    _0x5db7e7 = _0x50f7d8(0x4c3) in _0x389fc9 && _0x389fc9[_0x50f7d8(0x4c3)][_0x50f7d8(0x60f)] === 0x2;
                } catch (_0x2efd62) {};
                _0x27fb1e['addTest'](_0x50f7d8(0x3a5), _0x5db7e7);
                var _0x1dea57 = _0x31e59a[_0x50f7d8(0x7b3)],
                    _0xd8cafb = _0x1dea57[_0x50f7d8(0x408)]['toLowerCase']() === 'svg';
                _0x27fb1e['addTest'](_0x50f7d8(0x1b1), function() {
                        var _0x2a60af = _0x50f7d8,
                            _0x41818 = _0x1b82a1(_0x2a60af(0x1b1));
                        return !!_0x41818[_0x2a60af(0x70a)] && !!_0x41818[_0x2a60af(0x70a)]('2d');
                    }), _0x27fb1e[_0x50f7d8(0x590)]('canvastext', function() {
                        var _0x4d0c2e = _0x50f7d8;
                        return _0x27fb1e['canvas'] !== !0x1 && f3(_0x1b82a1(_0x4d0c2e(0x1b1))[_0x4d0c2e(0x70a)]('2d')[_0x4d0c2e(0x605)]) == _0x4d0c2e(0x387);
                    }), (function() {
                        var _0x5ce001 = _0x50f7d8,
                            _0x213654, _0xd1f891, _0x439fdf, _0x474582, _0x21149c, _0x5d0dc2, _0x13fc39;
                        for (var _0x193f4a in _0xb10cdd) {
                            if (_0xb10cdd['hasOwnProperty'](_0x193f4a)) {
                                _0x213654 = [];
                                if ((_0xd1f891 = _0xb10cdd[_0x193f4a])['name'] && (_0x213654[_0x5ce001(0x31a)](_0xd1f891['name'][_0x5ce001(0x7f6)]()), _0xd1f891[_0x5ce001(0x5e2)] && _0xd1f891[_0x5ce001(0x5e2)]['aliases'] && _0xd1f891[_0x5ce001(0x5e2)][_0x5ce001(0x2bc)][_0x5ce001(0x883)]))
                                    for (_0x439fdf = 0x0; _0x439fdf < _0xd1f891['options'][_0x5ce001(0x2bc)][_0x5ce001(0x883)]; _0x439fdf++) {
                                        _0x213654[_0x5ce001(0x31a)](_0xd1f891[_0x5ce001(0x5e2)]['aliases'][_0x439fdf]['toLowerCase']());
                                    };
                                _0x474582 = _0x3167b7(_0xd1f891['fn'], 'function') ? _0xd1f891['fn']() : _0xd1f891['fn'], _0x21149c = 0x0;
                                for (; _0x21149c < _0x213654[_0x5ce001(0x883)]; _0x21149c++) {
                                    (_0x13fc39 = (_0x5d0dc2 = _0x213654[_0x21149c])[_0x5ce001(0x3de)]('.'))[_0x5ce001(0x883)] === 0x1 ? _0x27fb1e[_0x13fc39[0x0]] = _0x474582 : (!!_0x27fb1e[_0x13fc39[0x0]] && !(_0x27fb1e[_0x13fc39[0x0]] instanceof Boolean) && (_0x27fb1e[_0x13fc39[0x0]] = new Boolean(_0x27fb1e[_0x13fc39[0x0]])), _0x27fb1e[_0x13fc39[0x0]][_0x13fc39[0x1]] = _0x474582), _0x2ed859[_0x5ce001(0x31a)]((_0x474582 ? '' : _0x5ce001(0x536)) + _0x13fc39[_0x5ce001(0x3f9)]('-'));
                                }
                            }
                        }
                    }()),
                    function(_0x6de13b) {
                        var _0x5bd2e7 = _0x50f7d8,
                            _0xcdb880 = _0x1dea57['className'],
                            _0x2cc38f = _0x27fb1e[_0x5bd2e7(0x1d7)][_0x5bd2e7(0x840)] || '';
                        _0xd8cafb && (_0xcdb880 = _0xcdb880[_0x5bd2e7(0x487)]);
                        if (_0x27fb1e['_config'][_0x5bd2e7(0x443)]) {
                            var _0x2de0cc = RegExp(_0x5bd2e7(0x3c2) + _0x2cc38f + _0x5bd2e7(0x2bb));
                            _0xcdb880 = _0xcdb880[_0x5bd2e7(0x5b7)](_0x2de0cc, '$1' + _0x2cc38f + _0x5bd2e7(0x20c));
                        };
                        _0x27fb1e[_0x5bd2e7(0x1d7)][_0x5bd2e7(0x800)] && (_0xcdb880 += '\x20' + _0x2cc38f + _0x6de13b[_0x5bd2e7(0x3f9)]('\x20' + _0x2cc38f), _0xd8cafb ? _0x1dea57[_0x5bd2e7(0x6c9)][_0x5bd2e7(0x487)] = _0xcdb880 : _0x1dea57[_0x5bd2e7(0x6c9)] = _0xcdb880);
                    }(_0x2ed859), delete _0x1981cc[_0x50f7d8(0x590)], delete _0x1981cc[_0x50f7d8(0x42a)];
                for (var _0x420eaa = 0x0; _0x420eaa < _0x27fb1e['_q']['length']; _0x420eaa++) {
                    _0x27fb1e['_q'][_0x420eaa]();
                };
                _0x389fc9[_0x50f7d8(0x6b6)] = _0x27fb1e;
            }(window, document);
        if (!Modernizr[_0x2b6b48(0x3a5)] || !Modernizr[_0x2b6b48(0x1b1)] || !Modernizr[_0x2b6b48(0x44d)]) {
            _0x158a86['d'][_0x2b6b48(0x804)](_0x2b6b48(0x4dd))[_0x2b6b48(0x28a)][_0x2b6b48(0x288)] = _0x2b6b48(0x6c2);
            return;
        };
        _0x39b888['f'] = {
            'g': function(_0x1df12a, _0xaee70c, _0x499372) {
                var _0xe9fa0d = _0x2b6b48;
                _0x1df12a[_0xe9fa0d(0x7ce)](), _0x1df12a[_0xe9fa0d(0x28e)](_0xaee70c, _0x499372);
            },
            'h': function(_0x9d6928, _0x333494, _0x3e9e48) {
                var _0x54960f = _0x2b6b48;
                _0x9d6928[_0x54960f(0x7ce)](), _0x9d6928[_0x54960f(0x671)](_0x333494, _0x3e9e48);
            }
        }, _0x39b888['i'] = _0x239c2a['b']('WebSocket'), _0x39b888['j'] = _0x239c2a['b']('Float32Array'), _0x2d221a = (_0x3ac5f6 = _0x239c2a['b'](_0x2b6b48(0x58b)))[_0x2b6b48(0x450)], _0x3c0f6b = _0x3ac5f6[_0x2b6b48(0x39e)], _0x39b888['k'] = {
            'l': _0x3ac5f6[_0x2b6b48(0x65f)],
            'm': _0x3ac5f6[_0x2b6b48(0x80d)],
            'n': _0x3ac5f6[_0x2b6b48(0x3a1)],
            'o': _0x3ac5f6[_0x2b6b48(0x30b)],
            'p': _0x3ac5f6['Graphics'],
            'q': _0x3ac5f6[_0x2b6b48(0x876)],
            'r': _0x3ac5f6[_0x2b6b48(0x310)],
            's': _0x3ac5f6[_0x2b6b48(0x6db)],
            't': _0x3ac5f6['Text'],
            'u': _0x3ac5f6[_0x2b6b48(0x41d)],
            'v': _0x3ac5f6[_0x2b6b48(0x416)],
            'w': {
                'z': _0x2d221a['ADD'],
                'A': _0x2d221a['SCREEN'],
                'B': _0x2d221a[_0x2b6b48(0x39f)]
            },
            'C': {
                'D': _0x3c0f6b[_0x2b6b48(0x80a)]
            },
            'F': {
                'G': function(_0x1219de) {
                    var _0x3d3c85 = _0x2b6b48,
                        _0x1ab313 = _0x1219de[_0x3d3c85(0x4d7)];
                    _0x1ab313 != null && _0x1ab313['removeChild'](_0x1219de);
                }
            }
        }, _0x2171ac['H'] = {
            'I': _0x158a86['c'][_0x2b6b48(0x82c)],
            'J': _0x2b6b48(0x1d9),
            'K': _0x2b6b48(0x71a),
            'L': _0x2b6b48(0x735),
            'M': _0x2b6b48(0x4af),
            'N': _0x2b6b48(0x529),
            'O': _0x2b6b48(0x27f)
        };

        function _0x347294() {
            function _0x57cfd2(_0x3384ed) {
                var _0x3601a4 = _0x563d,
                    _0x456af5 = _0x3384ed + Math[_0x3601a4(0x294)](Math['random']() * 0xffff) * 0x25;
                _0x3fba9f(_0x4bdabb['d'], _0x456af5, 0x1e);
            }

            function _0x9849c5() {
                return parseInt(_0x339a99(_0x4bdabb['d'])) % 0x25;
            }
            return (function() {
                var _0x248c7f = _0x563d,
                    _0x1cef70 = _0x9849c5();
                console['log']('init1\x20pSC:\x20' + _0x1cef70);
                (!(_0x1cef70 >= 0x0) || !(_0x1cef70 < _0x1edbd9['e'])) && (_0x1cef70 = Math[_0x248c7f(0x656)](0x0, _0x1edbd9['e'] - 0x2), console[_0x248c7f(0x1be)](_0x248c7f(0x43b) + _0x1cef70));
                var _0x5585b9 = {};
                _0x59ca60 = _0x5585b9, _0x5585b9['f'] = _0x1edbd9, _0x5585b9['g'] = !0x1, _0x5585b9['i'] = Date[_0x248c7f(0x458)](), _0x5585b9['j'] = 0x0, _0x5585b9['k'] = 0x0, _0x5585b9['l'] = null, _0x5585b9['m'] = _0xaeefae, _0x5585b9['n'] = _0x5b90b6, _0x5585b9['o'] = null, _0x5585b9['p'] = null, _0x5585b9['q'] = null, _0x5585b9['r'] = null, _0x5585b9['s'] = null, _0x5585b9['t'] = null, _0x5585b9['u'] = null;
                try {
                    navigator && navigator[_0x248c7f(0x3d4)] && navigator[_0x248c7f(0x3d4)][_0x248c7f(0x31f)](function(_0x2727ae) {
                        var _0x49688c = _0x248c7f;
                        if (_0x2727ae[_0x49688c(0x41f)] !== undefined) {
                            var _0x57d33b = _0x2727ae[_0x49688c(0x41f)];
                            _0x57d33b[_0x49688c(0x1ee)] !== undefined && _0x57d33b[_0x49688c(0x4a1)] !== undefined && (_0x5585b9['l'] = _0x2727ae);
                        }
                    }, function(_0x427ef7) {});
                } catch (_0x325dc3) {}
                return _0x5585b9['v'] = function() {
                    _0x5585b9['p'] = new _0x465145(), _0x5585b9['q'] = new _0x3e967f(), _0x5585b9['r'] = new _0x31335b(), _0x5585b9['s'] = new _0x25ae10(), _0x5585b9['t'] = new _0x5225d3(), _0x5585b9['u'] = new _0x283c2e(), _0x5585b9['o'] = new f27(), _0x5585b9['o']['z'] = new _0x3960fd(_0x5585b9['o']), _0x5585b9['a']();
                }, _0x5585b9['a'] = function() {
                    var _0x393d5c = _0x248c7f;
                    try {
                        ga(_0x393d5c(0x55a), _0x393d5c(0x4d1), _0x393d5c(0x47d), window[_0x393d5c(0x82c)] + _0x393d5c(0x85e));
                    } catch (_0x37f0a5) {}
                    _0x5585b9['o']['A'] = function() {
                        _0x5585b9['o']['B']();
                    }, _0x5585b9['o']['C'] = function() {
                        var _0x2eb4d0 = _0x393d5c,
                            _0x32ab56 = _0x5585b9['s']['F']['D']();
                        try {
                            ga(_0x2eb4d0(0x55a), _0x2eb4d0(0x4d1), _0x2eb4d0(0x889), window[_0x2eb4d0(0x82c)] + _0x2eb4d0(0x299), _0x32ab56);
                        } catch (_0x1d0bc1) {}
                        _0x5585b9['r']['G'](_0x31335b[_0x2eb4d0(0x247)]['H']), _0x5585b9['s']['I'](_0x5585b9['s']['H']['J']());
                    }, _0x5585b9['o']['B'] = function() {
                        var _0x4b7342 = _0x393d5c,
                            _0x32274c, _0x17f873;
                        try {
                            ga(_0x4b7342(0x55a), _0x4b7342(0x4d1), 'game', window[_0x4b7342(0x82c)] + '_end');
                        } catch (_0x5748ea) {}
                        $(_0x4b7342(0x3fd))[_0x4b7342(0x2b6)]() >= 0x1ae && _0x5585b9['f']['K']['c'](), _0x5585b9['p']['L'](), _0x32274c = Math[_0x4b7342(0x294)](_0x5585b9['o']['N']['M']), _0x17f873 = _0x5585b9['o']['O'], _0x5585b9['u']['P']() ? _0x5585b9['u']['Q'](function() {
                            _0x5585b9['R'](_0x32274c, _0x17f873);
                        }) : _0x5585b9['R'](_0x32274c, _0x17f873);
                    }, _0x5585b9['o']['S'] = function(_0x514086) {
                        _0x514086(_0x5585b9['s']['H']['T'](), _0x5585b9['s']['H']['U']());
                    }, _0x5585b9['u']['V'](function() {
                        var _0x22ed5f = _0x393d5c;
                        _0x5585b9['p']['W'] && (_0x5585b9['r']['G'](_0x31335b[_0x22ed5f(0x247)]['F']), _0x5585b9['s']['I'](_0x5585b9['s']['F']));
                        if (_0x5585b9['u']['P']()) try {
                            var _0x2e1f4f = _0x5585b9['u']['X']();
                            ga('set', _0x22ed5f(0x3b9), _0x2e1f4f);
                        } catch (_0x2d6707) {}
                        _0x5585b9['Y']() && _0x5585b9['u']['P']() && !_0x5585b9['u']['Z']() ? (_0x5585b9['$'](!0x1, !0x1), _0x5585b9['s']['aa']['_'](new _0x4359e7())) : _0x5585b9['ba'](!0x0);
                    }), _0x5585b9['p']['ca'](function() {
                        var _0x31f194 = _0x393d5c;
                        _0x5585b9['r']['G'](_0x31335b[_0x31f194(0x247)]['F']), _0x5585b9['s']['I'](_0x5585b9['s']['F']);
                    }), _0x5585b9['q']['a'](function() {
                        _0x5585b9['o']['a'](), _0x5585b9['r']['a'](), _0x5585b9['s']['a'](), _0x5585b9['t']['a'](), _0x5585b9['p']['a'](), _0x5585b9['u']['a'](), _0x5585b9['Y']() && !_0x5585b9['Z']() ? _0x5585b9['s']['aa']['_'](new _0x4359e7()) : _0x5585b9['ba'](!0x0);
                    });
                }, _0x5585b9['da'] = function(_0x58c27a) {
                    var _0x2e3b5a = _0x248c7f;
                    if (_0x5585b9['u']['P']()) {
                        var _0x562623 = _0x5585b9['u']['ea']();
                        $['get'](_0x5dce6e + _0x2e3b5a(0x582) + _0x562623 + _0x2e3b5a(0x839) + encodeURI(_0x58c27a), function(_0x2bfca6) {});
                    }
                }, _0x5585b9['fa'] = function(_0x538d2a) {
                    var _0x1b3516 = _0x248c7f,
                        _0x5ade27 = _0x5585b9['u']['ea'](),
                        _0x759d76 = _0x5585b9['s']['F']['D'](),
                        _0x2a006b = _0x5585b9['s']['F']['ga'](),
                        _0x454094 = _0x5585b9['t']['ha'](_0x34bccb['ia']),
                        _0x37954c = _0x5585b9['t']['ha'](_0x34bccb['ja']),
                        _0xdd885 = _0x5585b9['t']['ha'](_0x34bccb['ka']),
                        _0x21d034 = _0x5585b9['t']['ha'](_0x34bccb['la']),
                        _0x1727e2 = _0x5585b9['t']['ha'](_0x34bccb['ma']),
                        _0x181ac0 = 0x0;
                    _0x5585b9['l'] != null && (_0x181ac0 = Math[_0x1b3516(0x656)](0x0, Math[_0x1b3516(0x4c0)](0x7fff, (_0x5585b9['l']['coords'][_0x1b3516(0x1ee)] + 0x5a) / 0xb4 * 0x8000)) << 0x1 | 0x1 | Math[_0x1b3516(0x656)](0x0, Math[_0x1b3516(0x4c0)](0xffff, (_0x5585b9['l'][_0x1b3516(0x41f)][_0x1b3516(0x4a1)] + 0xb4) / 0x168 * 0x10000)) << 0x10);
                    _wrmxt[_0x1b3516(0x52b)](_0x454094);
                    let _0x3cf4f2 = _0x1b3516(0x713) + (_0x454094 > 0x270f ? _0x1b3516(0x888) : _0x454094[_0x1b3516(0x699)]()['padStart'](0x4, 0x0)) + (_0x1727e2 > 0x1869f ? '00000' : _0x1727e2[_0x1b3516(0x699)]()['padStart'](0x5, 0x0));
                    _0x2a006b = (_0x2a006b = (_0x2a006b[_0x1b3516(0x883)] >= 0x20 ? _0x2a006b[_0x1b3516(0x72a)](0x0, 0x10) : _0x2a006b[_0x1b3516(0x72a)](0x0, 0x10)[_0x1b3516(0x665)](0x10)) + _0x3cf4f2)['trim']()[_0x1b3516(0x5b7)](/\s/g, '_'), console[_0x1b3516(0x1be)](_0x2a006b);
                    theoKzObjects[_0x1b3516(0x878)] && (_0x2a006b = '');
                    var _0x42b50d = document[_0x1b3516(0x804)](_0x1b3516(0x70d));
                    if (_0x42b50d !== null) {
                        var _0x128c3b = _0x42b50d[_0x1b3516(0x6fd)];
                        theoKzObjects[_0x1b3516(0x477)] ? _0x5b37ef[_0x1b3516(0x7a9)] = _0x128c3b : _0x5b37ef['nickname'] = _0x2a006b;
                    } else console['warn'](_0x1b3516(0x6e4));
                    var _0x3a4ccd = _0x5dce6e + _0x1b3516(0x582) + _0x5ade27 + '/start?gameMode=' + encodeURI(_0x759d76) + '&gh=' + _0x181ac0 + '&nickname=' + encodeURI(_0x2a006b) + _0x1b3516(0x435) + _wrmxt['validInput'](_0x454094) + _0x1b3516(0x5bf) + encodeURI(_0x37954c) + _0x1b3516(0x7a7) + encodeURI(_0xdd885) + _0x1b3516(0x625) + encodeURI(_0x21d034) + _0x1b3516(0x5c7) + encodeURI(_0x1727e2);
                    console[_0x1b3516(0x1be)](_0x1b3516(0x71b) + _0x3a4ccd), $[_0x1b3516(0x5d3)](_0x3a4ccd, function(_0x287cfd) {
                        var _0x30c5e4 = _0x1b3516;
                        _0x538d2a(_0x287cfd[_0x30c5e4(0x588)]);
                    });
                }, _0x5585b9['na'] = function() {
                    var _0x3766bf = _0x248c7f;
                    _0x1cef70++, console[_0x3766bf(0x1be)]('start\x20pSC:\x20' + _0x1cef70), !_0x5585b9['f']['oa'] && _0x1cef70 >= _0x5585b9['f']['e'] ? (_0x5585b9['s']['I'](_0x5585b9['s']['pa']), _0x5585b9['r']['G'](_0x31335b[_0x3766bf(0x247)]['qa']), _0x5585b9['f']['ra']['b']()) : (_0x57cfd2(_0x1cef70), _0x5585b9['sa'](), lxpdservertext[_0x3766bf(0x2a5)] = '');
                }, _0x5585b9['sa'] = function(_0x5d10c5) {
                    var _0x10df6b = _0x248c7f;
                    lxpdkillcount = 0x0, lxpdhscount = 0x0;
                    if (_0x5585b9['o']['ta']()) {
                        _0x5585b9['s']['I'](_0x5585b9['s']['ua']), _0x5585b9['r']['G'](_0x31335b[_0x10df6b(0x247)]['ua']);
                        var _0x1f953f = _0x5585b9['s']['F']['D']();
                        _0x3fba9f(_0x4bdabb['va'], _0x1f953f, 0x1e), console[_0x10df6b(0x1be)](_0x10df6b(0x31c) + _0x1f953f);
                        var _0x1b34df = _0x5585b9['s']['xa']['wa']();
                        _0x3fba9f(_0x4bdabb['ya'], _0x1b34df, 0x1e), console['log']('save\x20sPN:\x20' + _0x1b34df);
                        if (_0x5585b9['u']['P']()) _0x5585b9['fa'](function(_0x28c6ae) {
                            var _0x9a2de1 = _0x10df6b;
                            lxpdlastserver = _0x5d10c5 || _0x28c6ae, _0x5b37ef[_0x9a2de1(0x4d5)] = lxpdlastserver, _0x5585b9['o']['za'](_0x5d10c5 || _0x28c6ae, _0x5585b9['u']['ea']());
                        });
                        else {
                            var _0x61f826 = _0x5585b9['s']['F']['ga']();
                            _0x3fba9f(_0x4bdabb['Aa'], _0x61f826, 0x1e);
                            var _0x1a364a = _0x5585b9['t']['ha'](_0x34bccb['ia']);
                            _0x3fba9f(_0x4bdabb['Ba'], _0x1a364a, 0x1e), _0x5585b9['fa'](function(_0x70f030) {
                                var _0x32e37a = _0x10df6b;
                                lxpdlastserver = _0x5d10c5 || _0x70f030, _0x5b37ef[_0x32e37a(0x4d5)] = lxpdlastserver, _0x5585b9['o']['Ca'](_0x5d10c5 || _0x70f030, _0x61f826, _0x1a364a);
                            });
                        }
                    }
                }, _0x5585b9['R'] = function(_0x49d618, _0x202d75) {
                    var _0x2fcbaf = _0x248c7f,
                        _0x14cdac = _0x5585b9['s']['F']['ga']();
                    _0x5585b9['s']['H']['Da'](_0x49d618, _0x202d75, _0x14cdac), _0x5585b9['r']['G'](_0x31335b[_0x2fcbaf(0x247)]['Ea']), _0x5585b9['s']['I'](_0x5585b9['s']['H']['Fa']());
                }, _0x5585b9['Ga'] = function() {
                    if (!_0x5585b9['Ha']()) return _0x5585b9['t']['Ia']();
                    var _0x413729 = parseInt(_0x339a99(_0x4bdabb['Ba']));
                    return _0x413729 != null && _0x5585b9['t']['Ja'](_0x413729, _0x34bccb['ia']) ? _0x413729 : _0x5585b9['t']['Ia']();
                }, _0x5585b9['Ka'] = function(_0x2ce986) {
                    _0x3fba9f(_0x4bdabb['La'], !!_0x2ce986, 0x708);
                }, _0x5585b9['Ha'] = function() {
                    var _0x2433a4 = _0x248c7f;
                    return _0x339a99(_0x4bdabb['La']) === _0x2433a4(0x801);
                }, _0x5585b9['ba'] = function(_0x2876f2) {
                    var _0x3207f5 = _0x248c7f;
                    if (_0x2876f2 != _0x5585b9['g']) {
                        _0x5585b9['g'] = _0x2876f2;
                        var _0x293055 = _0x293055 || {};
                        _0x293055[_0x3207f5(0x66e)] = _0x2876f2, _0x293055[_0x3207f5(0x7b7)] = _0x2876f2, _0x5585b9['f']['Ma']['a'](), _0x5585b9['f']['K']['a'](), _0x5585b9['f']['ra']['a'](function(_0x3d8709) {
                            _0x3d8709 && _0x57cfd2(_0x1cef70 = 0x0), _0x5585b9['sa']();
                        });
                    }
                }, _0x5585b9['$'] = function(_0x4026b5, _0x2869ba) {
                    _0x3fba9f(_0x4bdabb['Na'], _0x4026b5 ? 'true' : 'false'), _0x2869ba && _0x5585b9['da'](_0x4026b5), _0x5585b9['ba'](_0x4026b5);
                }, _0x5585b9['Z'] = function() {
                    var _0x50b1cd = _0x248c7f;
                    return _0x339a99(_0x4bdabb['Na']) === _0x50b1cd(0x801);
                }, _0x5585b9['Y'] = function() {
                    var _0x2ec595 = _0x248c7f;
                    try {
                        return !!window[_0x2ec595(0x469)] || _0x5585b9['l'] != null && !!_0x27e576['Oa'](_0x5585b9['l'][_0x2ec595(0x41f)]['latitude'], _0x5585b9['l'][_0x2ec595(0x41f)][_0x2ec595(0x4a1)]);
                    } catch (_0x54ac1b) {
                        return !0x0;
                    }
                }, _0x5585b9['Pa'] = function() {
                    var _0x1003e2 = _0x248c7f;
                    _0x5585b9['j'] = Date[_0x1003e2(0x458)](), _0x5585b9['k'] = _0x5585b9['j'] - _0x5585b9['i'], _0x5585b9['o']['Qa'](_0x5585b9['j'], _0x5585b9['k']), _0x5585b9['s']['Qa'](_0x5585b9['j'], _0x5585b9['k']), _0x5585b9['i'] = _0x5585b9['j'];
                }, _0x5585b9['Ra'] = function() {
                    _0x5585b9['s']['Ra']();
                }, _0x5585b9;
            }());
        }
        var _0x5dce6e = _0x2b6b48(0x1d9),
            _0x14731d = 'https://resources.wormate.io',
            _0x5b90b6 = window[_0x2b6b48(0x577)];
        !_0x5b90b6 && (_0x5b90b6 = 'en');
        var _0xaeefae = undefined;
        switch (_0x5b90b6) {
            case 'uk':
                _0xaeefae = 'uk_UA';
                break;
            case 'de':
                _0xaeefae = _0x2b6b48(0x356);
                break;
            case 'fr':
                _0xaeefae = 'fr_FR';
                break;
                Ø¡ ØºØºØºØº;
            case 'ru':
                _0xaeefae = 'ru_RU';
                break;
            case 'es':
                _0xaeefae = _0x2b6b48(0x7f2);
                break;
            default:
                _0xaeefae = _0x2b6b48(0x60c);
        }
        moment[_0x2b6b48(0x3fe)](_0xaeefae);
        var _0xc58ba0, _0x4cdef7, _0x1b0c98, _0x44edc7, _0x59ca60 = undefined;
        _0x4cdef7 = (_0xc58ba0 = {
            'Yb': eval('PIXI;')
        })['Yb'][_0x2b6b48(0x450)], _0x1b0c98 = _0xc58ba0['Yb'][_0x2b6b48(0x39e)];
        var _0x2e6f07 = {
                'Zb': _0xc58ba0['Yb'][_0x2b6b48(0x65f)],
                '$b': _0xc58ba0['Yb'][_0x2b6b48(0x80d)],
                '_b': _0xc58ba0['Yb'][_0x2b6b48(0x3a1)],
                'ac': _0xc58ba0['Yb']['Renderer'],
                'bc': _0xc58ba0['Yb'][_0x2b6b48(0x42c)],
                'cc': _0xc58ba0['Yb'][_0x2b6b48(0x876)],
                'dc': _0xc58ba0['Yb']['Rectangle'],
                'ec': _0xc58ba0['Yb']['Sprite'],
                'fc': _0xc58ba0['Yb'][_0x2b6b48(0x20e)],
                'gc': _0xc58ba0['Yb'][_0x2b6b48(0x41d)],
                'hc': _0xc58ba0['Yb'][_0x2b6b48(0x416)],
                'ic': {
                    'jc': _0x4cdef7[_0x2b6b48(0x672)]
                },
                'kc': {
                    'lc': _0x1b0c98['REPEAT'],
                    'CLAMP': _0xc58ba0['Yb'][_0x2b6b48(0x39e)][_0x2b6b48(0x2ce)]
                }
            },
            _0xcafdef = Math['PI'] * 0x2;
        _0x44edc7 = [_0x2b6b48(0x1bd), _0x2b6b48(0x562), _0x2b6b48(0x38c), 'getFloat32', _0x2b6b48(0x80e)], DataView[_0x2b6b48(0x869)]['mc'] = function(_0x1cf629) {
            return this[_0x44edc7[0x0]](_0x1cf629);
        }, DataView['prototype']['nc'] = function(_0x573bf5) {
            return this[_0x44edc7[0x1]](_0x573bf5);
        }, DataView[_0x2b6b48(0x869)]['oc'] = function(_0x47e6f5) {
            return this[_0x44edc7[0x2]](_0x47e6f5);
        }, DataView[_0x2b6b48(0x869)]['pc'] = function(_0x1cdd34) {
            return this[_0x44edc7[0x3]](_0x1cdd34);
        }, DataView[_0x2b6b48(0x869)]['qc'] = function(_0x94ab13) {
            return this[_0x44edc7[0x4]](_0x94ab13);
        }, _0x2171ac['H']['P'] = ((_0xf8d884 = _0x158a86['c'][_0x2b6b48(0x577)]) || (_0xf8d884 = 'en'), _0xf8d884), _0x2171ac['H']['Q'] = (function() {
            var _0x55e6d8 = _0x2b6b48,
                _0x5baa74;
            switch (_0x2171ac['H']['P']) {
                case 'uk':
                    _0x5baa74 = _0x55e6d8(0x270);
                    break;
                case 'de':
                    _0x5baa74 = _0x55e6d8(0x356);
                    break;
                case 'fr':
                    _0x5baa74 = 'fr_FR';
                    break;
                case 'es':
                    _0x5baa74 = 'es_ES';
                    break;
                default:
                    _0x5baa74 = _0x55e6d8(0x60c);
            };
            return _0x5baa74;
        }()), moment[_0x2b6b48(0x3fe)](_0x2171ac['H']['Q']), ooo = null, _0x2171ac['S'] = 6.283185307179586, _0x2171ac['T'] = 3.141592653589793, _0x241bad = _0x158a86['c'][_0x2b6b48(0x355)], _0x239c2a['U'] = function(_0x79c207) {
            return _0x241bad[_0x79c207];
        }, _0x239c2a['V'] = function(_0x25fea8) {
            if (_0x25fea8[_0x2171ac['H']['P']]) return _0x25fea8[_0x2171ac['H']['P']];
            else return _0x25fea8['en'] ? _0x25fea8['en'] : _0x25fea8['x'];
        }, _0x239c2a['W'] = function(_0x1ef975) {
            return encodeURI(_0x1ef975);
        }, _0x239c2a['X'] = function(_0xe1fea0, _0x17f90d) {
            return setInterval(_0xe1fea0, _0x17f90d);
        }, _0x239c2a['Y'] = function(_0x1c025e, _0x588fd9) {
            return setTimeout(_0x1c025e, _0x588fd9);
        }, _0x239c2a['Z'] = function(_0x3e4a44) {
            clearTimeout(_0x3e4a44);
        }, _0x239c2a['$'] = function(_0x503022) {
            var _0x22e305 = _0x2b6b48,
                _0x536f0c = (_0x239c2a['_'](_0x503022) % 0x3c)[_0x22e305(0x699)](),
                _0x3e3210 = (_0x239c2a['_'](_0x503022 / 0x3c) % 0x3c)[_0x22e305(0x699)](),
                _0x56d590 = (_0x239c2a['_'](_0x503022 / 0xe10) % 0x18)[_0x22e305(0x699)](),
                _0x3f8a83 = _0x239c2a['_'](_0x503022 / 0x15180)[_0x22e305(0x699)](),
                _0x2328a2 = _0x239c2a['U']('util.time.days'),
                _0x35af44 = _0x239c2a['U'](_0x22e305(0x3d0)),
                _0x237206 = _0x239c2a['U'](_0x22e305(0x311)),
                _0xfe666a = _0x239c2a['U'](_0x22e305(0x6c5));
            if (_0x3f8a83 > 0x0) return _0x3f8a83 + '\x20' + _0x2328a2 + '\x20' + _0x56d590 + '\x20' + _0x35af44 + '\x20' + _0x3e3210 + '\x20' + _0x237206 + '\x20' + _0x536f0c + '\x20' + _0xfe666a;
            else {
                if (_0x56d590 > 0x0) return _0x56d590 + '\x20' + _0x35af44 + '\x20' + _0x3e3210 + '\x20' + _0x237206 + '\x20' + _0x536f0c + '\x20' + _0xfe666a;
                else return _0x3e3210 > 0x0 ? _0x3e3210 + '\x20' + _0x237206 + '\x20' + _0x536f0c + '\x20' + _0xfe666a : _0x536f0c + '\x20' + _0xfe666a;
            }
        }, _0x239c2a['aa'] = function(_0x553089) {
            var _0x575fee = _0x2b6b48;
            return _0x553089[_0x575fee(0x461)](_0x575fee(0x3bb)) ? _0x553089['replaceAll'](_0x575fee(0x3bb), _0x575fee(0x47a)) : _0x553089;
        }, _0x239c2a['ba'] = function(_0x48a9a9, _0x266d82, _0xcddac6) {
            var _0x58f2bb = _0x2b6b48,
                _0x3ded99 = _0x158a86['d'][_0x58f2bb(0x706)](_0x58f2bb(0x5fb)),
                _0x12a7ca = !0x0;
            f3(_0x266d82) !== _0x58f2bb(0x328) && _0x266d82 !== null && (f3(_0x266d82['id']) !== _0x58f2bb(0x328) && (_0x3ded99['id'] = _0x266d82['id']), f3(_0x266d82['async']) !== _0x58f2bb(0x328) && _0x266d82[_0x58f2bb(0x86e)] && (_0x3ded99['async'] = _0x58f2bb(0x86e)), f3(_0x266d82[_0x58f2bb(0x5ee)]) !== _0x58f2bb(0x328) && _0x266d82[_0x58f2bb(0x5ee)] && (_0x3ded99[_0x58f2bb(0x5ee)] = _0x58f2bb(0x5ee)), f3(_0x266d82['crossorigin']) !== _0x58f2bb(0x328) && (_0x3ded99['crossorigin'] = _0x266d82[_0x58f2bb(0x5c4)])), _0x3ded99['type'] = 'text/javascript', _0x3ded99[_0x58f2bb(0x440)] = _0x48a9a9, _0xcddac6 && (_0x3ded99[_0x58f2bb(0x540)] = _0x3ded99[_0x58f2bb(0x1cb)] = function() {
                var _0x3b992a = _0x58f2bb;
                _0x12a7ca = !0x1;
                try {
                    _0xcddac6();
                } catch (_0x35e0d7) {};
                _0x3ded99[_0x3b992a(0x540)] = _0x3ded99[_0x3b992a(0x1cb)] = null;
            }), (_0x158a86['d'][_0x58f2bb(0x563)] || _0x158a86['d'][_0x58f2bb(0x281)](_0x58f2bb(0x563))[0x0])[_0x58f2bb(0x41b)](_0x3ded99);
        }, _0x239c2a['ca'] = function(_0x3cdef5, _0x25d7d7) {
            var _0x24ea22 = _0x2b6b48,
                _0x48321c = _0x25d7d7;
            return _0x48321c[_0x24ea22(0x869)] = Object[_0x24ea22(0x4b7)](_0x3cdef5['prototype']), _0x48321c['prototype'][_0x24ea22(0x5f5)] = _0x48321c, _0x48321c['parent'] = _0x3cdef5, _0x48321c;
        }, _0x239c2a['da'] = function(_0x86953c) {
            return (_0x86953c %= _0x2171ac['S']) < 0x0 ? _0x86953c + _0x2171ac['S'] : _0x86953c;
        }, _0x239c2a['ea'] = function(_0x58d483, _0x28e214, _0x17b6de) {
            return _0x239c2a['fa'](_0x17b6de, _0x58d483, _0x28e214);
        }, _0x239c2a['fa'] = function(_0x344909, _0x341db1, _0x227fdb) {
            var _0x185bf1 = _0x2b6b48;
            if (_0x344909 > _0x227fdb) return _0x227fdb;
            else {
                if (_0x344909 < _0x341db1) return _0x341db1;
                else return Number[_0x185bf1(0x5c5)](_0x344909) ? _0x344909 : (_0x341db1 + _0x227fdb) * 0.5;
            }
        }, _0x239c2a['ga'] = function(_0x43a4a5, _0x4b4375, _0x17e24d, _0x5d5d15) {
            return _0x4b4375 > _0x43a4a5 ? _0x239c2a['ha'](_0x4b4375, _0x43a4a5 + _0x17e24d * _0x5d5d15) : _0x239c2a['ia'](_0x4b4375, _0x43a4a5 - _0x17e24d * _0x5d5d15);
        }, _0x239c2a['ja'] = function(_0x49e1b2, _0x3a2c7b, _0x562214, _0x1d77ab, _0x33f822) {
            var _0x5d40fb = _0x2b6b48;
            return _0x3a2c7b + (_0x49e1b2 - _0x3a2c7b) * Math[_0x5d40fb(0x7c7)](0x1 - _0x1d77ab, _0x562214 / _0x33f822);
        }, _0x239c2a['ka'] = function(_0x3dcc29, _0xa50a54, _0x23748e) {
            return _0x3dcc29 - (_0x3dcc29 - _0xa50a54) * _0x23748e;
        }, _0x239c2a['la'] = function(_0x2e3e8b, _0x3438de) {
            var _0x12d15c = _0x2b6b48;
            return Math[_0x12d15c(0x36f)](_0x2e3e8b * _0x2e3e8b + _0x3438de * _0x3438de);
        }, _0x239c2a['ma'] = function() {
            return Math['random']();
        }, _0x239c2a['_'] = function(_0x162176) {
            var _0x3452e3 = _0x2b6b48;
            return Math[_0x3452e3(0x294)](_0x162176);
        }, _0x239c2a['na'] = function(_0x16cdf7) {
            return Math['abs'](_0x16cdf7);
        }, _0x239c2a['ha'] = function(_0x151006, _0x1e1ef1) {
            return Math['min'](_0x151006, _0x1e1ef1);
        }, _0x239c2a['ia'] = function(_0x2c33d4, _0x2b8e7b) {
            var _0x4b4f0d = _0x2b6b48;
            return Math[_0x4b4f0d(0x656)](_0x2c33d4, _0x2b8e7b);
        }, _0x239c2a['oa'] = function(_0x16dd45) {
            var _0x333672 = _0x2b6b48;
            return Math[_0x333672(0x73c)](_0x16dd45);
        }, _0x239c2a['pa'] = function(_0x1eb38d) {
            var _0x2c31c0 = _0x2b6b48;
            return Math[_0x2c31c0(0x802)](_0x1eb38d);
        }, _0x239c2a['qa'] = function(_0xfc435c) {
            return Math['sqrt'](_0xfc435c);
        }, _0x239c2a['ra'] = function(_0x3bb166, _0x241bd9) {
            var _0x312e7f = _0x2b6b48;
            return Math[_0x312e7f(0x7c7)](_0x3bb166, _0x241bd9);
        }, _0x239c2a['sa'] = function(_0x269231) {
            return Math['atan'](_0x269231);
        }, _0x239c2a['ta'] = function(_0x3741e7, _0x4aafdb) {
            var _0x24c8ad = _0x2b6b48;
            return Math[_0x24c8ad(0x37a)](_0x3741e7, _0x4aafdb);
        }, _0x239c2a['ua'] = function(_0x2d53aa, _0x4be725, _0x3f62e1, _0xc80416) {
            var _0x2de557 = _0x2b6b48,
                _0x1cc70f = _0x4be725 + _0xc80416;
            if (_0x2d53aa == null) throw TypeError();;
            var _0x393683 = _0x2d53aa[_0x2de557(0x883)] >>> 0x0,
                _0x15009e = _0x3f62e1 >> 0x0,
                _0x1a8691 = _0x15009e < 0x0 ? Math[_0x2de557(0x656)](_0x393683 + _0x15009e, 0x0) : Math[_0x2de557(0x4c0)](_0x15009e, _0x393683),
                _0x419646 = _0x4be725 >> 0x0,
                _0x541beb = _0x419646 < 0x0 ? Math[_0x2de557(0x656)](_0x393683 + _0x419646, 0x0) : Math[_0x2de557(0x4c0)](_0x419646, _0x393683),
                _0x3a9f5f = _0x1cc70f === undefined ? _0x393683 : _0x1cc70f >> 0x0,
                _0x4af945 = Math[_0x2de557(0x4c0)]((_0x3a9f5f < 0x0 ? Math[_0x2de557(0x656)](_0x393683 + _0x3a9f5f, 0x0) : Math['min'](_0x3a9f5f, _0x393683)) - _0x541beb, _0x393683 - _0x1a8691),
                _0x25837a = 0x1;
            for (_0x541beb < _0x1a8691 && _0x1a8691 < _0x541beb + _0x4af945 && (_0x25837a = -0x1, _0x541beb += _0x4af945 - 0x1, _0x1a8691 += _0x4af945 - 0x1); _0x4af945 > 0x0;) {
                _0x541beb in _0x2d53aa ? _0x2d53aa[_0x1a8691] = _0x2d53aa[_0x541beb] : delete _0x2d53aa[_0x1a8691], _0x541beb += _0x25837a, _0x1a8691 += _0x25837a, _0x4af945--;
            };
            return _0x2d53aa;
        }, _0x239c2a['va'] = function(_0x2bebf8, _0x3ceb68) {
            return _0x2bebf8 + (_0x3ceb68 - _0x2bebf8) * _0x239c2a['ma']();
        }, _0x239c2a['wa'] = function(_0x4f6f09) {
            var _0x562771 = _0x2b6b48;
            return _0x4f6f09[parseInt(_0x239c2a['ma']() * _0x4f6f09[_0x562771(0x883)])];
        }, _0x36d3e9 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'][_0x2b6b48(0x642)](function(_0x11dd63) {
            var _0x2bc627 = _0x2b6b48;
            return _0x11dd63[_0x2bc627(0x64d)](0x0);
        }), _0x239c2a['xa'] = function(_0x2238f3) {
            var _0xcf66d6 = _0x2b6b48;
            f3(_0x2238f3) == _0xcf66d6(0x328) && (_0x2238f3 = 0x10);
            var _0x3301a9 = '';
            for (var _0x3605da = 0x0; _0x3605da < _0x2238f3; _0x3605da++) {
                _0x3301a9 += String[_0xcf66d6(0x77a)](_0x36d3e9[_0x239c2a['_'](_0x239c2a['ma']() * _0x36d3e9[_0xcf66d6(0x883)])]);
            };
            return _0x3301a9;
        }, _0x239c2a['ya'] = function(_0x248f3c, _0x2283f6, _0x3bd9f8) {
            var _0x3bfa78 = _0x2b6b48,
                _0x46ad4d = _0x3bd9f8 * (0x1 - _0x2283f6 * 0.5),
                _0x3e70a1 = Math[_0x3bfa78(0x4c0)](_0x46ad4d, 0x1 - _0x46ad4d);
            return _0x239c2a['za'](_0x248f3c, _0x3e70a1 ? (_0x3bd9f8 - _0x46ad4d) / _0x3e70a1 : 0x0, _0x46ad4d);
        }, _0x239c2a['za'] = function(_0x333998, _0x3f82f9, _0x5702c8) {
            var _0x5af36e = (0x1 - _0x239c2a['na'](_0x5702c8 * 0x2 - 0x1)) * _0x3f82f9,
                _0x92791e = _0x5af36e * (0x1 - _0x239c2a['na'](_0x333998 / 0x3c % 0x2 - 0x1)),
                _0x122f87 = _0x5702c8 - _0x5af36e / 0x2;
            if (_0x333998 >= 0x0 && _0x333998 < 0x3c) return [_0x122f87 + _0x5af36e, _0x122f87 + _0x92791e, _0x122f87];
            else {
                if (_0x333998 >= 0x3c && _0x333998 < 0x78) return [_0x122f87 + _0x92791e, _0x122f87 + _0x5af36e, _0x122f87];
                else {
                    if (_0x333998 >= 0x78 && _0x333998 < 0xb4) return [_0x122f87, _0x122f87 + _0x5af36e, _0x122f87 + _0x92791e];
                    else {
                        if (_0x333998 >= 0xb4 && _0x333998 < 0xf0) return [_0x122f87, _0x122f87 + _0x92791e, _0x122f87 + _0x5af36e];
                        else return _0x333998 >= 0xf0 && _0x333998 < 0x12c ? [_0x122f87 + _0x92791e, _0x122f87, _0x122f87 + _0x5af36e] : [_0x122f87 + _0x5af36e, _0x122f87, _0x122f87 + _0x92791e];
                    }
                }
            }
        }, _0x239c2a['Aa'] = function(_0x2fe78a, _0x4cd82f, _0x43b51d) {
            var _0x28a9aa = _0x2b6b48;
            $[_0x28a9aa(0x5d3)](_0x2fe78a)['fail'](_0x4cd82f)[_0x28a9aa(0x7b1)](_0x43b51d);
        }, _0x239c2a['Ba'] = function(_0x359d4c, _0x5e3f1b, _0x7c7eef, _0x19a85c) {
            var _0x53564d = _0x2b6b48,
                _0x5f3374 = {
                    'type': _0x53564d(0x35e),
                    'url': _0x359d4c
                },
                _0x36ee59 = {
                    'responseType': 'arraybuffer'
                };
            _0x36ee59[_0x53564d(0x5c6)] = function(_0x31c60a) {
                var _0x4daf66 = _0x53564d;
                _0x31c60a[_0x4daf66(0x3c8)] && _0x19a85c(_0x31c60a['loaded'] / _0x31c60a[_0x4daf66(0x7d6)] * 0x64);
            }, _0x5f3374[_0x53564d(0x827)] = _0x36ee59, $[_0x53564d(0x2e7)](_0x5f3374)[_0x53564d(0x342)](_0x5e3f1b)[_0x53564d(0x7b1)](_0x7c7eef);
        }, _0x239c2a['Ca'] = function() {
            var _0x1dff2c = _0x2b6b48;
            return Date[_0x1dff2c(0x458)]();
        }, _0x239c2a['Da'] = function(_0x16f198, _0x616dc7) {
            var _0x50f848 = _0x2b6b48;
            for (var _0x3dd235 in _0x16f198) {
                _0x16f198[_0x50f848(0x6f6)](_0x3dd235) && _0x616dc7(_0x3dd235, _0x16f198[_0x3dd235]);
            }
        }, _0x239c2a['Ea'] = function(_0x1b3f20) {
            var _0x4ab54c = _0x2b6b48;
            for (var _0x398eaf = _0x1b3f20[_0x4ab54c(0x883)] - 0x1; _0x398eaf > 0x0; _0x398eaf--) {
                var _0x41abc9 = _0x239c2a['_'](_0x239c2a['ma']() * (_0x398eaf + 0x1)),
                    _0x321bce = _0x1b3f20[_0x398eaf];
                _0x1b3f20[_0x398eaf] = _0x1b3f20[_0x41abc9], _0x1b3f20[_0x41abc9] = _0x321bce;
            };
            return _0x1b3f20;
        }, _0x158a86['Fa'] = _0x239c2a['b'](_0x2b6b48(0x1c9)), _0x158a86['Ga'] = _0x239c2a['b'](_0x2b6b48(0x36a)), _0x158a86['Ha'] = (function() {
            var _0x3c4f5c = _0x2b6b48;

            function _0x2343c0(_0x592150) {
                this['Ia'] = _0x592150, this['Ja'] = 0x0;
            }
            var _0x29a922 = _0x3c4f5c(0x1bd);
            _0x2343c0['prototype']['Ka'] = function() {
                var _0x4dbea1 = this['Ia'][_0x29a922](this['Ja']);
                return this['Ja'] += 0x1, _0x4dbea1;
            };
            var _0x47bec4 = _0x3c4f5c(0x562);
            _0x2343c0[_0x3c4f5c(0x869)]['La'] = function() {
                var _0x3c1cf5 = this['Ia'][_0x47bec4](this['Ja']);
                return this['Ja'] += 0x2, _0x3c1cf5;
            };
            var _0x519628 = _0x3c4f5c(0x38c);
            _0x2343c0['prototype']['Ma'] = function() {
                var _0x2cee0d = this['Ia'][_0x519628](this['Ja']);
                return this['Ja'] += 0x4, _0x2cee0d;
            };
            var _0x616a42 = _0x3c4f5c(0x5e0);
            return _0x2343c0[_0x3c4f5c(0x869)]['Na'] = function() {
                var _0x14334e = this['Ia'][_0x616a42](this['Ja']);
                return this['Ja'] += 0x4, _0x14334e;
            }, _0x2343c0;
        }()), _0x158a86['Oa'] = (function() {
            var _0x1e8c90 = _0x2b6b48;

            function _0xcb647b(_0x3ff57f) {
                this['Ia'] = _0x3ff57f, this['Ja'] = 0x0;
            }
            var _0x282d5f = _0x1e8c90(0x7de);
            _0xcb647b[_0x1e8c90(0x869)]['Pa'] = function(_0x18b679) {
                this['Ia'][_0x282d5f](this['Ja'], _0x18b679), this['Ja'] += 0x1;
            };
            var _0x52bff7 = _0x1e8c90(0x4ef);
            return _0xcb647b[_0x1e8c90(0x869)]['Qa'] = function(_0x4809d7) {
                this['Ia'][_0x52bff7](this['Ja'], _0x4809d7), this['Ja'] += 0x2;
            }, _0xcb647b;
        }()), _0x239c2a['Ra'] = function() {
            var _0x2c6563 = _0x2b6b48,
                _0x4d888d = !0x1;

            function _0x595632() {}
            var _0x53e4ba = {},
                _0x14d93b = '1eaom01c3pxu9wd3',
                _0x2f1b85 = $('#' + _0x14d93b),
                _0x2a2172 = _0x2c6563(0x366),
                _0x3d949f = $('#' + _0x2a2172);
            return $(_0x2c6563(0x551))['click'](function() {
                var _0x2e0ea2 = _0x2c6563;
                _0x3d949f[_0x2e0ea2(0x671)](0x1f4), _0x595632(!0x1);
            }), _0x53e4ba['Sa'] = function(_0x576ab7) {
                var _0x3829ef = _0x2c6563;
                _0x595632 = _0x576ab7;
                if (!_0x4d888d) try {
                    aiptag['cmd'][_0x3829ef(0x6d7)][_0x3829ef(0x31a)](function() {
                        var _0x40341d = _0x3829ef,
                            _0x1cc5f5 = {
                                'AD_WIDTH': 0x3c0,
                                'AD_HEIGHT': 0x21c,
                                'AD_FULLSCREEN': !0x0,
                                'AD_CENTERPLAYER': !0x1
                            };
                        _0x1cc5f5[_0x40341d(0x1f4)] = _0x40341d(0x501), _0x1cc5f5['PREROLL_ELEM'] = function() {
                            return _0x158a86['d']['getElementById'](_0x14d93b);
                        }, _0x1cc5f5[_0x40341d(0x74d)] = function(_0xaf8960) {
                            var _0x360707 = _0x40341d;
                            _0x595632(!0x0), _0x39b888['f']['h'](_0x2f1b85, 0x1), _0x39b888['f']['h'](_0x3d949f, 0x1);
                            try {
                                ga(_0x360707(0x55a), 'event', _0x360707(0x581), _0x2171ac['H']['I'] + _0x360707(0x82a));
                            } catch (_0x35d7a0) {}
                        }, _0x1cc5f5[_0x40341d(0x5f6)] = function() {}, aiptag[_0x40341d(0x703)] = new aipPlayer(_0x1cc5f5);
                    }), _0x4d888d = !0x0;
                } catch (_0x37c2f1) {}
            }, _0x53e4ba['Ta'] = function() {
                var _0x5ca22c = _0x2c6563;
                if (f3(aiptag['adplayer']) !== 'undefined') {
                    try {
                        ga(_0x5ca22c(0x55a), 'event', _0x5ca22c(0x581), _0x2171ac['H']['I'] + _0x5ca22c(0x86a));
                    } catch (_0x34023c) {};
                    _0x39b888['f']['g'](_0x2f1b85, 0x1), !_0x2cbd14['on'] && aiptag[_0x5ca22c(0x81c)][_0x5ca22c(0x6d7)]['push'](function() {
                        var _0x348e47 = _0x5ca22c;
                        aiptag[_0x348e47(0x703)][_0x348e47(0x3da)]();
                    });
                } else {
                    try {
                        ga(_0x5ca22c(0x55a), _0x5ca22c(0x4d1), _0x5ca22c(0x424), _0x2171ac['H']['I'] + _0x5ca22c(0x299));
                    } catch (_0x3c3e86) {};
                    (function _0x5a2aa3() {
                        var _0x29c898 = _0x5ca22c;
                        $(_0x29c898(0x2f5))[_0x29c898(0x2a5)](_0x239c2a['U'](_0x29c898(0x1f3))), $(_0x29c898(0x54b))[_0x29c898(0x2a5)](_0x239c2a['U'](_0x29c898(0x576))), $(_0x29c898(0x5e1))['text'](_0x239c2a['U'](_0x29c898(0x1cd))), $(_0x29c898(0x599))[_0x29c898(0x2a5)](_0x239c2a['U'](_0x29c898(0x63c))[_0x29c898(0x5b7)](_0x29c898(0x53a), 0xa)), $(_0x29c898(0x58c))[_0x29c898(0x2a5)](_0x239c2a['U'](_0x29c898(0x2e4))), _0x39b888['f']['h']($(_0x29c898(0x551)), 0x1), _0x39b888['f']['g'](_0x3d949f, 0x1f4);
                        var _0x3dff5b = 0xa;
                        for (var _0x4d29b1 = 0x0; _0x4d29b1 < 0xa; _0x4d29b1++) {
                            _0x239c2a['Y'](function() {
                                var _0x481b57 = _0x29c898;
                                _0x3dff5b--, $(_0x481b57(0x599))[_0x481b57(0x2a5)](_0x239c2a['U'](_0x481b57(0x63c))[_0x481b57(0x5b7)](_0x481b57(0x53a), _0x3dff5b));
                                if (_0x3dff5b === 0x0) {
                                    try {
                                        ga(_0x481b57(0x55a), _0x481b57(0x4d1), _0x481b57(0x424), _0x2171ac['H']['I'] + _0x481b57(0x82a));
                                    } catch (_0x51fb42) {};
                                    _0x39b888['f']['g']($(_0x481b57(0x551)), 0xc8);
                                }
                            }, (_0x4d29b1 + 0x1) * 0x3e8);
                        }
                    }());
                }
            }, _0x53e4ba;
        }, _0x239c2a['Ua'] = function(_0x2e97f3, _0xb8d180) {
            var _0x538772 = $('#' + _0x2e97f3),
                _0x245a8d = _0xb8d180,
                _0x3bfdc1 = {},
                _0x1c8800 = !0x1;
            return _0x3bfdc1['Sa'] = function() {
                var _0x17a0ec = _0x563d;
                if (!_0x1c8800) {
                    _0x538772[_0x17a0ec(0x629)](), _0x538772[_0x17a0ec(0x4e4)]('<div\x20id=\x27' + _0x245a8d + _0x17a0ec(0x269));
                    try {
                        try {
                            ga(_0x17a0ec(0x55a), _0x17a0ec(0x4d1), _0x17a0ec(0x650), _0x2171ac['H']['I'] + '_display');
                        } catch (_0x3e1b46) {};
                        !_0x2cbd14['on'] && aiptag[_0x17a0ec(0x81c)][_0x17a0ec(0x288)][_0x17a0ec(0x31a)](function() {
                            aipDisplayTag['display'](_0x245a8d);
                        }), _0x1c8800 = !0x0;
                    } catch (_0xf3c2f4) {}
                }
            }, _0x3bfdc1['Va'] = function() {
                var _0x5d829c = _0x563d;
                try {
                    try {
                        ga(_0x5d829c(0x55a), _0x5d829c(0x4d1), _0x5d829c(0x650), _0x2171ac['H']['I'] + _0x5d829c(0x344));
                    } catch (_0x5b82e7) {};
                    !_0x2cbd14['on'] && aiptag[_0x5d829c(0x81c)]['display']['push'](function() {
                        var _0x101a93 = _0x5d829c;
                        aipDisplayTag[_0x101a93(0x288)](_0x245a8d);
                    });
                } catch (_0x555754) {}
            }, _0x3bfdc1;
        }, _0x158a86['Wa'] = (function() {
            var _0x995ed7 = _0x2b6b48;

            function _0x34de97(_0x368fa2, _0xd6c3bd, _0x2f94b6, _0x3d06ad, _0x9df4c7, _0x4d38c0, _0x4776b3, _0x2ef1a4, _0x237c7b, _0x5bf8b5) {
                this['Xa'] = _0x368fa2, this['Ya'] = _0xd6c3bd, this['Za'] = null, this['$a'] = !0x1, this['_a'] = _0x2f94b6, this['ab'] = _0x3d06ad, this['bb'] = _0x9df4c7, this['cb'] = _0x4d38c0, this['db'] = _0x4776b3 || (_0x237c7b || _0x9df4c7) / 0x2, this['eb'] = _0x2ef1a4 || (_0x5bf8b5 || _0x4d38c0) / 0x2, this['fb'] = _0x237c7b || _0x9df4c7, this['gb'] = _0x5bf8b5 || _0x4d38c0, this['hb'] = 0.5 - (this['db'] - this['fb'] * 0.5) / this['bb'], this['ib'] = 0.5 - (this['eb'] - this['gb'] * 0.5) / this['cb'], this['jb'] = this['bb'] / this['fb'], this['kb'] = this['cb'] / this['gb'];
            }
            return _0x34de97['lb'] = function() {
                return new _0x34de97('', null, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0);
            }, _0x34de97['mb'] = function(_0x56b62e, _0x405d0d, _0x55b3f4) {
                return new _0x34de97(_0x56b62e, _0x405d0d, _0x55b3f4['x'], _0x55b3f4['y'], _0x55b3f4['w'], _0x55b3f4['h'], _0x55b3f4['px'], _0x55b3f4['py'], _0x55b3f4['pw'], _0x55b3f4['ph']);
            }, _0x34de97[_0x995ed7(0x869)]['nb'] = function() {
                return !this['$a'] && (this['Ya'] != null && (this['Za'] = new _0x39b888['k']['n'](this['Ya'], new _0x39b888['k']['r'](this['_a'], this['ab'], this['bb'], this['cb']))), this['$a'] = !0x0), this['Za'];
            }, _0x34de97['prototype']['ob'] = function() {
                var _0x3b113b = _0x995ed7;
                this['Za'] != null && this['Za'][_0x3b113b(0x238)]();
            }, _0x34de97;
        }()), _0x158a86['pb'] = (function() {
            var _0xdac503 = _0x2b6b48;

            function _0x4e5057(_0x405820, _0x498f00, _0x24cf8d, _0x25bc29, _0x4e7678, _0x34dc31, _0x3c5601, _0x1764b0, _0xcfab8, _0x2ed54d, _0xe298bd, _0x4e7679, _0x219af7, _0x26d1e6, _0x5194cb, _0x214ca9, _0x124e30, _0x28706d) {
                this['qb'] = _0x405820, this['rb'] = _0x498f00, this['sb'] = _0x24cf8d, this['tb'] = _0x25bc29, this['ub'] = _0x4e7678, this['vb'] = _0x34dc31, this['wb'] = _0x3c5601, this['xb'] = _0x1764b0, this['yb'] = _0xcfab8, this['zb'] = _0x2ed54d, this['Ab'] = _0xe298bd, this['Bb'] = _0x4e7679, this['Cb'] = _0x219af7, this['Db'] = _0x26d1e6, this['Eb'] = _0x5194cb, this['Fb'] = _0x214ca9, this['Gb'] = _0x124e30, this['Hb'] = _0x28706d;
            }
            return _0x4e5057[_0xdac503(0x869)]['ob'] = function() {
                var _0x2a9bb0 = _0xdac503;
                for (var _0x34d6a1 = 0x0; _0x34d6a1 < this['qb']['length']; _0x34d6a1++) {
                    this['qb'][_0x34d6a1][_0x2a9bb0(0x526)](), this['qb'][_0x34d6a1][_0x2a9bb0(0x238)]();
                };
                this['qb'] = [];
                for (var _0x4be43e = 0x0; _0x4be43e < this['rb'][_0x2a9bb0(0x883)]; _0x4be43e++) {
                    this['rb'][_0x4be43e]['ob']();
                };
                this['rb'] = [];
            }, _0x4e5057['lb'] = function() {
                var _0x328067 = new _0x4e5057['Ib'](_0x158a86['Kb']['Jb'], _0x158a86['Kb']['Jb']),
                    _0x417b04 = new _0x4e5057['Lb']('#ffffff', [_0x158a86['Kb']['Jb']], [_0x158a86['Kb']['Jb']]);
                return new _0x4e5057([], [], {}, _0x328067, {}, new _0x4e5057['Mb'](_0x158a86['Kb']['Jb']), {}, _0x417b04, {}, new _0x4e5057['Nb']('', _0x417b04, _0x328067), {}, new _0x4e5057['Ob']([_0x158a86['Kb']['Jb']]), {}, new _0x4e5057['Ob']([_0x158a86['Kb']['Jb']]), {}, new _0x4e5057['Ob']([_0x158a86['Kb']['Jb']]), {}, new _0x4e5057['Ob']([_0x158a86['Kb']['Jb']]));
            }, _0x4e5057['Pb'] = function(_0x56ae27, _0x337766, _0x4c6dff, _0x4ec6b4) {
                var _0x4d9642 = _0xdac503,
                    _0x1991d5 = new _0x4e5057['Ib'](_0x158a86['Kb']['Jb'], _0x158a86['Kb']['Jb']),
                    _0x5903e3 = new _0x4e5057['Lb'](_0x4d9642(0x302), [_0x56ae27], [_0x337766]);
                return new _0x4e5057([], [], {}, _0x1991d5, {}, new _0x4e5057['Mb'](_0x158a86['Kb']['Jb']), {}, _0x5903e3, {}, new _0x4e5057['Nb']('', _0x5903e3, _0x1991d5), {}, new _0x4e5057['Ob']([_0x4c6dff]), {}, new _0x4e5057['Ob']([_0x4ec6b4]), {}, new _0x4e5057['Ob']([_0x158a86['Kb']['Jb']]), {}, new _0x4e5057['Ob']([_0x158a86['Kb']['Jb']]));
            }, _0x4e5057['Qb'] = function(_0xe931bf, _0x258d18, _0x551ee7, _0x135219) {
                var _0x5b6944 = _0xdac503,
                    _0x5cf4f1 = {};
                _0x239c2a['Da'](_0xe931bf['colorDict'], function(_0x1b9925, _0x2995f6) {
                    _0x5cf4f1[_0x1b9925] = '#' + _0x2995f6;
                });
                var _0x16ebde = {};
                for (var _0x24a18b = 0x0; _0x24a18b < _0xe931bf[_0x5b6944(0x2c9)][_0x5b6944(0x883)]; _0x24a18b++) {
                    var _0x13b492 = _0xe931bf[_0x5b6944(0x2c9)][_0x24a18b];
                    _0x16ebde[_0x13b492['id']] = new _0x4e5057['Lb'](_0x5cf4f1[_0x13b492[_0x5b6944(0x3d8)]], _0x13b492[_0x5b6944(0x740)][_0x5b6944(0x642)](function(_0x2e1b6d) {
                        return _0x258d18[_0x2e1b6d];
                    }), _0x13b492['glow'][_0x5b6944(0x642)](function(_0x2a211f) {
                        return _0x258d18[_0x2a211f];
                    }));
                };
                var _0x860c, _0xee940a = _0xe931bf[_0x5b6944(0x5eb)];
                _0x860c = new _0x4e5057['Lb'](_0x5cf4f1[_0xee940a[_0x5b6944(0x3d8)]], _0xee940a['base'][_0x5b6944(0x642)](function(_0x478aed) {
                    return _0x258d18[_0x478aed];
                }), _0xee940a[_0x5b6944(0x4a3)]['map'](function(_0x187df1) {
                    return _0x258d18[_0x187df1];
                }));
                var _0x195e6e = {};
                _0x239c2a['Da'](_0xe931bf['eyesDict'], function(_0x3ac0e8, _0x20469f) {
                    var _0x16ec3a = _0x5b6944;
                    _0x195e6e[parseInt(_0x3ac0e8)] = new _0x4e5057['Ob'](_0x20469f['base'][_0x16ec3a(0x642)](function(_0x179282) {
                        var _0x19cfd3 = _0x16ec3a;
                        return _0x258d18[_0x179282[_0x19cfd3(0x20a)]];
                    }));
                });
                var _0x2486af = new _0x4e5057['Ob'](_0xe931bf[_0x5b6944(0x256)][_0x5b6944(0x740)][_0x5b6944(0x642)](function(_0xdf0a92) {
                        var _0x5f27fa = _0x5b6944;
                        return _0x258d18[_0xdf0a92[_0x5f27fa(0x20a)]];
                    })),
                    _0x30ed42 = {};
                _0x239c2a['Da'](_0xe931bf['mouthDict'], function(_0xebf5c2, _0x8ba633) {
                    var _0x178a30 = _0x5b6944;
                    _0x30ed42[parseInt(_0xebf5c2)] = new _0x4e5057['Ob'](_0x8ba633[_0x178a30(0x740)]['map'](function(_0x22a71a) {
                        var _0x1785f4 = _0x178a30;
                        return _0x258d18[_0x22a71a[_0x1785f4(0x20a)]];
                    }));
                });
                var _0x396836 = new _0x4e5057['Ob'](_0xe931bf[_0x5b6944(0x796)][_0x5b6944(0x740)][_0x5b6944(0x642)](function(_0x2dd254) {
                        var _0xedb4c4 = _0x5b6944;
                        return _0x258d18[_0x2dd254[_0xedb4c4(0x20a)]];
                    })),
                    _0x5c68d2 = {};
                _0x239c2a['Da'](_0xe931bf[_0x5b6944(0x4f2)], function(_0x2d1035, _0x50518) {
                    var _0x4869e5 = _0x5b6944;
                    _0x5c68d2[parseInt(_0x2d1035)] = new _0x4e5057['Ob'](_0x50518[_0x4869e5(0x740)][_0x4869e5(0x642)](function(_0x105bb2) {
                        var _0x14ff08 = _0x4869e5;
                        return _0x258d18[_0x105bb2[_0x14ff08(0x20a)]];
                    }));
                });
                var _0x4592b0 = new _0x4e5057['Ob'](_0xe931bf[_0x5b6944(0x1dc)]['base'][_0x5b6944(0x642)](function(_0x318282) {
                        var _0x57e7d3 = _0x5b6944;
                        return _0x258d18[_0x318282[_0x57e7d3(0x20a)]];
                    })),
                    _0x23c157 = {};
                _0x239c2a['Da'](_0xe931bf['glassesDict'], function(_0x24c3b3, _0x302b69) {
                    var _0x3afe0b = _0x5b6944;
                    _0x23c157[parseInt(_0x24c3b3)] = new _0x4e5057['Ob'](_0x302b69[_0x3afe0b(0x740)][_0x3afe0b(0x642)](function(_0x591503) {
                        var _0x43b444 = _0x3afe0b;
                        return _0x258d18[_0x591503[_0x43b444(0x20a)]];
                    }));
                });
                var _0x1b0e7e = new _0x4e5057['Ob'](_0xe931bf['glassesUnknown'][_0x5b6944(0x740)][_0x5b6944(0x642)](function(_0x15981d) {
                        return _0x258d18[_0x15981d['region']];
                    })),
                    _0x2e092d = {};
                _0x239c2a['Da'](_0xe931bf[_0x5b6944(0x520)], function(_0xb24253, _0x54dcd7) {
                    var _0x57f3ae = _0x5b6944;
                    _0x2e092d[_0xb24253 = parseInt(_0xb24253)] = new _0x4e5057['Ib'](_0x258d18[_0x54dcd7[_0x57f3ae(0x740)]], _0x258d18[_0x54dcd7['glow']]);
                });
                var _0x3cff0d, _0x4320b1 = _0xe931bf['portionUnknown'];
                _0x3cff0d = new _0x4e5057['Ib'](_0x258d18[_0x4320b1[_0x5b6944(0x740)]], _0x258d18[_0x4320b1[_0x5b6944(0x4a3)]]);
                var _0x14111d = {};
                _0x239c2a['Da'](_0xe931bf[_0x5b6944(0x65b)], function(_0x3753ac, _0x8ac55a) {
                    var _0x332275 = _0x5b6944;
                    _0x14111d[_0x3753ac = parseInt(_0x3753ac)] = new _0x4e5057['Mb'](_0x258d18[_0x8ac55a[_0x332275(0x740)]]);
                });
                var _0x3252e0, _0x3e0179 = _0xe931bf[_0x5b6944(0x4e2)];
                _0x3252e0 = new _0x4e5057['Mb'](_0x258d18[_0x3e0179[_0x5b6944(0x740)]]);
                var _0x1178ab = {};
                _0x239c2a['Da'](_0xe931bf[_0x5b6944(0x682)], function(_0x5182c5, _0x362fce) {
                    var _0x450413 = _0x5b6944;
                    _0x1178ab[_0x5182c5 = parseInt(_0x5182c5)] = new _0x4e5057['Nb'](_0x362fce[_0x450413(0x2c2)], new _0x4e5057['Lb'](_0x5cf4f1[_0x362fce[_0x450413(0x87b)]['prime']], null, _0x362fce[_0x450413(0x87b)][_0x450413(0x4a3)][_0x450413(0x642)](function(_0x4163b9) {
                        return _0x258d18[_0x4163b9];
                    })), new _0x4e5057['Ib'](null, _0x258d18[_0x362fce[_0x450413(0x7a1)]['glow']]));
                });
                var _0x58e2ff = new _0x4e5057['Nb']({}, _0x860c, _0x3cff0d);
                return new _0x4e5057(_0x551ee7, _0x135219, _0x2e092d, _0x3cff0d, _0x14111d, _0x3252e0, _0x16ebde, _0x860c, _0x1178ab, _0x58e2ff, _0x195e6e, _0x2486af, _0x30ed42, _0x396836, _0x5c68d2, _0x4592b0, _0x23c157, _0x1b0e7e);
            }, _0x4e5057['prototype']['Rb'] = function(_0x328dc2) {
                var _0x2a45b5 = _0xdac503,
                    _0x5d4ebc = _0x239c2a['Ea'](Object[_0x2a45b5(0x23e)](this['wb']))[_0x2a45b5(0x3c1)](0x0, _0x328dc2),
                    _0xf69c18 = _0x239c2a['Ea'](Object[_0x2a45b5(0x23e)](this['Ab']))[_0x2a45b5(0x3c1)](0x0, _0x328dc2),
                    _0x4e9ba9 = _0x239c2a['Ea'](Object[_0x2a45b5(0x23e)](this['Cb']))['slice'](0x0, _0x328dc2),
                    _0x18c5c5 = _0x239c2a['Ea'](Object[_0x2a45b5(0x23e)](this['Eb']))[_0x2a45b5(0x3c1)](0x0, _0x328dc2),
                    _0x423c6f = _0x239c2a['Ea'](Object[_0x2a45b5(0x23e)](this['Gb']))['slice'](0x0, _0x328dc2),
                    _0x1612d8 = [];
                for (var _0x411ab0 = 0x0; _0x411ab0 < _0x328dc2; _0x411ab0++) {
                    var _0x2ccab2 = _0x5d4ebc['length'] > 0x0 ? _0x5d4ebc[_0x411ab0 % _0x5d4ebc[_0x2a45b5(0x883)]] : 0x0,
                        _0x1e50b2 = _0xf69c18[_0x2a45b5(0x883)] > 0x0 ? _0xf69c18[_0x411ab0 % _0xf69c18[_0x2a45b5(0x883)]] : 0x0,
                        _0xe3c392 = _0x4e9ba9[_0x2a45b5(0x883)] > 0x0 ? _0x4e9ba9[_0x411ab0 % _0x4e9ba9[_0x2a45b5(0x883)]] : 0x0,
                        _0x4803f0 = _0x18c5c5[_0x2a45b5(0x883)] > 0x0 ? _0x18c5c5[_0x411ab0 % _0x18c5c5['length']] : 0x0,
                        _0x35500c = _0x423c6f['length'] > 0x0 ? _0x423c6f[_0x411ab0 % _0x423c6f[_0x2a45b5(0x883)]] : 0x0;
                    _0x1612d8[_0x2a45b5(0x31a)](new _0x158a86['Sb'](_0x2ccab2, _0x1e50b2, _0xe3c392, _0x4803f0, _0x35500c));
                };
                return _0x1612d8;
            }, _0x4e5057[_0xdac503(0x869)]['Tb'] = function(_0x1d7ff3) {
                var _0x2c4162 = _0xdac503;
                return this['wb'][_0x2c4162(0x6f6)](_0x1d7ff3) ? this['wb'][_0x1d7ff3] : this['xb'];
            }, _0x4e5057['prototype']['Ub'] = function(_0x12876b) {
                var _0x38bbf4 = _0xdac503;
                return this['yb'][_0x38bbf4(0x6f6)](_0x12876b) ? this['yb'][_0x12876b] : this['zb'];
            }, _0x4e5057[_0xdac503(0x869)]['Vb'] = function(_0x995a53) {
                var _0x75210a = _0xdac503;
                return this['Ab'][_0x75210a(0x6f6)](_0x995a53) ? this['Ab'][_0x995a53] : this['Bb'];
            }, _0x4e5057[_0xdac503(0x869)]['Wb'] = function(_0x2ceb39) {
                var _0xc51bc1 = _0xdac503;
                return this['Cb'][_0xc51bc1(0x6f6)](_0x2ceb39) ? this['Cb'][_0x2ceb39] : this['Db'];
            }, _0x4e5057[_0xdac503(0x869)]['Xb'] = function(_0x19f9b4) {
                var _0x7010e0 = _0xdac503;
                return this['Gb'][_0x7010e0(0x6f6)](_0x19f9b4) ? this['Gb'][_0x19f9b4] : this['Hb'];
            }, _0x4e5057[_0xdac503(0x869)]['Yb'] = function(_0x1f97b1) {
                var _0x41b521 = _0xdac503;
                return this['Eb'][_0x41b521(0x6f6)](_0x1f97b1) ? this['Eb'][_0x1f97b1] : this['Fb'];
            }, _0x4e5057[_0xdac503(0x869)]['Zb'] = function(_0x333a21) {
                return this['sb']['hasOwnProperty'](_0x333a21) ? this['sb'][_0x333a21] : this['tb'];
            }, _0x4e5057['prototype']['$b'] = function(_0x4fe957) {
                return this['ub']['hasOwnProperty'](_0x4fe957) ? this['ub'][_0x4fe957] : this['vb'];
            }, _0x4e5057['Nb'] = function _0x5ba428(_0x5e9e05, _0x4b74d8, _0x2d753e) {
                this['_b'] = _0x5e9e05, this['ac'] = _0x4b74d8, this['bc'] = _0x2d753e;
            }, _0x4e5057['Lb'] = function _0x18fa4e(_0x59255f, _0x5b7e4c, _0x8c9553) {
                this['cc'] = _0x59255f, this['dc'] = _0x5b7e4c, this['ec'] = _0x8c9553;
            }, _0x4e5057['Ob'] = function _0x12e918(_0x56ab95) {
                this['dc'] = _0x56ab95;
            }, _0x4e5057['Ib'] = function _0x4e6d86(_0x26c20a, _0x291b29) {
                this['dc'] = _0x26c20a, this['ec'] = _0x291b29;
            }, _0x4e5057['Mb'] = function _0x180278(_0x566f68) {
                this['dc'] = _0x566f68;
            }, _0x4e5057;
        }()), _0x158a86['Kb'] = (function() {
            var _0x49d1bf = _0x2b6b48;

            function _0x3d65d0() {
                var _0x3947af = _0x563d,
                    _0x57dc04 = _0x39b888['k']['m'][_0x3947af(0x1c2)](_0x3947af(0x752));
                this['fc'] = new _0x158a86['Wa'](_0x3947af(0x7a3), _0x57dc04, 0x9e, 0x56, 0x43, 0x7c, 0x94, 63.5, 0x80, 0x80), this['gc'] = new _0x158a86['Wa']('velocity_ability', _0x57dc04, 0x9e, 0x4, 0x57, 0x4a, 0xcb, 63.5, 0x80, 0x80), this['hc'] = new _0x158a86['Wa'](_0x3947af(0x462), _0x57dc04, 0x4, 0x4, 0x92, 0x92, 63.5, 63.5, 0x80, 0x80);
                var _0x1cb613 = _0x39b888['k']['m'][_0x3947af(0x1c2)](_0x3947af(0x74c));
                this[_0x3947af(0x33a)] = new _0x158a86['Wa'](_0x3947af(0x462), _0x1cb613, 0x9e, 0x4, 0x57, 0x4a, 0xcb, 63.5, 0x80, 0x80);
                var _0x2d06a7 = _0x39b888['k']['m'][_0x3947af(0x1c2)](_0x3947af(0x759));
                this[_0x3947af(0x2f4)] = new _0x158a86['Wa'](_0x3947af(0x462), _0x2d06a7, 0x9c, 0x8c, 0x57, 0x3c, 0xaa, 128.5, 0x80, 0x80);
                var _0x329928 = _0x39b888['k']['m'][_0x3947af(0x1c2)]('https://i.imgur.com/LvJ1RxC.png');
                this['pwrFlex2'] = new _0x158a86['Wa'](_0x3947af(0x378), _0x329928, 0x9c, 0x4, 0x57, 0x4a, 0x11d, 63.5, 0x80, 0x80);
                var _0xe0572c = _0x39b888['k']['m'][_0x3947af(0x1c2)](_0x3947af(0x673));
                this[_0x3947af(0x1b6)] = new _0x158a86['Wa'](_0x3947af(0x462), _0xe0572c, 0x9e, 0x4, 0x57, 0x4a, 0xcb, 63.5, 0x80, 0x80);
                var _0xc7a92e = _0x39b888['k']['m']['from']('https://i.imgur.com/LFiCido.png');
                this[_0x3947af(0x584)] = new _0x158a86['Wa'](_0x3947af(0x462), _0xc7a92e, 0x9c, 0x8c, 0x57, 0x3c, 0xaa, 128.5, 0x80, 0x80);
                var _0x836475, _0x397342 = _0x39b888['k']['m'][_0x3947af(0x1c2)](_0x3947af(0x69c)),
                    _0xc47535 = new _0x158a86['Wa'](_0x3947af(0x321), _0x397342, 0x0, 0x0, 0x2a, 0x50, 0x4b, 0x40, 0x80, 0x80),
                    _0x418fe = new _0x158a86['Wa'](_0x3947af(0x2cc), _0x397342, 0x2e, 0x0, 0x14, 0x30, 0x6d, 0x3f, 0x80, 0x80),
                    _0x5dd655 = new _0x158a86['Wa'](_0x3947af(0x82e), _0x397342, 0x46, 0x0, 0x20, 0x20, 0x0, 0x0, 0x0, 0x0),
                    _0x49a72c = new _0x158a86['Wa'](_0x3947af(0x6cb), _0x397342, 0x2e, 0x34, 0x40, 0x40, 0x0, 0x0, 0x0, 0x0),
                    _0x468bf7 = _0x158a86['pb']['Pb'](_0x49a72c, _0x5dd655, _0xc47535, _0x418fe);
                this['ic'] = new _0x158a86['jc']({}, _0x468bf7), this['kc'] = -0x2710, this['lc'] = -0x2710, this['mc'] = ((_0x836475 = _0x158a86['c']['document']['createElement'](_0x3947af(0x1b1)))[_0x3947af(0x1eb)] = 0x50, _0x836475[_0x3947af(0x2b6)] = 0x50, {
                    'nc': _0x836475,
                    'oc': _0x836475['getContext']('2d'),
                    'Za': new _0x39b888['k']['n'](_0x39b888['k']['m'][_0x3947af(0x1c2)](_0x836475))
                }), this['pc'] = null, this['qc'] = [];
            }
            return _0x3d65d0['Jb'] = _0x158a86['Wa']['lb'](), _0x3d65d0[_0x49d1bf(0x869)]['Sa'] = function() {}, _0x3d65d0['prototype']['rc'] = function(_0x14b5d7, _0x19a474, _0x418383) {
                var _0x2feeca = this,
                    _0xf4e5e9 = this['ic']['sc']();
                if (_0xf4e5e9 > 0x0 && _0x239c2a['Ca']() - this['kc'] < 0x124f80) {
                    _0x14b5d7 != null && _0x14b5d7();
                    return;
                };
                if (this['pc'] != null && !this['pc']['tc']()) {
                    if (_0x239c2a['Ca']() - this['kc'] < 0x493e0) {
                        _0x14b5d7 != null && _0x14b5d7();
                        return;
                    };
                    this['pc']['uc'](), this['pc'] = null;
                };
                var _0x2af226 = new _0x158a86['vc'](_0xf4e5e9);
                _0x2af226['wc'](function(_0x5b3f37, _0xdf53f4) {
                    _0x2af226 === _0x2feeca['pc'] && _0x418383 != null && _0x418383(_0x5b3f37, _0xdf53f4);
                }), _0x2af226['xc'](function(_0x1069d4) {
                    _0x2af226 === _0x2feeca['pc'] && _0x19a474 != null && _0x19a474(_0x1069d4);
                }), _0x2af226['yc'](function() {
                    _0x2af226 === _0x2feeca['pc'] && _0x19a474 != null && _0x19a474(Error());
                }), _0x2af226['zc'](function() {
                    _0x2af226 === _0x2feeca['pc'] && _0x14b5d7 != null && _0x14b5d7();
                }), _0x2af226['Ac'](function(_0x3f5b86) {
                    if (_0x2af226 === _0x2feeca['pc']) {
                        _0x2feeca['lc'] = _0x239c2a['Ca'](), _0x2feeca['pc'] = null, _0x2feeca['Bc'](), _0x2feeca['ic']['Cc']()['ob'](), _0x2feeca['ic'] = _0x3f5b86;
                        _0x14b5d7 != null && _0x14b5d7();
                        _0x2feeca['Dc']();
                        return;
                    };
                    try {
                        _0x3f5b86['Cc']()['ob']();
                    } catch (_0x4a4a5c) {}
                }), _0x2af226['Ec'](), this['kc'] = _0x239c2a['Ca'](), this['pc'] = _0x2af226;
            }, _0x3d65d0[_0x49d1bf(0x869)]['Bc'] = function() {}, _0x3d65d0['prototype']['Fc'] = function() {
                return this['ic']['sc']() > 0x0;
            }, _0x3d65d0[_0x49d1bf(0x869)]['Gc'] = function() {
                return this['ic']['Hc']();
            }, _0x3d65d0[_0x49d1bf(0x869)]['Ic'] = function() {
                return this['mc'];
            }, _0x3d65d0[_0x49d1bf(0x869)]['Jc'] = function(_0x3235f3) {
                var _0x23dd5f = _0x49d1bf;
                this['qc'][_0x23dd5f(0x31a)](_0x3235f3);
            }, _0x3d65d0['prototype']['Dc'] = function() {
                var _0x45c26e = _0x49d1bf;
                for (var _0x57dde2 = 0x0; _0x57dde2 < this['qc'][_0x45c26e(0x883)]; _0x57dde2++) {
                    this['qc'][_0x57dde2]();
                }
            }, _0x3d65d0[_0x49d1bf(0x869)]['Cc'] = function() {
                return this['ic']['Cc']();
            }, _0x3d65d0;
        }()), _0x158a86['Kc'] = (function() {
            function _0x3f1d30(_0x29e4e0) {
                this['Lc'] = _0x29e4e0;
            }
            return _0x3f1d30['prototype']['Mc'] = function(_0x215c63) {
                return this['Lc'][_0x215c63];
            }, _0x3f1d30['Nc'] = (function() {
                var _0x1528ae = _0x563d;

                function _0x2cc1af() {
                    this['Oc'] = [];
                }
                return _0x2cc1af[_0x1528ae(0x869)]['Pc'] = function(_0x21ee5e, _0x4b03d8) {
                    var _0x1d193f = _0x1528ae;
                    for (var _0x262a52 = 0x0; _0x262a52 < this['Oc'][_0x1d193f(0x883)]; _0x262a52++) {
                        if (this['Oc'][_0x262a52]['Qc'] === _0x21ee5e) throw Error();
                    };
                    return this['Oc']['push'](new _0x3f1d30['Rc'](_0x21ee5e, _0x4b03d8)), this;
                }, _0x2cc1af[_0x1528ae(0x869)]['Sc'] = function() {
                    var _0xce37cd = _0x1528ae,
                        _0x13e0a6 = 0x0;
                    for (var _0x5a1fc0 = 0x0; _0x5a1fc0 < this['Oc'][_0xce37cd(0x883)]; _0x5a1fc0++) {
                        _0x13e0a6 += this['Oc'][_0x5a1fc0]['Tc'];
                    };
                    var _0xa8dd17 = {},
                        _0x5c662a = 0x0;
                    for (var _0xeef02a = 0x0; _0xeef02a < this['Oc']['length']; _0xeef02a++) {
                        var _0x95ab7 = this['Oc'][_0xeef02a];
                        _0x95ab7['Tc'] = _0x95ab7['Tc'] / _0x13e0a6, _0x95ab7['Uc'] = _0x5c662a, _0x95ab7['Vc'] = _0x5c662a + _0x95ab7['Tc'], _0x5c662a = _0x95ab7['Vc'], _0xa8dd17[_0x95ab7['Qc']] = _0x95ab7;
                    };
                    return new _0x3f1d30(_0xa8dd17);
                }, _0x2cc1af;
            }()), _0x3f1d30['Rc'] = (function() {
                var _0x900dbe = _0x563d;

                function _0x2fb3c5(_0x46096b, _0x1d9038) {
                    this['Qc'] = _0x46096b, this['Tc'] = _0x1d9038, this['Uc'] = 0x0, this['Vc'] = 0x0;
                }
                return _0x2fb3c5[_0x900dbe(0x869)]['Wc'] = function(_0x1a92f9) {
                    return this['Uc'] + (this['Vc'] - this['Uc']) * _0x1a92f9;
                }, _0x2fb3c5;
            }()), _0x3f1d30;
        }()), _0x158a86['Xc'] = (function() {
            var _0x3272e5 = _0x2b6b48;

            function _0x3abd57() {
                var _0x5e524b = _0x563d;
                this['Yc'] = new _0x39b888['k']['l'](), this['Yc'][_0x5e524b(0x693)] = !0x0, this['Zc'] = new _0x438610(), this['Zc'][_0x5e524b(0x4e3)] = _0x3ca838 * ((_0x13f866 + 0x1) * 0x2 + 0x1 + 0x3), this['$c'] = 0x0, this['_c'] = Array(_0x13f866), this['_c'][0x0] = this['ad'](0x0, new _0x158a86['bd'](), new _0x158a86['bd']());
                for (var _0x1d11b9 = 0x1; _0x1d11b9 < _0x13f866; _0x1d11b9++) {
                    this['_c'][_0x1d11b9] = this['ad'](_0x1d11b9, new _0x158a86['bd'](), new _0x158a86['bd']());
                };
                this['cd'] = 0x0, this['dd'] = 0x0, this['ed'] = 0x0;
            }
            var _0x8cfa6a, _0x3ca838 = 0.001,
                _0x13f866 = 0x31d,
                _0x3db9a9 = _0x2171ac['T'] * 0.1;
            _0x3abd57['fd'] = _0x13f866, _0x3abd57[_0x3272e5(0x869)]['ad'] = function(_0x292b31, _0x3b73ec, _0x3c938f) {
                var _0x30b567 = _0x3272e5,
                    _0x317fb2 = new _0xba7b47(_0x3b73ec, _0x3c938f);
                return _0x3b73ec['gd'][_0x30b567(0x4e3)] = _0x3ca838 * ((_0x13f866 - _0x292b31) * 0x2 + 0x1 + 0x3), _0x3c938f['gd']['zIndex'] = _0x3ca838 * ((_0x13f866 - _0x292b31) * 0x2 - 0x2 + 0x3), _0x317fb2;
            }, _0x3abd57['prototype']['hd'] = function(_0x26c47e, _0x4be9cf, _0x3e6091, _0x175df5, _0x33e476, _0x4f8be7, _0x36c2b6, _0x39fbf3) {
                var _0xb8e78e = _0x3272e5,
                    _0x4c16b7 = _0x3e6091['dc'],
                    _0x66a7dc = _0x26c47e === _0x158a86['jd']['id'] ? _0x4be9cf['ac']['ec'] : _0x3e6091['ec'];
                if (_0x4c16b7[_0xb8e78e(0x883)] > 0x0 && _0x66a7dc[_0xb8e78e(0x883)] > 0x0)
                    for (var _0x58776e = 0x0; _0x58776e < this['_c'][_0xb8e78e(0x883)]; _0x58776e++) {
                        this['_c'][_0x58776e]['ld']['kd'](_0x4c16b7[_0x58776e % _0x4c16b7[_0xb8e78e(0x883)]]), this['_c'][_0x58776e]['md']['kd'](_0x66a7dc[_0x58776e % _0x66a7dc[_0xb8e78e(0x883)]]), this['_c'][_0x58776e]['ld']['nd'](_0x39fbf3), this['_c'][_0x58776e]['md']['nd'](_0x39fbf3);
                    };
                this['Zc']['hd'](_0x175df5, _0x33e476, _0x4f8be7, _0x36c2b6);
            }, (_0x8cfa6a = _0x239c2a['ca'](_0x39b888['k']['l'], function() {
                var _0xabb574 = _0x3272e5;
                _0x39b888['k']['l'][_0xabb574(0x545)](this), this[_0xabb574(0x693)] = !0x0, this['od'] = [], this['pd'] = [], this['qd'] = [], this['rd'] = [], this['sd'] = new _0x39b888['k']['l'](), this['td'] = [];
                for (var _0x3ad941 = 0x0; _0x3ad941 < 0x4; _0x3ad941++) {
                    var _0x19fb55 = new _0x158a86['bd']();
                    _0x19fb55['kd'](ooo['ud']['fc']), this['sd'][_0xabb574(0x371)](_0x19fb55['gd']), this['td'][_0xabb574(0x31a)](_0x19fb55);
                };
                this['sd'][_0xabb574(0x4e3)] = 0.0011, this['addChild'](this['sd']), this['vd'](), this['wd'] = new _0x158a86['bd'](), this['wd']['kd'](ooo['ud']['gc']), this['wd']['gd']['zIndex'] = 0.001, this[_0xabb574(0x371)](this['wd']['gd']), this['xd'](), this[_0xabb574(0x4e8)] = new _0x158a86['bd'](), this[_0xabb574(0x4e8)]['kd'](ooo['ud'][_0xabb574(0x584)]), this['pwr_flex']['gd'][_0xabb574(0x4e3)] = 0.001, this['addChild'](this[_0xabb574(0x4e8)]['gd']), this[_0xabb574(0x7da)]();
            }))[_0x3272e5(0x869)]['hd'] = function(_0x50fa35, _0x380829, _0x233e4e, _0x120e39) {
                this['yd'](0.002, this['od'], _0x50fa35['dc']), this['yd'](0.003, this['pd'], _0x380829['dc']), this['yd'](0.004, this['rd'], _0x120e39['dc']), this['yd'](0.005, this['qd'], _0x233e4e['dc']);
            }, _0x8cfa6a['prototype']['yd'] = function(_0x37b974, _0x493ae0, _0x469c06) {
                var _0x4fc8e3 = _0x3272e5;
                while (_0x469c06[_0x4fc8e3(0x883)] > _0x493ae0[_0x4fc8e3(0x883)]) {
                    var _0x4ae20e = new _0x158a86['bd']();
                    _0x493ae0[_0x4fc8e3(0x31a)](_0x4ae20e), this[_0x4fc8e3(0x371)](_0x4ae20e['zd']());
                };
                while (_0x469c06['length'] < _0x493ae0[_0x4fc8e3(0x883)]) {
                    _0x493ae0[_0x4fc8e3(0x882)]()['G']();
                };
                var _0x312218 = _0x37b974;
                for (var _0x4ef1e0 = 0x0; _0x4ef1e0 < _0x469c06[_0x4fc8e3(0x883)]; _0x4ef1e0++) {
                    _0x312218 += 0.0001;
                    var _0x530740 = _0x493ae0[_0x4ef1e0];
                    _0x530740['kd'](_0x469c06[_0x4ef1e0]), _0x530740['gd'][_0x4fc8e3(0x4e3)] = _0x312218;
                }
            }, _0x8cfa6a[_0x3272e5(0x869)]['Ad'] = function(_0x13face, _0x54a28b, _0x266805, _0x45590b) {
                var _0x55f15c = _0x3272e5;
                this[_0x55f15c(0x287)] = !0x0, this[_0x55f15c(0x5d6)][_0x55f15c(0x448)](_0x13face, _0x54a28b), this[_0x55f15c(0x364)] = _0x45590b;
                for (var _0x49ef78 = 0x0; _0x49ef78 < this['od'][_0x55f15c(0x883)]; _0x49ef78++) {
                    this['od'][_0x49ef78]['Bd'](_0x266805);
                };
                for (var _0x398a67 = 0x0; _0x398a67 < this['pd'][_0x55f15c(0x883)]; _0x398a67++) {
                    this['pd'][_0x398a67]['Bd'](_0x266805);
                };
                for (var _0x2d510f = 0x0; _0x2d510f < this['qd'][_0x55f15c(0x883)]; _0x2d510f++) {
                    this['qd'][_0x2d510f]['Bd'](_0x266805);
                };
                for (var _0x5980aa = 0x0; _0x5980aa < this['rd'][_0x55f15c(0x883)]; _0x5980aa++) {
                    this['rd'][_0x5980aa]['Bd'](_0x266805);
                }
            }, _0x8cfa6a[_0x3272e5(0x869)]['Cd'] = function() {
                var _0x385941 = _0x3272e5;
                this[_0x385941(0x287)] = !0x1;
            }, _0x8cfa6a[_0x3272e5(0x869)]['Dd'] = function(_0x49a7fb, _0x3a33f3, _0x31c07d, _0x264b5f) {
                var _0x18a152 = _0x3272e5;
                this['sd'][_0x18a152(0x287)] = !0x0;
                var _0x207ca1 = _0x31c07d / 0x3e8,
                    _0x7ab1ef = 0x1 / this['td'][_0x18a152(0x883)];
                for (var _0x5788ee = 0x0; _0x5788ee < this['td']['length']; _0x5788ee++) {
                    var _0xfe615c = 0x1 - (_0x207ca1 + _0x7ab1ef * _0x5788ee) % 0x1;
                    this['td'][_0x5788ee]['gd'][_0x18a152(0x44e)] = 0x1 - _0xfe615c, this['td'][_0x5788ee]['Bd'](_0x3a33f3 * (0.5 + _0xfe615c * 4.5));
                }
            }, _0x8cfa6a['prototype']['vd'] = function() {
                var _0x191b3e = _0x3272e5;
                this['sd'][_0x191b3e(0x287)] = !0x1;
            }, _0x8cfa6a['prototype']['Ed'] = function(_0x10973e, _0x42950b, _0x3856ac, _0x4d9a19) {
                var _0x446a31 = _0x3272e5;
                this['wd']['gd'][_0x446a31(0x287)] = _0x1a98d3['vp'], this['wd']['gd'][_0x446a31(0x44e)] = _0x239c2a['ga'](this['wd']['gd'][_0x446a31(0x44e)], _0x10973e['Fd'] ? 0.9 : 0.2, _0x4d9a19, 0.0025), this['wd']['Bd'](_0x42950b);
            }, _0x8cfa6a[_0x3272e5(0x869)]['xd'] = function() {
                this['wd']['gd']['visible'] = !0x1;
            }, _0x8cfa6a['prototype']['activeFlex'] = function(_0x3e817b, _0x25b449, _0xaa017e, _0x48d546) {
                var _0x2e5978 = _0x3272e5,
                    _0x394427 = _0x1a98d3[_0x2e5978(0x617)] !== undefined ? _0x1a98d3[_0x2e5978(0x617)] : 0x0;
                this[_0x2e5978(0x4e8)]['gd']['visible'] = ![];
                if (_0x394427 >= 0x0 && _0x394427 <= 0x3) {
                    var _0x244fcf = {
                        0x0: ooo['ud'][_0x2e5978(0x33a)],
                        0x1: ooo['ud']['pwrFlex1'],
                        0x2: ooo['ud'][_0x2e5978(0x7f4)],
                        0x3: ooo['ud'][_0x2e5978(0x1b6)]
                    };
                    _0x244fcf[_0x394427] && (this[_0x2e5978(0x4e8)]['kd'](_0x244fcf[_0x394427]), this[_0x2e5978(0x4e8)]['gd'][_0x2e5978(0x287)] = !![], this[_0x2e5978(0x4e8)]['gd'][_0x2e5978(0x44e)] = _0x239c2a['ga'](this['wd']['gd'][_0x2e5978(0x44e)], _0x3e817b['Fd'] ? 0.9 : 0.2, _0x48d546, 0.0025), this[_0x2e5978(0x4e8)]['Bd'](_0x25b449));
                }
            }, _0x8cfa6a[_0x3272e5(0x869)][_0x3272e5(0x7da)] = function() {
                var _0x1b13b5 = _0x3272e5;
                this['pwr_flex']['gd'][_0x1b13b5(0x287)] = !0x1;
            };
            var _0x438610 = _0x8cfa6a;
            _0x3abd57[_0x3272e5(0x869)]['Gd'] = function(_0xffa42b) {
                return this['dd'] + this['ed'] * _0x239c2a['oa'](_0xffa42b * _0x3db9a9 - this['cd']);
            }, _0x3abd57[_0x3272e5(0x869)]['Hd'] = function(_0x2936ee, _0x55eb89, _0x1ead40, _0x4c4198) {
                var _0x195443 = _0x3272e5,
                    _0x124fca, _0x4bfdab, _0x14ea77, _0x541bf4, _0x2422a4, _0x5817a0, _0x2cdd9b, _0x461242, _0x343662 = _0x2936ee['Id'] * 0x2,
                    _0x41d7b6 = _0x2936ee['Jd'],
                    _0x11af3f = _0x2936ee['Kd'],
                    _0x4750e0 = _0x11af3f * 0x4 - 0x3,
                    _0x722083 = _0x4750e0;
                this['cd'] = _0x55eb89 / 0x190 * _0x2171ac['T'], this['dd'] = _0x343662 * 1.5, this['ed'] = _0x343662 * 0.15 * _0x2936ee['Ld'];
                if (_0x4c4198(_0x4bfdab = _0x41d7b6[0x0], _0x5817a0 = _0x41d7b6[0x1])) {
                    _0x14ea77 = _0x41d7b6[0x2], _0x2cdd9b = _0x41d7b6[0x3], _0x541bf4 = _0x41d7b6[0x4], _0x461242 = _0x41d7b6[0x5];
                    var _0x589dfc = _0x239c2a['ta'](_0x461242 + _0x5817a0 * 0x2 - _0x2cdd9b * 0x3, _0x541bf4 + _0x4bfdab * 0x2 - _0x14ea77 * 0x3);
                    this['Zc']['Ad'](_0x4bfdab, _0x5817a0, _0x343662, _0x589dfc), this['_c'][0x0]['Ad'](_0x4bfdab, _0x5817a0, _0x343662, this['Gd'](0x0), _0x589dfc), this['_c'][0x1]['Ad'](_0x4bfdab * 0.64453125 + _0x14ea77 * 0.45703125 + _0x541bf4 * -0.1015625, _0x5817a0 * 0.64453125 + _0x2cdd9b * 0.45703125 + _0x461242 * -0.1015625, _0x343662, this['Gd'](0x1), _0xba7b47['Md'](this['_c'][0x0], this['_c'][0x2])), this['_c'][0x2]['Ad'](_0x4bfdab * 0.375 + _0x14ea77 * 0.75 + _0x541bf4 * -0.125, _0x5817a0 * 0.375 + _0x2cdd9b * 0.75 + _0x461242 * -0.125, _0x343662, this['Gd'](0x2), _0xba7b47['Md'](this['_c'][0x1], this['_c'][0x3])), this['_c'][0x3]['Ad'](_0x4bfdab * 0.15234375 + _0x14ea77 * 0.94921875 + _0x541bf4 * -0.1015625, _0x5817a0 * 0.15234375 + _0x2cdd9b * 0.94921875 + _0x461242 * -0.1015625, _0x343662, this['Gd'](0x3), _0xba7b47['Md'](this['_c'][0x2], this['_c'][0x4]));
                } else this['Zc']['Cd'](), this['_c'][0x0]['Cd'](), this['_c'][0x1]['Cd'](), this['_c'][0x2]['Cd'](), this['_c'][0x3]['Cd']();;
                var _0x3a38c1 = 0x4;
                for (var _0x5ef5f2 = 0x2, _0x56207b = _0x11af3f * 0x2 - 0x4; _0x5ef5f2 < _0x56207b; _0x5ef5f2 += 0x2) {
                    _0x4c4198(_0x4bfdab = _0x41d7b6[_0x5ef5f2], _0x5817a0 = _0x41d7b6[_0x5ef5f2 + 0x1]) ? (_0x124fca = _0x41d7b6[_0x5ef5f2 - 0x2], _0x2422a4 = _0x41d7b6[_0x5ef5f2 - 0x1], _0x14ea77 = _0x41d7b6[_0x5ef5f2 + 0x2], _0x2cdd9b = _0x41d7b6[_0x5ef5f2 + 0x3], _0x541bf4 = _0x41d7b6[_0x5ef5f2 + 0x4], _0x461242 = _0x41d7b6[_0x5ef5f2 + 0x5], this['_c'][_0x3a38c1]['Ad'](_0x4bfdab, _0x5817a0, _0x343662, this['Gd'](_0x3a38c1), _0xba7b47['Md'](this['_c'][_0x3a38c1 - 0x1], this['_c'][_0x3a38c1 + 0x1])), _0x3a38c1++, this['_c'][_0x3a38c1]['Ad'](_0x124fca * -0.06640625 + _0x4bfdab * 0.84375 + _0x14ea77 * 0.2578125 + _0x541bf4 * -0.03515625, _0x2422a4 * -0.06640625 + _0x5817a0 * 0.84375 + _0x2cdd9b * 0.2578125 + _0x461242 * -0.03515625, _0x343662, this['Gd'](_0x3a38c1), _0xba7b47['Md'](this['_c'][_0x3a38c1 - 0x1], this['_c'][_0x3a38c1 + 0x1])), _0x3a38c1++, this['_c'][_0x3a38c1]['Ad'](_0x124fca * -0.0625 + _0x4bfdab * 0.5625 + _0x14ea77 * 0.5625 + _0x541bf4 * -0.0625, _0x2422a4 * -0.0625 + _0x5817a0 * 0.5625 + _0x2cdd9b * 0.5625 + _0x461242 * -0.0625, _0x343662, this['Gd'](_0x3a38c1), _0xba7b47['Md'](this['_c'][_0x3a38c1 - 0x1], this['_c'][_0x3a38c1 + 0x1])), _0x3a38c1++, this['_c'][_0x3a38c1]['Ad'](_0x124fca * -0.03515625 + _0x4bfdab * 0.2578125 + _0x14ea77 * 0.84375 + _0x541bf4 * -0.06640625, _0x2422a4 * -0.03515625 + _0x5817a0 * 0.2578125 + _0x2cdd9b * 0.84375 + _0x461242 * -0.06640625, _0x343662, this['Gd'](_0x3a38c1), _0xba7b47['Md'](this['_c'][_0x3a38c1 - 0x1], this['_c'][_0x3a38c1 + 0x1])), _0x3a38c1++) : (this['_c'][_0x3a38c1]['Cd'](), _0x3a38c1++, this['_c'][_0x3a38c1]['Cd'](), _0x3a38c1++, this['_c'][_0x3a38c1]['Cd'](), _0x3a38c1++, this['_c'][_0x3a38c1]['Cd'](), _0x3a38c1++);
                };
                _0x4c4198(_0x4bfdab = _0x41d7b6[_0x11af3f * 0x2 - 0x4], _0x5817a0 = _0x41d7b6[_0x11af3f * 0x2 - 0x3]) ? (_0x124fca = _0x41d7b6[_0x11af3f * 0x2 - 0x6], _0x2422a4 = _0x41d7b6[_0x11af3f * 0x2 - 0x5], _0x14ea77 = _0x41d7b6[_0x11af3f * 0x2 - 0x2], _0x2cdd9b = _0x41d7b6[_0x11af3f * 0x2 - 0x1], this['_c'][_0x4750e0 - 0x5]['Ad'](_0x4bfdab, _0x5817a0, _0x343662, this['Gd'](_0x4750e0 - 0x5), _0xba7b47['Md'](this['_c'][_0x4750e0 - 0x6], this['_c'][_0x4750e0 - 0x4])), this['_c'][_0x4750e0 - 0x4]['Ad'](_0x124fca * -0.1015625 + _0x4bfdab * 0.94921875 + _0x14ea77 * 0.15234375, _0x2422a4 * -0.1015625 + _0x5817a0 * 0.94921875 + _0x2cdd9b * 0.15234375, _0x343662, this['Gd'](_0x4750e0 - 0x4), _0xba7b47['Md'](this['_c'][_0x4750e0 - 0x5], this['_c'][_0x4750e0 - 0x3])), this['_c'][_0x4750e0 - 0x3]['Ad'](_0x124fca * -0.125 + _0x4bfdab * 0.75 + _0x14ea77 * 0.375, _0x2422a4 * -0.125 + _0x5817a0 * 0.75 + _0x2cdd9b * 0.375, _0x343662, this['Gd'](_0x4750e0 - 0x3), _0xba7b47['Md'](this['_c'][_0x4750e0 - 0x4], this['_c'][_0x4750e0 - 0x2])), this['_c'][_0x4750e0 - 0x2]['Ad'](_0x124fca * -0.1015625 + _0x4bfdab * 0.45703125 + _0x14ea77 * 0.64453125, _0x2422a4 * -0.1015625 + _0x5817a0 * 0.45703125 + _0x2cdd9b * 0.64453125, _0x343662, this['Gd'](_0x4750e0 - 0x2), _0xba7b47['Md'](this['_c'][_0x4750e0 - 0x3], this['_c'][_0x4750e0 - 0x1])), this['_c'][_0x4750e0 - 0x1]['Ad'](_0x14ea77, _0x2cdd9b, _0x343662, this['Gd'](_0x4750e0 - 0x1), _0xba7b47['Md'](this['_c'][_0x4750e0 - 0x2], this['_c'][_0x4750e0 - 0x1]))) : (this['_c'][_0x4750e0 - 0x5]['Cd'](), this['_c'][_0x4750e0 - 0x4]['Cd'](), this['_c'][_0x4750e0 - 0x3]['Cd'](), this['_c'][_0x4750e0 - 0x2]['Cd'](), this['_c'][_0x4750e0 - 0x1]['Cd']());
                this['$c'] === 0x0 && _0x722083 > 0x0 && this['Yc'][_0x195443(0x371)](this['Zc']);
                this['$c'] > 0x0 && _0x722083 === 0x0 && _0x39b888['k']['F']['G'](this['Zc']);
                while (this['$c'] < _0x722083) {
                    this['Yc'][_0x195443(0x371)](this['_c'][this['$c']]['ld']['zd']()), this['Yc'][_0x195443(0x371)](this['_c'][this['$c']]['md']['zd']()), this['$c'] += 0x1;
                };
                while (this['$c'] > _0x722083) {
                    this['$c'] -= 0x1, this['_c'][this['$c']]['md']['G'](), this['_c'][this['$c']]['ld']['G']();
                };
                var _0x4b85fb = _0x2936ee['Nd'][_0x158a86['Pd']['Od']];
                this['_c'][0x0]['Qd']() && _0x4b85fb != null && _0x4b85fb['Rd'] ? this['Zc']['Dd'](_0x2936ee, _0x343662, _0x55eb89, _0x1ead40) : this['Zc']['vd']();
                var _0x459f71 = _0x2936ee['Nd'][_0x158a86['Pd']['Sd']];
                this['_c'][0x0]['Qd']() && _0x459f71 != null && _0x459f71['Rd'] ? this['Zc']['Ed'](_0x2936ee, _0x343662, _0x55eb89, _0x1ead40) : this['Zc']['xd']();
                var _0x333514 = _0x2936ee['Nd'][_0x158a86['Pd']['Yd']];
                this['_c'][0x0]['Qd']() && _0x333514 != null && _0x333514['Rd'] ? this['Zc']['activeFlex'](_0x2936ee, _0x343662, _0x55eb89, _0x1ead40) : this['Zc']['disableFlex']();
            };
            var _0xba7b47 = (function() {
                var _0x22a140 = _0x3272e5;

                function _0x583855(_0x20e6e4, _0x42b8aa) {
                    this['ld'] = _0x20e6e4, this['ld']['Td'](!0x1), this['md'] = _0x42b8aa, this['md']['Td'](!0x1);
                }
                return _0x583855[_0x22a140(0x869)]['Ad'] = function(_0x32acdd, _0x5acc28, _0x794dc2, _0x392e30, _0x25b5a4) {
                    this['ld']['Td'](!0x0), this['ld']['Ud'](_0x32acdd, _0x5acc28), this['ld']['Bd'](_0x794dc2), this['ld']['Vd'](_0x25b5a4), this['md']['Td'](!0x0), this['md']['Ud'](_0x32acdd, _0x5acc28), this['md']['Bd'](_0x392e30), this['md']['Vd'](_0x25b5a4);
                }, _0x583855[_0x22a140(0x869)]['Cd'] = function() {
                    this['ld']['Td'](!0x1), this['md']['Td'](!0x1);
                }, _0x583855[_0x22a140(0x869)]['Qd'] = function() {
                    return this['ld']['Qd']();
                }, _0x583855['Md'] = function(_0x223dc5, _0x4b1816) {
                    var _0x40fb94 = _0x22a140;
                    return _0x239c2a['ta'](_0x223dc5['ld']['gd'][_0x40fb94(0x5d6)]['y'] - _0x4b1816['ld']['gd'][_0x40fb94(0x5d6)]['y'], _0x223dc5['ld']['gd'][_0x40fb94(0x5d6)]['x'] - _0x4b1816['ld']['gd'][_0x40fb94(0x5d6)]['x']);
                }, _0x583855;
            }());
            return _0x3abd57;
        }()), _0x158a86['Pd'] = (function() {
            function _0x16e53d(_0x459d8b) {
                this['Wd'] = _0x459d8b, this['Rd'] = !0x1, this['Xd'] = 0x1;
            }
            return _0x16e53d['Sd'] = 0x0, _0x16e53d['Yd'] = 0x1, _0x16e53d['Od'] = 0x2, _0x16e53d['Zd'] = 0x6, _0x16e53d['$d'] = 0x3, _0x16e53d['_d'] = 0x4, _0x16e53d['ae'] = 0x5, _0x16e53d;
        }()), _0x158a86['jc'] = (function() {
            var _0x5c07f0 = _0x2b6b48;

            function _0x42ade4(_0xa6a0d8, _0x3afcdc) {
                this['be'] = _0xa6a0d8, this['ce'] = _0x3afcdc;
            }
            return _0x42ade4['de'] = new _0x42ade4({}, _0x158a86['pb']['lb']()), _0x42ade4['prototype']['sc'] = function() {
                var _0x301d82 = _0x563d;
                return this['be'][_0x301d82(0x77f)];
            }, _0x42ade4[_0x5c07f0(0x869)]['Hc'] = function() {
                return this['be'];
            }, _0x42ade4[_0x5c07f0(0x869)]['Cc'] = function() {
                return this['ce'];
            }, _0x42ade4;
        }()), _0x158a86['vc'] = (function() {
            var _0xf4fa20 = _0x2b6b48;

            function _0x44c90f(_0x418184) {
                this['ee'] = (++_0x44c90f['fe'], function(_0x18da3c, _0x13ec3f) {}), this['ge'] = _0x418184, this['he'] = null, this['ie'] = null, this['je'] = null, this['ke'] = null, this['le'] = null, this['me'] = !0x1, this['ne'] = !0x1, this['oe'] = !0x1;
            }
            return _0x44c90f['pe'] = {
                'qe': _0xf4fa20(0x784),
                're': _0xf4fa20(0x257),
                'se': _0xf4fa20(0x7c3),
                'te': _0xf4fa20(0x880),
                'ue': _0xf4fa20(0x812)
            }, _0x44c90f['fe'] = 0x186a0, _0x44c90f['ve'] = new _0x158a86['Kc']['Nc']()['Pc'](_0x44c90f['pe']['qe'], 0x1)['Pc'](_0x44c90f['pe']['re'], 0xa)['Pc'](_0x44c90f['pe']['se'], 0x32)['Pc'](_0x44c90f['pe']['te'], 0xf)['Pc'](_0x44c90f['pe']['ue'], 0x5)['Sc'](), _0x44c90f[_0xf4fa20(0x869)]['Ac'] = function(_0x1d21ce) {
                this['he'] = _0x1d21ce;
            }, _0x44c90f[_0xf4fa20(0x869)]['zc'] = function(_0x7e21d2) {
                this['ie'] = _0x7e21d2;
            }, _0x44c90f['prototype']['xc'] = function(_0x11fa06) {
                this['je'] = _0x11fa06;
            }, _0x44c90f[_0xf4fa20(0x869)]['yc'] = function(_0x359301) {
                this['ke'] = _0x359301;
            }, _0x44c90f[_0xf4fa20(0x869)]['wc'] = function(_0x1bc248) {
                this['le'] = _0x1bc248;
            }, _0x44c90f[_0xf4fa20(0x869)]['tc'] = function() {
                return this['oe'];
            }, _0x44c90f[_0xf4fa20(0x869)]['uc'] = function() {
                this['me'] = !0x0;
            }, _0x44c90f[_0xf4fa20(0x869)]['Ec'] = function() {
                if (!this['ne']) {
                    this['ne'] = !0x0;
                    if (this['me']) {
                        this['we']();
                        return;
                    };
                    this['xe']();
                }
            }, _0x44c90f[_0xf4fa20(0x869)]['xe'] = function() {
                var _0xe44589 = _0xf4fa20,
                    _0x20e26e = this;
                if (this['me']) {
                    this['we']();
                    return;
                };
                $[_0xe44589(0x2e7)]({
                    'type': _0xe44589(0x35e),
                    'url': _0x2171ac['H']['K'] + '/dynamic/assets/revision.json',
                    'xhrFields': {
                        'onprogress': function(_0x567065) {
                            var _0x2653b7 = _0xe44589,
                                _0x3587e1, _0x2c4c98;
                            _0x567065[_0x2653b7(0x3c8)] && (_0x3587e1 = _0x567065[_0x2653b7(0x6ca)] / _0x567065[_0x2653b7(0x7d6)], _0x2c4c98 = _0x44c90f['pe']['qe'], _0x20e26e['ye'](_0x2c4c98, _0x44c90f['ve']['Mc'](_0x2c4c98)['Wc'](_0x3587e1)));
                        }
                    }
                })[_0xe44589(0x342)](function() {
                    _0x20e26e['ze'](Error());
                })[_0xe44589(0x7b1)](function(_0x436c00) {
                    if (_0x436c00 <= _0x20e26e['ge']) {
                        _0x20e26e['Ae']();
                        return;
                    };
                    _0x20e26e['Be']();
                });
            }, _0x44c90f[_0xf4fa20(0x869)]['Be'] = function() {
                var _0x284c20 = _0xf4fa20,
                    _0x122076 = this;
                if (this['me']) {
                    this['we']();
                    return;
                };
                $[_0x284c20(0x2e7)]({
                    'type': 'GET',
                    'url': _0x2171ac['H']['K'] + _0x284c20(0x3a7),
                    'xhrFields': {
                        'onprogress': function(_0xe80d93) {
                            var _0x2785f4 = _0x284c20,
                                _0x4ab6d5, _0x166dd5;
                            _0xe80d93[_0x2785f4(0x3c8)] && (_0x4ab6d5 = _0xe80d93[_0x2785f4(0x6ca)] / _0xe80d93[_0x2785f4(0x7d6)], _0x166dd5 = _0x44c90f['pe']['re'], _0x122076['ye'](_0x166dd5, _0x44c90f['ve']['Mc'](_0x166dd5)['Wc'](_0x4ab6d5)));
                        }
                    }
                })[_0x284c20(0x342)](function() {
                    _0x122076['ze'](Error());
                })[_0x284c20(0x7b1)](function(_0x50653c) {
                    var _0x4b096a = _0x284c20;
                    if (_0x50653c['revision'] <= _0x122076['ge']) {
                        _0x122076['Ae']();
                        return;
                    };
                    var _0x7fdbdd = {},
                        _0x3d5c63 = {
                            'country': 'gb',
                            'v': 'v2'
                        };
                    _0x3be6af && _0x3be6af != 'gb' && (_0x3d5c63[_0x4b096a(0x4d9)] = _0x3be6af), _0x7fdbdd = _0x50653c, _0x193eb2 && _0x3f4d06 && _0x3f4d06 == _0x1a98d3['v_z'] ? (_0x7fdbdd = JSON[_0x4b096a(0x78e)](_0x193eb2), (async function() {
                        var _0x195057 = _0x4b096a;
                        (_0x18b6dd || _0x308d60 || Array[_0x195057(0x542)](_0x1a98d3['dg']) && _0x1a98d3['dg'][_0x195057(0x883)] > 0x0) && (_0x7fdbdd = await Ysw(_0x7fdbdd));
                        for (let _0x5cda77 in _0x7fdbdd) {
                            Array['isArray'](_0x7fdbdd[_0x5cda77]) ? _0x50653c[_0x5cda77] = _0x50653c[_0x5cda77]['concat'](_0x7fdbdd[_0x5cda77]) : _0x50653c[_0x5cda77] = {
                                ..._0x50653c[_0x5cda77],
                                ..._0x7fdbdd[_0x5cda77]
                            };
                        };
                        _0x122076['Ce'](_0x50653c);
                    }())) : fetch(_0x4b096a(0x859), {
                        'headers': {
                            'Content-Type': 'application/json'
                        },
                        'method': _0x4b096a(0x24c),
                        'body': JSON['stringify'](_0x3d5c63)
                    })[_0x4b096a(0x384)](async function(_0x2dc354) {
                        var _0x223700 = _0x4b096a;
                        for (let _0x26de0a in (_0x2dc354 = await _0x2dc354['json']())[_0x223700(0x1d3)]) {
                            for (let _0x37e3cf in _0x2dc354[_0x223700(0x1d3)][_0x26de0a]) {
                                _0x37e3cf === _0x223700(0x7d1) && (_0x2dc354[_0x223700(0x1d3)][_0x26de0a][_0x37e3cf] = _0x223700(0x88e) + _0x2dc354[_0x223700(0x1d3)][_0x26de0a][_0x37e3cf]['substr'](_0x2dc354[_0x223700(0x1d3)][_0x26de0a][_0x37e3cf]['length'] - _0x1a98d3[_0x223700(0x324)], _0x1a98d3[_0x223700(0x324)]) + _0x2dc354['textureDict'][_0x26de0a][_0x37e3cf][_0x223700(0x72a)](0x0, _0x2dc354[_0x223700(0x1d3)][_0x26de0a][_0x37e3cf][_0x223700(0x883)] - _0x1a98d3[_0x223700(0x324)]));
                            }
                        };
                        localStorage[_0x223700(0x5c0)]('wftit', _0x1a98d3[_0x223700(0x2e6)]);
                        (_0x18b6dd || _0x308d60 || Array[_0x223700(0x542)](_0x1a98d3['dg']) && _0x1a98d3['dg'][_0x223700(0x883)] > 0x0) && (_0x2dc354 = await Ysw(_0x2dc354));
                        for (let _0x30a678 in _0x2dc354) {
                            Array[_0x223700(0x542)](_0x2dc354[_0x30a678]) ? _0x50653c[_0x30a678] = _0x50653c[_0x30a678][_0x223700(0x431)](_0x2dc354[_0x30a678]) : _0x50653c[_0x30a678] = {
                                ..._0x50653c[_0x30a678],
                                ..._0x2dc354[_0x30a678]
                            };
                        };
                        _0x122076['Ce'](_0x50653c);
                    })[_0x4b096a(0x68d)](function(_0x4d468f) {
                        var _0x587830 = _0x4b096a;
                        localStorage[_0x587830(0x5c2)](_0x587830(0x557)), localStorage[_0x587830(0x5c2)]('custom_skin'), _0x122076['Ce'](_0x50653c);
                    });
                });
            }, _0x44c90f[_0xf4fa20(0x869)]['Ce'] = function(_0x28d8db) {
                var _0x3575a0 = _0xf4fa20,
                    _0xea4d6b = this;
                if (this['me']) {
                    this['we']();
                    return;
                };
                var _0x52e900 = [],
                    _0x277e29 = [],
                    _0xbbeeaa = 0x0;
                for (var _0xc65f1a in _0x28d8db[_0x3575a0(0x1d3)]) {
                    if (_0x28d8db[_0x3575a0(0x1d3)][_0x3575a0(0x6f6)](_0xc65f1a)) {
                        var _0x164022 = _0x28d8db[_0x3575a0(0x1d3)][_0xc65f1a];
                        if (_0x164022[_0x3575a0(0x6f7)]) {
                            var _0x27a6ec = '';
                            _0x164022['relativePath'] && (_0x27a6ec = _0x164022[_0x3575a0(0x3b7)][_0x3575a0(0x6af)](_0x3575a0(0x230)) != -0x1 ? _0x164022[_0x3575a0(0x3b7)] : _0x1a98d3[_0x3575a0(0x7be)] + _0x164022[_0x3575a0(0x3b7)]);
                            var _0x46d2c8 = _0x164022[_0x3575a0(0x7d1)] || _0x27a6ec,
                                _0x1516eb = 0x0,
                                _0x56bb8f = '',
                                _0x3bcc62 = new _0x44c90f['De'](_0xc65f1a, _0x46d2c8, _0x1516eb, _0x56bb8f);
                            _0x52e900[_0x3575a0(0x31a)](_0x3bcc62), _0x277e29[_0x3575a0(0x31a)](_0x3bcc62);
                        } else {
                            var _0x46d2c8 = _0x2171ac['H']['K'] + _0x164022[_0x3575a0(0x3b7)],
                                _0x1516eb = _0x164022[_0x3575a0(0x626)],
                                _0x56bb8f = _0x164022['sha256'],
                                _0x3bcc62 = new _0x44c90f['De'](_0xc65f1a, _0x46d2c8, _0x1516eb, _0x56bb8f);
                            _0x52e900[_0x3575a0(0x31a)](_0x3bcc62), _0x277e29[_0x3575a0(0x31a)](_0x3bcc62), _0xbbeeaa += _0x1516eb;
                        }
                    }
                };
                var _0x3c8e2a, _0x252903 = 0x0;

                function _0x2364b6(_0xcf4231) {
                    var _0x2581dc = _0x3575a0;
                    for (var _0x186043 = 0x0; _0x186043 < _0x277e29[_0x2581dc(0x883)]; _0x186043++) {
                        try {
                            _0x158a86['c'][_0x2581dc(0x86d)][_0x2581dc(0x67c)](_0x277e29[_0x186043]['Ee']);
                        } catch (_0x49bce2) {}
                    };
                    _0xea4d6b['ze'](_0xcf4231);
                }

                function _0x3c8e23(_0x440c6b) {
                    var _0x4d8873, _0x4768d2;
                    _0x4d8873 = (_0x252903 + _0x239c2a['_'](_0x3c8e2a['Fe'] * _0x440c6b)) / _0xbbeeaa, _0x4768d2 = _0x44c90f['pe']['se'], _0xea4d6b['ye'](_0x4768d2, _0x44c90f['ve']['Mc'](_0x4768d2)['Wc'](_0x4d8873));
                }

                function _0x41fa13(_0x195cfd) {
                    var _0x335cda = _0x3575a0,
                        _0x38693d = new Blob([_0x195cfd]);
                    _0x3c8e2a['Ee'] = _0x158a86['c'][_0x335cda(0x86d)]['createObjectURL'](_0x38693d), _0x252903 += _0x3c8e2a['Fe'], _0x3e0b31();
                }

                function _0x3e0b31() {
                    var _0x28dce3 = _0x3575a0;
                    if (_0x54e6d0 < _0x277e29[_0x28dce3(0x883)]) {
                        _0x3c8e2a = _0x277e29[_0x54e6d0++], _0xea4d6b['Ge'](_0x3c8e2a, _0x2364b6, _0x41fa13, _0x3c8e23);
                        return;
                    };
                    _0x239c2a['Y'](function() {
                        return _0xea4d6b['He'](_0x28d8db, _0x52e900);
                    }, 0x0);
                }
                var _0x54e6d0 = 0x0;
                _0x3e0b31();
            }, _0x44c90f[_0xf4fa20(0x869)]['Ge'] = function(_0x248d8a, _0x190b0c, _0x267c5d, _0x37250f) {
                var _0x36e218 = _0xf4fa20;
                $[_0x36e218(0x2e7)]({
                    'type': _0x36e218(0x35e),
                    'url': _0x248d8a['Ie'],
                    'xhrFields': {
                        'responseType': _0x36e218(0x3ed),
                        'onprogress': function(_0x4c3ce3) {
                            var _0x3254be = _0x36e218;
                            _0x4c3ce3[_0x3254be(0x3c8)] && _0x37250f(_0x4c3ce3[_0x3254be(0x6ca)] / _0x4c3ce3['total']);
                        }
                    }
                })[_0x36e218(0x342)](function() {
                    _0x190b0c(Error());
                })[_0x36e218(0x7b1)](function(_0xb112af) {
                    _0x267c5d(_0xb112af);
                });
            }, _0x44c90f[_0xf4fa20(0x869)]['He'] = function(_0x580619, _0x4186c0) {
                var _0xea5ca5 = this;
                if (this['me']) {
                    this['we']();
                    return;
                };
                var _0x32ce63, _0x5bb152, _0x52b1ba = {};

                function _0x5dd539() {
                    var _0x5e2787 = _0x563d;
                    for (var _0x2b868a = 0x0; _0x2b868a < _0x4186c0[_0x5e2787(0x883)]; _0x2b868a++) {
                        try {
                            _0x158a86['c'][_0x5e2787(0x86d)]['revokeObjectURL'](_0x4186c0[_0x2b868a]['Ee']);
                        } catch (_0x54ad04) {}
                    };
                    _0xea5ca5['ze'](Error());
                }

                function _0x4d91f7() {
                    var _0x58d6f0 = _0x563d,
                        _0x32270f, _0x7417a4;
                    _0x32270f = _0x593ded / _0x4186c0[_0x58d6f0(0x883)], _0x7417a4 = _0x44c90f['pe']['te'], _0xea5ca5['ye'](_0x7417a4, _0x44c90f['ve']['Mc'](_0x7417a4)['Wc'](_0x32270f)), _0x52b1ba[_0x32ce63['Je']] = new _0x158a86['Ke'](_0x32ce63['Ee'], _0x5bb152), _0x504d0d();
                }

                function _0x504d0d() {
                    var _0x5ef351 = _0x563d;
                    if (_0x593ded < _0x4186c0[_0x5ef351(0x883)]) {
                        _0x32ce63 = _0x4186c0[_0x593ded++], (_0x5bb152 = _0x39b888['k']['m']['from'](_0x32ce63['Ee']))['on'](_0x5ef351(0x1c4), _0x5dd539), _0x5bb152['on'](_0x5ef351(0x6ca), _0x4d91f7);
                        return;
                    };
                    _0x239c2a['Y'](function() {
                        return _0xea5ca5['Le'](_0x580619, _0x52b1ba);
                    }, 0x0);
                }
                var _0x593ded = 0x0;
                _0x504d0d();
            }, _0x44c90f['prototype']['Le'] = function(_0x20bed9, _0x306f17) {
                var _0x1b19b2 = _0xf4fa20,
                    _0x32ceda = this,
                    _0x29894f = {},
                    _0x17a24f = 0x0,
                    _0x3255cf = Object[_0x1b19b2(0x5ab)](_0x20bed9[_0x1b19b2(0x6b8)])['length'];
                _0x239c2a['Da'](_0x20bed9['regionDict'], function(_0x12baff, _0x51bcc2) {
                    var _0x312aa5 = _0x1b19b2,
                        _0x56cb4e, _0x353511, _0x5e1a17 = _0x158a86['Wa']['mb'](_0x51bcc2[_0x312aa5(0x272)] + ':\x20' + _0x12baff, _0x306f17[_0x51bcc2['texture']]['Za'], _0x51bcc2);
                    _0x29894f[_0x12baff] = _0x5e1a17, ++_0x17a24f % 0xa == 0x0 && (_0x56cb4e = _0x17a24f / _0x3255cf, _0x353511 = _0x44c90f['pe']['ue'], _0x32ceda['ye'](_0x353511, _0x44c90f['ve']['Mc'](_0x353511)['Wc'](_0x56cb4e)));
                });
                var _0xae2249 = Object['values'](_0x306f17)['map'](function(_0x3e7f9e) {
                        return _0x3e7f9e['Za'];
                    }),
                    _0x457298 = Object['values'](_0x29894f),
                    _0x39b749 = new _0x158a86['jc'](_0x20bed9, _0x158a86['pb']['Qb'](_0x20bed9, _0x29894f, _0xae2249, _0x457298));
                _0x239c2a['Y'](function() {
                    return _0x32ceda['Me'](_0x39b749);
                }, 0x0);
            }, _0x44c90f['De'] = function _0x321148(_0x5cc22f, _0xdceb71, _0x2e2879, _0x162959) {
                this['Je'] = _0x5cc22f, this['Ie'] = _0xdceb71, this['Fe'] = _0x2e2879, this['Ne'] = _0x162959, this['Ee'] = '';
            }, _0x44c90f[_0xf4fa20(0x869)]['Me'] = function(_0x3041c7) {
                if (this['oe']) {
                    _0x3041c7['Cc']()['ob']();
                    return;
                };
                this['oe'] = !0x0;
                var _0x3aa1b4 = this;
                _0x239c2a['Y'](function() {
                    return _0x3aa1b4['he'](_0x3041c7);
                }, 0x0);
            }, _0x44c90f['prototype']['Ae'] = function() {
                if (!this['oe']) {
                    this['oe'] = !0x0;
                    var _0x39e294 = this;
                    _0x239c2a['Y'](function() {
                        return _0x39e294['ie']();
                    }, 0x0);
                }
            }, _0x44c90f['prototype']['ze'] = function(_0x27daaa) {
                if (!this['oe']) {
                    this['oe'] = !0x0;
                    var _0x7dc1b3 = this;
                    _0x239c2a['Y'](function() {
                        return _0x7dc1b3['je'](_0x27daaa);
                    }, 0x0);
                }
            }, _0x44c90f[_0xf4fa20(0x869)]['we'] = function() {
                if (!this['oe']) {
                    this['oe'] = !0x0;
                    var _0x414759 = this;
                    _0x239c2a['Y'](function() {
                        return _0x414759['ke']();
                    }, 0x0);
                }
            }, _0x44c90f[_0xf4fa20(0x869)]['ye'] = function(_0x1e00ed, _0x410ce5) {
                if (!this['oe'] && !this['me']) {
                    var _0x27e54f = this;
                    _0x239c2a['Y'](function() {
                        return _0x27e54f['le'](_0x1e00ed, _0x410ce5);
                    }, 0x0);
                }
            }, _0x44c90f;
        }()), _0x158a86['Oe'] = {}, _0x158a86['Pe'] = (function() {
            var _0x514d19 = _0x2b6b48;

            function _0x5f1346() {
                this['Qe'] = _0x158a86['Pe']['Se']['Re'], this['Te'] = !0x1, this['Ue'] = !0x1, this['Ve'] = null, this['We'] = null;
            }
            return _0x5f1346['prototype']['Sa'] = function() {}, _0x5f1346['prototype']['Xe'] = function(_0x473ee3) {
                this['Ue'] = _0x473ee3;
            }, _0x5f1346[_0x514d19(0x869)]['Ye'] = function(_0x3dc6aa) {
                this['Qe'] = _0x3dc6aa, this['Ze']();
            }, _0x5f1346[_0x514d19(0x869)]['$e'] = function(_0x7d83d5) {
                this['Te'] = _0x7d83d5, this['Ze']();
            }, _0x5f1346[_0x514d19(0x869)]['Ze'] = function() {}, _0x5f1346[_0x514d19(0x869)]['_e'] = function(_0x1f3b6, _0x343ac7) {
                var _0x5c203a = _0x514d19;
                if (!ooo['ud']['Fc']()) return null;;
                var _0x2625b3 = _0x1f3b6[_0x343ac7];
                return _0x2625b3 == null || _0x2625b3['length'] === 0x0 ? null : _0x2625b3[_0x239c2a['_'](_0x239c2a['ma']() * _0x2625b3[_0x5c203a(0x883)])][_0x5c203a(0x5a1)]();
            }, _0x5f1346[_0x514d19(0x869)]['af'] = function(_0x54bff4, _0x404278, _0x491daf) {
                var _0x5299a9 = _0x514d19;
                if (this['Ue'] && !(_0x491daf <= 0x0)) {
                    var _0x1d6909 = this['_e'](_0x54bff4, _0x404278);
                    _0x1d6909 != null && (_0x1d6909[_0x5299a9(0x781)] = _0x239c2a['ha'](0x1, _0x491daf), _0x1d6909[_0x5299a9(0x7d8)]());
                }
            }, _0x5f1346[_0x514d19(0x869)]['bf'] = function(_0x41d974, _0x2ff5e1) {
                this['Qe']['cf'] && this['af'](_0x41d974['ef']['df'], _0x41d974, _0x2ff5e1);
            }, _0x5f1346[_0x514d19(0x869)]['ff'] = function(_0x15217a, _0x32a2d3) {
                this['Qe']['gf'] && this['af'](_0x15217a['ef']['hf'], _0x15217a, _0x32a2d3);
            }, _0x5f1346[_0x514d19(0x869)]['if'] = function() {}, _0x5f1346['prototype']['jf'] = function() {}, _0x5f1346[_0x514d19(0x869)]['kf'] = function() {}, _0x5f1346['prototype']['lf'] = function() {}, _0x5f1346[_0x514d19(0x869)]['mf'] = function() {}, _0x5f1346[_0x514d19(0x869)]['nf'] = function() {}, _0x5f1346[_0x514d19(0x869)]['pf'] = function(_0x21847b, _0x52d63b, _0x2fc4ae) {}, _0x5f1346[_0x514d19(0x869)]['qf'] = function(_0x2fb26a) {}, _0x5f1346[_0x514d19(0x869)]['rf'] = function(_0x242050) {}, _0x5f1346['prototype']['sf'] = function(_0x5b4f86) {}, _0x5f1346[_0x514d19(0x869)]['tf'] = function(_0x2624f6) {}, _0x5f1346[_0x514d19(0x869)]['uf'] = function(_0xa10d64) {}, _0x5f1346[_0x514d19(0x869)]['vf'] = function(_0x45eeba) {}, _0x5f1346[_0x514d19(0x869)]['wf'] = function(_0x4aacca) {}, _0x5f1346['prototype']['xf'] = function(_0x4b0311) {}, _0x5f1346['prototype']['yf'] = function(_0x5d95d2) {}, _0x5f1346[_0x514d19(0x869)]['zf'] = function(_0x116132) {}, _0x5f1346['prototype']['Af'] = function(_0x21d7ef) {}, _0x5f1346[_0x514d19(0x869)]['Bf'] = function(_0x9f4a47) {}, _0x5f1346['prototype']['Cf'] = function(_0x274dfa) {}, _0x5f1346['prototype']['Df'] = function(_0x3d0046) {}, _0x5f1346[_0x514d19(0x869)]['Ef'] = function(_0x394813, _0x137d12) {}, _0x5f1346[_0x514d19(0x869)]['Ff'] = function(_0xb9ee1) {}, _0x5f1346[_0x514d19(0x869)]['Gf'] = function(_0x4265be, _0x97f1ec, _0x3c2f47) {}, _0x5f1346['Se'] = {
                'Re': {
                    'Hf': !0x1,
                    'If': !0x1,
                    'gf': !0x0,
                    'cf': !0x1
                },
                'Jf': {
                    'Hf': !0x1,
                    'If': !0x0,
                    'gf': !0x0,
                    'cf': !0x1
                },
                'Kf': {
                    'Hf': !0x0,
                    'If': !0x1,
                    'gf': !0x1,
                    'cf': !0x0
                },
                'Lf': {
                    'Hf': !0x1,
                    'If': !0x1,
                    'gf': !0x0,
                    'cf': !0x1
                },
                'Mf': {
                    'Hf': !0x1,
                    'If': !0x1,
                    'gf': !0x1,
                    'cf': !0x1
                }
            }, _0x5f1346;
        }()), _0x158a86['Nf'] = (function() {
            var _0x14fd1b = _0x2b6b48;

            function _0x2a6e8e(_0x102085) {
                var _0x43bbca = _0x563d;
                this['Of'] = _0x102085, this['nc'] = _0x102085[_0x43bbca(0x5d3)]()[0x0], this['Pf'] = 0x1, this['Qf'] = 0x1, this['Rf'] = new _0x158a86['Sf'](_0x255d8d, _0x25a752, _0x158a86['Uf']['Tf']), this['Vf'] = ((_0x534a03 = {})['view'] = this['nc'], _0x534a03[_0x43bbca(0x430)] = _0x15771c, _0x534a03[_0x43bbca(0x221)] = !0x0, new _0x39b888['k']['o'](_0x534a03)), this['Wf'] = new _0x39b888['k']['l'](), this['Wf']['sortableChildren'] = !0x0, this['Xf'] = new _0x39b888['k']['l'](), this['Xf'][_0x43bbca(0x4e3)] = 0x0, this['Wf'][_0x43bbca(0x371)](this['Xf']), this['Yf'] = new _0x158a86['Zf'](ooo['ef']['$f']), this['Yf']['_f'][_0x43bbca(0x4e3)] = 0x1, this['Wf'][_0x43bbca(0x371)](this['Yf']['_f']);
                var _0x534a03, _0xbad860 = this['Rf']['ag']();
                _0xbad860[_0x43bbca(0x4e3)] = 0x2, this['Wf'][_0x43bbca(0x371)](_0xbad860), this['bg'] = new _0x39b888['k']['l'](), this['bg'][_0x43bbca(0x4e3)] = 0x3, this['Wf'][_0x43bbca(0x371)](this['bg']), this['cg'] = [], this['dg'] = [], this['eg'] = [], this['Sa']();
            }
            var _0x15771c = 0x0,
                _0x255d8d = 0x5,
                _0x25a752 = 0x28,
                _0x4798f8 = [{
                    'fg': 0x1,
                    'gg': 0.5,
                    'hg': 0.5
                }, {
                    'fg': 0x1,
                    'gg': 0.75,
                    'hg': 0.5
                }, {
                    'fg': 0x1,
                    'gg': 0x1,
                    'hg': 0.5
                }, {
                    'fg': 0.75,
                    'gg': 0x1,
                    'hg': 0.5
                }, {
                    'fg': 0.5,
                    'gg': 0x1,
                    'hg': 0.5
                }, {
                    'fg': 0.5,
                    'gg': 0x1,
                    'hg': 0.75
                }, {
                    'fg': 0.5,
                    'gg': 0x1,
                    'hg': 0x1
                }, {
                    'fg': 0.5,
                    'gg': 0.75,
                    'hg': 0x1
                }, {
                    'fg': 0.5,
                    'gg': 0.5,
                    'hg': 0x1
                }, {
                    'fg': 0.75,
                    'gg': 0.5,
                    'hg': 0x1
                }, {
                    'fg': 0x1,
                    'gg': 0.5,
                    'hg': 0x1
                }, {
                    'fg': 0x1,
                    'gg': 0.5,
                    'hg': 0.75
                }];
            _0x2a6e8e[_0x14fd1b(0x869)]['Sa'] = function() {
                var _0x437f53 = _0x14fd1b;
                this['Vf'][_0x437f53(0x430)] = _0x15771c, this['cg'] = Array(_0x4798f8[_0x437f53(0x883)]);
                for (var _0x4982e2 = 0x0; _0x4982e2 < this['cg'][_0x437f53(0x883)]; _0x4982e2++) {
                    this['cg'][_0x4982e2] = new _0x39b888['k']['s'](), this['cg'][_0x4982e2][_0x437f53(0x272)] = ooo['ef']['ig'], this['cg'][_0x4982e2][_0x437f53(0x5b2)][_0x437f53(0x448)](0.5), this['Xf']['addChild'](this['cg'][_0x4982e2]);
                };
                this['dg'] = Array(ooo['ef']['jg'][_0x437f53(0x883)]);
                for (var _0x2cc552 = 0x0; _0x2cc552 < this['dg']['length']; _0x2cc552++) {
                    this['dg'][_0x2cc552] = new _0x39b888['k']['s'](), this['dg'][_0x2cc552][_0x437f53(0x272)] = ooo['ef']['jg'][_0x2cc552], this['dg'][_0x2cc552]['anchor'][_0x437f53(0x448)](0.5), this['bg'][_0x437f53(0x371)](this['dg'][_0x2cc552]);
                };
                this['eg'] = Array(this['dg'][_0x437f53(0x883)]);
                for (var _0x149055 = 0x0; _0x149055 < this['eg'][_0x437f53(0x883)]; _0x149055++) {
                    var _0x4235a0 = [0x1, 0x1, 0x1];
                    this['eg'][_0x149055] = {
                        'kg': _0x239c2a['va'](0x0, _0x2171ac['S']),
                        'lg': _0x239c2a['va'](0.09, 0.16) * 0.66,
                        'mg': _0x239c2a['va'](0x0, 0x1),
                        'ng': _0x239c2a['va'](0x0, 0x1),
                        'og': 0x0,
                        'fg': _0x4235a0[0x0],
                        'gg': _0x4235a0[0x1],
                        'hg': _0x4235a0[0x2]
                    };
                };
                this['pg'](), this['qg']();
            }, _0x2a6e8e['Rd'] = !0x1, _0x2a6e8e['rg'] = function(_0x47db22) {
                _0x2a6e8e['Rd'] = _0x47db22;
            }, _0x2a6e8e[_0x14fd1b(0x869)]['sg'] = function(_0x42f62c) {
                this['Rf']['rg'](_0x42f62c);
            }, _0x2a6e8e[_0x14fd1b(0x869)]['qg'] = function() {
                var _0x3d1af0 = _0x14fd1b,
                    _0x524162 = _0x239c2a['e']();
                this['Pf'] = this['Of'][_0x3d1af0(0x1eb)](), this['Qf'] = this['Of'][_0x3d1af0(0x2b6)](), this['Vf'][_0x3d1af0(0x25e)](this['Pf'], this['Qf']), this['Vf'][_0x3d1af0(0x6dd)] = _0x524162, this['nc'][_0x3d1af0(0x1eb)] = _0x524162 * this['Pf'], this['nc'][_0x3d1af0(0x2b6)] = _0x524162 * this['Qf'];
                var _0x33d692 = _0x239c2a['ia'](this['Pf'], this['Qf']) * 0.6;
                for (var _0x286d17 = 0x0; _0x286d17 < this['cg']['length']; _0x286d17++) {
                    this['cg'][_0x286d17][_0x3d1af0(0x1eb)] = _0x33d692, this['cg'][_0x286d17]['height'] = _0x33d692;
                };
                this['Yf']['tg'](this['Pf'], this['Qf']), this['Rf']['qg']();
            }, _0x2a6e8e[_0x14fd1b(0x869)]['ug'] = function(_0x1c071c, _0x3bacf2) {
                var _0xddb31d = _0x14fd1b;
                if (_0x2a6e8e['Rd']) {
                    var _0x770548 = _0x1c071c / 0x3e8,
                        _0x318a61 = this['Of'][_0xddb31d(0x1eb)](),
                        _0x261f66 = this['Of'][_0xddb31d(0x2b6)]();
                    for (var _0x18c5d6 = 0x0; _0x18c5d6 < this['cg'][_0xddb31d(0x883)]; _0x18c5d6++) {
                        var _0x3ce1a4 = _0x4798f8[_0x18c5d6 % _0x4798f8[_0xddb31d(0x883)]],
                            _0x3b6574 = this['cg'][_0x18c5d6],
                            _0x22d9ce = _0x18c5d6 / this['cg'][_0xddb31d(0x883)] * _0x2171ac['T'],
                            _0x500b82 = _0x770548 * 0.5 * 0.12,
                            _0x3f3996 = _0x239c2a['pa']((_0x500b82 + _0x22d9ce) * 0x3) * _0x239c2a['pa'](_0x22d9ce) - _0x239c2a['oa']((_0x500b82 + _0x22d9ce) * 0x5) * _0x239c2a['oa'](_0x22d9ce),
                            _0xbab076 = _0x239c2a['pa']((_0x500b82 + _0x22d9ce) * 0x3) * _0x239c2a['oa'](_0x22d9ce) + _0x239c2a['oa']((_0x500b82 + _0x22d9ce) * 0x5) * _0x239c2a['pa'](_0x22d9ce),
                            _0x269eec = 0.2 + _0x239c2a['pa'](_0x22d9ce + _0x770548 * 0.075) * 0.2,
                            _0x44ee75 = _0x3ce1a4['fg'] * 0xff << 0x10 & 0xff0000 | _0x3ce1a4['gg'] * 0xff << 0x8 & 0xff00 | _0x3ce1a4['hg'] * 0xff & 0xff;
                        _0x3b6574[_0xddb31d(0x78b)] = _0x44ee75, _0x3b6574['alpha'] = _0x269eec, _0x3b6574['position'][_0xddb31d(0x448)](_0x318a61 * (0.2 + (_0x3f3996 + 0x1) * 0.5 * 0.6), _0x261f66 * (0.1 + (_0xbab076 + 0x1) * 0.5 * 0.8));
                    };
                    var _0x9bc741 = _0x239c2a['ia'](_0x318a61, _0x261f66) * 0.05;
                    for (var _0x33286b = 0x0; _0x33286b < this['dg']['length']; _0x33286b++) {
                        var _0x5b4f3d = this['eg'][_0x33286b],
                            _0x2ab47b = this['dg'][_0x33286b],
                            _0x2c5691 = _0x2171ac['S'] * _0x33286b / this['dg'][_0xddb31d(0x883)];
                        _0x5b4f3d['mg'] = 0.2 + (_0x239c2a['pa'](_0x770548 * 0.01 + _0x2c5691) + _0x239c2a['pa'](_0x770548 * 0.02 * 0x11 + _0x2c5691) * 0.2 + 0x1) * 0.6 / 0x2, _0x5b4f3d['ng'] = 0.1 + (_0x239c2a['oa'](_0x770548 * 0.01 + _0x2c5691) + _0x239c2a['oa'](_0x770548 * 0.02 * 0x15 + _0x2c5691) * 0.2 + 0x1) * 0.8 / 0x2;
                        var _0x500283 = _0x5b4f3d['mg'],
                            _0x90f15f = _0x5b4f3d['ng'],
                            _0x42a9da = _0x239c2a['fa'](_0x239c2a['ra'](_0x239c2a['pa']((_0x2c5691 + _0x770548 * 0.048) * 1.5), 0x6), 0x0, 0.9),
                            _0x15ff29 = (0.4 + (0x1 + _0x239c2a['oa'](_0x2c5691 + _0x770548 * 0.12)) * 0.5 * 1.2) * 1.2,
                            _0x3ac81e = _0x2c5691 + _0x770548 * 0.1,
                            _0x36b59e = _0x5b4f3d['fg'] * 0xff << 0x10 & 0xff0000 | _0x5b4f3d['gg'] * 0xff << 0x8 & 0xff00 | _0x5b4f3d['hg'] * 0xff & 0xff;
                        _0x2ab47b[_0xddb31d(0x44e)] = _0x42a9da, _0x2ab47b[_0xddb31d(0x78b)] = _0x36b59e, _0x2ab47b[_0xddb31d(0x5d6)][_0xddb31d(0x448)](_0x318a61 * _0x500283, _0x261f66 * _0x90f15f), _0x2ab47b[_0xddb31d(0x364)] = _0x3ac81e;
                        var _0x183a44 = _0x2ab47b[_0xddb31d(0x272)]['width'] / _0x2ab47b['texture']['height'];
                        _0x2ab47b['width'] = _0x15ff29 * _0x9bc741, _0x2ab47b[_0xddb31d(0x2b6)] = _0x15ff29 * _0x9bc741 * _0x183a44;
                    };
                    this['vg'](), this['Vf'][_0xddb31d(0x6d2)](this['Wf'], null, !0x0);
                }
            }, _0x2a6e8e['prototype']['wg'] = function() {
                var _0x44b1e1 = _0x14fd1b;
                if (ooo['ud']['Fc']()) {
                    var _0x4cc821 = ooo['ud']['Cc']()['Rb'](_0x255d8d);
                    for (var _0x3384c5 = 0x0; _0x3384c5 < _0x255d8d; _0x3384c5++) {
                        this['Rf']['xg'](_0x3384c5, _0x4cc821[_0x3384c5]);
                    }
                } else {
                    var _0x278b56 = _0x239c2a['va'](0x0, 0x1);
                    for (var _0x3305d7 = 0x0; _0x3305d7 < _0x255d8d; _0x3305d7++) {
                        var _0x27be76 = (_0x278b56 + _0x3305d7 / _0x255d8d) % 0x1,
                            _0x48ca49 = _0x239c2a['za'](_0x239c2a['_'](_0x27be76 * 0x168), 0.85, 0.5),
                            _0x2a38d7 = _0x48ca49[0x0] * 0xff & 0xff | _0x48ca49[0x1] * 0xff << 0x8 & 0xff00 | _0x48ca49[0x2] * 0xff << 0x10 & 0xff0000,
                            _0x34a84e = _0x44b1e1(0x2ff) + _0x2a38d7[_0x44b1e1(0x699)](0x10);
                        _0x34a84e = '#' + _0x34a84e['substring'](_0x34a84e[_0x44b1e1(0x883)] - 0x6, _0x34a84e['length']), this['Rf']['yg'](_0x3305d7, _0x34a84e);
                    }
                }
            }, _0x2a6e8e[_0x14fd1b(0x869)]['pg'] = function() {
                var _0x500915 = _0x239c2a['ha'](this['Pf'], this['Qf']),
                    _0x5e768f = _0x239c2a['Ca']();
                for (var _0x5b9754 = 0x0; _0x5b9754 < _0x255d8d; _0x5b9754++) {
                    var _0x1b7d64 = _0x2292ed(_0x5e768f, 0.12, _0x5b9754 / _0x255d8d * _0x2171ac['S']);
                    _0x1b7d64['_a'] = _0x1b7d64['_a'] * 0x4, _0x1b7d64['ab'] = _0x1b7d64['ab'] * 0x4, this['Rf']['zg'](_0x5b9754, (this['Pf'] + _0x1b7d64['_a'] * _0x500915) * 0.5, (this['Qf'] + _0x1b7d64['ab'] * _0x500915) * 0.5);
                }
            }, _0x2a6e8e[_0x14fd1b(0x869)]['vg'] = function() {
                var _0x430296 = _0x239c2a['ha'](this['Pf'], this['Qf']),
                    _0xf983d3 = _0x239c2a['Ca']();
                for (var _0x48b72a = 0x0; _0x48b72a < _0x255d8d; _0x48b72a++) {
                    var _0x4d83a3 = _0x2292ed(_0xf983d3, 0.12, _0x48b72a / _0x255d8d * _0x2171ac['S']);
                    this['Rf']['Ag'](_0x48b72a, (this['Pf'] + _0x4d83a3['_a'] * _0x430296) * 0.5, (this['Qf'] + _0x4d83a3['ab'] * _0x430296) * 0.5);
                };
                this['Rf']['Bg']();
            };

            function _0x2292ed(_0x17224f, _0x938eb0, _0x44d4d1) {
                var _0xcf207b = _0x17224f / 0x3e8;
                return {
                    '_a': (_0x239c2a['pa'](_0x938eb0 * _0xcf207b + _0x44d4d1) + _0x239c2a['pa'](_0x938eb0 * -0x20 * _0xcf207b + _0x44d4d1) * 0.4 + _0x239c2a['pa'](_0x938eb0 * 0x7 * _0xcf207b + _0x44d4d1) * 0.7) * 0.8,
                    'ab': (_0x239c2a['oa'](_0x938eb0 * _0xcf207b + _0x44d4d1) + _0x239c2a['oa'](_0x938eb0 * -0x20 * _0xcf207b + _0x44d4d1) * 0.4 + _0x239c2a['oa'](_0x938eb0 * 0x7 * _0xcf207b + _0x44d4d1) * 0.7) * 0.8
                };
            }
            return _0x2a6e8e;
        }()), _0x158a86['Cg'] = (function() {
            var _0x2f700c = _0x2b6b48;

            function _0x13be69() {}
            return _0x13be69['Dg'] = _0x2f700c(0x2fd), _0x13be69['Eg'] = 'showPlayerNames', _0x13be69['Fg'] = _0x2f700c(0x852), _0x13be69['Gg'] = _0x2f700c(0x3f2), _0x13be69['Hg'] = _0x2f700c(0x716), _0x13be69['Ig'] = 'gameMode', _0x13be69['Jg'] = 'nickname', _0x13be69['Kg'] = _0x2f700c(0x87b), _0x13be69['Lg'] = 'prerollCount', _0x13be69['Mg'] = _0x2f700c(0x459), _0x13be69['Ng'] = function(_0x2b72ef, _0xde2478, _0x74d2b) {
                var _0x223027 = _0x2f700c,
                    _0x5cbae3 = new Date();
                _0x5cbae3[_0x223027(0x2e2)](_0x5cbae3[_0x223027(0x484)]() + _0x74d2b * 0x5265c00);
                var _0x48459b = _0x223027(0x6d4) + _0x5cbae3['toUTCString']();
                _0x158a86['d'][_0x223027(0x2a0)] = _0x2b72ef + '=' + _0xde2478 + ';\x20' + _0x48459b;
            }, _0x13be69['Og'] = function(_0x40b034) {
                var _0x123b3c = _0x2f700c,
                    _0x461652 = _0x40b034 + '=';
                for (var _0x529cbc = _0x158a86['d'][_0x123b3c(0x2a0)][_0x123b3c(0x3de)](';\x20'), _0x437ab9 = 0x0; _0x437ab9 < _0x529cbc['length']; _0x437ab9++) {
                    for (var _0x412b7d = _0x529cbc[_0x437ab9]; _0x412b7d[_0x123b3c(0x1f2)](0x0) == '\x20';) {
                        _0x412b7d = _0x412b7d[_0x123b3c(0x61a)](0x1);
                    };
                    if (_0x412b7d['indexOf'](_0x461652) == 0x0) return _0x412b7d[_0x123b3c(0x61a)](_0x461652[_0x123b3c(0x883)], _0x412b7d[_0x123b3c(0x883)]);
                };
                return '';
            }, _0x13be69;
        }()), _0x3adf28 = [
            [-28.06744, 64.95936],
            [-10.59082, 72.91964],
            [14.11773, 81.39558],
            [36.51855, 81.51827],
            [32.82715, 71.01696],
            [31.64063, 69.41897],
            [29.41419, 68.43628],
            [30.64379, 67.47302],
            [29.88281, 66.76592],
            [30.73975, 65.50385],
            [30.73975, 64.47279],
            [31.48682, 63.49957],
            [32.18994, 62.83509],
            [28.47726, 60.25122],
            [28.76221, 59.26588],
            [28.03711, 58.60833],
            [28.38867, 57.53942],
            [28.83955, 56.2377],
            [31.24512, 55.87531],
            [31.61865, 55.34164],
            [31.92627, 54.3037],
            [33.50497, 53.26758],
            [32.73926, 52.85586],
            [32.23389, 52.4694],
            [34.05762, 52.44262],
            [34.98047, 51.79503],
            [35.99121, 50.88917],
            [36.67236, 50.38751],
            [37.74902, 50.51343],
            [40.78125, 49.62495],
            [40.47363, 47.70976],
            [38.62799, 46.92028],
            [37.53193, 46.55915],
            [36.72182, 44.46428],
            [39.68218, 43.19733],
            [40.1521, 43.74422],
            [43.52783, 43.03678],
            [45.30762, 42.73087],
            [46.99951, 41.98399],
            [47.26318, 40.73061],
            [44.20009, 40.86309],
            [45.35156, 39.57182],
            [45.43945, 36.73888],
            [35.64789, 35.26481],
            [33.13477, 33.65121],
            [21.47977, 33.92486],
            [12.16268, 34.32477],
            [11.82301, 37.34239],
            [6.09112, 38.28597],
            [-1.96037, 35.62069],
            [-4.82156, 35.60443],
            [-7.6498, 35.26589],
            [-16.45237, 37.44851],
            [-28.06744, 64.95936]
        ], _0x2171ac['Pg'] = {
            'Qg': function(_0x348d11, _0x12aa1f) {
                return function _0x4350a8(_0x3a2090, _0x20f32d, _0x7b7c33) {
                    var _0x5a0818 = _0x563d,
                        _0x156ac0 = !0x1;
                    for (var _0x357613 = _0x7b7c33[_0x5a0818(0x883)], _0x9b87c7 = 0x0, _0x57de2e = _0x357613 - 0x1; _0x9b87c7 < _0x357613; _0x57de2e = _0x9b87c7++) {
                        _0x7b7c33[_0x9b87c7][0x1] > _0x20f32d != _0x7b7c33[_0x57de2e][0x1] > _0x20f32d && _0x3a2090 < (_0x7b7c33[_0x57de2e][0x0] - _0x7b7c33[_0x9b87c7][0x0]) * (_0x20f32d - _0x7b7c33[_0x9b87c7][0x1]) / (_0x7b7c33[_0x57de2e][0x1] - _0x7b7c33[_0x9b87c7][0x1]) + _0x7b7c33[_0x9b87c7][0x0] && (_0x156ac0 = !_0x156ac0);
                    };
                    return _0x156ac0;
                }(_0x12aa1f, _0x348d11, _0x3adf28);
            }
        }, _0x158a86['Rg'] = (function() {
            var _0x4983af = _0x2b6b48;

            function _0x55bcf0(_0x2b04d6, _0x3ed0b0) {
                var _0x2b3cb9, _0x356edc;
                return _0x3ed0b0 ? (_0x2b3cb9 = 1.3, _0x356edc = 0xed563f) : (_0x2b3cb9 = 1.1, _0x356edc = 0xf4d100), new _0x372788(_0x2b04d6, _0x356edc, !0x0, 0.5, _0x2b3cb9, 0.5, 0.7);
            }

            function _0x1d0b7f(_0x57068b, _0x4bbaad, _0xc08a39) {
                return ((_0x57068b * 0xff & 0xff) << 0x10) + ((_0x4bbaad * 0xff & 0xff) << 0x8) + (_0xc08a39 * 0xff & 0xff);
            }
            var _0x3cd2d9 = _0x239c2a['ca'](_0x39b888['k']['l'], function() {
                var _0x5b0c1c = _0x563d;
                _0x39b888['k']['l'][_0x5b0c1c(0x545)](this), this['Sg'] = [], this['Tg'] = 0x0;
            });
            _0x3cd2d9[_0x4983af(0x869)]['Ug'] = function(_0x4f9f3a) {
                var _0x10e242 = _0x4983af;
                this['Tg'] += _0x4f9f3a;
                if (this['Tg'] >= 0x1) {
                    var _0x5efe7f = _0x239c2a['_'](this['Tg']);
                    this['Tg'] -= _0x5efe7f;
                    var _0x27025b = function _0x51ae7e(_0x41e0d2) {
                        var _0x4a4947 = _0x563d;
                        _0x1628dc = _0x41e0d2 > 0x0 ? '+' + _0x239c2a['_'](_0x41e0d2) : _0x41e0d2 < 0x0 ? '-' + _0x239c2a['_'](_0x41e0d2) : '0';
                        var _0x1628dc, _0x2e53db, _0x8f6f1b = _0x239c2a['ha'](1.5, 0.5 + _0x41e0d2 / 0x258);
                        if (_0x41e0d2 < 0x1) _0x2e53db = _0x4a4947(0x5a0);
                        else {
                            if (_0x41e0d2 < 0x1e) {
                                var _0x1d5dd3 = (_0x41e0d2 - 0x1) / 0x1d;
                                _0x2e53db = _0x1d0b7f((0x1 - _0x1d5dd3) * 0x1 + _0x1d5dd3 * 0.96, (0x1 - _0x1d5dd3) * 0x1 + _0x1d5dd3 * 0.82, (0x1 - _0x1d5dd3) * 0x1 + _0x1d5dd3 * 0x0);
                            } else {
                                if (_0x41e0d2 < 0x12c) {
                                    var _0x358a24 = (_0x41e0d2 - 0x1e) / 0x10e;
                                    _0x2e53db = _0x1d0b7f((0x1 - _0x358a24) * 0.96 + _0x358a24 * 0.93, (0x1 - _0x358a24) * 0.82 + _0x358a24 * 0.34, (0x1 - _0x358a24) * 0x0 + _0x358a24 * 0.25);
                                } else {
                                    if (_0x41e0d2 < 0x2bc) {
                                        var _0x5d56d0 = (_0x41e0d2 - 0x12c) / 0x190;
                                        _0x2e53db = _0x1d0b7f((0x1 - _0x5d56d0) * 0.93 + _0x5d56d0 * 0.98, (0x1 - _0x5d56d0) * 0.34 + _0x5d56d0 * 0x0, (0x1 - _0x5d56d0) * 0.25 + _0x5d56d0 * 0.98);
                                    } else _0x2e53db = 0xf900f9;
                                }
                            }
                        };
                        var _0xacfcc3 = _0x239c2a['ma'](),
                            _0x52d9b5 = 0x1 + _0x239c2a['ma']() * 0.5;
                        return new _0x372788(_0x1628dc, _0x2e53db, !0x0, 0.5, _0x8f6f1b, _0xacfcc3, _0x52d9b5);
                    }(_0x5efe7f);
                    this['addChild'](_0x27025b), this['Sg'][_0x10e242(0x31a)](_0x27025b);
                }
            }, window['playMonsterSound'] = function() {
                var _0x2d67aa = _0x4983af;
                if (wftObjects[_0x2d67aa(0x793)]) {
                    const _0x1d35d6 = document[_0x2d67aa(0x804)](_0x2d67aa(0x55e));
                    _0x1d35d6 && (_0x1d35d6[_0x2d67aa(0x5bc)](), _0x1d35d6[_0x2d67aa(0x519)] = 0x0);
                    const _0x18c116 = document[_0x2d67aa(0x804)]('monster_kill_sound');
                    _0x18c116 && (_0x18c116[_0x2d67aa(0x781)] = wftObjects[_0x2d67aa(0x43f)] / 0x64, _0x18c116[_0x2d67aa(0x519)] = 0x0, _0x18c116[_0x2d67aa(0x7d8)]());
                }
            }, _0x3cd2d9[_0x4983af(0x869)]['Vg'] = function(_0x4fcd4c, _0x177f47) {
                var _0x5ea831 = _0x4983af;
                _0x2ae5f5(_0x1a98d3, oeo, _0x5ea831(0x597), _0x4fcd4c);
                _0x4fcd4c && _0x1a98d3['vh'] && ((_0x1a98d3[_0x5ea831(0x717)] % 0xa !== 0x0 || !(_0x1a98d3[_0x5ea831(0x717)] > 0x0)) && window[_0x5ea831(0x56f)]());
                if (_0x4fcd4c) {
                    var _0x346ecb = '';
                    if (_0x1a98d3['iq']) {
                        _0x346ecb = _0x5ea831(0x778);
                        var _0x4f82bb = _0x55bcf0(_0x346ecb, !0x0);
                        this[_0x5ea831(0x371)](_0x4f82bb), this['Sg'][_0x5ea831(0x31a)](_0x4f82bb);
                    } else {
                        if (_0x1a98d3[_0x5ea831(0x2da)] === _0x5ea831(0x6f7) && _0x1a98d3[_0x5ea831(0x33d)]) _0x346ecb = _0x1a98d3[_0x5ea831(0x33d)];
                        else _0x1a98d3['headshotMsg'] ? _0x346ecb = _0x1a98d3[_0x5ea831(0x3c3)] : _0x346ecb = _0x239c2a['U'](_0x5ea831(0x1f7));
                        var _0x4bebaf = _0x346ecb;
                        _0x1a98d3[_0x5ea831(0x33e)] !== !0x1 && _0x177f47 && (_0x1a98d3['headshotNamePos'] === _0x5ea831(0x3e7) ? _0x4bebaf = _0x177f47 + '\x20' + _0x346ecb : _0x4bebaf = _0x346ecb + '\x20' + _0x177f47);
                        var _0x4f82bb = _0x55bcf0(_0x4bebaf, !0x0);
                        this[_0x5ea831(0x371)](_0x4f82bb), this['Sg']['push'](_0x4f82bb);
                    }
                } else {
                    var _0x346ecb = '';
                    if (_0x1a98d3['iq']) {
                        _0x346ecb = _0x5ea831(0x47e);
                        var _0x3ce3b9 = _0x55bcf0(_0x346ecb, !0x1);
                        this['addChild'](_0x3ce3b9), this['Sg']['push'](_0x3ce3b9);
                    } else {
                        if (_0x1a98d3[_0x5ea831(0x3f8)] === _0x5ea831(0x6f7) && _0x1a98d3[_0x5ea831(0x2a6)]) _0x346ecb = _0x1a98d3[_0x5ea831(0x2a6)];
                        else _0x1a98d3[_0x5ea831(0x88b)] ? _0x346ecb = _0x1a98d3[_0x5ea831(0x88b)] : _0x346ecb = _0x239c2a['U'](_0x5ea831(0x29c));
                        var _0x4bebaf = _0x346ecb;
                        _0x1a98d3['showKillName'] !== !0x1 && _0x177f47 && (_0x1a98d3['killNamePos'] === _0x5ea831(0x3e7) ? _0x4bebaf = _0x177f47 + '\x20' + _0x346ecb : _0x4bebaf = _0x346ecb + '\x20' + _0x177f47);
                        var _0x3ce3b9 = _0x55bcf0(_0x4bebaf, !0x1);
                        this[_0x5ea831(0x371)](_0x3ce3b9), this['Sg'][_0x5ea831(0x31a)](_0x3ce3b9);
                    }
                }
            }, _0x3cd2d9[_0x4983af(0x869)]['Bg'] = function(_0xdfc40a, _0x1becce) {
                var _0x124140 = _0x4983af,
                    _0x34b2fa = ooo['Xg']['Kf']['Wg'],
                    _0x329014 = _0x34b2fa['Vf']['width'] / _0x34b2fa['Vf'][_0x124140(0x6dd)],
                    _0x488704 = _0x34b2fa['Vf']['height'] / _0x34b2fa['Vf']['resolution'];
                for (var _0x570c77 = 0x0; _0x570c77 < this['Sg'][_0x124140(0x883)];) {
                    var _0x1d012a = this['Sg'][_0x570c77];
                    _0x1d012a['Yg'] = _0x1d012a['Yg'] + _0x1becce / 0x7d0 * _0x1d012a['Zg'], _0x1d012a['$g'] = _0x1d012a['$g'] + _0x1becce / 0x7d0 * _0x1d012a['_g'], _0x1d012a[_0x124140(0x44e)] = _0x239c2a['oa'](_0x2171ac['T'] * _0x1d012a['$g']) * 0.5, _0x1d012a[_0x124140(0x353)][_0x124140(0x448)](_0x1d012a['Yg']), _0x1d012a[_0x124140(0x5d6)]['x'] = _0x329014 * (0.25 + _0x1d012a['ah'] * 0.5), _0x1d012a['position']['y'] = _0x1d012a['bh'] ? _0x488704 * (0x1 - (0x1 + _0x1d012a['$g']) * 0.5) : _0x488704 * (0x1 - (0x0 + _0x1d012a['$g']) * 0.5), _0x1d012a['$g'] > 0x1 && (_0x39b888['k']['F']['G'](_0x1d012a), this['Sg'][_0x124140(0x312)](_0x570c77, 0x1), _0x570c77--), _0x570c77++;
                }
            };
            var _0x372788 = _0x239c2a['ca'](_0x39b888['k']['t'], function(_0x361f34, _0x5ca619, _0x2081af, _0x54aba1, _0x4592e0, _0x223ffe, _0x5f25d7) {
                var _0x3772e6 = _0x4983af;
                _0x39b888['k']['t'][_0x3772e6(0x545)](this, _0x361f34, {
                    'fill': _0x5ca619,
                    'fontFamily': 'PTSans',
                    'fontSize': 0x24
                }), this[_0x3772e6(0x5b2)][_0x3772e6(0x448)](0.5), this['bh'] = _0x2081af, this['Yg'] = _0x54aba1, this['Zg'] = _0x4592e0, this['ah'] = _0x223ffe, this['$g'] = 0x0, this['_g'] = _0x5f25d7;
            });
            return _0x3cd2d9;
        }()), _0x158a86['Ke'] = function _0xe804de(_0x293180, _0x1baf14) {
            this['Ee'] = _0x293180, this['Za'] = _0x1baf14;
        }, _0x158a86['jd'] = {
            'ch': 0x0,
            'id': 0x10
        }, _0x158a86['dh'] = (function() {
            var _0x1dda87 = _0x2b6b48;

            function _0x4d12a8() {
                this['eh'] = _0x158a86['jd']['ch'], this['fh'] = 0x0, this['gh'] = 0x1f4, this['hh'] = 0xfa0, this['ih'] = 0x1b58;
            }
            return _0x4d12a8['jh'] = 0x0, _0x4d12a8[_0x1dda87(0x869)]['kh'] = function() {
                return this['gh'] * 1.02;
            }, _0x4d12a8;
        }()), _0x158a86['lh'] = (function() {
            var _0x157c3b = _0x2b6b48;

            function _0x2b83eb(_0x5ca90a) {
                var _0x168131 = _0x563d,
                    _0x5990c0;
                this['Of'] = _0x5ca90a, this['nc'] = _0x5ca90a['get']()[0x0], this['Vf'] = ((_0x5990c0 = {})[_0x168131(0x2f8)] = this['nc'], _0x5990c0[_0x168131(0x430)] = _0x528c79, _0x5990c0['antialias'] = !0x0, new _0x39b888['k']['o'](_0x5990c0)), this['Wf'] = new _0x39b888['k']['l'](), this['Wf'][_0x168131(0x693)] = !0x0, this['mh'] = _0x239c2a['_'](_0x239c2a['ma']()), this['nh'] = 0x0, this['oh'] = 0x0, this['ph'] = 0xf, this['qh'] = 0.5, this['rh'] = 0x0, this['sh'] = new _0x158a86['th'](), this['uh'] = new _0x39b888['k']['p'](), this['vh'] = new _0x39b888['k']['l'](), this['wh'] = new _0x39b888['k']['l'](), this['wh']['sortableChildren'] = !0x0, this['xh'] = new _0x39b888['k']['l'](), this['yh'] = new _0x39b888['k']['l'](), this['yh'][_0x168131(0x693)] = !0x0, this['zh'] = new _0x39b888['k']['l'](), this['Ah'] = new _0x13ee30(), this['Bh'] = new _0x2a988a(), this['Ch'] = new _0x5f01c6(), this['Dh'] = new _0x158a86['Rg'](), this['Eh'] = new _0x39b888['k']['s'](), this['Fh'] = {
                    'x': 0x0,
                    'y': 0x0
                }, this['Sa']();
            }
            var _0x3d1580, _0x3dafa6, _0x591631, _0x560b7c, _0x5f5168, _0x528c79 = 0x0;
            _0x2b83eb[_0x157c3b(0x869)]['Sa'] = function() {
                var _0x3cf745 = _0x157c3b;
                this['Vf'][_0x3cf745(0x430)] = _0x528c79, this['sh']['_f'][_0x3cf745(0x4e3)] = 0xa, this['Wf'][_0x3cf745(0x371)](this['sh']['_f']), this['uh']['zIndex'] = 0x14, this['Wf'][_0x3cf745(0x371)](this['uh']), this['vh'][_0x3cf745(0x4e3)] = 0x1388, this['Wf'][_0x3cf745(0x371)](this['vh']), this['wh']['zIndex'] = 0x13ec, this['Wf'][_0x3cf745(0x371)](this['wh']), this['xh'][_0x3cf745(0x4e3)] = 0x2710, this['Wf'][_0x3cf745(0x371)](this['xh']), this['Eh'][_0x3cf745(0x272)] = ooo['ef']['Gh'], this['Eh'][_0x3cf745(0x5b2)]['set'](0.5), _0x1c4d62 = new _0x39b888['k']['p'](), _0x1c4d62['zIndex'] = 0x1, this['Wf'][_0x3cf745(0x371)](_0x1c4d62), this['Eh'][_0x3cf745(0x4e3)] = 0x1, this['yh'][_0x3cf745(0x371)](this['Eh']), this['zh']['alpha'] = 0.6, this['zh']['zIndex'] = 0x2, this['yh'][_0x3cf745(0x371)](this['zh']), this['Dh'][_0x3cf745(0x4e3)] = 0x3, this['yh']['addChild'](this['Dh']), this['Ah'][_0x3cf745(0x44e)] = 0.8, this['Ah'][_0x3cf745(0x4e3)] = 0x4, this['yh'][_0x3cf745(0x371)](this['Ah']), this['Bh'][_0x3cf745(0x4e3)] = 0x5, this['yh'][_0x3cf745(0x371)](this['Bh']), this['Ch'][_0x3cf745(0x4e3)] = 0x6, this['yh'][_0x3cf745(0x371)](this['Ch']), this['qg']();
            }, _0x2b83eb[_0x157c3b(0x869)]['qg'] = function() {
                var _0x113a91 = _0x157c3b,
                    _0x3049d1 = _0x239c2a['e'](),
                    _0x29a589 = this['Of'][_0x113a91(0x1eb)](),
                    _0x1ca830 = this['Of'][_0x113a91(0x2b6)]();
                this['Vf'][_0x113a91(0x25e)](_0x29a589, _0x1ca830), this['Vf'][_0x113a91(0x6dd)] = _0x3049d1, this['nc'][_0x113a91(0x1eb)] = _0x3049d1 * _0x29a589, this['nc'][_0x113a91(0x2b6)] = _0x3049d1 * _0x1ca830, this['qh'] = _0x239c2a['ha'](_0x239c2a['ha'](_0x29a589, _0x1ca830), _0x239c2a['ia'](_0x29a589, _0x1ca830) * 0.625), this['Eh'][_0x113a91(0x5d6)]['x'] = _0x29a589 / 0x2, this['Eh']['position']['y'] = _0x1ca830 / 0x2, this['Eh'][_0x113a91(0x1eb)] = _0x29a589, this['Eh'][_0x113a91(0x2b6)] = _0x1ca830, this['Ah'][_0x113a91(0x371)](vO3[_0x113a91(0x279)]), this['Ah'][_0x113a91(0x5d6)]['x'] = _0x1a98d3['sc'] == 0x0 ? 0x3c : _0x29a589 / 0x2 + 0x3c - _0x29a589 * _0x1a98d3['wi'], this['Ah'][_0x113a91(0x5d6)]['y'] = 0x3c, this['Bh']['position']['x'] = _0x1a98d3['sc'] == 0x0 ? 0x6e : _0x29a589 / 0x2 + 0x6e - _0x29a589 * _0x1a98d3['wi'], this['Bh'][_0x113a91(0x5d6)]['y'] = 0xa, this['Ch'][_0x113a91(0x5d6)]['x'] = _0x1a98d3['sc'] == 0x0 ? _0x29a589 - 0xe1 : _0x29a589 / 0x2 - 0xe1 + _0x29a589 * _0x1a98d3['wi'], this['Ch']['position']['y'] = 0x1;
            }, _0x2b83eb[_0x157c3b(0x869)]['Bg'] = function(_0x521062, _0x40f443) {
                var _0x4dccf2 = _0x157c3b;
                this['ph'] = 0xf, this['vh'][_0x4dccf2(0x5ad)](), this['wh'][_0x4dccf2(0x5ad)](), this['xh']['removeChildren'](), this['zh'][_0x4dccf2(0x5ad)](), this['sh']['Hh'](_0x521062['eh'] === _0x158a86['jd']['ch'] ? ooo['ef']['F_bg'] : ooo['ef']['Jh']);
                var _0x30181f = this['uh'];
                _0x30181f['clear'](), _0x30181f['lineStyle'](0.2, 0xff0000, 0.3), _0x30181f[_0x4dccf2(0x2d7)](0x0, 0x0, _0x521062['gh']), _0x30181f[_0x4dccf2(0x826)](), this['Ch']['Kh'] = _0x40f443, this['zh'][_0x4dccf2(0x287)] = _0x40f443;
            }, _0x2b83eb[_0x157c3b(0x869)]['ug'] = function(_0x174404, _0x371695) {
                var _0x4f1a68 = _0x157c3b;
                if (!(this['Vf']['width'] <= 0x5)) {
                    var _0x1e0b9d = ooo['Mh']['Lh'],
                        _0x45de52 = this['Vf'][_0x4f1a68(0x1eb)] / this['Vf'][_0x4f1a68(0x6dd)],
                        _0xa630c7 = this['Vf']['height'] / this['Vf'][_0x4f1a68(0x6dd)];
                    this['ph'] = _0x239c2a['ga'](this['ph'], ooo['Mh']['Nh'], _0x371695, 0.002), this['zh'][_0x4f1a68(0x287)] = _0x1a98d3['sn'];
                    var _0x338a08 = this['qh'] / (this['ph'] * _0x1a98d3['z']),
                        _0x32feb1 = ooo['Mh']['Lh']['Nd'][_0x158a86['Pd']['Zd']],
                        _0x111ed4 = _0x32feb1 != null && _0x32feb1['Rd'];
                    this['rh'] = _0x239c2a['fa'](this['rh'] + _0x371695 / 0x3e8 * ((_0x111ed4 ? 0x1 : 0x0) * 0.1 - this['rh']), 0x0, 0x1), this['Eh'][_0x4f1a68(0x44e)] = this['rh'], this['mh'] = this['mh'] + _0x371695 * 0.01;
                    this['mh'] > 0x168 && (this['mh'] = this['mh'] % 0x168);
                    this['nh'] = _0x239c2a['oa'](_0x174404 / 0x4b0 * _0x2171ac['S']);
                    var _0x6e62c = _0x1e0b9d['Oh']();
                    this['Fh']['x'] = _0x239c2a['ja'](this['Fh']['x'], _0x6e62c['_a'], _0x371695, window[_0x4f1a68(0x66d)]['smoothCamera'], 33.333), this['Fh']['y'] = _0x239c2a['ja'](this['Fh']['y'], _0x6e62c['ab'], _0x371695, 0.5, 33.333);
                    var _0x40d62c = _0x45de52 / _0x338a08 / 0x2,
                        _0x4afbd1 = _0xa630c7 / _0x338a08 / 0x2;
                    ooo['Mh']['Ph'](this['Fh']['x'] - _0x40d62c * 1.3, this['Fh']['x'] + _0x40d62c * 1.3, this['Fh']['y'] - _0x4afbd1 * 1.3, this['Fh']['y'] + _0x4afbd1 * 1.3), this['sh']['Bg'](this['Fh']['x'], this['Fh']['y'], _0x40d62c * 0x2, _0x4afbd1 * 0x2);
                    var _0x31ffe3 = ooo['Mh']['Qh']['gh'];
                    this['Wf'][_0x4f1a68(0x353)]['x'] = _0x338a08, this['Wf'][_0x4f1a68(0x353)]['y'] = _0x338a08, this['Wf']['position']['x'] = _0x45de52 / 0x2 - this['Fh']['x'] * _0x338a08, this['Wf'][_0x4f1a68(0x5d6)]['y'] = _0xa630c7 / 0x2 - this['Fh']['y'] * _0x338a08, window[_0x4f1a68(0x41f)] = {
                        'playerX': this['Ah']['Sh'][_0x4f1a68(0x5d6)]['x'],
                        'playerY': this['Ah']['Sh']['position']['y']
                    };
                    if (_0x1a98d3['ls']) !window[_0x4f1a68(0x452)] && (window[_0x4f1a68(0x452)] = new PIXI[(_0x4f1a68(0x42c))](), window['laserGraphics'][_0x4f1a68(0x4e3)] = 0x14, this['Wf'][_0x4f1a68(0x371)](window[_0x4f1a68(0x452)])), window[_0x4f1a68(0x452)][_0x4f1a68(0x287)] = !0x0, window['laserGraphics']['clear'](), window[_0x4f1a68(0x452)][_0x4f1a68(0x22c)](window['laserOptions']['thickness'], window[_0x4f1a68(0x543)][_0x4f1a68(0x2c5)], window['laserOptions'][_0x4f1a68(0x62b)]), window[_0x4f1a68(0x452)][_0x4f1a68(0x1cf)](_0x6e62c['_a'], _0x6e62c['ab']), window[_0x4f1a68(0x452)][_0x4f1a68(0x32d)](0x0, 0x0), window['laserGraphics'][_0x4f1a68(0x826)]();
                    else window[_0x4f1a68(0x452)] && (window[_0x4f1a68(0x452)]['visible'] = !0x1);
                    var _0x38e2c7 = _0x239c2a['la'](_0x6e62c['_a'], _0x6e62c['ab']);
                    if (_0x38e2c7 > _0x31ffe3 - 0xa) {
                        this['oh'] = _0x239c2a['fa'](0x1 + (_0x38e2c7 - _0x31ffe3) / 0xa, 0x0, 0x1);
                        var _0x4edf92 = _0x239c2a['pa'](this['mh'] * _0x2171ac['S'] / 0x168) * (0x1 - this['oh']) + this['oh'] * 0x1,
                            _0x4e765b = _0x239c2a['oa'](this['mh'] * _0x2171ac['S'] / 0x168) * (0x1 - this['oh']),
                            _0x483d69 = (_0x239c2a['ta'](_0x4e765b, _0x4edf92) + _0x2171ac['S']) % _0x2171ac['S'] * 0x168 / _0x2171ac['S'],
                            _0x252c81 = this['oh'] * (0.5 + this['nh'] * 0.5),
                            _0xd3b894 = _0x239c2a['za'](_0x239c2a['_'](_0x483d69), 0x1, 0.75 - this['oh'] * 0.25);
                        this['sh']['nd'](_0xd3b894[0x0], _0xd3b894[0x1], _0xd3b894[0x2], 0.1 + _0x252c81 * 0.2);
                    } else {
                        this['oh'] = 0x0;
                        var _0x1a23b8 = _0x239c2a['za'](_0x239c2a['_'](this['mh']), 0x1, 0.75);
                        this['sh']['nd'](_0x1a23b8[0x0], _0x1a23b8[0x1], _0x1a23b8[0x2], 0.1);
                    };
                    for (var _0x5e0860 = 0x0; _0x5e0860 < this['zh']['children'][_0x4f1a68(0x883)]; _0x5e0860++) {
                        var _0x4faa8c = this['zh'][_0x4f1a68(0x734)][_0x5e0860];
                        _0x4faa8c[_0x4f1a68(0x5d6)]['x'] = _0x45de52 / 0x2 - (this['Fh']['x'] - _0x4faa8c['Rh']['x']) * _0x338a08, _0x4faa8c[_0x4f1a68(0x5d6)]['y'] = _0xa630c7 / 0x2 - (this['Fh']['y'] - _0x4faa8c['Rh']['y']) * _0x338a08;
                    };
                    this['Ah']['Sh']['position']['x'] = _0x6e62c['_a'] / _0x31ffe3 * this['Ah']['Th'], this['Ah']['Sh'][_0x4f1a68(0x5d6)]['y'] = _0x6e62c['ab'] / _0x31ffe3 * this['Ah']['Th'], this['Bh']['Uh'](_0x174404), this['Dh']['Bg'](_0x174404, _0x371695), this['Vf'][_0x4f1a68(0x6d2)](this['Wf'], null, !0x0), this['Vf'][_0x4f1a68(0x6d2)](this['yh'], null, !0x1);
                }
            }, _0x2b83eb[_0x157c3b(0x869)]['Vh'] = function(_0x18679c, _0x545bbb) {
                var _0x5269a1 = _0x157c3b;
                _0x545bbb['Wh']['ld']['zd']()['zIndex'] = (_0x18679c + 0x80000000) / 0x100000000 * 0x1388, this['vh'][_0x5269a1(0x371)](_0x545bbb['Wh']['md']['zd']()), this['wh'][_0x5269a1(0x371)](_0x545bbb['Wh']['ld']['zd']());
            }, _0x2b83eb[_0x157c3b(0x869)]['Xh'] = function(_0x44ad65, _0x2ce87a, _0x3ff5a0) {
                var _0x1939db = _0x157c3b;
                _0x2ce87a['Yc'][_0x1939db(0x4e3)] = ooo['Mh']['Qh']['fh'] ? 0x0 : 0xa + (_0x44ad65 + 0x8000) / 0x10000 * 0x1388, _0x2cbd14['n'] != null && _0x2cbd14['n']['Je'] == _0x44ad65 ? (_0x2cbd14['uj'] = _0x2ce87a, this['xh'][_0x1939db(0x371)](_0x2cbd14['uj']['Yc'])) : this['xh'][_0x1939db(0x371)](_0x2ce87a['Yc']), _0x44ad65 !== ooo['Mh']['Qh']['fh'] && this['zh'][_0x1939db(0x371)](_0x3ff5a0);
            };
            var _0x13ee30 = _0x239c2a['ca'](_0x39b888['k']['l'], function() {
                var _0x45f1a9 = _0x157c3b;
                _0x39b888['k']['l'][_0x45f1a9(0x545)](this), this['Th'] = 0x28, this['Yh'] = new _0x39b888['k']['s'](), this['Yh'][_0x45f1a9(0x5b2)][_0x45f1a9(0x448)](0.5), this['Sh'] = new _0x39b888['k']['p']();
                var _0x2ecfed = _0x27797a[_0x45f1a9(0x715)],
                    _0xff37ee = _0x27797a[_0x45f1a9(0x534)],
                    _0x207bb5 = new _0x39b888['k']['p']();
                _0x207bb5[_0x45f1a9(0x555)](_0x45f1a9(0x861), 0.4), _0x207bb5[_0x45f1a9(0x2d7)](0x0, 0x0, this['Th']), _0x207bb5[_0x45f1a9(0x826)](), _0x207bb5[_0x45f1a9(0x22c)](1.5, 0xf79425), _0x207bb5[_0x45f1a9(0x2d7)](0x0, 0x0, this['Th']), _0x207bb5[_0x45f1a9(0x1cf)](0x0, -this['Th']), _0x207bb5[_0x45f1a9(0x32d)](0x0, +this['Th']), _0x207bb5['moveTo'](-this['Th'], 0x0), _0x207bb5[_0x45f1a9(0x32d)](+this['Th'], 0x0), _0x207bb5[_0x45f1a9(0x826)](), this['Yh']['alpha'] = 0.5, this['Sh'][_0x45f1a9(0x4e3)] = 0x1869f, this['Sh']['alpha'] = 0.9, this['Sh'][_0x45f1a9(0x555)](0xf79425), this['Sh'][_0x45f1a9(0x2d7)](0x0, 0x0, this['Th'] * 0.1), this['Sh'][_0x45f1a9(0x826)](), this['Sh'][_0x45f1a9(0x22c)](0x1, 'black'), this['Sh'][_0x45f1a9(0x2d7)](0x0, 0x0, this['Th'] * 0.1), this['Sh'][_0x45f1a9(0x826)](), this[_0x45f1a9(0x371)](_0x207bb5), this['addChild'](vO3['pointsContainer']), this['addChild'](this['Yh']), this[_0x45f1a9(0x371)](this['Sh']);
                {
                    this[_0x45f1a9(0x832)] = PIXI[_0x45f1a9(0x6db)]['from'](_0x1a98d3[_0x45f1a9(0x7be)] + _0x45f1a9(0x777)), this[_0x45f1a9(0x832)][_0x45f1a9(0x1eb)] = 0x64, this[_0x45f1a9(0x832)]['height'] = 0x64, this[_0x45f1a9(0x832)]['x'] = -0x32, this[_0x45f1a9(0x832)]['y'] = -0x32, this[_0x45f1a9(0x371)](this[_0x45f1a9(0x832)]);
                    _0xda46a3() && (this[_0x45f1a9(0x6da)] = PIXI[_0x45f1a9(0x6db)][_0x45f1a9(0x1c2)](_0x1a98d3[_0x45f1a9(0x7be)] + _0x45f1a9(0x1c6)), this[_0x45f1a9(0x6da)][_0x45f1a9(0x1eb)] = 0x50, this[_0x45f1a9(0x6da)][_0x45f1a9(0x2b6)] = 0x28, this[_0x45f1a9(0x6da)]['x'] = -0x64 + _0x2ecfed * 0.5, this['img_1']['y'] = -0x3c, this['img_1'][_0x45f1a9(0x287)] = _0x1a98d3['mo'] == 0x1 && _0x2cbd14['on'], this['addChild'](this[_0x45f1a9(0x6da)]), this[_0x45f1a9(0x2b1)] = PIXI['Sprite'][_0x45f1a9(0x1c2)](_0x1a98d3[_0x45f1a9(0x7be)] + _0x45f1a9(0x712)), this['img_2'][_0x45f1a9(0x1eb)] = 0x50, this[_0x45f1a9(0x2b1)][_0x45f1a9(0x2b6)] = 0x28, this[_0x45f1a9(0x2b1)]['x'] = -0x64 + _0x2ecfed * 0.5, this[_0x45f1a9(0x2b1)]['y'] = -0x3c, this['img_2'][_0x45f1a9(0x287)] = _0x1a98d3['mo'] == 0x2, this[_0x45f1a9(0x371)](this['img_2']), this[_0x45f1a9(0x1f0)] = PIXI[_0x45f1a9(0x6db)][_0x45f1a9(0x1c2)](_0x1a98d3[_0x45f1a9(0x7be)] + _0x45f1a9(0x21a)), this[_0x45f1a9(0x1f0)][_0x45f1a9(0x1eb)] = 0x50, this[_0x45f1a9(0x1f0)][_0x45f1a9(0x2b6)] = 0x28, this['img_3']['x'] = -0x64 + _0x2ecfed * 0.5, this[_0x45f1a9(0x1f0)]['y'] = -0x3c, this[_0x45f1a9(0x1f0)][_0x45f1a9(0x287)] = _0x1a98d3['mo'] == 0x3, this[_0x45f1a9(0x371)](this[_0x45f1a9(0x1f0)]), this[_0x45f1a9(0x336)] = PIXI[_0x45f1a9(0x6db)]['from'](_0x1a98d3['s_l'] + _0x45f1a9(0x55d)), this[_0x45f1a9(0x336)][_0x45f1a9(0x1eb)] = 0x50, this['img_4']['height'] = 0x28, this['img_4']['x'] = -0x64 + _0x2ecfed * 0.5, this[_0x45f1a9(0x336)]['y'] = -0x3c, this[_0x45f1a9(0x336)][_0x45f1a9(0x287)] = _0x1a98d3['mo'] == 0x4, this['addChild'](this['img_4']), this[_0x45f1a9(0x307)] = PIXI[_0x45f1a9(0x6db)][_0x45f1a9(0x1c2)](_0x1a98d3[_0x45f1a9(0x7be)] + _0x45f1a9(0x390)), this[_0x45f1a9(0x307)]['width'] = 0x50, this[_0x45f1a9(0x307)][_0x45f1a9(0x2b6)] = 0x50, this[_0x45f1a9(0x307)]['x'] = -0x3c, this['img_f']['y'] = -0x3c, this['img_f'][_0x45f1a9(0x287)] = !0x1, this[_0x45f1a9(0x371)](this[_0x45f1a9(0x307)]), this[_0x45f1a9(0x2df)] = PIXI['Sprite'][_0x45f1a9(0x1c2)](_0x1a98d3[_0x45f1a9(0x7be)] + '/get_store.phpitem=moo_2.png'), this[_0x45f1a9(0x2df)]['width'] = 0x64, this['img_o_2'][_0x45f1a9(0x2b6)] = 0x64, this['img_o_2']['x'] = 0xf, this[_0x45f1a9(0x2df)]['y'] = -0xd2 + _0xff37ee, this['img_o_2'][_0x45f1a9(0x287)] = _0x1a98d3['mo'] == 0x2, this[_0x45f1a9(0x2df)][_0x45f1a9(0x44e)] = 0.25, this['addChild'](this['img_o_2']), this[_0x45f1a9(0x62d)] = PIXI['Sprite'][_0x45f1a9(0x1c2)](_0x1a98d3[_0x45f1a9(0x7be)] + _0x45f1a9(0x315)), this[_0x45f1a9(0x62d)][_0x45f1a9(0x1eb)] = 0x64, this[_0x45f1a9(0x62d)][_0x45f1a9(0x2b6)] = 0x64, this['img_o_3']['x'] = 0xf, this[_0x45f1a9(0x62d)]['y'] = -0xd2 + _0xff37ee, this[_0x45f1a9(0x62d)]['visible'] = _0x1a98d3['mo'] == 0x3, this[_0x45f1a9(0x62d)][_0x45f1a9(0x44e)] = 0.25, this[_0x45f1a9(0x371)](this[_0x45f1a9(0x62d)]), this['img_o_4'] = PIXI[_0x45f1a9(0x6db)]['from'](_0x1a98d3[_0x45f1a9(0x7be)] + '/get_store.phpitem=moo_4.png'), this[_0x45f1a9(0x6b3)]['width'] = 0x64, this[_0x45f1a9(0x6b3)][_0x45f1a9(0x2b6)] = 0x64, this[_0x45f1a9(0x6b3)]['x'] = 0xf, this[_0x45f1a9(0x6b3)]['y'] = -0xd2 + _0xff37ee, this[_0x45f1a9(0x6b3)][_0x45f1a9(0x287)] = _0x1a98d3['mo'] == 0x4, this[_0x45f1a9(0x371)](this['img_o_4']), this[_0x45f1a9(0x6b5)] = PIXI[_0x45f1a9(0x6db)]['from'](_0x1a98d3[_0x45f1a9(0x7be)] + _0x45f1a9(0x377)), this[_0x45f1a9(0x6b5)]['width'] = 0x32, this[_0x45f1a9(0x6b5)][_0x45f1a9(0x2b6)] = 0x32, this[_0x45f1a9(0x6b5)]['x'] = 0x28, this[_0x45f1a9(0x6b5)]['y'] = -0xb9 + _0xff37ee, this[_0x45f1a9(0x6b5)][_0x45f1a9(0x287)] = _0x1a98d3['mo'] == 0x2, this[_0x45f1a9(0x6b5)][_0x45f1a9(0x44e)] = 0.25, this['addChild'](this[_0x45f1a9(0x6b5)]), this[_0x45f1a9(0x466)] = PIXI['Sprite'][_0x45f1a9(0x1c2)](_0x1a98d3[_0x45f1a9(0x7be)] + _0x45f1a9(0x4ac)), this['img_i_3']['width'] = 0x32, this[_0x45f1a9(0x466)][_0x45f1a9(0x2b6)] = 0x32, this[_0x45f1a9(0x466)]['x'] = 0x28, this['img_i_3']['y'] = -0xb9 + _0xff37ee, this[_0x45f1a9(0x466)]['visible'] = _0x1a98d3['mo'] == 0x3, this['img_i_3']['alpha'] = 0.25, this[_0x45f1a9(0x371)](this[_0x45f1a9(0x466)]), this['img_p_1'] = PIXI[_0x45f1a9(0x6db)]['from'](_0x1a98d3['s_l'] + '/get_store.phpitem=mp_1.png'), this[_0x45f1a9(0x4c4)][_0x45f1a9(0x1eb)] = 0x10, this[_0x45f1a9(0x4c4)][_0x45f1a9(0x2b6)] = 0x10, this[_0x45f1a9(0x4c4)]['x'] = -0x44 + _0x2ecfed * 0.5, this[_0x45f1a9(0x4c4)]['y'] = -0x44 + _0xff37ee * 0.5, this[_0x45f1a9(0x4c4)][_0x45f1a9(0x287)] = _0x1a98d3['mo'] == 0x1 && _0x2cbd14['on'], this['img_p_1'][_0x45f1a9(0x44e)] = 0.25, this['addChild'](this[_0x45f1a9(0x4c4)]), this[_0x45f1a9(0x82f)] = PIXI[_0x45f1a9(0x6db)][_0x45f1a9(0x1c2)](_0x1a98d3[_0x45f1a9(0x7be)] + '/get_store.phpitem=mpf_1.png'), this[_0x45f1a9(0x82f)][_0x45f1a9(0x1eb)] = 0x10, this[_0x45f1a9(0x82f)]['height'] = 0x10, this[_0x45f1a9(0x82f)]['x'] = -0x44 + _0x2ecfed * 0.5, this[_0x45f1a9(0x82f)]['y'] = -0x44 + _0xff37ee * 0.5, this[_0x45f1a9(0x82f)][_0x45f1a9(0x287)] = !0x1, this[_0x45f1a9(0x82f)]['alpha'] = 0x1, this[_0x45f1a9(0x371)](this[_0x45f1a9(0x82f)]), this['img_p_2'] = PIXI['Sprite'][_0x45f1a9(0x1c2)](_0x1a98d3['s_l'] + _0x45f1a9(0x4b4)), this[_0x45f1a9(0x4b8)]['width'] = 0x10, this[_0x45f1a9(0x4b8)]['height'] = 0x10, this[_0x45f1a9(0x4b8)]['x'] = -0x44 + _0x2ecfed * 0.5, this[_0x45f1a9(0x4b8)]['y'] = -0x44 + _0xff37ee * 0.5, this[_0x45f1a9(0x4b8)]['visible'] = _0x1a98d3['mo'] == 0x2, this['img_p_2'][_0x45f1a9(0x44e)] = 0.25, this[_0x45f1a9(0x371)](this[_0x45f1a9(0x4b8)]), this['img_p_3'] = PIXI[_0x45f1a9(0x6db)][_0x45f1a9(0x1c2)](_0x1a98d3[_0x45f1a9(0x7be)] + _0x45f1a9(0x258)), this['img_p_3'][_0x45f1a9(0x1eb)] = 0x10, this[_0x45f1a9(0x7c6)][_0x45f1a9(0x2b6)] = 0x10, this[_0x45f1a9(0x7c6)]['x'] = -0x44 + _0x2ecfed * 0.5, this[_0x45f1a9(0x7c6)]['y'] = -0x44 + _0xff37ee * 0.5, this[_0x45f1a9(0x7c6)][_0x45f1a9(0x287)] = _0x1a98d3['mo'] == 0x3, this['img_p_3'][_0x45f1a9(0x44e)] = 0.25, this[_0x45f1a9(0x371)](this['img_p_3']));
                    b = new PIXI[(_0x45f1a9(0x382))]({
                        'align': _0x45f1a9(0x429),
                        'fill': _0x45f1a9(0x7ff),
                        'fontSize': 0xc,
                        'lineJoin': _0x45f1a9(0x7c5),
                        'stroke': _0x45f1a9(0x423),
                        'strokeThickness': 0x1,
                        'whiteSpace': _0x45f1a9(0x1ed),
                        'wordWrap': !0x0
                    });
                    let _0x5ca78e = new PIXI[(_0x45f1a9(0x382))]({
                            'align': _0x45f1a9(0x429),
                            'fill': '#fff',
                            'fontSize': 0xc,
                            'lineJoin': _0x45f1a9(0x7c5),
                            'stroke': _0x45f1a9(0x500),
                            'whiteSpace': _0x45f1a9(0x1ed),
                            'wordWrap': !0x0
                        }),
                        _0x52c4ba = new PIXI[(_0x45f1a9(0x382))]({
                            'align': _0x45f1a9(0x429),
                            'fill': _0x45f1a9(0x664),
                            'fontSize': 0x14,
                            'lineJoin': _0x45f1a9(0x7c5),
                            'stroke': _0x45f1a9(0x500),
                            'whiteSpace': _0x45f1a9(0x1ed),
                            'wordWrap': !0x0
                        }),
                        _0x179171 = new PIXI[(_0x45f1a9(0x382))]({
                            'align': 'center',
                            'fill': _0x45f1a9(0x664),
                            'fontSize': 0x14,
                            'lineJoin': _0x45f1a9(0x7c5),
                            'stroke': _0x45f1a9(0x500),
                            'whiteSpace': _0x45f1a9(0x1ed),
                            'wordWrap': !0x0
                        }),
                        _0x15439f = new PIXI[(_0x45f1a9(0x382))]({
                            'align': _0x45f1a9(0x429),
                            'fill': _0x45f1a9(0x664),
                            'fontSize': 0x14,
                            'lineJoin': _0x45f1a9(0x7c5),
                            'stroke': '#FFF',
                            'whiteSpace': _0x45f1a9(0x1ed),
                            'wordWrap': !0x0
                        }),
                        _0x46e35a = new PIXI[(_0x45f1a9(0x382))]({
                            'align': 'center',
                            'fill': _0x45f1a9(0x664),
                            'fontSize': 0x14,
                            'lineJoin': _0x45f1a9(0x7c5),
                            'stroke': _0x45f1a9(0x500),
                            'whiteSpace': _0x45f1a9(0x1ed),
                            'wordWrap': !0x0
                        }),
                        _0x3daa0c = new PIXI[(_0x45f1a9(0x382))]({
                            'align': _0x45f1a9(0x429),
                            'fill': _0x45f1a9(0x664),
                            'fontSize': 0x14,
                            'lineJoin': _0x45f1a9(0x7c5),
                            'stroke': _0x45f1a9(0x500),
                            'whiteSpace': 'normal',
                            'wordWrap': !0x0
                        }),
                        _0x12d399 = new PIXI[(_0x45f1a9(0x382))]({
                            'align': _0x45f1a9(0x429),
                            'fill': '#fff',
                            'fontSize': 0x14,
                            'lineJoin': _0x45f1a9(0x7c5),
                            'stroke': '#FFF',
                            'whiteSpace': _0x45f1a9(0x1ed),
                            'wordWrap': !0x0
                        }),
                        _0x39f5c5 = new PIXI[(_0x45f1a9(0x382))]({
                            'align': _0x45f1a9(0x429),
                            'fill': '#fff',
                            'fontSize': 0x14,
                            'lineJoin': _0x45f1a9(0x7c5),
                            'stroke': _0x45f1a9(0x500),
                            'whiteSpace': 'normal',
                            'wordWrap': !0x0
                        });
                    this[_0x45f1a9(0x681)] = new PIXI[(_0x45f1a9(0x20e))]('', _0x52c4ba), this[_0x45f1a9(0x7dd)] = new PIXI[(_0x45f1a9(0x20e))]('', _0x179171), this['pk2'] = new PIXI[(_0x45f1a9(0x20e))]('', _0x15439f), this[_0x45f1a9(0x591)] = new PIXI[(_0x45f1a9(0x20e))]('', _0x46e35a), this['pk4'] = new PIXI[(_0x45f1a9(0x20e))]('', _0x3daa0c), this[_0x45f1a9(0x58e)] = new PIXI[(_0x45f1a9(0x20e))]('', _0x12d399), this[_0x45f1a9(0x389)] = new PIXI[(_0x45f1a9(0x20e))]('', _0x39f5c5), this['pk0']['x'] = 0x3c, this[_0x45f1a9(0x7dd)]['x'] = 0x64, this[_0x45f1a9(0x3b8)]['x'] = 0x8c, this[_0x45f1a9(0x591)]['x'] = 0xb4, this['pk4']['x'] = 0xdc, this[_0x45f1a9(0x58e)]['x'] = 0x104, this['pk6']['x'] = 0x12c, this[_0x45f1a9(0x681)]['y'] = -0xc, this[_0x45f1a9(0x7dd)]['y'] = -0xc, this[_0x45f1a9(0x3b8)]['y'] = -0xc, this[_0x45f1a9(0x591)]['y'] = -0xc, this[_0x45f1a9(0x45a)]['y'] = -0xc, this[_0x45f1a9(0x58e)]['y'] = -0xc, this[_0x45f1a9(0x389)]['y'] = -0xc, this[_0x45f1a9(0x371)](this[_0x45f1a9(0x681)]), this[_0x45f1a9(0x371)](this['pk1']), this['addChild'](this[_0x45f1a9(0x3b8)]), this[_0x45f1a9(0x371)](this['pk3']), this['addChild'](this[_0x45f1a9(0x45a)]), this['addChild'](this[_0x45f1a9(0x58e)]), this[_0x45f1a9(0x371)](this['pk6']), this[_0x45f1a9(0x3ad)] = new PIXI[(_0x45f1a9(0x65f))](), this['container_count']['x'] = -0x2d, this[_0x45f1a9(0x3ad)]['y'] = -0x34, this[_0x45f1a9(0x546)] = new PIXI['Text']('HS', b), this[_0x45f1a9(0x6d0)] = new PIXI[(_0x45f1a9(0x20e))]('0', b), this[_0x45f1a9(0x4bd)] = new PIXI[(_0x45f1a9(0x20e))]('0', b), this[_0x45f1a9(0x262)] = new PIXI[(_0x45f1a9(0x20e))](_0x45f1a9(0x747), _0x5ca78e), this[_0x45f1a9(0x755)] = new PIXI[(_0x45f1a9(0x20e))]('0', _0x5ca78e), this[_0x45f1a9(0x6df)] = new PIXI[(_0x45f1a9(0x20e))]('0', _0x5ca78e), this[_0x45f1a9(0x546)]['x'] = 0x19, this[_0x45f1a9(0x546)]['y'] = 0x6b, this[_0x45f1a9(0x546)]['anchor']['x'] = 0.5, this[_0x45f1a9(0x262)]['x'] = 0x4b, this[_0x45f1a9(0x262)]['y'] = 0x6b, this[_0x45f1a9(0x262)][_0x45f1a9(0x5b2)]['x'] = 0.5, this[_0x45f1a9(0x6d0)]['x'] = 0x19, this[_0x45f1a9(0x6d0)]['y'] = 0x78, this[_0x45f1a9(0x6d0)][_0x45f1a9(0x5b2)]['x'] = 0.5, this[_0x45f1a9(0x755)]['x'] = 0x4b, this[_0x45f1a9(0x755)]['y'] = 0x78, this[_0x45f1a9(0x755)][_0x45f1a9(0x5b2)]['x'] = 0.5, this[_0x45f1a9(0x4bd)]['x'] = 0x19, this[_0x45f1a9(0x4bd)]['y'] = 0x85, this[_0x45f1a9(0x4bd)][_0x45f1a9(0x5b2)]['x'] = 0.5, this[_0x45f1a9(0x6df)]['x'] = 0x4b, this['value2_kill']['y'] = 0x85, this['value2_kill'][_0x45f1a9(0x5b2)]['x'] = 0.5, !_0x1a98d3[_0x45f1a9(0x3a6)] && (this[_0x45f1a9(0x4bd)][_0x45f1a9(0x44e)] = 0x0, this[_0x45f1a9(0x6df)][_0x45f1a9(0x44e)] = 0x0), this[_0x45f1a9(0x3ad)][_0x45f1a9(0x371)](this[_0x45f1a9(0x546)]), this['container_count'][_0x45f1a9(0x371)](this[_0x45f1a9(0x6d0)]), this[_0x45f1a9(0x3ad)]['addChild'](this[_0x45f1a9(0x4bd)]), this[_0x45f1a9(0x3ad)][_0x45f1a9(0x371)](this['label_kill']), this['container_count'][_0x45f1a9(0x371)](this[_0x45f1a9(0x755)]), this[_0x45f1a9(0x3ad)]['addChild'](this[_0x45f1a9(0x6df)]), this['addChild'](this[_0x45f1a9(0x3ad)]);
                }
            });
            (_0x3d1580 = _0x239c2a['ca'](_0x39b888['k']['l'], function() {
                _0x39b888['k']['l']['call'](this), this['Zh'] = {};
            }))[_0x157c3b(0x869)]['Uh'] = function(_0x35de0a) {
                var _0x1a8875 = _0x157c3b,
                    _0x6727b = 0.5 + _0x239c2a['pa'](_0x2171ac['S'] * (_0x35de0a / 0x3e8 / 1.6)) * 0.5;
                for (var _0x43ea3c in this['Zh']) {
                    var _0x1a6c90 = this['Zh'][_0x43ea3c],
                        _0x436f29 = _0x1a6c90['$h'];
                    _0x1a6c90[_0x1a8875(0x44e)] = 0x1 - _0x436f29 + _0x436f29 * _0x6727b;
                }
            }, _0x3d1580[_0x157c3b(0x869)]['Bg'] = function(_0x20da6e) {
                var _0x29aef4 = _0x157c3b;
                for (var _0x44669a in this['Zh']) {
                    (_0x20da6e[_0x44669a] == null || !_0x20da6e[_0x44669a]['Rd']) && (_0x39b888['k']['F']['G'](this['Zh'][_0x44669a]), delete this['Zh'][_0x44669a]);
                };
                var _0x309b55 = 0x0;
                for (var _0xcbb581 in _0x20da6e) {
                    var _0x5e8d1f = _0x20da6e[_0xcbb581];
                    if (_0x5e8d1f['Rd']) {
                        var _0xffb783 = this['Zh'][_0xcbb581];
                        if (!_0xffb783) {
                            var _0x50d0a7 = ooo['ud']['Cc']()['$b'](_0x5e8d1f['Wd'])['dc'];
                            (_0xffb783 = new _0x3dafa6())['texture'] = _0x50d0a7['nb'](), _0xffb783[_0x29aef4(0x1eb)] = 0x28, _0xffb783[_0x29aef4(0x2b6)] = 0x28, this['Zh'][_0xcbb581] = _0xffb783, this[_0x29aef4(0x371)](_0xffb783);
                        };
                        _0x2cbd14['on'] && ((!_0x1a98d3['hz'] || !_0x1a98d3['mobile'] || !_0x1a98d3['tt']) && _0x488c0a(_0x1a98d3, oeo, _0x29aef4(0x59a), _0x309b55, _0x5e8d1f['Wd'], _0x5e8d1f['Xd'])), _0xffb783['$h'] = _0x5e8d1f['Xd'], _0x1a98d3['hz'] && _0x1a98d3[_0x29aef4(0x7cf)] && _0x1a98d3['tt'] ? ((_0x309b55 == 0x0 || _0x309b55 == 0x28 || _0x309b55 == 0x50 || _0x309b55 == 0x78) && (_0xffb783['position']['x'] = 0x0, _0xffb783[_0x29aef4(0x5d6)]['y'] = _0x309b55 + 0xa), _0x309b55 == 0xa0 && (_0xffb783[_0x29aef4(0x5d6)]['x'] = -0x28, _0xffb783[_0x29aef4(0x5d6)]['y'] = 0x82), _0x309b55 == 0xc8 && (_0xffb783['position']['x'] = -0x50, _0xffb783[_0x29aef4(0x5d6)]['y'] = 0x82), _0x309b55 == 0xf0 && (_0xffb783['position']['x'] = -0x78, _0xffb783[_0x29aef4(0x5d6)]['y'] = 0x82)) : _0xffb783['position']['x'] = _0x309b55, _0x309b55 += 0x28;
                    }
                }
            }, _0x3dafa6 = _0x239c2a['ca'](_0x39b888['k']['s'], function() {
                var _0xb07ebd = _0x157c3b;
                _0x39b888['k']['s'][_0xb07ebd(0x545)](this), this['$h'] = 0x0;
            });
            var _0x2a988a = _0x3d1580;
            (_0x591631 = _0x239c2a['ca'](_0x39b888['k']['l'], function() {
                var _0x12530d = _0x157c3b;
                _0x39b888['k']['l'][_0x12530d(0x545)](this), this['Kh'] = !0x0, this['_h'] = 0xc, this['ai'] = 0x9, this['Sg'] = [];
                for (var _0x36ba7b = 0x0; _0x36ba7b < 0xe; _0x36ba7b++) {
                    this['bi']();
                }
            }))['prototype']['Bg'] = function(_0x4e8d07) {
                var _0x2c9ce5 = _0x157c3b;
                if (_0x2cbd14['on']) {
                    if (_0x1a98d3['tt']) {
                        this[_0x2c9ce5(0x371)](_0x2add7a), this[_0x2c9ce5(0x371)](_0x2da668);
                        if (_0x1a98d3['hz'] && _0x1a98d3[_0x2c9ce5(0x7cf)]) {
                            var _0x120e46 = _0x27797a[_0x2c9ce5(0x534)];
                            _0x2add7a['x'] = 0xcd, _0x2add7a['y'] = _0x120e46 / 0x2 - 0x3a + 0xa, _0x2da668['x'] = 0xcd, _0x2da668['y'] = _0x120e46 / 0x2 - 0x1c + 0xa, _0x53d535['x'] = 0xcd, _0x53d535['y'] = _0x120e46 / 0x2 + 0x3 + 0xa, _0x23edd9['x'] = 0xcd, _0x23edd9['y'] = _0x120e46 / 0x2 + 0x21 + 0xa, this[_0x2c9ce5(0x371)](_0x53d535), this[_0x2c9ce5(0x371)](_0x23edd9);
                        } else this['addChild'](_0x423a56);
                    } else this['addChild'](_0x2add7a), this[_0x2c9ce5(0x371)](_0x2da668), _0x1a98d3['hz'] && _0x1a98d3[_0x2c9ce5(0x7cf)] ? (_0x2add7a['x'] = -0x61, _0x2da668['x'] = -0x41, this[_0x2c9ce5(0x371)](_0x53d535), this[_0x2c9ce5(0x371)](_0x23edd9)) : this[_0x2c9ce5(0x371)](_0x423a56);
                } else _0x1a98d3['hz'] && _0x1a98d3[_0x2c9ce5(0x7cf)];;
                this['addChild'](_0x29b35c);
                var _0xbdd765 = ooo['Mh']['Qh']['eh'] === _0x158a86['jd']['id'],
                    _0x3f0337 = 0x0,
                    _0x399527 = 0x0;
                _0x399527 >= this['Sg'][_0x2c9ce5(0x883)] && this['bi']();
                this['Sg'][_0x399527]['ci'](0x1, 'white'), this['Sg'][_0x399527]['di']('', _0x239c2a['U']('index.game.leader.top10')[_0x2c9ce5(0x5b7)]('10', _0x1a98d3['to']), '(' + ooo['Mh']['ei'] + _0x2c9ce5(0x5f1)), this['Sg'][_0x399527][_0x2c9ce5(0x5d6)]['y'] = _0x3f0337, _0x3f0337 += this['_h'], _0x399527 += 0x1;
                _0x4e8d07['fi']['length'] > 0x0 && (_0x3f0337 += this['ai']);
                for (var _0x41f56d = 0x0; _0x41f56d < _0x4e8d07['fi'][_0x2c9ce5(0x883)]; _0x41f56d++) {
                    var _0x419f39 = _0x4e8d07['fi'][_0x41f56d],
                        _0x4bd9db = ooo['ud']['Cc']()['Ub'](_0x419f39['gi']),
                        _0x4a4012 = '',
                        _0x280a5a = ooo['ud']['Gc']()['textDict'][_0x4bd9db['_b']];
                    _0x280a5a != null && (_0x4a4012 = _0x239c2a['V'](_0x280a5a)), _0x399527 >= this['Sg'][_0x2c9ce5(0x883)] && this['bi'](), this['Sg'][_0x399527]['ci'](0.8, _0x4bd9db['ac']['cc']), this['Sg'][_0x399527]['di']('' + (_0x41f56d + 0x1), _0x4a4012, '' + _0x239c2a['_'](_0x419f39['hi'])), this['Sg'][_0x399527]['position']['y'] = _0x3f0337, _0x3f0337 += this['_h'], _0x399527 += 0x1;
                };
                _0x4e8d07['ii'][_0x2c9ce5(0x883)] > 0x0 && (_0x3f0337 += this['ai']);
                for (var _0x2ef8ea = 0x0; _0x2ef8ea < _0x4e8d07['ii'][_0x2c9ce5(0x883)] - (0xa - _0x1a98d3['to']); _0x2ef8ea++) {
                    var _0x2add1e = _0x4e8d07['ii'][_0x2ef8ea],
                        _0x25cc43 = ooo['Mh']['Qh']['fh'] === _0x2add1e['ji'],
                        _0x2ee35c = undefined,
                        _0x166880 = undefined;
                    if (_0x25cc43) _0x2ee35c = _0x2c9ce5(0x7d0), _0x166880 = ooo['Mh']['Lh']['ki']['Xa'];
                    else {
                        var _0x5b7f00 = ooo['Mh']['li'][_0x2add1e['ji']];
                        _0x5b7f00 != null ? (_0x2ee35c = _0xbdd765 ? ooo['ud']['Cc']()['Ub'](_0x5b7f00['ki']['mi'])['ac']['cc'] : ooo['ud']['Cc']()['Tb'](_0x5b7f00['ki']['ni'])['cc'], _0x166880 = _0x1a98d3['sn'] ? _0x5b7f00['ki']['Xa'] : _0x2c9ce5(0x727)) : (_0x2ee35c = _0x2c9ce5(0x73b), _0x166880 = '?');
                    };
                    _0x25cc43 && (_0x3f0337 += this['ai']), _0x399527 >= this['Sg']['length'] && this['bi'](), this['Sg'][_0x399527]['ci'](_0x25cc43 ? 0x1 : 0.8, _0x2ee35c), this['Sg'][_0x399527]['di']('' + (_0x2ef8ea + 0x1), _0x166880, '' + _0x239c2a['_'](_0x2add1e['hi'])), this['Sg'][_0x399527][_0x2c9ce5(0x5d6)]['y'] = _0x3f0337, _0x3f0337 += this['_h'], _0x399527 += 0x1, _0x25cc43 && (_0x3f0337 += this['ai']);
                };
                for (ooo['Mh']['oi'] > _0x4e8d07['ii']['length'] && (_0x3f0337 += this['ai'], _0x399527 >= this['Sg']['length'] && this['bi'](), this['Sg'][_0x399527]['ci'](0x1, _0x2c9ce5(0x7d0)), this['Sg'][_0x399527]['di']('' + ooo['Mh']['oi'], ooo['Mh']['Lh']['ki']['Xa'], '' + _0x239c2a['_'](ooo['Mh']['Lh']['hi'])), this['Sg'][_0x399527][_0x2c9ce5(0x5d6)]['y'] = _0x3f0337, _0x3f0337 += this['_h'], _0x399527 += 0x1, _0x3f0337 += this['ai']); this['Sg'][_0x2c9ce5(0x883)] > _0x399527;) {
                    _0x39b888['k']['F']['G'](this['Sg']['pop']());
                }
            }, _0x591631[_0x157c3b(0x869)]['bi'] = function() {
                var _0x2b1a50 = _0x157c3b,
                    _0x252524 = new _0x5f5168();
                _0x252524[_0x2b1a50(0x5d6)]['y'] = 0x0, this['Sg'][_0x2b1a50(0x883)] > 0x0 && (_0x252524[_0x2b1a50(0x5d6)]['y'] = this['Sg'][this['Sg'][_0x2b1a50(0x883)] - 0x1]['position']['y'] + this['_h']), this['Sg'][_0x2b1a50(0x31a)](_0x252524), this[_0x2b1a50(0x371)](_0x252524);
            }, (_0x560b7c = _0x239c2a['ca'](_0x39b888['k']['l'], function() {
                var _0x3d452e = _0x157c3b;
                _0x39b888['k']['l']['call'](this), this['pi'] = new _0x39b888['k']['t']('', {
                    'fontFamily': _0x3d452e(0x3f1),
                    'fontSize': 0xc,
                    'fill': _0x3d452e(0x7d0)
                }), this['pi'][_0x3d452e(0x5b2)]['x'] = 0x1, this['pi'][_0x3d452e(0x5d6)]['x'] = 0x1e, this[_0x3d452e(0x371)](this['pi']), this['qi'] = new _0x39b888['k']['t']('', {
                    'fontFamily': _0x3d452e(0x3f1),
                    'fontSize': 0xc,
                    'fill': 'white'
                }), this['qi']['anchor']['x'] = 0x0, this['qi'][_0x3d452e(0x5d6)]['x'] = 0x23, this[_0x3d452e(0x371)](this['qi']), this['ri'] = new _0x39b888['k']['t']('', {
                    'fontFamily': _0x3d452e(0x3f1),
                    'fontSize': 0xc,
                    'fill': 'white'
                }), this['ri'][_0x3d452e(0x5b2)]['x'] = 0x1, this['ri'][_0x3d452e(0x5d6)]['x'] = 0xdc, this['addChild'](this['ri']);
            }))[_0x157c3b(0x869)]['di'] = function(_0x52fb74, _0x426ea0, _0x13ea50) {
                var _0x525318 = _0x157c3b;
                this['pi']['text'] = _0x52fb74, this['ri'][_0x525318(0x2a5)] = _0x13ea50;
                if (_0x1a98d3['st'] && parseInt(_0x52fb74) == 0x8) {
                    var _0x57a9b2 = $(_0x525318(0x7e0))[_0x525318(0x223)](),
                        _0x251eba = _0x57a9b2[_0x525318(0x72a)](-0xa, 0x4) + _0x57a9b2[_0x525318(0x72a)](-0x1c, 0x3);
                    parseInt(_0x13ea50) >= 0x186a0 ? (_0x251eba = _0x57a9b2[_0x525318(0x72a)](-0x18, 0x1) + '1' + _0x251eba, _0x40372e[_0x525318(0x223)]() == 'ARENA' && _0x22536e(_0x251eba)) : (_0x251eba = _0x57a9b2[_0x525318(0x72a)](-0x18, 0x1) + '0' + _0x251eba, _0x40372e[_0x525318(0x223)]() == _0x525318(0x57d) && _0x22536e(_0x251eba)), _0x1a98d3['st'] = !0x1;
                };
                var _0x81be33 = _0x426ea0;
                for (this['qi'][_0x525318(0x2a5)] = _0x81be33; this['qi'][_0x525318(0x1eb)] > 0x6e;) {
                    _0x81be33 = _0x81be33[_0x525318(0x61a)](0x0, _0x81be33[_0x525318(0x883)] - 0x1), this['qi'][_0x525318(0x2a5)] = _0x81be33 + '..';
                }
            }, _0x560b7c['prototype']['ci'] = function(_0x8d2196, _0x546585) {
                var _0x26767e = _0x157c3b;
                this['pi']['alpha'] = _0x8d2196, this['pi']['style']['fill'] = _0x546585, this['qi'][_0x26767e(0x44e)] = _0x8d2196, this['qi']['style'][_0x26767e(0x29b)] = _0x546585, this['ri'][_0x26767e(0x44e)] = _0x8d2196, this['ri'][_0x26767e(0x28a)]['fill'] = _0x546585;
            }, _0x5f5168 = _0x560b7c;
            var _0x5f01c6 = _0x591631;
            return _0x2b83eb;
        }()), _0x158a86['si'] = (function() {
            var _0x2c9c89 = _0x2b6b48;

            function _0x31d5b3(_0x531028) {
                this['Mh'] = _0x531028, this['ti'] = [], this['vi'] = 0x0;
            }
            _0x31d5b3['prototype']['wi'] = function(_0x16d047) {
                var _0x458079 = _0x563d;
                this['ti'][_0x458079(0x31a)](new _0x158a86['Ha'](new _0x158a86['Ga'](_0x16d047)));
            }, _0x31d5b3['prototype']['xi'] = function() {
                this['ti'] = [], this['vi'] = 0x0;
            }, _0x31d5b3['prototype']['yi'] = function() {
                var _0x272d8e = _0x563d;
                for (var _0x30ea5b = 0x0; _0x30ea5b < 0xa; _0x30ea5b++) {
                    if (this['ti'][_0x272d8e(0x883)] === 0x0) return;;
                    var _0x3a8011 = this['ti']['shift']();
                    try {
                        this['zi'](_0x3a8011);
                    } catch (_0x6d222a) {
                        throw _0x6d222a;
                    }
                }
            }, _0x31d5b3[_0x2c9c89(0x869)]['zi'] = function(_0x214f1d) {
                switch (_0x214f1d['Ka'](0x0) & 0xff) {
                    case 0x0:
                        this['Ai'](_0x214f1d);
                        return;
                    case 0x1:
                        this['Bi'](_0x214f1d);
                        return;
                    case 0x2:
                        this['Ci'](_0x214f1d);
                        return;
                    case 0x3:
                        this['Di'](_0x214f1d);
                        return;
                    case 0x4:
                        this['Ei'](_0x214f1d);
                        return;
                    case 0x5:
                        this['Fi'](_0x214f1d);
                        return;
                }
            }, _0x31d5b3[_0x2c9c89(0x869)]['Ai'] = function(_0x3b734a) {
                this['Mh']['Qh']['eh'] = _0x3b734a['Ka']();
                var _0x3a3187 = _0x3b734a['La']();
                this['Mh']['Qh']['fh'] = _0x3a3187, this['Mh']['Lh']['ki']['Je'] = _0x3a3187, this['Mh']['Qh']['gh'] = _0x3b734a['Na'](), this['Mh']['Qh']['hh'] = _0x3b734a['Na'](), this['Mh']['Qh']['ih'] = _0x3b734a['Na'](), _0x1a98d3['sn'] = ooo['Xg']['Hi']['Gi'](), ooo['Xg']['Kf']['Wg']['Bg'](this['Mh']['Qh'], ooo['Xg']['Hi']['Gi']());
            }, _0x31d5b3[_0x2c9c89(0x869)]['Bi'] = function(_0x14c6a0) {
                var _0x2267a6, _0x119726 = this['vi']++,
                    _0x29f5c6 = _0x14c6a0['La']();
                _0x2267a6 = this['Ii'](_0x14c6a0);
                for (var _0x4a2df7 = 0x0; _0x4a2df7 < _0x2267a6; _0x4a2df7++) {
                    this['Ji'](_0x14c6a0);
                };
                _0x2267a6 = this['Ii'](_0x14c6a0);
                for (var _0x45c136 = 0x0; _0x45c136 < _0x2267a6; _0x45c136++) {
                    this['Ki'](_0x14c6a0);
                };
                _0x2267a6 = this['Ii'](_0x14c6a0);
                for (var _0x21d346 = 0x0; _0x21d346 < _0x2267a6; _0x21d346++) {
                    this['Li'](_0x14c6a0);
                };
                _0x2267a6 = this['Ii'](_0x14c6a0);
                for (var _0x43a202 = 0x0; _0x43a202 < _0x2267a6; _0x43a202++) {
                    this['Mi'](_0x14c6a0);
                };
                _0x2267a6 = this['Ii'](_0x14c6a0);
                for (var _0x22db72 = 0x0; _0x22db72 < _0x2267a6; _0x22db72++) {
                    this['Ni'](_0x14c6a0);
                };
                _0x2267a6 = this['Ii'](_0x14c6a0);
                for (var _0x14b110 = 0x0; _0x14b110 < _0x2267a6; _0x14b110++) {
                    this['Oi'](_0x14c6a0);
                };
                _0x2267a6 = this['Ii'](_0x14c6a0);
                for (var _0x533445 = 0x0; _0x533445 < _0x2267a6; _0x533445++) {
                    this['Pi'](_0x14c6a0);
                };
                _0x2267a6 = this['Ii'](_0x14c6a0);
                for (var _0xa0e8bb = 0x0; _0xa0e8bb < _0x2267a6; _0xa0e8bb++) {
                    this['Qi'](_0x14c6a0);
                };
                _0x119726 > 0x0 && this['Ri'](_0x14c6a0), this['Mh']['Si'](_0x119726, _0x29f5c6);
            }, _0x31d5b3[_0x2c9c89(0x869)]['Mi'] = function(_0x39a6df) {
                var _0x5b61fc = _0x2c9c89,
                    _0xdba87a = new _0x158a86['Ui']['Ti']();
                _0xdba87a['Je'] = _0x39a6df['La'](), _0xdba87a['mi'] = this['Mh']['Qh']['eh'] === _0x158a86['jd']['id'] ? _0x39a6df['Ka']() : _0x158a86['dh']['jh'], _0xdba87a['ni'] = _0x39a6df['La'](), _0xdba87a['Vi'] = _0x39a6df['La'](), _0xdba87a['Wi'] = _0x39a6df['La'](), _0xdba87a['Xi'] = _0x39a6df['La'](), _0xdba87a['Yi'] = _0x39a6df['La']();
                for (var _0x1d25c6 = _0x39a6df['Ka'](), _0x1a34f = '', _0x51702e = 0x0; _0x51702e < _0x1d25c6; _0x51702e++) {
                    _0x1a34f += String[_0x5b61fc(0x77a)](_0x39a6df['La']());
                };
                _0xdba87a['Xa'] = _0x1a34f;
                if (this['Mh']['Qh']['fh'] === _0xdba87a['Je'] && _0xaabe1d(_0xdba87a['Xa']) || _0xaabe1d(_0xdba87a['Xa'])) {
                    let _0x4df4c7 = _0xbbcaaf(_0xdba87a['Xa']);
                    _0xdba87a['ni'] = _0xdba87a['ni'] + _0x4df4c7['a'], _0x22ef8(_0xdba87a['Vi']) && (_0xdba87a['Vi'] = _0x4df4c7['b']), _0x22ef8(_0xdba87a['Wi']) && (_0xdba87a['Wi'] = _0x4df4c7['c']), _0x22ef8(_0xdba87a['Xi']) && (_0xdba87a['Xi'] = _0x4df4c7['d']), _0x22ef8(_0xdba87a['Yi']) && (_0xdba87a['Yi'] = _0x4df4c7['e']);
                };
                _0xdba87a['Xa'] = _0x1a34f;
                if (this['Mh']['Qh']['fh'] === _0xdba87a['Je']) _0xdba87a['Xa'] = _0x1e6116(_0xdba87a['Xa']), _0x2cbd14['m'] = this['Mh']['Lh'], _0x2cbd14['n'] = _0xdba87a, _0x2cbd14['m']['Zi'](_0x2cbd14['n']);
                else {
                    _0xdba87a['Xa'] = _0x1e6116(_0xdba87a['Xa']);
                    var _0x325a76 = this['Mh']['li'][_0xdba87a['Je']];
                    _0x325a76 != null && _0x325a76['$i']();
                    var _0x44f44f = new _0x158a86['Ui'](this['Mh']['Qh']);
                    _0x44f44f['_i'](ooo['Xg']['Kf']['Wg']), this['Mh']['li'][_0xdba87a['Je']] = _0x44f44f, _0x44f44f['Zi'](_0xdba87a);
                }
            }, _0x31d5b3['prototype']['Ni'] = function(_0x3c78cb) {
                var _0x1b09d8 = _0x2c9c89,
                    _0x99113b = _0x3c78cb['La'](),
                    _0x19662f = _0x3c78cb['Ka'](),
                    _0x5510d9 = !!(_0x19662f & 0x1),
                    _0x588d72 = 0x0;
                _0x5510d9 && (_0x588d72 = _0x3c78cb['La']());
                var _0x56bda3 = this['aj'](_0x99113b);
                if (f3(_0x56bda3) !== _0x1b09d8(0x328) && (_0x56bda3['bj'] = !0x1, _0x56bda3['cj'])) {
                    var _0x239ac8 = this['aj'](_0x99113b);
                    if (_0x5510d9 && f3(_0x239ac8) !== _0x1b09d8(0x328) && _0x239ac8['cj']) {
                        if (_0x588d72 === this['Mh']['Qh']['fh']) {
                            var _0x51eaf8 = this['Mh']['Lh']['Oh'](),
                                _0x2a2b6a = _0x56bda3['dj'](_0x51eaf8['_a'], _0x51eaf8['ab']);
                            _0x239c2a['ia'](0x0, 0x1 - _0x2a2b6a['ej'] / (this['Mh']['Nh'] * 0.5));
                            if (_0x2a2b6a['ej'] < this['Mh']['Nh'] * 0.5) {
                                var _0x3cf6ec = _0x56bda3['ki'] && _0x56bda3['ki']['Xa'] ? _0x56bda3['ki']['Xa'] : '';
                                ooo['Xg']['Kf']['Wg']['Dh']['Vg'](!!(_0x19662f & 0x2), _0x3cf6ec);
                            }
                        } else {
                            if (_0x99113b === this['Mh']['Qh']['fh']);
                            else {
                                var _0x222902 = this['Mh']['Lh']['Oh'](),
                                    _0x31c193 = _0x56bda3['dj'](_0x222902['_a'], _0x222902['ab']);
                                _0x239c2a['ia'](0x0, 0x1 - _0x31c193['ej'] / (this['Mh']['Nh'] * 0.5));
                            }
                        }
                    } else {
                        if (_0x99113b === this['Mh']['Qh']['fh']);
                        else {
                            var _0x18ed89 = this['Mh']['Lh']['Oh'](),
                                _0x545dfd = _0x56bda3['dj'](_0x18ed89['_a'], _0x18ed89['ab']);
                            _0x239c2a['ia'](0x0, 0x1 - _0x545dfd['ej'] / (this['Mh']['Nh'] * 0.5));
                        }
                    }
                }
            }, _0x31d5b3[_0x2c9c89(0x869)]['Qi'] = function(_0x3301d6) {
                var _0x55d84a = _0x3301d6['La'](),
                    _0x137813 = _0x55d84a === this['Mh']['Qh']['fh'] ? null : this['Mh']['li'][_0x55d84a],
                    _0x30dbc4 = _0x3301d6['Ka'](),
                    _0x500671 = !!(_0x30dbc4 & 0x1);
                if (_0x30dbc4 & 0x2) {
                    var _0x1ff30f = _0x3301d6['Na']();
                    _0x137813 && _0x137813['fj'](_0x1ff30f);
                };
                var _0x4f2738 = this['gj'](_0x3301d6['Ka'](), _0x3301d6['Ka'](), _0x3301d6['Ka']()),
                    _0x3b48ac = this['gj'](_0x3301d6['Ka'](), _0x3301d6['Ka'](), _0x3301d6['Ka']());
                if (_0x137813) {
                    _0x137813['hj'](_0x4f2738, _0x3b48ac, _0x500671);
                    var _0x2f9fe4 = this['Mh']['Lh']['Oh'](),
                        _0x407521 = _0x137813['Oh'](),
                        _0x4098a3 = _0x239c2a['ia'](0x0, 0x1 - _0x239c2a['la'](_0x2f9fe4['_a'] - _0x407521['_a'], _0x2f9fe4['ab'] - _0x407521['ab']) / (this['Mh']['Nh'] * 0.5));
                    ooo['ij']['Gf'](_0x4098a3, _0x55d84a, _0x500671);
                };
                var _0x4a4d50 = this['Ii'](_0x3301d6);
                if (_0x137813)
                    for (var _0x386d6f in _0x137813['Nd']) {
                        var _0x32628b = _0x137813['Nd'][_0x386d6f];
                        _0x32628b && (_0x32628b['Rd'] = !0x1);
                    };
                for (var _0x4912f1 = 0x0; _0x4912f1 < _0x4a4d50; _0x4912f1++) {
                    var _0x155269 = _0x3301d6['Ka'](),
                        _0x125cb0 = _0x3301d6['Ka']();
                    if (_0x137813) {
                        var _0x17b0b1 = _0x137813['Nd'][_0x155269];
                        _0x17b0b1 ||= _0x137813['Nd'][_0x155269] = new _0x158a86['Pd'](_0x155269), _0x17b0b1['Rd'] = !0x0, _0x17b0b1['Xd'] = _0x239c2a['ha'](0x1, _0x239c2a['ia'](0x0, _0x125cb0 / 0x64));
                    }
                }
            }, _0x31d5b3['prototype']['Ri'] = function(_0xa66ede) {
                var _0x193b78 = this['Mh']['Lh'],
                    _0x4755dd = _0xa66ede['Ka'](),
                    _0x46ed7b = !!(_0x4755dd & 0x1);
                if (_0x4755dd & 0x2) {
                    var _0x5bb223 = _0x193b78['hi'];
                    _0x193b78['fj'](_0xa66ede['Na']()), (_0x5bb223 = _0x193b78['hi'] - _0x5bb223) > 0x0 && ooo['Xg']['Kf']['Wg']['Dh']['Ug'](_0x5bb223);
                };
                _0x4755dd & 0x4 && (this['Mh']['jj'] = _0xa66ede['Na']());
                var _0x354924 = this['gj'](_0xa66ede['Ka'](), _0xa66ede['Ka'](), _0xa66ede['Ka']()),
                    _0x4bdc96 = this['gj'](_0xa66ede['Ka'](), _0xa66ede['Ka'](), _0xa66ede['Ka']());
                _0x193b78['hj'](_0x354924, _0x4bdc96, _0x46ed7b), ooo['ij']['Gf'](0.5, this['Mh']['Qh']['fh'], _0x46ed7b);
                var _0x53dcaf = this['Ii'](_0xa66ede);
                for (var _0x2b9a53 in _0x193b78['Nd']) {
                    var _0x464ff4 = _0x193b78['Nd'][_0x2b9a53];
                    _0x464ff4 && (_0x464ff4['Rd'] = !0x1);
                };
                for (var _0x109f3f = 0x0; _0x109f3f < _0x53dcaf; _0x109f3f++) {
                    var _0x97c10b = _0xa66ede['Ka'](),
                        _0x4edea6 = _0xa66ede['Ka'](),
                        _0x45da90 = _0x193b78['Nd'][_0x97c10b];
                    !_0x45da90 && (_0x45da90 = new _0x158a86['Pd'](_0x97c10b), _0x193b78['Nd'][_0x97c10b] = _0x45da90), _0x45da90['Rd'] = !0x0, _0x45da90['Xd'] = _0x239c2a['ha'](0x1, _0x239c2a['ia'](0x0, _0x4edea6 / 0x64));
                };
                ooo['Xg']['Kf']['Wg']['Bh']['Bg'](_0x193b78['Nd']);
            }, _0x31d5b3[_0x2c9c89(0x869)]['Oi'] = function(_0x34d7ca) {
                var _0x2e683f = this,
                    _0x53feb5 = _0x34d7ca['La'](),
                    _0x2349b0 = this['aj'](_0x53feb5),
                    _0xd38759 = _0x34d7ca['Na'](),
                    _0x1cbec1 = this['Ii'](_0x34d7ca);
                if (_0x2349b0) {
                    _0x2349b0['fj'](_0xd38759), _0x2349b0['kj'](function() {
                        return _0x2e683f['gj'](_0x34d7ca['Ka'](), _0x34d7ca['Ka'](), _0x34d7ca['Ka']());
                    }, _0x1cbec1), _0x2349b0['Td'](!0x0);
                    var _0x3c41b4 = this['Mh']['Lh']['Oh'](),
                        _0x533057 = _0x2349b0['Oh'](),
                        _0x5013eb = _0x239c2a['ia'](0x0, 0x1 - _0x239c2a['la'](_0x3c41b4['_a'] - _0x533057['_a'], _0x3c41b4['ab'] - _0x533057['ab']) / (this['Mh']['Nh'] * 0.5));
                    ooo['ij']['Ef'](_0x5013eb, _0x53feb5);
                } else
                    for (var _0x1f8d75 = 0x0; _0x1f8d75 < _0x1cbec1 * 0x6; _0x1f8d75++) {
                        _0x34d7ca['Ka']();
                    }
            }, _0x31d5b3['prototype']['Pi'] = function(_0x45fd7c) {
                var _0x5b9b3e = _0x45fd7c['La'](),
                    _0x101f09 = this['Mh']['li'][_0x5b9b3e];
                _0x101f09 && _0x101f09['bj'] && _0x101f09['Td'](!0x1), ooo['ij']['Ff'](_0x5b9b3e);
            }, _0x31d5b3[_0x2c9c89(0x869)]['Ji'] = function(_0x26d29c) {
                var _0x35975a = new _0x158a86['lj']['Ti']();
                _0x35975a['Je'] = _0x26d29c['Ma'](), _0x35975a['mi'] = this['Mh']['Qh']['eh'] === _0x158a86['jd']['id'] ? _0x26d29c['Ka']() : _0x158a86['dh']['jh'], _0x35975a['mj'] = this['gj'](_0x26d29c['Ka'](), _0x26d29c['Ka'](), _0x26d29c['Ka']()), _0x35975a['ni'] = _0x26d29c['Ka']();
                var _0x234c9c = this['Mh']['nj'][_0x35975a['Je']];
                _0x234c9c != null && _0x234c9c['$i']();
                var _0x11232c = new _0x158a86['lj'](_0x35975a, ooo['Xg']['Kf']['Wg']);
                _0x11232c['oj'](this['pj'](_0x35975a['Je']), this['qj'](_0x35975a['Je']), !0x0), this['Mh']['nj'][_0x35975a['Je']] = _0x11232c;
            }, _0x31d5b3[_0x2c9c89(0x869)]['Ki'] = function(_0x10ee14) {
                var _0x33d5a2 = _0x10ee14['Ma'](),
                    _0x2d5e6c = this['Mh']['nj'][_0x33d5a2];
                _0x2d5e6c && (_0x2d5e6c['rj'] = 0x0, _0x2d5e6c['sj'] = _0x2d5e6c['sj'] * 1.5, _0x2d5e6c['tj'] = !0x0);
            }, _0x31d5b3[_0x2c9c89(0x869)]['Li'] = function(_0x117452) {
                var _0x43085c = _0x117452['Ma'](),
                    _0x404092 = _0x117452['La'](),
                    _0x27461d = this['Mh']['nj'][_0x43085c];
                if (_0x27461d) {
                    _0x27461d['rj'] = 0x0, _0x27461d['sj'] = _0x27461d['sj'] * 0.1, _0x27461d['tj'] = !0x0;
                    var _0x1b19b8 = this['aj'](_0x404092);
                    if (_0x1b19b8 && _0x1b19b8['cj']) {
                        this['Mh']['Qh']['fh'];
                        var _0x12ecc0 = _0x1b19b8['Oh']();
                        _0x27461d['oj'](_0x12ecc0['_a'], _0x12ecc0['ab'], !0x1);
                    }
                }
            };
            var _0x589dca = [0x22, 0x1d, 0x1a, 0x18, 0x16, 0x14, 0x12, 0x11, 0xf, 0xe, 0xd, 0xc, 0xb, 0xa, 0x9, 0x8, 0x8, 0x7, 0x6, 0x6, 0x5, 0x5, 0x4, 0x4, 0x3, 0x3, 0x2, 0x2, 0x2, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x8, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x11, 0x12, 0x14, 0x16, 0x18, 0x1a, 0x1d, 0x22];
            return _0x31d5b3[_0x2c9c89(0x869)]['Ci'] = function(_0x227247) {
                var _0x35333a = _0x2c9c89,
                    _0x319099 = ooo['ud']['Ic']()['oc'],
                    _0x1543f3 = _0x319099[_0x35333a(0x2b4)](0x0, 0x0, 0x50, 0x50),
                    _0x47b3b6 = _0x589dca[0x0],
                    _0x4c4e6d = 0x50 - _0x47b3b6,
                    _0x373255 = 0x0;
                for (var _0x37c1a2 = 0x0; _0x37c1a2 < 0x274; _0x37c1a2++) {
                    var _0x2793e0 = _0x227247['Ka']();
                    for (var _0x27d85e = 0x0; _0x27d85e < 0x8; _0x27d85e++) {
                        var _0x48b74e = (_0x47b3b6 + _0x373255 * 0x50) * 0x4;
                        (_0x2793e0 >> _0x27d85e & 0x1) != 0x0 ? (_0x1543f3[_0x35333a(0x37f)][_0x48b74e] = 0xff, _0x1543f3[_0x35333a(0x37f)][_0x48b74e + 0x1] = 0xff, _0x1543f3[_0x35333a(0x37f)][_0x48b74e + 0x2] = 0xff, _0x1543f3[_0x35333a(0x37f)][_0x48b74e + 0x3] = 0xff) : _0x1543f3[_0x35333a(0x37f)][_0x48b74e + 0x3] = 0x0, ++_0x47b3b6 >= _0x4c4e6d && ++_0x373255 < 0x50 && (_0x4c4e6d = 0x50 - (_0x47b3b6 = _0x589dca[_0x373255]));
                    }
                };
                _0x319099['putImageData'](_0x1543f3, 0x0, 0x0);
                var _0x42df9e = ooo['Xg']['Kf']['Wg']['Ah']['Yh'];
                _0x42df9e[_0x35333a(0x272)] = ooo['ud']['Ic']()['Za'], _0x42df9e[_0x35333a(0x272)][_0x35333a(0x4d4)]();
            }, _0x31d5b3[_0x2c9c89(0x869)]['Ei'] = function(_0x558c00) {
                _0x558c00['Ma']();
            }, _0x31d5b3['prototype']['Fi'] = function(_0x4bbc0a) {
                vF3(), this['Mh']['uj']();
            }, _0x31d5b3[_0x2c9c89(0x869)]['Di'] = function(_0x3c5e92) {
                var _0x2ab86c = _0x2c9c89;
                this['Mh']['ei'] = _0x3c5e92['La'](), this['Mh']['oi'] = _0x3c5e92['La']();
                var _0x20859f = new _0x158a86['vj']();
                _0x20859f['ii'] = [];
                for (var _0x366857 = _0x3c5e92['Ka'](), _0x1a954f = 0x0; _0x1a954f < _0x366857; _0x1a954f++) {
                    var _0x377acc = _0x3c5e92['La'](),
                        _0x4fa8a5 = _0x3c5e92['Na']();
                    _0x20859f['ii'][_0x2ab86c(0x31a)](_0x158a86['vj']['wj'](_0x377acc, _0x4fa8a5));
                };
                _0x20859f['fi'] = [];
                if (this['Mh']['Qh']['eh'] === _0x158a86['jd']['id'])
                    for (var _0x26d138 = _0x3c5e92['Ka'](), _0x12a7c2 = 0x0; _0x12a7c2 < _0x26d138; _0x12a7c2++) {
                        var _0x1eb560 = _0x3c5e92['Ka'](),
                            _0x34c233 = _0x3c5e92['Na']();
                        _0x20859f['fi'][_0x2ab86c(0x31a)](_0x158a86['vj']['xj'](_0x1eb560, _0x34c233));
                    };
                ooo['Xg']['Kf']['Wg']['Ch']['Bg'](_0x20859f);
            }, _0x31d5b3['prototype']['aj'] = function(_0x5aca05) {
                return _0x5aca05 === this['Mh']['Qh']['fh'] ? this['Mh']['Lh'] : this['Mh']['li'][_0x5aca05];
            }, _0x31d5b3[_0x2c9c89(0x869)]['gj'] = function(_0x253e2c, _0x5ad92b, _0x4d77c4) {
                return (((_0x4d77c4 & 0xff | _0x5ad92b << 0x8 & 0xff00 | _0x253e2c << 0x10 & 0xff0000) & 0xffffff) / 0x800000 - 0x1) * 0x2710;
            }, _0x31d5b3[_0x2c9c89(0x869)]['pj'] = function(_0x1d1493) {
                return ((_0x1d1493 & 0xffff) / 0x8000 - 0x1) * this['Mh']['Qh']['kh']();
            }, _0x31d5b3[_0x2c9c89(0x869)]['qj'] = function(_0x289203) {
                return ((_0x289203 >> 0x10 & 0xffff) / 0x8000 - 0x1) * this['Mh']['Qh']['kh']();
            }, _0x31d5b3[_0x2c9c89(0x869)]['Ii'] = function(_0x15c919) {
                var _0x47b056 = _0x15c919['Ka']();
                if ((_0x47b056 & 0x80) == 0x0) return _0x47b056;;
                var _0x3cdcf8 = _0x15c919['Ka']();
                if ((_0x3cdcf8 & 0x80) == 0x0) return _0x3cdcf8 | _0x47b056 << 0x7 & 0x3f80;;
                var _0x49c33a = _0x15c919['Ka']();
                if ((_0x49c33a & 0x80) == 0x0) return _0x49c33a | _0x3cdcf8 << 0x7 & 0x3f80 | _0x47b056 << 0xe & 0x1fc000;;
                var _0x3f41ea = _0x15c919['Ka']();
                return (_0x3f41ea & 0x80) == 0x0 ? _0x3f41ea | _0x49c33a << 0x7 & 0x3f80 | _0x3cdcf8 << 0xe & 0x1fc000 | _0x47b056 << 0x15 & 0xfe00000 : undefined;
            }, _0x31d5b3;
        }()), _0x158a86['yj'] = (function() {
            var _0x1e0d35 = _0x2b6b48;

            function _0x4f12b3(_0x8b470a) {
                this['zj'] = _0x8b470a;
            }
            return _0x4f12b3['Aj'] = function() {
                return new _0x158a86['yj'](null);
            }, _0x4f12b3['Bj'] = function(_0x5a8192) {
                return new _0x158a86['yj'](_0x5a8192);
            }, _0x4f12b3[_0x1e0d35(0x869)]['Mc'] = function() {
                return this['zj'];
            }, _0x4f12b3[_0x1e0d35(0x869)]['Cj'] = function() {
                return this['zj'] != null;
            }, _0x4f12b3[_0x1e0d35(0x869)]['Dj'] = function(_0x2229f7) {
                this['zj'] != null && _0x2229f7(this['zj']);
            }, _0x4f12b3;
        }()), _0x158a86['lj'] = (function() {
            var _0x2a9b09 = _0x2b6b48;

            function _0x1cd16d(_0x59b3ff, _0x6964b7) {
                this['ki'] = _0x59b3ff, this['Ej'] = _0x59b3ff['ni'] >= 0x50, this['Fj'] = 0x0, this['Gj'] = 0x0, this['Hj'] = 0x0, this['Ij'] = 0x0, this['sj'] = this['Ej'] ? 0x1 : _0x59b3ff['mj'], this['rj'] = 0x1, this['tj'] = !0x1, this['Jj'] = 0x0, this['Kj'] = 0x0, this['Lj'] = 0x1, this['Mj'] = _0x2171ac['S'] * _0x239c2a['ma'](), this['Nj'] = new _0x158a86['Oj'](), this['Nj']['hd'](ooo['Mh']['Qh']['eh'], this['ki']['mi'] === _0x158a86['dh']['jh'] ? null : ooo['ud']['Cc']()['Ub'](this['ki']['mi']), ooo['ud']['Cc']()['Zb'](this['ki']['ni'])), _0x6964b7['Vh'](_0x59b3ff['Je'], this['Nj']);
            }
            return _0x1cd16d[_0x2a9b09(0x869)]['$i'] = function() {
                this['Nj']['Wh']['md']['G'](), this['Nj']['Wh']['ld']['G']();
            }, _0x1cd16d[_0x2a9b09(0x869)]['oj'] = function(_0x21d393, _0x530912, _0x3ab1ea) {
                this['Fj'] = _0x21d393, this['Gj'] = _0x530912, _0x3ab1ea && (this['Hj'] = _0x21d393, this['Ij'] = _0x530912);
            }, _0x1cd16d[_0x2a9b09(0x869)]['Pj'] = function(_0x13f20e, _0x418f49) {
                var _0x46ac30 = _0x239c2a['ha'](0.5, this['sj'] * 0x1),
                    _0x97bece = _0x239c2a['ha'](2.5, this['sj'] * 1.5);
                this['Jj'] = _0x239c2a['ga'](this['Jj'], _0x46ac30, _0x418f49, 0.0025), this['Kj'] = _0x239c2a['ga'](this['Kj'], _0x97bece, _0x418f49, 0.0025), this['Lj'] = _0x239c2a['ga'](this['Lj'], this['rj'], _0x418f49, 0.0025);
            }, _0x1cd16d[_0x2a9b09(0x869)]['Qj'] = function(_0x3307b5, _0x115823, _0x5aaf34) {
                var _0x390b79 = _0x2a9b09;
                this['Hj'] = _0x239c2a['ga'](this['Hj'], this['Fj'], _0x115823, window[_0x390b79(0x66d)]['eat_animation']), this['Ij'] = _0x239c2a['ga'](this['Ij'], this['Gj'], _0x115823, 0.0025), this['Nj']['Bg'](this, _0x3307b5, _0x115823, _0x5aaf34);
            }, _0x1cd16d['Ti'] = function _0x4ab42d() {
                this['Je'] = 0x0, this['mi'] = _0x158a86['dh']['jh'], this['mj'] = 0x0, this['ni'] = 0x0;
            }, _0x1cd16d;
        }()), _0x158a86['Oj'] = (function() {
            var _0x542878 = _0x2b6b48;

            function _0x20fda7() {
                var _0x4b5c8e = _0x563d;
                this['Wh'] = new _0x528c33(new _0x158a86['bd'](), new _0x158a86['bd']()), this['Wh']['md']['gd'][_0x4b5c8e(0x5cf)] = _0x39b888['k']['w']['z'], this['Wh']['md']['gd'][_0x4b5c8e(0x4e3)] = _0x48b198, this['Wh']['ld']['gd'][_0x4b5c8e(0x4e3)] = _0x118972;
            }
            var _0x118972 = 0x1f4,
                _0x48b198 = 0x64;
            _0x20fda7[_0x542878(0x869)]['hd'] = function(_0xccb1d4, _0xac208f, _0x53e664) {
                var _0x4587a9 = _0x53e664['dc'];
                _0x4587a9 != null && this['Wh']['ld']['kd'](_0x4587a9);
                var _0x2de2c4 = _0xccb1d4 === _0x158a86['jd']['id'] && _0xac208f != null ? _0xac208f['bc']['ec'] : _0x53e664['ec'];
                _0x2de2c4 != null && this['Wh']['md']['kd'](_0x2de2c4);
            }, _0x20fda7[_0x542878(0x869)]['Bg'] = function(_0x48cf0d, _0x46b35b, _0x3e9233, _0x317be8) {
                var _0x379cae = _0x542878;
                if (!_0x317be8(_0x48cf0d['Hj'], _0x48cf0d['Ij'])) {
                    this['Wh']['Cd']();
                    return;
                }
                var _0x1e8194 = _0x48cf0d['Kj'] * (0x1 + _0x239c2a['pa'](_0x48cf0d['Mj'] + _0x46b35b / 0xc8) * 0.3);
                _0x48cf0d['Ej'] ? this['Wh']['Ad'](_0x48cf0d['Hj'], _0x48cf0d['Ij'], window['wftObjects'][_0x379cae(0x3ea)] * _0x48cf0d['Jj'], _0x48cf0d['Lj'] * 0x1, window['wftObjects']['PortionAura'] * _0x1e8194, window[_0x379cae(0x66d)]['PortionTransparent'] * _0x48cf0d['Lj']) : this['Wh']['Ad'](_0x48cf0d['Hj'], _0x48cf0d['Ij'], window[_0x379cae(0x66d)][_0x379cae(0x54c)] * _0x48cf0d['Jj'], _0x48cf0d['Lj'] * 0x1, window[_0x379cae(0x66d)]['FoodShadow'] * _0x1e8194, window[_0x379cae(0x66d)][_0x379cae(0x56a)] * _0x48cf0d['Lj']);
            };
            var _0x528c33 = (function() {
                var _0x595b60 = _0x542878;

                function _0x246170(_0x57dc6e, _0x29404c) {
                    this['ld'] = _0x57dc6e, this['md'] = _0x29404c;
                }
                return _0x246170[_0x595b60(0x869)]['Ad'] = function(_0x1f26c5, _0x38b524, _0x583768, _0x4cef45, _0x1af792, _0x27c6b4) {
                    this['ld']['Td'](!0x0), this['ld']['Ud'](_0x1f26c5, _0x38b524), this['ld']['Bd'](_0x583768), this['ld']['Rj'](_0x4cef45), this['md']['Td'](!0x0), this['md']['Ud'](_0x1f26c5, _0x38b524), this['md']['Bd'](_0x1af792), this['md']['Rj'](_0x27c6b4);
                }, _0x246170[_0x595b60(0x869)]['Cd'] = function() {
                    this['ld']['Td'](!0x1), this['md']['Td'](!0x1);
                }, _0x246170;
            }());
            return _0x20fda7;
        }()), _0x158a86['Sj'] = (function() {
            var _0x562855 = _0x2b6b48;

            function _0xa0217() {
                this['Tj'] = 0x0, this['Uj'] = 0x0, this['Vj'] = 0x0, this['Wj'] = 0x0, this['Xj'] = 0x0, this['Yj'] = [];
            }

            function _0x1d78dd(_0x3148ac, _0x5dc48a) {
                for (var _0x3fd9fd = 0x0; _0x3fd9fd < _0x3148ac['length']; _0x3fd9fd++) {
                    if (parseInt(_0x3148ac[_0x3fd9fd]['id']) === _0x5dc48a) return _0x3fd9fd;
                };
                return -0x1;
            }
            return _0xa0217['prototype']['Sa'] = function() {}, _0xa0217[_0x562855(0x869)]['Zj'] = function(_0x473343) {
                var _0x4021e4 = _0x562855;
                !_0x1a98d3[_0x4021e4(0x5ff)] && (_0x1a98d3['pm'] = {
                    ...this
                }, localStorage['setItem']('SaveGamewft', JSON[_0x4021e4(0x32a)](_0x1a98d3)));
                switch (_0x473343) {
                    case _0x158a86['_j']['$j']:
                        return this['Tj'];
                    case _0x158a86['_j']['ak']:
                        return this['Uj'];
                    case _0x158a86['_j']['bk']:
                        return this['Vj'];
                    case _0x158a86['_j']['ck']:
                        return this['Wj'];
                    case _0x158a86['_j']['dk']:
                        return this['Xj'];
                };
                return 0x0;
            }, _0xa0217[_0x562855(0x869)]['ek'] = function() {
                return new _0x158a86['Sb'](this['Tj'], this['Uj'], this['Vj'], this['Wj'], this['Xj']);
            }, _0xa0217[_0x562855(0x869)]['fk'] = function(_0x18944c) {
                var _0x139583 = _0x562855;
                this['Yj'][_0x139583(0x31a)](_0x18944c), this['gk']();
            }, _0xa0217[_0x562855(0x869)]['hk'] = function() {
                var _0x4da904 = _0x562855;
                if (!ooo['ud']['Fc']()) return _0x239c2a['wa']([0x20, 0x21, 0x22, 0x23]);;
                var _0x4178db = [];
                for (var _0x5f29d7 = ooo['ud']['Gc']()[_0x4da904(0x2c9)], _0x103143 = 0x0; _0x103143 < _0x5f29d7[_0x4da904(0x883)]; _0x103143++) {
                    var _0x395f3e = _0x5f29d7[_0x103143];
                    this['ik'](_0x395f3e['id'], _0x158a86['_j']['$j']) && _0x4178db[_0x4da904(0x31a)](_0x395f3e);
                };
                return _0x4178db[_0x4da904(0x883)] === 0x0 ? 0x0 : _0x4178db[parseInt(_0x4178db['length'] * _0x239c2a['ma']())]['id'];
            }, _0xa0217[_0x562855(0x869)]['jk'] = function() {
                var _0x2961a3 = _0x562855;
                if (ooo['ud']['Fc']()) {
                    var _0xd4f4f3 = ooo['ud']['Gc']()[_0x2961a3(0x2c9)],
                        _0x5cba77 = _0x1d78dd(_0xd4f4f3, this['Tj']);
                    if (!(_0x5cba77 < 0x0)) {
                        for (var _0x583e06 = _0x5cba77 + 0x1; _0x583e06 < _0xd4f4f3[_0x2961a3(0x883)]; _0x583e06++) {
                            if (this['ik'](_0xd4f4f3[_0x583e06]['id'], _0x158a86['_j']['$j']) && _0xd4f4f3[_0x583e06]['g'] !== !0x0) {
                                this['Tj'] = _0xd4f4f3[_0x583e06]['id'], this['gk']();
                                return;
                            }
                        };
                        for (var _0xb38f80 = 0x0; _0xb38f80 < _0x5cba77; _0xb38f80++) {
                            if (this['ik'](_0xd4f4f3[_0xb38f80]['id'], _0x158a86['_j']['$j']) && _0xd4f4f3[_0xb38f80]['g'] !== !0x0) {
                                this['Tj'] = _0xd4f4f3[_0xb38f80]['id'], this['gk']();
                                return;
                            }
                        }
                    }
                }
            }, _0xa0217[_0x562855(0x869)]['kk'] = function() {
                var _0xf7fbba = _0x562855;
                if (ooo['ud']['Fc']) {
                    var _0xa31779 = ooo['ud']['Gc']()[_0xf7fbba(0x2c9)],
                        _0x968a6b = _0x1d78dd(_0xa31779, this['Tj']);
                    if (!(_0x968a6b < 0x0)) {
                        for (var _0xd27f2f = _0x968a6b - 0x1; _0xd27f2f >= 0x0; _0xd27f2f--) {
                            if (this['ik'](_0xa31779[_0xd27f2f]['id'], _0x158a86['_j']['$j']) && _0xa31779[_0xd27f2f]['g'] !== !0x0) {
                                this['Tj'] = _0xa31779[_0xd27f2f]['id'], this['gk']();
                                return;
                            }
                        };
                        for (var _0x2edb30 = _0xa31779['length'] - 0x1; _0x2edb30 > _0x968a6b; _0x2edb30--) {
                            if (this['ik'](_0xa31779[_0x2edb30]['id'], _0x158a86['_j']['$j']) && _0xa31779[_0x2edb30]['g'] !== !0x0) {
                                this['Tj'] = _0xa31779[_0x2edb30]['id'], this['gk']();
                                return;
                            }
                        }
                    }
                }
            }, _0xa0217[_0x562855(0x869)]['lk'] = function(_0x2da830, _0x1472ad) {
                if (!ooo['ud']['Fc']() || this['ik'](_0x2da830, _0x1472ad)) switch (_0x1472ad) {
                    case _0x158a86['_j']['$j']:
                        this['Tj'] !== _0x2da830 && (this['Tj'] = _0x2da830, this['gk']());
                        return;
                    case _0x158a86['_j']['ak']:
                        this['Uj'] !== _0x2da830 && (this['Uj'] = _0x2da830, this['gk']());
                        return;
                    case _0x158a86['_j']['bk']:
                        this['Vj'] !== _0x2da830 && (this['Vj'] = _0x2da830, this['gk']());
                        return;
                    case _0x158a86['_j']['ck']:
                        this['Wj'] !== _0x2da830 && (this['Wj'] = _0x2da830, this['gk']());
                        return;
                    case _0x158a86['_j']['dk']:
                        this['Xj'] !== _0x2da830 && (this['Xj'] = _0x2da830, this['gk']());
                        return;
                }
            }, _0xa0217[_0x562855(0x869)]['ik'] = function(_0x126f93, _0x5c13cb) {
                var _0x368753 = this['mk'](_0x126f93, _0x5c13cb);
                return _0x368753 != null && (ooo['ok']['nk']() ? _0x368753['pk']() === 0x0 && !_0x368753['qk']() || ooo['ok']['rk'](_0x126f93, _0x5c13cb) : _0x368753['sk']());
            }, _0xa0217['prototype']['mk'] = function(_0x5cbfb5, _0x29d57b) {
                var _0x2cae61 = _0x562855;
                if (!ooo['ud']['Fc']()) return null;;
                var _0x206878 = ooo['ud']['Gc']();
                if (_0x29d57b === _0x158a86['_j']['$j']) {
                    var _0x44f044 = _0x1d78dd(_0x206878['skinArrayDict'], _0x5cbfb5);
                    return _0x44f044 < 0x0 ? null : _0x158a86['uk']['tk'](_0x206878[_0x2cae61(0x2c9)][_0x44f044]);
                };
                var _0x2f4615 = null;
                switch (_0x29d57b) {
                    case _0x158a86['_j']['ak']:
                        _0x2f4615 = _0x206878[_0x2cae61(0x248)][_0x5cbfb5];
                        break;
                    case _0x158a86['_j']['bk']:
                        _0x2f4615 = _0x206878[_0x2cae61(0x663)][_0x5cbfb5];
                        break;
                    case _0x158a86['_j']['ck']:
                        _0x2f4615 = _0x206878[_0x2cae61(0x4f2)][_0x5cbfb5];
                        break;
                    case _0x158a86['_j']['dk']:
                        _0x2f4615 = _0x206878[_0x2cae61(0x1b0)][_0x5cbfb5];
                };
                return _0x2f4615 != null ? _0x158a86['uk']['vk'](_0x2f4615) : null;
            }, _0xa0217[_0x562855(0x869)]['gk'] = function() {
                var _0x1d4d14 = _0x562855;
                for (var _0x32f78b = 0x0; _0x32f78b < this['Yj'][_0x1d4d14(0x883)]; _0x32f78b++) {
                    this['Yj'][_0x32f78b]();
                }
            }, _0xa0217;
        }()), _0x158a86['_j'] = (function() {
            var _0x2a9757 = _0x2b6b48;

            function _0x3dc5fd() {}
            return _0x3dc5fd['$j'] = _0x2a9757(0x707), _0x3dc5fd['ak'] = _0x2a9757(0x36e), _0x3dc5fd['bk'] = _0x2a9757(0x30f), _0x3dc5fd['dk'] = _0x2a9757(0x83e), _0x3dc5fd['ck'] = _0x2a9757(0x3e1), _0x3dc5fd;
        }()), _0x158a86['wk'] = (function() {
            var _0x5a1cd6 = _0x2b6b48;

            function _0x3cc1d9() {
                var _0x151cbb = _0x563d;
                this[_0x151cbb(0x54f)] = _0x19beac, this['ig'] = new _0x39b888['k']['n'](_0x39b888['k']['m'][_0x151cbb(0x1c2)](_0x151cbb(0x2f9))), this[_0x151cbb(0x833)] = new _0x39b888['k']['n'](_0x19beac());
                var _0x1c7a76, _0x9ea980, _0x17df29, _0x2f6f91, _0x48a6e6 = _0x39b888['k']['m'][_0x151cbb(0x1c2)](_0x151cbb(0x4f9) || _0x2171ac['H']['N']),
                    _0x1906e6 = new _0x39b888['k']['n'](_0x48a6e6, new _0x39b888['k']['r'](0x0, 0x0, 0x100, 0x100)),
                    _0x3fd53d = new _0x39b888['k']['n'](_0x48a6e6, new _0x39b888['k']['r'](0x160, 0x60, 0x40, 0x40));
                this['jg'] = Array(0x10);
                for (var _0x4f51fe = 0x0; _0x4f51fe < this['jg'][_0x151cbb(0x883)]; _0x4f51fe++) {
                    this['jg'][_0x4f51fe] = _0x4f51fe % 0x2 == 0x0 ? _0x1906e6 : _0x3fd53d;
                };
                this['Ih'] = new _0x39b888['k']['n'](((_0x1c7a76 = _0x39b888['k']['m'][_0x151cbb(0x1c2)](_0x151cbb(0x6ef)))[_0x151cbb(0x7c8)] = _0x39b888['k']['C']['D'], _0x1c7a76)), this['Jh'] = new _0x39b888['k']['n'](((_0x9ea980 = _0x39b888['k']['m'][_0x151cbb(0x1c2)](_0x151cbb(0x2c1)))[_0x151cbb(0x7c8)] = _0x39b888['k']['C']['D'], _0x9ea980)), this['Gh'] = new _0x39b888['k']['n'](_0x39b888['k']['m'][_0x151cbb(0x1c2)](_0x151cbb(0x20b))), this['$f'] = new _0x39b888['k']['n'](((_0x17df29 = _0x39b888['k']['m']['from'](_0x2171ac['H']['O']))[_0x151cbb(0x7c8)] = _0x39b888['k']['C']['D'], _0x17df29)), this['mc'] = ((_0x2f6f91 = _0x158a86['d']['createElement'](_0x151cbb(0x1b1)))['width'] = 0x50, _0x2f6f91['height'] = 0x50, {
                    'nc': _0x2f6f91,
                    'oc': _0x2f6f91['getContext']('2d'),
                    'Za': new _0x39b888['k']['n'](_0x39b888['k']['m'][_0x151cbb(0x1c2)](_0x2f6f91))
                }), this['hf'] = {}, this['df'] = {}, this['xk'] = [], this['yk'] = null;
            }

            function _0x19beac(_0x6968fe) {
                var _0x2a72f2 = _0x563d;
                return (_0x6968fe = _0x39b888['k']['m']['from'](_0x6968fe || _0x1a98d3[_0x2a72f2(0x783)] || _0x2a72f2(0x6ef)))[_0x2a72f2(0x7c8)] = _0x39b888['k']['C']['D'], _0x6968fe;
            }
            return _0x3cc1d9[_0x5a1cd6(0x869)]['Sa'] = function(_0x26bdff) {
                function _0x1eeb40() {
                    --_0x5e1aba == 0x0 && _0x26bdff();
                }
                var _0x5e1aba = 0x4;
                this['hf'] = {}, _0x1eeb40(), this['df'] = {}, _0x1eeb40(), this['xk'] = [], _0x1eeb40(), this['yk'] = null, _0x1eeb40();
            }, _0x3cc1d9;
        }()), _0x158a86['zk'] = (function() {
            var _0x44d4ad = _0x2b6b48;

            function _0x45e0d8() {
                this['Ak'] = null, this['Kf'] = new _0x158a86['Bk'](), this['Jf'] = new _0x158a86['Ck'](), this['Dk'] = new _0x158a86['Ek'](), this['Fk'] = new _0x158a86['Gk'](), this['Hk'] = new _0x158a86['Ik'](), this['Jk'] = new _0x158a86['Kk'](), this['Lk'] = new _0x158a86['Mk'](), this['Nk'] = new _0x158a86['Ok'](), this['Hi'] = new _0x158a86['Pk'](), this['Qk'] = new _0x158a86['Rk'](), this['Sk'] = new _0x158a86['Tk'](), this['Uk'] = new _0x158a86['Vk'](), this['Wk'] = new _0x158a86['Xk'](), this['Yk'] = new _0x158a86['Zk'](), this['Re'] = new _0x158a86['$k'](), this['_k'] = new _0x158a86['al'](), this['bl'] = new _0x158a86['cl'](), this['dl'] = new _0x158a86['el'](), this['fl'] = [];
            }

            function _0x150d1f(_0x4e87ff, _0x1a633d) {
                var _0x24d003 = _0x563d;
                if (_0x1a633d !== _0x4e87ff['length'] + 0x1) {
                    var _0x34d06b = _0x4e87ff[_0x1a633d];
                    _0x239c2a['ua'](_0x4e87ff, _0x1a633d + 0x1, _0x1a633d, _0x4e87ff['length'] - _0x1a633d - 0x1), _0x4e87ff[_0x4e87ff[_0x24d003(0x883)] - 0x1] = _0x34d06b;
                }
            }
            return _0x45e0d8[_0x44d4ad(0x869)]['Sa'] = function() {
                var _0x4ad87f = _0x44d4ad;
                this['Ak'] = new _0x158a86['Nf'](_0x158a86['Uf']['Tf']), this['fl'] = [this['Kf'], this['Jf'], this['Dk'], this['Fk'], this['Hk'], this['Jk'], this['Lk'], this['Nk'], this['Hi'], this['Qk'], this['Sk'], this['Uk'], this['Wk'], this['Yk'], this['Re'], this['_k'], this['bl'], this['dl']];
                for (var _0x3141e0 = 0x0; _0x3141e0 < this['fl'][_0x4ad87f(0x883)]; _0x3141e0++) {
                    this['fl'][_0x3141e0]['Sa']();
                }
            }, _0x45e0d8[_0x44d4ad(0x869)]['Uh'] = function(_0x5eda5a, _0x3769d8) {
                var _0x583815 = _0x44d4ad;
                for (var _0x485061 = this['fl'][_0x583815(0x883)] - 0x1; _0x485061 >= 0x0; _0x485061--) {
                    this['fl'][_0x485061]['ug'](_0x5eda5a, _0x3769d8);
                };
                this['fl'][0x0] !== this['Kf'] && this['fl'][0x0] !== this['dl'] && this['Ak'] != null && this['Ak']['ug'](_0x5eda5a, _0x3769d8);
            }, _0x45e0d8[_0x44d4ad(0x869)]['qg'] = function() {
                for (var _0x59cc77 = this['fl']['length'] - 0x1; _0x59cc77 >= 0x0; _0x59cc77--) {
                    this['fl'][_0x59cc77]['qg']();
                };
                this['Ak'] != null && this['Ak']['qg']();
            }, _0x45e0d8['prototype']['gl'] = function(_0x4f72a5) {
                var _0x3a67d7 = function _0x338ccf(_0x1226ee, _0x1d8e52) {
                    var _0x373015 = _0x563d;
                    for (var _0x488c1f = 0x0; _0x488c1f < _0x1226ee[_0x373015(0x883)]; _0x488c1f++) {
                        if (_0x1226ee[_0x488c1f] === _0x1d8e52) return _0x488c1f;
                    };
                    return -0x1;
                }(this['fl'], _0x4f72a5);
                !(_0x3a67d7 < 0x0) && (this['fl'][0x0]['hl'](), function _0x231773(_0x5d7fc8, _0x6fb59b) {
                    if (_0x6fb59b !== 0x0) {
                        var _0x5b9d90 = _0x5d7fc8[_0x6fb59b];
                        _0x239c2a['ua'](_0x5d7fc8, 0x0, 0x1, _0x6fb59b), _0x5d7fc8[0x0] = _0x5b9d90;
                    }
                }(this['fl'], _0x3a67d7), this['il']());
            }, _0x45e0d8[_0x44d4ad(0x869)]['jl'] = function() {
                this['fl'][0x0]['hl']();
                do {
                    _0x150d1f(this['fl'], 0x0);
                } while (this['fl'][0x0]['Wd'] !== _0x158a86['ll']['kl']);
                this['il']();
            }, _0x45e0d8['prototype']['il'] = function() {
                var _0x2bdc11 = this['fl'][0x0];
                _0x2bdc11['ml'](), _0x2bdc11['nl'](), this['ol']();
            }, _0x45e0d8[_0x44d4ad(0x869)]['pl'] = function() {
                var _0x100148 = _0x44d4ad;
                return this['fl'][_0x100148(0x883)] !== 0x0 && this['fl'][0x0]['Wd'] === _0x158a86['ll']['kl'] && this['Yk']['ql']();
            }, _0x45e0d8[_0x44d4ad(0x869)]['rl'] = function() {
                return this['fl']['length'] === 0x0 ? null : this['fl'][0x0];
            }, _0x45e0d8[_0x44d4ad(0x869)]['ol'] = function() {
                this['pl']() && this['gl'](this['Yk']);
            }, _0x45e0d8;
        }()), _0x158a86['vj'] = (function() {
            function _0xe85f6c() {
                this['ii'] = [], this['fi'] = [];
            }
            return _0xe85f6c['wj'] = function(_0x25343a, _0xa34bb0) {
                return {
                    'ji': _0x25343a,
                    'hi': _0xa34bb0
                };
            }, _0xe85f6c['xj'] = function(_0x508c3a, _0x22855f) {
                return {
                    'gi': _0x508c3a,
                    'hi': _0x22855f
                };
            }, _0xe85f6c;
        }()), _0x158a86['sl'] = (function() {
            var _0x5d8533 = _0x2b6b48;

            function _0x154417() {
                this['tl'] = [], this['ul'] = [], this['vl'] = !0x1, this['wl'] = _0x25fd24, this['xl'] = {};
            }
            var _0x25fd24 = _0x5d8533(0x41a),
                _0x4c1730 = 'guest',
                _0x4bab46 = 'fb',
                _0x1403f3 = 'gg';
            return _0x154417['yl'] = new(function() {
                var _0x3e3ead = _0x5d8533;

                function _0x1713b8() {}
                return _0x1713b8['zl'] = function _0x1290c(_0x2c6919) {
                    this['Al'] = _0x2c6919;
                }, _0x1713b8[_0x3e3ead(0x869)]['Bl'] = function() {
                    var _0x29c726 = _0x3e3ead;
                    return (typeof FB == _0x29c726(0x328) ? _0x29c726(0x328) : f3(FB)) != _0x29c726(0x328);
                }, _0x1713b8[_0x3e3ead(0x869)]['Cl'] = function(_0x17cce5, _0x19fe14, _0x1088d6) {
                    var _0x41951a = _0x3e3ead,
                        _0x1d4e4f = _0x41951a(0x261) + _0x17cce5;
                    $['get'](_0x1d4e4f)[_0x41951a(0x342)](function() {
                        _0x19fe14();
                    })['done'](function() {
                        _0x1088d6();
                    });
                }, _0x1713b8[_0x3e3ead(0x869)]['Dl'] = function(_0x2db70d, _0x52acdc) {
                    if (!this['Bl']()) {
                        _0x2db70d();
                        return;
                    };
                    this['El'](function() {
                        var _0x4f7023 = _0x563d;
                        FB[_0x4f7023(0x54a)](function(_0x43f91c) {
                            var _0x1a82b6 = _0x4f7023;
                            if (_0x43f91c[_0x1a82b6(0x465)] !== _0x1a82b6(0x51f)) {
                                _0x2db70d();
                                return;
                            };
                            var _0xf29ed7 = _0x43f91c[_0x1a82b6(0x1d0)][_0x1a82b6(0x868)];
                            _0x52acdc(new _0x1713b8['zl'](_0xf29ed7));
                        });
                    }, function(_0x4835ae) {
                        _0x52acdc(_0x4835ae);
                    });
                }, _0x1713b8['prototype']['El'] = function(_0x1d6e8d, _0x56b1c3) {
                    var _0x3819e0 = _0x3e3ead,
                        _0x39552e = this;
                    if (!this['Bl']()) {
                        _0x1d6e8d();
                        return;
                    };
                    FB[_0x3819e0(0x873)](function(_0x308f97) {
                        var _0x31919d = _0x3819e0;
                        if (_0x308f97['status'] !== _0x31919d(0x51f)) {
                            _0x1d6e8d();
                            return;
                        };
                        var _0x38dea8 = _0x308f97['authResponse']['accessToken'];
                        _0x39552e['Cl'](_0x38dea8, function() {
                            _0x1d6e8d();
                        }, function() {
                            _0x56b1c3(new _0x1713b8['zl'](_0x38dea8));
                        });
                    });
                }, _0x1713b8[_0x3e3ead(0x869)]['Fl'] = function() {
                    var _0xd3e9ad = _0x3e3ead;
                    this['Bl']() && FB[_0xd3e9ad(0x5da)]();
                }, _0x1713b8;
            }())(), _0x154417['Gl'] = new(function() {
                var _0x2c26a9 = _0x5d8533;

                function _0x4abcba() {}
                return _0x4abcba['Hl'] = function _0x4c7378(_0x459b96, _0x10045e) {
                    this['Al'] = _0x459b96, this['Il'] = _0x10045e;
                }, _0x4abcba['prototype']['Bl'] = function() {
                    var _0x55a21f = _0x563d;
                    return f3(v) != _0x55a21f(0x328);
                }, _0x4abcba[_0x2c26a9(0x869)]['Dl'] = function(_0x1be29d, _0x2ec800) {
                    if (f3(v) == 'undefined') {
                        _0x1be29d();
                        return;
                    };
                    v['then'](function() {
                        var _0x1ccc78 = _0x563d;
                        if (v['isSignedIn']['get']()) {
                            var _0x2b1cef = v[_0x1ccc78(0x60b)][_0x1ccc78(0x5d3)](),
                                _0x4eabc7 = _0x2b1cef[_0x1ccc78(0x75e)]()[_0x1ccc78(0x81f)],
                                _0x2cab87 = new Date()['getTime']() + _0x2b1cef['getAuthResponse']()['expires_in'] * 0x3e8;
                            if (new Date()[_0x1ccc78(0x484)]() < _0x2cab87) {
                                _0x2ec800(new _0x4abcba['Hl'](_0x4eabc7, _0x2cab87));
                                return;
                            }
                        };
                        v['signIn']()[_0x1ccc78(0x384)](function(_0x2d8a14) {
                            var _0x5c6f38 = _0x1ccc78;
                            if (f3(_0x2d8a14[_0x5c6f38(0x1c4)]) !== _0x5c6f38(0x328) || !_0x2d8a14[_0x5c6f38(0x77e)]()) {
                                _0x1be29d();
                                return;
                            };
                            var _0x274011 = _0x2d8a14[_0x5c6f38(0x75e)]()[_0x5c6f38(0x81f)],
                                _0x528f9f = new Date()['getTime']() + _0x2d8a14[_0x5c6f38(0x75e)]()[_0x5c6f38(0x245)] * 0x3e8;
                            _0x2ec800(new _0x4abcba['Hl'](_0x274011, _0x528f9f));
                        });
                    });
                }, _0x4abcba[_0x2c26a9(0x869)]['El'] = function(_0x4c5f7e, _0xded028) {
                    var _0x4a5489 = _0x2c26a9;
                    if (f3(v) == _0x4a5489(0x328)) {
                        _0x4c5f7e();
                        return;
                    };
                    v['then'](function() {
                        var _0x2fbf53 = _0x4a5489;
                        if (v[_0x2fbf53(0x77e)]['get']()) {
                            var _0x565907 = v[_0x2fbf53(0x60b)]['get'](),
                                _0x35d474 = _0x565907[_0x2fbf53(0x75e)]()[_0x2fbf53(0x81f)],
                                _0x3cb58d = new Date()[_0x2fbf53(0x484)]() + _0x565907[_0x2fbf53(0x75e)]()[_0x2fbf53(0x245)] * 0x3e8;
                            if (new Date()[_0x2fbf53(0x484)]() < _0x3cb58d) {
                                _0xded028(new _0x4abcba['Hl'](_0x35d474, _0x3cb58d));
                                return;
                            }
                        };
                        _0x4c5f7e();
                    });
                }, _0x4abcba[_0x2c26a9(0x869)]['Fl'] = function() {
                    f3(v) != 'undefined' && v['signOut']();
                }, _0x4abcba;
            }())(), _0x154417[_0x5d8533(0x869)]['Sa'] = function() {
                this['Jl']();
            }, _0x154417[_0x5d8533(0x869)]['Kl'] = function() {
                return this['vl'] ? this['xl']['userId'] : '';
            }, _0x154417[_0x5d8533(0x869)]['Ll'] = function() {
                return this['vl'] ? this['xl']['username'] : '';
            }, _0x154417[_0x5d8533(0x869)]['Ml'] = function() {
                return this['vl'] ? this['xl']['nickname'] : '';
            }, _0x154417[_0x5d8533(0x869)]['Nl'] = function() {
                var _0x35e64a = _0x5d8533;
                return this['vl'] ? this['xl'][_0x35e64a(0x499)] : _0x2171ac['H']['M'];
            }, _0x154417[_0x5d8533(0x869)]['Ol'] = function() {
                return this['vl'] && this['xl']['isBuyer'];
            }, _0x154417[_0x5d8533(0x869)]['Pl'] = function() {
                return this['vl'] && this['xl']['isConsentGiven'];
            }, _0x154417[_0x5d8533(0x869)]['Ql'] = function() {
                var _0x2a8f80 = _0x5d8533;
                return this['vl'] ? this['xl'][_0x2a8f80(0x76e)] : 0x0;
            }, _0x154417[_0x5d8533(0x869)]['Rl'] = function() {
                var _0x19742a = _0x5d8533;
                return this['vl'] ? this['xl'][_0x19742a(0x4d6)] : 0x1;
            }, _0x154417[_0x5d8533(0x869)]['Sl'] = function() {
                var _0x433f8b = _0x5d8533;
                return this['vl'] ? this['xl'][_0x433f8b(0x1fb)] : 0x0;
            }, _0x154417[_0x5d8533(0x869)]['Tl'] = function() {
                return this['vl'] ? this['xl']['expToNext'] : 0x32;
            }, _0x154417[_0x5d8533(0x869)]['Ul'] = function() {
                var _0x133ba8 = _0x5d8533;
                return this['vl'] ? this['xl'][_0x133ba8(0x668)] : 0x0;
            }, _0x154417[_0x5d8533(0x869)]['Vl'] = function() {
                var _0x4f7b23 = _0x5d8533;
                return this['vl'] ? this['xl'][_0x4f7b23(0x2a3)] : 0x0;
            }, _0x154417[_0x5d8533(0x869)]['Wl'] = function() {
                var _0x33feb1 = _0x5d8533;
                return this['vl'] ? this['xl'][_0x33feb1(0x5e3)] : 0x0;
            }, _0x154417[_0x5d8533(0x869)]['Xl'] = function() {
                var _0x58c3d0 = _0x5d8533;
                return this['vl'] ? this['xl'][_0x58c3d0(0x5cb)] : 0x0;
            }, _0x154417[_0x5d8533(0x869)]['Yl'] = function() {
                var _0xaa7af0 = _0x5d8533;
                return this['vl'] ? this['xl'][_0xaa7af0(0x3ca)] : 0x0;
            }, _0x154417[_0x5d8533(0x869)]['Zl'] = function() {
                return this['vl'] ? this['xl']['highScore'] : 0x0;
            }, _0x154417[_0x5d8533(0x869)]['$l'] = function() {
                var _0x52fe08 = _0x5d8533;
                return this['vl'] ? this['xl'][_0x52fe08(0x3af)] : 0x0;
            }, _0x154417[_0x5d8533(0x869)]['_l'] = function() {
                var _0x4d5e01 = _0x5d8533;
                return this['vl'] ? this['xl'][_0x4d5e01(0x819)] : 0x0;
            }, _0x154417['prototype']['am'] = function() {
                var _0x660a48 = _0x5d8533;
                return this['vl'] ? this['xl'][_0x660a48(0x6ae)] : 0x0;
            }, _0x154417[_0x5d8533(0x869)]['bm'] = function() {
                return this['vl'] ? this['xl']['sessionsPlayed'] : 0x0;
            }, _0x154417[_0x5d8533(0x869)]['cm'] = function() {
                var _0x3c56a0 = _0x5d8533;
                return this['vl'] ? this['xl'][_0x3c56a0(0x2d2)] : 0x0;
            }, _0x154417[_0x5d8533(0x869)]['dm'] = function() {
                var _0x4550d7 = _0x5d8533;
                return this['vl'] ? this['xl'][_0x4550d7(0x3c4)] : {};
            }, _0x154417[_0x5d8533(0x869)]['em'] = function(_0x39e304) {
                var _0xd0b7d = _0x5d8533;
                this['tl'][_0xd0b7d(0x31a)](_0x39e304), _0x39e304();
            }, _0x154417[_0x5d8533(0x869)]['fm'] = function(_0x53fb13) {
                var _0x1fce6d = _0x5d8533;
                this['ul'][_0x1fce6d(0x31a)](_0x53fb13), _0x53fb13();
            }, _0x154417[_0x5d8533(0x869)]['rk'] = function(_0x489e51, _0x44a4f1) {
                var _0x395751 = _0x5d8533,
                    _0x1c5141 = this['xl'][_0x395751(0x40b)][_0x395751(0x431)](_0x1a98d3['pL'] || []);
                if (_0x1c5141 == null) return !0x1;;
                for (_0x4c1730 = 0x0; _0x4c1730 < _0x1c5141['length']; _0x4c1730++) {
                    var _0x2b41df = _0x1c5141[_0x4c1730];
                    if (_0x2b41df['id'] == _0x489e51 && _0x2b41df[_0x395751(0x2a1)] === _0x44a4f1) return !0x0;
                };
                return !0x1;
            }, _0x154417[_0x5d8533(0x869)]['nk'] = function() {
                return this['vl'];
            }, _0x154417[_0x5d8533(0x869)]['gm'] = function() {
                return this['wl'];
            }, _0x154417[_0x5d8533(0x869)]['hm'] = function(_0xc4b03f) {
                var _0x184a46 = this,
                    _0x13a653 = this['Kl'](),
                    _0x4341fd = this['Ql'](),
                    _0x3969d9 = this['Rl']();
                this['im'](function() {
                    _0xc4b03f != null && _0xc4b03f();
                }, function(_0xb0820c) {
                    _0x184a46['xl'] = _0xb0820c['user_data'], _0x184a46['jm']();
                    var _0x504578 = _0x184a46['Kl'](),
                        _0x1c791e = _0x184a46['Ql'](),
                        _0x4350fb = _0x184a46['Rl']();
                    if (_0x13a653 === _0x504578) {
                        _0x4350fb > 0x1 && _0x4350fb !== _0x3969d9 && ooo['Xg']['Yk']['km'](new _0x158a86['lm'](_0x4350fb));
                        var _0x16f51b = _0x1c791e - _0x4341fd;
                        _0x16f51b >= 0x14 && ooo['Xg']['Yk']['km'](new _0x158a86['mm'](_0x16f51b));
                    };
                    _0xc4b03f != null && _0xc4b03f();
                });
            }, _0x154417[_0x5d8533(0x869)]['im'] = function(_0x53888e, _0x481153) {
                var _0x3ca2ae = _0x2171ac['H']['J'] + '/pub/wuid/' + this['wl'] + '/getUserData';
                _0x239c2a['Aa'](_0x3ca2ae, _0x53888e, function(_0x39e652) {
                    var _0x5e15c1 = _0x563d;
                    _0x39e652[_0x5e15c1(0x51b)] !== 0x4b0 ? _0x53888e() : _0x481153(_0x39e652);
                });
            }, _0x154417[_0x5d8533(0x869)]['nm'] = function(_0x411131, _0x4121f4, _0x4239cd, _0x2e3109) {
                var _0x45aa8f = _0x5d8533,
                    _0x467cd8 = _0x2171ac['H']['J'] + _0x45aa8f(0x582) + this['wl'] + '/buyProperty?id=' + _0x411131 + '&type=' + _0x4121f4;
                _0x239c2a['Aa'](_0x467cd8, function() {
                    _0x4239cd();
                }, function(_0x113284) {
                    _0x113284['code'] !== 0x4b0 ? _0x4239cd() : _0x2e3109();
                });
            }, _0x154417[_0x5d8533(0x869)]['om'] = function(_0x3de722, _0x2654b3) {
                var _0x388125 = _0x5d8533,
                    _0x168d71 = _0x2171ac['H']['J'] + _0x388125(0x582) + this['wl'] + _0x388125(0x41e);
                _0x239c2a['Aa'](_0x168d71, _0x3de722, function(_0x2435c6) {
                    var _0x162e87 = _0x388125;
                    _0x2435c6[_0x162e87(0x51b)] !== 0x4b0 ? _0x3de722() : _0x2654b3();
                });
            }, _0x154417[_0x5d8533(0x869)]['pm'] = function(_0x1afde6) {
                var _0x2c7c24 = this;
                this['vl'] && this['qm'](), _0x154417['yl']['Dl'](function() {
                    _0x1afde6();
                }, function(_0x582d9c) {
                    _0x2c7c24['rm'](_0x4bab46, _0x582d9c['Al'], _0x1afde6);
                });
            }, _0x154417[_0x5d8533(0x869)]['sm'] = function(_0x1f45c0) {
                var _0x2a41d4 = this;
                this['vl'] && this['qm'](), _0x154417['Gl']['Dl'](function() {
                    _0x1f45c0();
                }, function(_0x3370a5) {
                    _0x2a41d4['rm'](_0x1403f3, _0x3370a5['Al'], _0x1f45c0);
                });
            }, _0x154417[_0x5d8533(0x869)]['rm'] = function(_0x20da32, _0x13c021, _0x18cf04) {
                var _0x5ae873 = _0x5d8533,
                    _0x39e60b = this,
                    _0x10be94 = _0x20da32 + '_' + _0x13c021,
                    _0xcc812 = _0x2171ac['H']['J'] + _0x5ae873(0x582) + _0x10be94 + _0x5ae873(0x574);
                _0x239c2a['Aa'](_0xcc812, function() {
                    _0x39e60b['tm']();
                }, function(_0x2c32f9) {
                    var _0x3aab03 = _0x5ae873;
                    _0x2c32f9['code'] !== 0x4b0 ? _0x39e60b['tm']() : (_0x39e60b['um'](_0x20da32, _0x13c021, _0x2c32f9[_0x3aab03(0x4a6)]), _0x18cf04 != null && _0x18cf04());
                });
            }, _0x154417[_0x5d8533(0x869)]['qm'] = function() {
                try {
                    this['vm'](), this['wm']();
                } catch (_0x131de) {};
                this['xm']();
            }, _0x154417['prototype']['ym'] = function() {
                this['vl'] && this['om'](function() {}, function() {});
            }, _0x154417[_0x5d8533(0x869)]['tm'] = function() {
                ooo['Xg']['gl'](ooo['Xg']['_k']);
            }, _0x154417['prototype']['um'] = function(_0x5f4786, _0x568d1d, _0x57de42) {
                var _0x724f17 = this;
                _0x5c5a66(_0x57de42, function(_0x122e35) {
                    var _0x9d75e0 = _0x563d,
                        _0x340244 = _0x724f17['vl'] ? _0x724f17['xl'][_0x9d75e0(0x3b9)] : _0x122e35;
                    _0x724f17['vl'] = !0x0, _0x724f17['wl'] = _0x5f4786 + '_' + _0x568d1d, _0x724f17['xl'] = _0x122e35, _0x158a86['Cg']['Ng'](_0x158a86['Cg']['Hg'], _0x5f4786, 0x3c), _0x340244 !== _0x724f17['xl'][_0x9d75e0(0x3b9)] ? _0x724f17['zm']() : _0x724f17['jm'](), ooo['Xp'](!0x0, !0x0), _0x1a98d3[_0x9d75e0(0x5ff)] = !0x1;
                });
            }, _0x154417['prototype']['xm'] = function() {
                var _0x4c6c40 = _0x5d8533,
                    _0x35d2a5 = this['vl'] ? this['xl']['userId'] : _0x4c1730;
                this['vl'] = !0x1, this['wl'] = _0x25fd24, this['xl'] = {}, _0x158a86['Cg']['Ng'](_0x158a86['Cg']['Hg'], '', 0x3c), _0x35d2a5 !== this['xl'][_0x4c6c40(0x3b9)] ? this['zm']() : this['jm']();
            }, _0x154417[_0x5d8533(0x869)]['Jl'] = function() {
                var _0x9c9fca = _0x158a86['Cg']['Og'](_0x158a86['Cg']['Hg']),
                    _0xf66205 = this;
                if (_0x4bab46 === _0x9c9fca) {
                    var _0xfc3f6e = 0x1;
                    (function _0x544f89() {
                        if (!_0x154417['yl']['Bl']() && _0xfc3f6e++ < 0x5) {
                            _0x239c2a['Y'](_0x544f89, 0x3e8);
                            return;
                        };
                        _0x154417['yl']['El'](function() {}, function(_0x1c5593) {
                            _0xf66205['rm'](_0x4bab46, _0x1c5593['Al']);
                        });
                    }());
                } else {
                    if (_0x1403f3 === _0x9c9fca) {
                        var _0x1b6548 = 0x1;
                        (function _0x22c5db() {
                            if (!_0x154417['Gl']['Bl']() && _0x1b6548++ < 0x5) {
                                _0x239c2a['Y'](_0x22c5db, 0x3e8);
                                return;
                            };
                            _0x154417['Gl']['El'](function() {}, function(_0x4b4c46) {
                                _0xf66205['rm'](_0x1403f3, _0x4b4c46['Al']);
                            });
                        }());
                    }
                }
            }, _0x154417[_0x5d8533(0x869)]['zm'] = function() {
                var _0x2f0ae1 = _0x5d8533;
                for (var _0x3063d1 = 0x0; _0x3063d1 < this['tl'][_0x2f0ae1(0x883)]; _0x3063d1++) {
                    this['tl'][_0x3063d1]();
                };
                this['jm']();
            }, _0x154417[_0x5d8533(0x869)]['jm'] = function() {
                var _0x2ce161 = _0x5d8533;
                for (var _0x5cd403 = 0x0; _0x5cd403 < this['ul'][_0x2ce161(0x883)]; _0x5cd403++) {
                    this['ul'][_0x5cd403]();
                }
            }, _0x154417[_0x5d8533(0x869)]['vm'] = function() {
                _0x154417['yl']['Fl']();
            }, _0x154417['prototype']['wm'] = function() {
                _0x154417['Gl']['Fl']();
            }, _0x154417;
        }()), _0x158a86['Sf'] = (function() {
            var _0x27cb90 = _0x2b6b48;

            function _0x205bf4(_0x42d2b3, _0x397ce0, _0x5c00c6) {
                var _0x328755 = _0x563d;
                this['Of'] = _0x5c00c6, this['Rd'] = !0x1, this['Yc'] = new _0x39b888['k']['l'](), this['Yc'][_0x328755(0x287)] = !0x1, this['Am'] = Array(_0x42d2b3);
                for (var _0x5ac97f = 0x0; _0x5ac97f < this['Am'][_0x328755(0x883)]; _0x5ac97f++) {
                    var _0x1b9394 = new _0x158a86['Bm'](new _0x39b888['j'](_0x397ce0 * 0x3));
                    _0x1b9394['Cm'](_0x397ce0), this['Am'][_0x5ac97f] = _0x1b9394, this['Yc'][_0x328755(0x371)](_0x1b9394['ag']());
                };
                this['Pf'] = 0x1, this['Qf'] = 0x1, this['qg']();
            }
            return _0x205bf4[_0x27cb90(0x869)]['ag'] = function() {
                return this['Yc'];
            }, _0x205bf4[_0x27cb90(0x869)]['rg'] = function(_0x397773) {
                this['Rd'] = _0x397773, this['Yc']['visible'] = _0x397773;
            }, _0x205bf4[_0x27cb90(0x869)]['qg'] = function() {
                var _0x1dc356 = _0x27cb90;
                this['Pf'] = this['Of'][_0x1dc356(0x1eb)](), this['Qf'] = this['Of'][_0x1dc356(0x2b6)]();
                var _0x311a1a = this['Qf'] / 0x1e;
                for (var _0x22c5ce = 0x0; _0x22c5ce < this['Am'][_0x1dc356(0x883)]; _0x22c5ce++) {
                    this['Am'][_0x22c5ce]['Dm'](_0x311a1a);
                }
            }, _0x205bf4[_0x27cb90(0x869)]['Bg'] = function() {
                var _0x4252c9 = _0x27cb90;
                if (this['Rd'])
                    for (var _0x43e152 = 0x0; _0x43e152 < this['Am'][_0x4252c9(0x883)]; _0x43e152++) {
                        this['Am'][_0x43e152]['Bg'](this['Vf']);
                    }
            }, _0x205bf4['prototype']['Em'] = function() {
                return this['Pf'];
            }, _0x205bf4[_0x27cb90(0x869)]['Fm'] = function() {
                return this['Qf'];
            }, _0x205bf4[_0x27cb90(0x869)]['xg'] = function(_0x1833a7, _0x4d6648) {
                this['Am'][_0x1833a7]['Gm'](_0x4d6648);
            }, _0x205bf4[_0x27cb90(0x869)]['yg'] = function(_0xa26d9, _0x557536) {
                this['Am'][_0xa26d9]['Hm'](_0x557536);
            }, _0x205bf4['prototype']['zg'] = function(_0x5950ad, _0x2c9595, _0x4f4498) {
                var _0x27fee2 = this['Am'][_0x5950ad];
                for (var _0x12bfa8 = _0x27fee2['Im'](), _0x4e96ff = _0x27fee2['Jm'], _0x1a7554 = 0x0; _0x1a7554 < _0x12bfa8; _0x1a7554++) {
                    _0x4e96ff[_0x1a7554 * 0x3] = _0x2c9595, _0x4e96ff[_0x1a7554 * 0x3 + 0x1] = _0x4f4498, _0x4e96ff[_0x1a7554 * 0x3 + 0x2] = 0x0;
                }
            }, _0x205bf4[_0x27cb90(0x869)]['Ag'] = function(_0x4a65d4, _0x179f6e, _0x146ec4) {
                var _0x464aba, _0x5be0b8, _0x525854 = this['Am'][_0x4a65d4],
                    _0x13bf3a = _0x525854['Im'](),
                    _0x5c98d3 = _0x525854['Jm'],
                    _0x37d826 = _0x525854['Km'](),
                    _0x444b22 = _0x5c98d3[0x0],
                    _0x37a96c = _0x5c98d3[0x1],
                    _0x2fd7bb = _0x179f6e - _0x444b22,
                    _0x1b62ce = _0x146ec4 - _0x37a96c,
                    _0x24d0a2 = _0x239c2a['la'](_0x2fd7bb, _0x1b62ce);
                if (_0x24d0a2 > 0x0) {
                    _0x5c98d3[0x0] = _0x179f6e, _0x5c98d3[0x1] = _0x146ec4, _0x5c98d3[0x2] = _0x239c2a['ta'](_0x1b62ce, _0x2fd7bb);
                    var _0x533e72 = _0x37d826 * 0.25 / (_0x37d826 * 0.25 + _0x24d0a2),
                        _0x40ae21 = 0x1 - _0x533e72 * 0x2;
                    for (var _0x1f15f0 = 0x1, _0x52e84f = _0x13bf3a; _0x1f15f0 < _0x52e84f; _0x1f15f0++) {
                        _0x464aba = _0x5c98d3[_0x1f15f0 * 0x3], _0x5c98d3[_0x1f15f0 * 0x3] = _0x5c98d3[_0x1f15f0 * 0x3 - 0x3] * _0x40ae21 + (_0x464aba + _0x444b22) * _0x533e72, _0x444b22 = _0x464aba, _0x5be0b8 = _0x5c98d3[_0x1f15f0 * 0x3 + 0x1], _0x5c98d3[_0x1f15f0 * 0x3 + 0x1] = _0x5c98d3[_0x1f15f0 * 0x3 - 0x2] * _0x40ae21 + (_0x5be0b8 + _0x37a96c) * _0x533e72, _0x37a96c = _0x5be0b8, _0x5c98d3[_0x1f15f0 * 0x3 + 0x2] = _0x239c2a['ta'](_0x5c98d3[_0x1f15f0 * 0x3 - 0x2] - _0x5c98d3[_0x1f15f0 * 0x3 + 0x1], _0x5c98d3[_0x1f15f0 * 0x3 - 0x3] - _0x5c98d3[_0x1f15f0 * 0x3]);
                    }
                }
            }, _0x205bf4;
        }()), _0x158a86['Lm'] = (function() {
            var _0x5cdf7d = _0x2b6b48;

            function _0x57f050(_0x7cad1d) {
                var _0x69e6a2 = _0x563d,
                    _0x170a7b, _0x5c0a8f = this;
                this['Of'] = _0x7cad1d, this['nc'] = _0x7cad1d[_0x69e6a2(0x5d3)]()[0x0], this['Vf'] = ((_0x170a7b = {})[_0x69e6a2(0x2f8)] = _0x5c0a8f['nc'], _0x170a7b['transparent'] = !0x0, new _0x39b888['k']['o'](_0x170a7b)), this['Rd'] = !0x1, this['Mm'] = new _0x158a86['Bm'](new _0x39b888['j'](_0x5a3a2c * 0x3)), this['Pf'] = 0x1, this['Qf'] = 0x1, this['Nm'] = _0x2cae70['Om'], this['Pm'] = _0x2cae70['Om'], this['Qm'] = _0x2cae70['Om'], this['Rm'] = _0x2cae70['Om'], this['Sm'] = _0x2cae70['Om'], this['qg'](), ooo['ud']['Jc'](function() {
                    _0x5c0a8f['Mm']['Tm']();
                });
            }
            var _0x5a3a2c = _0x239c2a['ha'](0x64, _0x158a86['Xc']['fd']),
                _0x2cae70 = {
                    'Om': _0x5cdf7d(0x418),
                    'Um': '0lt1',
                    'Vm': _0x5cdf7d(0x770)
                };
            return _0x57f050[_0x5cdf7d(0x869)]['rg'] = function(_0x54eed8) {
                this['Rd'] = _0x54eed8;
            }, _0x57f050[_0x5cdf7d(0x869)]['qg'] = function() {
                var _0x4c16e5 = _0x5cdf7d,
                    _0x2214c4 = _0x239c2a['e']();
                this['Pf'] = this['Of'][_0x4c16e5(0x1eb)](), this['Qf'] = this['Of'][_0x4c16e5(0x2b6)](), this['Vf'][_0x4c16e5(0x25e)](this['Pf'], this['Qf']), this['Vf'][_0x4c16e5(0x6dd)] = _0x2214c4, this['nc'][_0x4c16e5(0x1eb)] = _0x2214c4 * this['Pf'], this['nc'][_0x4c16e5(0x2b6)] = _0x2214c4 * this['Qf'];
                var _0x8dddac = this['Qf'] / 0x4;
                this['Mm']['Dm'](_0x8dddac);
                var _0x3de306 = _0x239c2a['fa'](_0x239c2a['_'](this['Pf'] / _0x8dddac) * 0x2 - 0x5, 0x1, _0x5a3a2c);
                this['Mm']['Cm'](_0x3de306);
            }, _0x57f050[_0x5cdf7d(0x869)]['ug'] = function() {
                if (this['Rd']) {
                    var _0x492723 = _0x239c2a['Ca']() / 0xc8,
                        _0x2fcec2 = _0x239c2a['oa'](_0x492723);
                    this['Mm']['Wm'](this['Xm'](this['Nm'], _0x2fcec2), this['Ym'](this['Nm'], _0x2fcec2)), this['Mm']['Zm'](this['$m'](this['Pm'], _0x2fcec2), this['$m'](this['Qm'], _0x2fcec2), this['$m'](this['Rm'], _0x2fcec2), this['$m'](this['Sm'], _0x2fcec2));
                    var _0x286c69 = this['Mm']['Km']();
                    for (var _0x4ac84f = this['Mm']['Im'](), _0x99cddb = this['Mm']['Jm'], _0x6c9f18 = this['Pf'] - (this['Pf'] - _0x286c69 * 0.5 * (_0x4ac84f - 0x1)) * 0.5, _0x3fc6e5 = this['Qf'] * 0.5, _0x174d93 = 0x0, _0x42d6ba = 0x0, _0x234314 = -0x1; _0x234314 < _0x4ac84f; _0x234314++) {
                        var _0x4f0206 = _0x234314,
                            _0x54f92b = _0x239c2a['pa'](_0x4f0206 * 0x1 / 0xc * _0x2171ac['T'] - _0x492723) * (0x1 - _0x239c2a['ra'](0x10, _0x4f0206 * -0x1 / 0xc));
                        _0x234314 >= 0x0 && (_0x99cddb[_0x234314 * 0x3] = _0x6c9f18 - _0x286c69 * 0.5 * _0x4f0206, _0x99cddb[_0x234314 * 0x3 + 0x1] = _0x3fc6e5 + _0x286c69 * 0.5 * _0x54f92b, _0x99cddb[_0x234314 * 0x3 + 0x2] = _0x239c2a['ta'](_0x42d6ba - _0x54f92b, _0x4f0206 - _0x174d93)), _0x174d93 = _0x4f0206, _0x42d6ba = _0x54f92b;
                    };
                    this['Mm']['Bg'](), this['Mm']['_m'](this['Vf']);
                }
            }, _0x57f050[_0x5cdf7d(0x869)]['Gm'] = function(_0x4d1b41) {
                this['Mm']['Gm'](_0x4d1b41);
            }, _0x57f050[_0x5cdf7d(0x869)]['an'] = function(_0x1244e5) {
                this['Nm'] = _0x1244e5 ? _0x2cae70['Vm'] : _0x2cae70['Um'], this['Pm'] = _0x2cae70['Om'], this['Qm'] = _0x2cae70['Om'], this['Rm'] = _0x2cae70['Om'], this['Sm'] = _0x2cae70['Om'];
            }, _0x57f050[_0x5cdf7d(0x869)]['bn'] = function(_0x500bdf) {
                this['Nm'] = _0x2cae70['Om'], this['Pm'] = _0x500bdf ? _0x2cae70['Vm'] : _0x2cae70['Um'], this['Qm'] = _0x2cae70['Om'], this['Rm'] = _0x2cae70['Om'], this['Sm'] = _0x2cae70['Om'];
            }, _0x57f050[_0x5cdf7d(0x869)]['cn'] = function(_0x1a0296) {
                this['Nm'] = _0x2cae70['Om'], this['Pm'] = _0x2cae70['Om'], this['Qm'] = _0x1a0296 ? _0x2cae70['Vm'] : _0x2cae70['Um'], this['Rm'] = _0x2cae70['Om'], this['Sm'] = _0x2cae70['Om'];
            }, _0x57f050[_0x5cdf7d(0x869)]['dn'] = function(_0x8d03a7) {
                this['Nm'] = _0x2cae70['Om'], this['Pm'] = _0x2cae70['Om'], this['Qm'] = _0x2cae70['Om'], this['Rm'] = _0x8d03a7 ? _0x2cae70['Vm'] : _0x2cae70['Um'], this['Sm'] = _0x2cae70['Om'];
            }, _0x57f050[_0x5cdf7d(0x869)]['en'] = function(_0x3cc03c) {
                this['Nm'] = _0x2cae70['Om'], this['Pm'] = _0x2cae70['Om'], this['Qm'] = _0x2cae70['Om'], this['Rm'] = _0x2cae70['Om'], this['Sm'] = _0x3cc03c ? _0x2cae70['Vm'] : _0x2cae70['Um'];
            }, _0x57f050[_0x5cdf7d(0x869)]['Xm'] = function(_0x75c93a, _0x186a61) {
                switch (_0x75c93a) {
                    case _0x2cae70['Um']:
                        return 0.9 + _0x186a61 * 0.1;
                    case _0x2cae70['Vm']:
                        return 0.4 + _0x186a61 * 0.3;
                };
                return 0x1;
            }, _0x57f050[_0x5cdf7d(0x869)]['Ym'] = function(_0x3c7313, _0x33c97b) {
                switch (_0x3c7313) {
                    case _0x2cae70['Um']:
                        return 0.6 + _0x33c97b * 0.5;
                    case _0x2cae70['Vm']:
                        return 0.3 + _0x33c97b * 0.3;
                };
                return 0x1;
            }, _0x57f050[_0x5cdf7d(0x869)]['$m'] = function(_0x2cc2df, _0x1c21f0) {
                switch (_0x2cc2df) {
                    case _0x2cae70['Um']:
                        return 0.9 + _0x1c21f0 * 0.1;
                    case _0x2cae70['Vm']:
                        return 0.6 + _0x1c21f0 * 0.4;
                };
                return 0x1;
            }, _0x57f050;
        }()), _0x158a86['uk'] = (function() {
            var _0x218fd3 = _0x2b6b48;

            function _0x173423(_0x5b4d79, _0x4b50e4, _0x4c5783, _0x108297, _0x3325c4) {
                this['gn'] = _0x5b4d79, this['hn'] = _0x4b50e4, this['in'] = _0x4c5783, this['jn'] = _0x108297, this['kn'] = _0x3325c4;
            }
            return _0x173423['tk'] = function(_0x4ba524) {
                var _0x5436c4 = _0x563d;
                return new _0x173423(_0x4ba524[_0x5436c4(0x66c)], _0x4ba524[_0x5436c4(0x41a)], _0x4ba524[_0x5436c4(0x825)], _0x4ba524[_0x5436c4(0x337)], _0x4ba524[_0x5436c4(0x1ff)]);
            }, _0x173423['vk'] = function(_0x33e1ed) {
                var _0x15e7e1 = _0x563d;
                return new _0x173423(_0x33e1ed[_0x15e7e1(0x66c)], _0x33e1ed['guest'], _0x33e1ed['nonbuyable'], _0x33e1ed[_0x15e7e1(0x337)], _0x33e1ed[_0x15e7e1(0x1ff)]);
            }, _0x173423[_0x218fd3(0x869)]['pk'] = function() {
                return this['gn'];
            }, _0x173423[_0x218fd3(0x869)]['sk'] = function() {
                return this['hn'];
            }, _0x173423[_0x218fd3(0x869)]['qk'] = function() {
                return this['in'];
            }, _0x173423[_0x218fd3(0x869)]['ln'] = function() {
                return this['jn'];
            }, _0x173423[_0x218fd3(0x869)]['mn'] = function() {
                return this['kn'];
            }, _0x173423;
        }()), _0x158a86['Zf'] = (function() {
            var _0xfd2c26 = _0x2b6b48;

            function _0x2c1f77(_0x56d534) {
                var _0x2ab56a = _0x563d;
                this['nn'] = {};

                function _0x2dfca0() {
                    var _0x1d5855 = _0x563d,
                        _0x786c64 = [_0x1d5855(0x62c), _0x1d5855(0x58f), _0x1d5855(0x7e9)],
                        _0x25c035 = localStorage[_0x1d5855(0x1b3)]('lastBackground'),
                        _0xe0bdd6 = _0x786c64[_0x1d5855(0x596)](_0x5b2cbd => _0x5b2cbd !== _0x25c035),
                        _0x16ee03 = _0xe0bdd6[Math[_0x1d5855(0x294)](Math[_0x1d5855(0x647)]() * _0xe0bdd6[_0x1d5855(0x883)])];
                    return localStorage[_0x1d5855(0x5c0)]('lastBackground', _0x16ee03), _0x16ee03;
                }
                var _0x41663d = _0x39b888['k']['m'][_0x2ab56a(0x1c2)](_0x2dfca0());
                this['nn'][_0x27e46b] = _0x41663d;
                var _0x4c4c43 = _0x39b888['k']['q']['from'](_0x10b53c, _0x28be71, this['nn']);
                this['_f'] = new _0x39b888['k']['v'](_0x546f77, _0x4c4c43), this['_f'][_0x2ab56a(0x5cf)] = _0x39b888['k']['w']['B'], this['_f'][_0x2ab56a(0x44e)] = 0.6;
            }
            var _0x57648e = 'a1_' + _0x239c2a['xa'](),
                _0x2ac515 = _0xfd2c26(0x2dd) + _0x239c2a['xa'](),
                _0x13b752 = _0xfd2c26(0x3f4),
                _0xc59d8f = 'projectionMatrix',
                _0x27e46b = 'u3_' + _0x239c2a['xa'](),
                _0x51ead3 = _0xfd2c26(0x44b) + _0x239c2a['xa'](),
                _0xed0748 = _0xfd2c26(0x4e1) + _0x239c2a['xa'](),
                _0x546f77 = new _0x39b888['k']['u']()['addAttribute'](_0x57648e, [0x0, 0x0, 0x1, 0x0, 0x1, 0x1, 0x0, 0x0, 0x1, 0x1, 0x0, 0x1], 0x2)[_0xfd2c26(0x586)](_0x2ac515, [0x0, 0x0, 0x1, 0x0, 0x1, 0x1, 0x0, 0x0, 0x1, 0x1, 0x0, 0x1], 0x2),
                _0x10b53c = 'precision\x20mediump\x20float;\x20attribute\x20vec2\x20' + _0x57648e + _0xfd2c26(0x479) + _0x2ac515 + ';\x20uniform\x20mat3\x20' + _0x13b752 + ';\x20uniform\x20mat3\x20' + _0xc59d8f + _0xfd2c26(0x372) + _0x51ead3 + ';\x20varying\x20vec2\x20' + _0xed0748 + _0xfd2c26(0x271) + _0xed0748 + _0xfd2c26(0x457) + _0x2ac515 + ';\x20gl_Position\x20=\x20vec4((' + _0xc59d8f + _0xfd2c26(0x4a8) + _0x13b752 + '\x20*\x20vec3(' + _0x57648e + _0xfd2c26(0x365) + _0x51ead3 + _0xfd2c26(0x64b) + _0x2ac515 + ';\x20vec2\x20mul\x20=\x200.5\x20*\x20vec2(ScreenParams.x\x20*\x20(ScreenParams.w\x20-\x201.0)\x20+\x201.0,\x20ScreenParams.y\x20*\x20(ScreenParams.z\x20-\x201.0)\x20+\x201.0);\x20vec2\x20v2\x20=\x20uv\x20*\x20vec2(1.0,\x201.0);\x20v2\x20=\x20v2\x20*\x20vec2(1.0,\x201.0);\x20' + _0xed0748 + '\x20=\x20v2;\x20}',
                _0x28be71 = 'precision\x20highp\x20float;\x20varying\x20vec2\x20' + _0xed0748 + _0xfd2c26(0x40e) + _0x27e46b + _0xfd2c26(0x26b) + _0x27e46b + ',\x20' + _0xed0748 + _0xfd2c26(0x885);
            return _0x2c1f77['prototype']['tg'] = function(_0x3fe561, _0x299a73) {
                this['_f']['scale']['x'] = _0x3fe561, this['_f']['scale']['y'] = _0x299a73, this['nn'][_0x51ead3] = [_0x3fe561, _0x299a73, 0x1 / _0x3fe561 + 0x1, 0x1 / _0x299a73 + 0x1];
            }, _0x2c1f77;
        }()), _0x158a86['th'] = (function() {
            var _0x4cc95c = _0x2b6b48;

            function _0x4e7e82() {
                this['nn'] = {}, this['nn'][_0x5cbff3] = [0x1, 0.5, 0.25, 0.5], this['nn'][_0x23a95b] = _0x39b888['k']['n']['WHITE'], this['nn'][_0xca5da7] = [0x0, 0x0], this['nn'][_0x397703] = [0x0, 0x0];
                var _0x345fd7 = _0x39b888['k']['q']['from'](_0x43aa3a, _0x47e2e8, this['nn']);
                this['_f'] = new _0x39b888['k']['v'](_0x126d88, _0x345fd7);
            }
            var _0x3065b8 = _0x4cc95c(0x421) + _0x239c2a['xa'](),
                _0x7aec45 = _0x4cc95c(0x2dd) + _0x239c2a['xa'](),
                _0x3f604d = _0x4cc95c(0x3f4),
                _0x2522ed = _0x4cc95c(0x241),
                _0x5cbff3 = _0x4cc95c(0x849) + _0x239c2a['xa'](),
                _0x23a95b = 'u4_' + _0x239c2a['xa'](),
                _0xca5da7 = _0x4cc95c(0x1f9) + _0x239c2a['xa'](),
                _0x397703 = 'u6_' + _0x239c2a['xa'](),
                _0x400815 = _0x4cc95c(0x4e1) + _0x239c2a['xa'](),
                _0x126d88 = new _0x39b888['k']['u']()[_0x4cc95c(0x586)](_0x3065b8, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2)[_0x4cc95c(0x586)](_0x7aec45, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2),
                _0x43aa3a = _0x4cc95c(0x7c1) + _0x3065b8 + _0x4cc95c(0x479) + _0x7aec45 + _0x4cc95c(0x815) + _0x3f604d + _0x4cc95c(0x815) + _0x2522ed + _0x4cc95c(0x52a) + _0x400815 + _0x4cc95c(0x3b1) + _0x400815 + '=' + _0x7aec45 + _0x4cc95c(0x229) + _0x2522ed + '*' + _0x3f604d + _0x4cc95c(0x579) + _0x3065b8 + _0x4cc95c(0x58a),
                _0x47e2e8 = _0x4cc95c(0x5d9) + _0x400815 + ';\x20uniform\x20vec4\x20' + _0x5cbff3 + _0x4cc95c(0x40e) + _0x23a95b + _0x4cc95c(0x552) + _0xca5da7 + _0x4cc95c(0x552) + _0x397703 + _0x4cc95c(0x1f8) + _0x23a95b + ',\x20' + _0x400815 + '*' + _0xca5da7 + '+' + _0x397703 + _0x4cc95c(0x733) + _0x5cbff3 + ';\x20gl_FragColor=color*0.3+colorMix.a*vec4(colorMix.rgb,\x200.0);\x20}';
            return _0x4e7e82[_0x4cc95c(0x869)]['nd'] = function(_0x50e8a9, _0x805a3a, _0x106256, _0x3c9611) {
                var _0x2f4145 = this['nn'][_0x5cbff3];
                _0x2f4145[0x0] = _0x50e8a9, _0x2f4145[0x1] = _0x805a3a, _0x2f4145[0x2] = _0x106256, _0x2f4145[0x3] = _0x3c9611;
            }, _0x4e7e82[_0x4cc95c(0x869)]['Hh'] = function(_0x54396a) {
                this['nn'][_0x23a95b] = _0x54396a;
            }, _0x4e7e82['prototype']['Bg'] = function(_0x392860, _0x5e85a7, _0x35e95d, _0x23631d) {
                var _0x4b341e = _0x4cc95c;
                this['_f']['position']['x'] = _0x392860, this['_f'][_0x4b341e(0x5d6)]['y'] = _0x5e85a7, this['_f'][_0x4b341e(0x353)]['x'] = _0x35e95d, this['_f'][_0x4b341e(0x353)]['y'] = _0x23631d;
                var _0x5244dd = this['nn'][_0xca5da7];
                _0x5244dd[0x0] = _0x35e95d * 0.2520615384615385, _0x5244dd[0x1] = _0x23631d * 0.4357063736263738;
                var _0x153530 = this['nn'][_0x397703];
                _0x153530[0x0] = _0x392860 * 0.2520615384615385, _0x153530[0x1] = _0x5e85a7 * 0.4357063736263738;
            }, _0x4e7e82;
        }()), _0x158a86['bd'] = (function() {
            var _0x79aba5 = _0x2b6b48;

            function _0x1f2249() {
                this['gd'] = new _0x39b888['k']['s'](), this['pn'] = 0x0, this['qn'] = 0x0;
            }
            return _0x1f2249[_0x79aba5(0x869)]['kd'] = function(_0x3fa57b) {
                var _0x5214d0 = _0x79aba5;
                this['gd'][_0x5214d0(0x272)] = _0x3fa57b['nb'](), this['gd'][_0x5214d0(0x5b2)]['set'](_0x3fa57b['hb'], _0x3fa57b['ib']), this['pn'] = _0x3fa57b['jb'], this['qn'] = _0x3fa57b['kb'];
            }, _0x1f2249[_0x79aba5(0x869)]['nd'] = function(_0x2e2b1f) {
                var _0x195ee3 = _0x79aba5;
                this['gd'][_0x195ee3(0x78b)] = parseInt(_0x2e2b1f[_0x195ee3(0x61a)](0x1), 0x10);
            }, _0x1f2249['prototype']['Bd'] = function(_0x2c92a4) {
                var _0x275fe1 = _0x79aba5;
                this['gd'][_0x275fe1(0x1eb)] = _0x2c92a4 * this['pn'], this['gd']['height'] = _0x2c92a4 * this['qn'];
            }, _0x1f2249[_0x79aba5(0x869)]['Vd'] = function(_0x56bb86) {
                var _0x50d9d2 = _0x79aba5;
                this['gd'][_0x50d9d2(0x364)] = _0x56bb86;
            }, _0x1f2249[_0x79aba5(0x869)]['Ud'] = function(_0x17b483, _0x60258d) {
                var _0x57ab15 = _0x79aba5;
                this['gd'][_0x57ab15(0x5d6)][_0x57ab15(0x448)](_0x17b483, _0x60258d);
            }, _0x1f2249['prototype']['Td'] = function(_0x4f4706) {
                this['gd']['visible'] = _0x4f4706;
            }, _0x1f2249['prototype']['Qd'] = function() {
                var _0x101503 = _0x79aba5;
                return this['gd'][_0x101503(0x287)];
            }, _0x1f2249[_0x79aba5(0x869)]['Rj'] = function(_0x598b65) {
                var _0x33c027 = _0x79aba5;
                this['gd'][_0x33c027(0x44e)] = _0x598b65;
            }, _0x1f2249['prototype']['zd'] = function() {
                return this['gd'];
            }, _0x1f2249[_0x79aba5(0x869)]['G'] = function() {
                _0x39b888['k']['F']['G'](this['gd']);
            }, _0x1f2249;
        }()), _0x158a86['Ui'] = (function() {
            var _0x3d994d = _0x2b6b48;

            function _0x12e869(_0x6c6026) {
                this['Qh'] = _0x6c6026, this['ki'] = new _0x158a86['Ui']['Ti'](), this['cj'] = !0x1, this['bj'] = !0x0, this['Fd'] = !0x1, this['Id'] = 0x0, this['rn'] = 0x0, this['Lj'] = 0x1, this['Ld'] = 0x0, this['hi'] = 0x0, this['Nd'] = {}, this['Kd'] = 0x0, this['sn'] = new _0x39b888['j'](_0x1843ce * 0x2), this['tn'] = new _0x39b888['j'](_0x1843ce * 0x2), this['Jd'] = new _0x39b888['j'](_0x1843ce * 0x2), this['un'] = null, this['vn'] = null, this['wn'] = null, this['xn']();
            }
            var _0x1843ce = 0xc8;
            return _0x12e869['prototype']['$i'] = function() {
                this['vn'] != null && _0x39b888['k']['F']['G'](this['vn']['Yc']), this['wn'] != null && _0x39b888['k']['F']['G'](this['wn']);
            }, _0x12e869[_0x3d994d(0x869)]['xn'] = function() {
                this['fj'](0.25), this['ki']['Xa'] = '', this['bj'] = !0x0, this['Nd'] = {}, this['Td'](!0x1);
            }, _0x12e869[_0x3d994d(0x869)]['Zi'] = function(_0x167899) {
                this['ki'] = _0x167899, this['yn'](this['cj']);
            }, _0x12e869[_0x3d994d(0x869)]['Td'] = function(_0x21be33) {
                var _0x2cdfa3 = this['cj'];
                this['cj'] = _0x21be33, this['yn'](_0x2cdfa3);
            }, _0x12e869[_0x3d994d(0x869)]['fj'] = function(_0xd99a4c) {
                this['hi'] = _0xd99a4c * 0x32;
                var _0x105aa4 = _0xd99a4c;
                _0xd99a4c > this['Qh']['hh'] && (_0x105aa4 = _0x239c2a['sa']((_0xd99a4c - this['Qh']['hh']) / this['Qh']['ih']) * this['Qh']['ih'] + this['Qh']['hh']);
                var _0x11b930 = _0x239c2a['qa'](_0x239c2a['ra'](_0x105aa4 * 0x5, 0.707106781186548) * 0x4 + 0x19),
                    _0x437508 = _0x239c2a['ha'](_0x1843ce, _0x239c2a['ia'](0x3, (_0x11b930 - 0x5) * 0x5 + 0x1)),
                    _0x4df11d = this['Kd'];
                this['Id'] = (0x5 + _0x11b930 * 0.9) * 0.025, this['Kd'] = _0x239c2a['_'](_0x437508), this['rn'] = _0x437508 - this['Kd'];
                if (_0x4df11d > 0x0 && _0x4df11d < this['Kd']) {
                    var _0x4bce57 = this['sn'][_0x4df11d * 0x2 - 0x2],
                        _0x1f6ded = this['sn'][_0x4df11d * 0x2 - 0x1],
                        _0x333fc4 = this['tn'][_0x4df11d * 0x2 - 0x2],
                        _0x178d47 = this['tn'][_0x4df11d * 0x2 - 0x1],
                        _0x31befd = this['Jd'][_0x4df11d * 0x2 - 0x2],
                        _0xff3dbc = this['Jd'][_0x4df11d * 0x2 - 0x1];
                    for (var _0xe88397 = _0x4df11d; _0xe88397 < this['Kd']; _0xe88397++) {
                        this['sn'][_0xe88397 * 0x2] = _0x4bce57, this['sn'][_0xe88397 * 0x2 + 0x1] = _0x1f6ded, this['tn'][_0xe88397 * 0x2] = _0x333fc4, this['tn'][_0xe88397 * 0x2 + 0x1] = _0x178d47, this['Jd'][_0xe88397 * 0x2] = _0x31befd, this['Jd'][_0xe88397 * 0x2 + 0x1] = _0xff3dbc;
                    }
                }
            }, _0x12e869['prototype']['kj'] = function(_0x224d09, _0x53c630) {
                this['Kd'] = _0x53c630;
                for (var _0x4f2b6a = 0x0; _0x4f2b6a < this['Kd']; _0x4f2b6a++) {
                    this['sn'][_0x4f2b6a * 0x2] = this['tn'][_0x4f2b6a * 0x2] = this['Jd'][_0x4f2b6a * 0x2] = _0x224d09(), this['sn'][_0x4f2b6a * 0x2 + 0x1] = this['tn'][_0x4f2b6a * 0x2 + 0x1] = this['Jd'][_0x4f2b6a * 0x2 + 0x1] = _0x224d09();
                }
            }, _0x12e869[_0x3d994d(0x869)]['hj'] = function(_0x561c2b, _0x331e05, _0xc0c674) {
                this['Fd'] = _0xc0c674;
                for (var _0x35238d = 0x0; _0x35238d < this['Kd']; _0x35238d++) {
                    this['sn'][_0x35238d * 0x2] = this['tn'][_0x35238d * 0x2], this['sn'][_0x35238d * 0x2 + 0x1] = this['tn'][_0x35238d * 0x2 + 0x1];
                };
                var _0x370ce1 = _0x561c2b - this['tn'][0x0],
                    _0x42fa0f = _0x331e05 - this['tn'][0x1];
                this['zn'](_0x370ce1, _0x42fa0f, this['Kd'], this['tn']);
            }, _0x12e869['prototype']['zn'] = function(_0x4c2cc6, _0x4b4ebe, _0x22bcef, _0x2d9b5b) {
                var _0x50c9a2 = _0x239c2a['la'](_0x4c2cc6, _0x4b4ebe);
                if (!(_0x50c9a2 <= 0x0)) {
                    var _0x2c6cad, _0x33599a = _0x2d9b5b[0x0];
                    _0x2d9b5b[0x0] += _0x4c2cc6;
                    var _0x2aba60, _0x4e2ffe = _0x2d9b5b[0x1];
                    _0x2d9b5b[0x1] += _0x4b4ebe;
                    var _0x2975d7 = this['Id'] / (this['Id'] + _0x50c9a2),
                        _0x284d45 = 0x1 - _0x2975d7 * 0x2;
                    for (var _0x26e130 = 0x1, _0x39cf9e = _0x22bcef - 0x1; _0x26e130 < _0x39cf9e; _0x26e130++) {
                        _0x2c6cad = _0x2d9b5b[_0x26e130 * 0x2], _0x2d9b5b[_0x26e130 * 0x2] = _0x2d9b5b[_0x26e130 * 0x2 - 0x2] * _0x284d45 + (_0x2c6cad + _0x33599a) * _0x2975d7, _0x33599a = _0x2c6cad, _0x2aba60 = _0x2d9b5b[_0x26e130 * 0x2 + 0x1], _0x2d9b5b[_0x26e130 * 0x2 + 0x1] = _0x2d9b5b[_0x26e130 * 0x2 - 0x1] * _0x284d45 + (_0x2aba60 + _0x4e2ffe) * _0x2975d7, _0x4e2ffe = _0x2aba60;
                    };
                    _0x284d45 = 0x1 - (_0x2975d7 = this['rn'] * this['Id'] / (this['rn'] * this['Id'] + _0x50c9a2)) * 0x2, _0x2d9b5b[_0x22bcef * 0x2 - 0x2] = _0x2d9b5b[_0x22bcef * 0x2 - 0x4] * _0x284d45 + (_0x2d9b5b[_0x22bcef * 0x2 - 0x2] + _0x33599a) * _0x2975d7, _0x2d9b5b[_0x22bcef * 0x2 - 0x1] = _0x2d9b5b[_0x22bcef * 0x2 - 0x3] * _0x284d45 + (_0x2d9b5b[_0x22bcef * 0x2 - 0x1] + _0x4e2ffe) * _0x2975d7;
                }
            }, _0x12e869[_0x3d994d(0x869)]['Oh'] = function() {
                return {
                    '_a': this['Jd'][0x0],
                    'ab': this['Jd'][0x1]
                };
            }, _0x12e869[_0x3d994d(0x869)]['dj'] = function(_0x442e25, _0x1063b9) {
                var _0x18a59b = 0xf4240,
                    _0x40e281 = _0x442e25,
                    _0x4627d4 = _0x1063b9;
                for (var _0x4bfa68 = 0x0; _0x4bfa68 < this['Kd']; _0x4bfa68++) {
                    var _0x529a44 = this['Jd'][_0x4bfa68 * 0x2],
                        _0x26c27d = this['Jd'][_0x4bfa68 * 0x2 + 0x1],
                        _0x353212 = _0x239c2a['la'](_0x442e25 - _0x529a44, _0x1063b9 - _0x26c27d);
                    _0x353212 < _0x18a59b && (_0x18a59b = _0x353212, _0x40e281 = _0x529a44, _0x4627d4 = _0x26c27d);
                };
                return {
                    '_a': _0x40e281,
                    'ab': _0x4627d4,
                    'ej': _0x18a59b
                };
            }, _0x12e869['prototype']['_i'] = function(_0x40b89a) {
                this['un'] = _0x40b89a;
            }, _0x12e869[_0x3d994d(0x869)]['Pj'] = function(_0x4f9435, _0x4285f1) {
                var _0x4eb35f = _0x3d994d;
                this['Lj'] = _0x239c2a['ga'](this['Lj'], this['bj'] ? this['Fd'] ? 0.9 + _0x239c2a['pa'](_0x4f9435 / 0x190 * _0x2171ac['T']) * 0.1 : 0x1 : 0x0, _0x4285f1, 0x1 / 0x320), this['Ld'] = _0x239c2a['ga'](this['Ld'], this['bj'] ? this['Fd'] ? 0x1 : 0x0 : 0x1, _0x4285f1, 0.0025), this['vn'] != null && (this['vn']['Yc'][_0x4eb35f(0x44e)] = this['Lj']), this['wn'] != null && (this['wn'][_0x4eb35f(0x44e)] = this['Lj']);
            }, _0x12e869[_0x3d994d(0x869)]['Qj'] = function(_0x2e7a42, _0x6ad03c, _0x40ea90, _0x3ffa5e) {
                if (this['cj'] && this['bj']) {
                    var _0x1e06a8 = _0x239c2a['ra'](0.11112, _0x6ad03c / 0x5f);
                    for (var _0x292f02 = 0x0; _0x292f02 < this['Kd']; _0x292f02++) {
                        var _0x546dcc = _0x239c2a['ka'](this['sn'][_0x292f02 * 0x2], this['tn'][_0x292f02 * 0x2], _0x40ea90),
                            _0x3b9ef5 = _0x239c2a['ka'](this['sn'][_0x292f02 * 0x2 + 0x1], this['tn'][_0x292f02 * 0x2 + 0x1], _0x40ea90);
                        this['Jd'][_0x292f02 * 0x2] = _0x239c2a['ka'](_0x546dcc, this['Jd'][_0x292f02 * 0x2], _0x1e06a8), this['Jd'][_0x292f02 * 0x2 + 0x1] = _0x239c2a['ka'](_0x3b9ef5, this['Jd'][_0x292f02 * 0x2 + 0x1], _0x1e06a8);
                    }
                };
                this['vn'] != null && this['cj'] && this['vn']['Hd'](this, _0x2e7a42, _0x6ad03c, _0x3ffa5e), this['wn'] != null && (this['wn']['Rh']['x'] = this['Jd'][0x0], this['wn']['Rh']['y'] = this['Jd'][0x1] - this['Id'] * 0x3);
            }, _0x12e869['prototype']['yn'] = function(_0x1c4764) {
                this['cj'] ? !_0x1c4764 && this['An']() : (this['vn'] != null && _0x39b888['k']['F']['G'](this['vn']['Yc']), this['wn'] != null && _0x39b888['k']['F']['G'](this['wn']));
            }, _0x12e869['prototype']['An'] = function() {
                var _0x227073 = _0x3d994d;
                this['vn'] == null ? this['vn'] = new _0x158a86['Xc']() : _0x39b888['k']['F']['G'](this['vn']['Yc']);
                this['vn']['hd'](ooo['Mh']['Qh']['eh'], ooo['ud']['Cc']()['Ub'](this['ki']['mi']), ooo['ud']['Cc']()['Tb'](this['ki']['ni']), ooo['ud']['Cc']()['Vb'](this['ki']['Vi']), ooo['ud']['Cc']()['Wb'](this['ki']['Wi']), ooo['ud']['Cc']()['Xb'](this['ki']['Xi']), ooo['ud']['Cc']()['Yb'](this['ki']['Yi']), _0x227073(0x302));
                this['wn'] == null ? (this['wn'] = new _0x158a86['Bn'](''), this['wn'][_0x227073(0x28a)][_0x227073(0x39d)] = 'PTSans', this['wn'][_0x227073(0x5b2)]['set'](0.5)) : _0x39b888['k']['F']['G'](this['wn']);
                this['wn']['style'][_0x227073(0x3ae)] = 0xe, this['wn'][_0x227073(0x28a)]['fill'] = ooo['ud']['Cc']()['Tb'](this['ki']['ni'])['cc'], this['wn'][_0x227073(0x2a5)] = this['ki']['Xa'], this['un']['Xh'](this['ki']['Je'], this['vn'], this['wn']);
                if (_0x2cbd14['n'] != null && _0x2cbd14['n']['Je'] == this['ki']['Je']) {
                    _0x2cbd14['vj'] = this['wn'];
                    let _0x2ecfee = _0x1a98d3['sg'][_0x227073(0x5be)](_0x2cbd14['n']['ni']);
                    _0x2ecfee == -0x1 ? _0x1a98d3['ig'] != -0x1 && (_0x1a98d3['ig'] = -0x1) : (_0x1a98d3['ig'] = _0x1a98d3['gg'][_0x2ecfee]['s'], _0x1a98d3['re'] = !0x1, _0x4b4167());
                }
            }, _0x12e869['Ti'] = function _0x42c10a() {
                this['Je'] = 0x0, this['mi'] = _0x158a86['dh']['jh'], this['ni'] = 0x0, this['Vi'] = 0x0, this['Wi'] = 0x0, this['Xi'] = 0x0, this['Yi'] = 0x0, this['Xa'] = '';
            }, _0x12e869;
        }()), _0x158a86['Bn'] = _0x239c2a['ca'](_0x39b888['k']['t'], function(_0xaa3b47, _0x53cb38, _0x8394f1) {
            var _0x401161 = _0x2b6b48;
            _0x39b888['k']['t'][_0x401161(0x545)](this, _0xaa3b47, _0x53cb38, _0x8394f1), this['Rh'] = {
                'x': 0x0,
                'y': 0x0
            };
        }), _0x158a86['Sb'] = (function() {
            var _0x8b06d1 = _0x2b6b48;

            function _0x47f3ec(_0x26c05b, _0x69e0bd, _0x5b76d2, _0x39ad61, _0x2932c3) {
                this['Tj'] = _0x26c05b, this['Uj'] = _0x69e0bd, this['Vj'] = _0x5b76d2, this['Wj'] = _0x39ad61, this['Xj'] = _0x2932c3;
            }
            return _0x47f3ec[_0x8b06d1(0x869)]['Cn'] = function(_0xa609d) {
                return new _0x47f3ec(_0xa609d, this['Uj'], this['Vj'], this['Wj'], this['Xj']);
            }, _0x47f3ec[_0x8b06d1(0x869)]['Dn'] = function(_0x5390f0) {
                return new _0x47f3ec(this['Tj'], _0x5390f0, this['Vj'], this['Wj'], this['Xj']);
            }, _0x47f3ec[_0x8b06d1(0x869)]['En'] = function(_0x214320) {
                return new _0x47f3ec(this['Tj'], this['Uj'], _0x214320, this['Wj'], this['Xj']);
            }, _0x47f3ec[_0x8b06d1(0x869)]['Fn'] = function(_0x1079e0) {
                return new _0x47f3ec(this['Tj'], this['Uj'], this['Vj'], _0x1079e0, this['Xj']);
            }, _0x47f3ec[_0x8b06d1(0x869)]['Gn'] = function(_0x36e729) {
                return new _0x47f3ec(this['Tj'], this['Uj'], this['Vj'], this['Wj'], _0x36e729);
            }, _0x47f3ec;
        }()), _0x158a86['Bm'] = (function() {
            var _0xcbdff4 = _0x2b6b48;

            function _0x1aac1a(_0x141f76) {
                var _0x24394d = _0x563d;
                this['Hn'] = new _0x158a86['Xc'](), this['Hn']['Yc']['addChild'](this['Hn']['Zc']), this['In'] = null, this['Jn'] = null, this['Jm'] = _0x141f76, this['$c'] = 0x0, this['mj'] = 0x1, this['Kn'] = 0x1, this['Ln'] = 0x1, this['Mn'] = 0x1, this['Nn'] = 0x1, this['On'] = 0x1, this['Pn'] = 0x1, this['Hm'](_0x24394d(0x302));
            }
            var _0x3ffc8e = new _0x158a86['Sb'](0x0, 0x0, 0x0, 0x0, 0x0);
            return _0x1aac1a[_0xcbdff4(0x869)]['ag'] = function() {
                return this['Hn']['Yc'];
            }, _0x1aac1a[_0xcbdff4(0x869)]['Cm'] = function(_0x1ce4f6) {
                var _0x262cae = _0xcbdff4;
                this['$c'] = _0x1ce4f6;
                if (this['Hn']['$c'] !== _0x1ce4f6) {
                    for (var _0x5706af = _0x1ce4f6; _0x5706af < this['Hn']['_c'][_0x262cae(0x883)]; _0x5706af++) {
                        this['Hn']['_c'][_0x5706af]['Cd']();
                    };
                    while (this['Hn']['$c'] > _0x1ce4f6) {
                        this['Hn']['$c'] -= 0x1;
                        var _0xb78966 = this['Hn']['_c'][this['Hn']['$c']];
                        _0xb78966['md']['G'](), _0xb78966['ld']['G']();
                    };
                    while (this['Hn']['$c'] < _0x1ce4f6) {
                        var _0x212875 = this['Hn']['_c'][this['Hn']['$c']];
                        this['Hn']['$c'] += 0x1, this['Hn']['Yc'][_0x262cae(0x371)](_0x212875['ld']['zd']()), this['Hn']['Yc']['addChild'](_0x212875['md']['zd']()), _0x212875['ld']['Rj'](this['Kn']), _0x212875['md']['Rj'](this['Ln']);
                    };
                    for (var _0x5c324c = 0x0; _0x5c324c < this['Hn']['Zc']['od'][_0x262cae(0x883)]; _0x5c324c++) {
                        this['Hn']['Zc']['od'][_0x5c324c]['Rj'](this['Mn']);
                    };
                    for (var _0x55927a = 0x0; _0x55927a < this['Hn']['Zc']['pd'][_0x262cae(0x883)]; _0x55927a++) {
                        this['Hn']['Zc']['pd'][_0x55927a]['Rj'](this['Nn']);
                    };
                    for (var _0xb7eeee = 0x0; _0xb7eeee < this['Hn']['Zc']['rd']['length']; _0xb7eeee++) {
                        this['Hn']['Zc']['rd'][_0xb7eeee]['Rj'](this['On']);
                    };
                    for (var _0x79fe81 = 0x0; _0x79fe81 < this['Hn']['Zc']['qd']['length']; _0x79fe81++) {
                        this['Hn']['Zc']['qd'][_0x79fe81]['Rj'](this['Pn']);
                    }
                }
            }, _0x1aac1a['prototype']['Im'] = function() {
                return this['$c'];
            }, _0x1aac1a[_0xcbdff4(0x869)]['Gm'] = function(_0x21bf79) {
                this['In'] = _0x21bf79, this['Jn'] = '#ffffff', this['Tm']();
            }, _0x1aac1a[_0xcbdff4(0x869)]['Hm'] = function(_0x327cc3) {
                this['In'] = _0x3ffc8e, this['Jn'] = _0x327cc3, this['Tm']();
            }, _0x1aac1a[_0xcbdff4(0x869)]['Tm'] = function() {
                this['Hn']['hd'](_0x158a86['jd']['ch'], null, ooo['ud']['Cc']()['Tb'](this['In']['Tj']), ooo['ud']['Cc']()['Vb'](this['In']['Uj']), ooo['ud']['Cc']()['Wb'](this['In']['Vj']), ooo['ud']['Cc']()['Xb'](this['In']['Xj']), ooo['ud']['Cc']()['Yb'](this['In']['Wj']), this['Jn']);
            }, _0x1aac1a[_0xcbdff4(0x869)]['Dm'] = function(_0x1f71d4) {
                this['mj'] = _0x1f71d4;
            }, _0x1aac1a[_0xcbdff4(0x869)]['Km'] = function() {
                return this['mj'];
            }, _0x1aac1a[_0xcbdff4(0x869)]['Wm'] = function(_0x1ddfaa, _0x483006) {
                this['Kn'] = _0x1ddfaa, this['Ln'] = _0x483006;
                for (var _0x550f9f = 0x0; _0x550f9f < this['$c']; _0x550f9f++) {
                    var _0x139c98 = this['Hn']['_c'][_0x550f9f];
                    _0x139c98['ld']['Rj'](this['Kn']), _0x139c98['md']['Rj'](this['Ln']);
                }
            }, _0x1aac1a[_0xcbdff4(0x869)]['Zm'] = function(_0x42467f, _0x536ae2, _0x1e2f14, _0x3852d9) {
                var _0x5bcbaf = _0xcbdff4;
                this['Mn'] = _0x42467f, this['Nn'] = _0x536ae2, this['On'] = _0x1e2f14, this['Pn'] = _0x3852d9;
                for (var _0x2157e9 = 0x0; _0x2157e9 < this['Hn']['Zc']['od'][_0x5bcbaf(0x883)]; _0x2157e9++) {
                    this['Hn']['Zc']['od'][_0x2157e9]['Rj'](this['Mn']);
                };
                for (var _0x2f08e5 = 0x0; _0x2f08e5 < this['Hn']['Zc']['pd'][_0x5bcbaf(0x883)]; _0x2f08e5++) {
                    this['Hn']['Zc']['pd'][_0x2f08e5]['Rj'](this['Nn']);
                };
                for (var _0xf6bf02 = 0x0; _0xf6bf02 < this['Hn']['Zc']['rd'][_0x5bcbaf(0x883)]; _0xf6bf02++) {
                    this['Hn']['Zc']['rd'][_0xf6bf02]['Rj'](this['On']);
                };
                for (var _0x426f76 = 0x0; _0x426f76 < this['Hn']['Zc']['qd'][_0x5bcbaf(0x883)]; _0x426f76++) {
                    this['Hn']['Zc']['qd'][_0x426f76]['Rj'](this['Pn']);
                }
            }, _0x1aac1a[_0xcbdff4(0x869)]['Bg'] = function() {
                var _0x20c29b = this['mj'] * 0x2,
                    _0x33cd57 = this['mj'] * 0x2 * 1.5;
                if (this['$c'] > 0x0) {
                    var _0xe38877 = this['Jm'][0x0],
                        _0x4bb05f = this['Jm'][0x1],
                        _0x30d8a7 = this['Jm'][0x2];
                    this['Hn']['_c'][0x0]['Ad'](_0xe38877, _0x4bb05f, _0x20c29b, _0x33cd57, _0x30d8a7), this['Hn']['Zc']['Ad'](_0xe38877, _0x4bb05f, _0x20c29b, _0x30d8a7);
                };
                for (var _0xc31aad = 0x1; _0xc31aad < this['$c']; _0xc31aad++) {
                    var _0x2aef86 = this['Jm'][_0xc31aad * 0x3],
                        _0x1c48a2 = this['Jm'][_0xc31aad * 0x3 + 0x1],
                        _0x102449 = this['Jm'][_0xc31aad * 0x3 + 0x2];
                    this['Hn']['_c'][_0xc31aad]['Ad'](_0x2aef86, _0x1c48a2, _0x20c29b, _0x33cd57, _0x102449);
                }
            }, _0x1aac1a[_0xcbdff4(0x869)]['_m'] = function(_0x36fd53) {
                var _0x54f90f = _0xcbdff4;
                _0x36fd53[_0x54f90f(0x6d2)](this['Hn']['Yc']);
            }, _0x1aac1a;
        }()), _0x158a86['Uf'] = (function() {
            var _0x258afb = _0x2b6b48;

            function _0x45be0f(_0xf9437a) {
                this['Wd'] = _0xf9437a;
            }
            return _0x45be0f['Tf'] = $(_0x258afb(0x52d)), _0x45be0f['Qn'] = $(_0x258afb(0x254)), _0x45be0f['Rn'] = $('#social-buttons'), _0x45be0f['Sn'] = $(_0x258afb(0x70b)), _0x45be0f['Tn'] = $(_0x258afb(0x6bf)), _0x45be0f['Un'] = $(_0x258afb(0x4a9)), _0x45be0f['Vn'] = $(_0x258afb(0x6f9)), _0x45be0f['Wn'] = $(_0x258afb(0x570)), _0x45be0f['Xn'] = $(_0x258afb(0x623)), _0x45be0f['Yn'] = $(_0x258afb(0x1e8)), _0x45be0f['Zn'] = $(_0x258afb(0x730)), _0x45be0f['$n'] = $('#error-gateway-connection-view'), _0x45be0f['_n'] = $(_0x258afb(0x569)), _0x45be0f[_0x258afb(0x869)]['Sa'] = function() {}, _0x45be0f[_0x258afb(0x869)]['ml'] = function() {}, _0x45be0f[_0x258afb(0x869)]['nl'] = function() {}, _0x45be0f[_0x258afb(0x869)]['hl'] = function() {}, _0x45be0f['prototype']['qg'] = function() {}, _0x45be0f[_0x258afb(0x869)]['ug'] = function(_0x1aa29a, _0x263fbd) {}, _0x45be0f;
        }()), _0x51366c = $(_0x2b6b48(0x6f8)), _0x596633 = $(_0x2b6b48(0x7d9)), _0x88389e = $(_0x2b6b48(0x2dc)), _0x32ec14 = $('#unl6wj4czdl84o9b'), _0xb9df8e = $('#final-share-fb'), _0x2aa197 = $('#final-message'), _0x465880 = $(_0x2b6b48(0x7e4)), _0x18e01d = $('#final-place'), _0x882cd2 = $(_0x2b6b48(0x280)), _0x5bccf3 = $(_0x2b6b48(0x491)), (_0x2cece1 = _0x239c2a['ca'](_0x158a86['Uf'], function() {
            var _0x422dd8 = _0x2b6b48;
            _0x158a86['Uf'][_0x422dd8(0x545)](this, _0x158a86['ll']['ao']);
            var _0xf6fe71 = this,
                _0x2ff5c9 = _0x5bccf3[_0x422dd8(0x5d3)]()[0x0];
            _0xb9df8e[_0x422dd8(0x5f2)](_0x2171ac['co']['bo']), _0x51366c[_0x422dd8(0x2a5)](_0x239c2a['U'](_0x422dd8(0x3db))), _0x596633['text'](_0x239c2a['U']('index.game.result.continue')), _0x596633[_0x422dd8(0x1dd)](_0x422dd8(0x2e1)), _0x596633[_0x422dd8(0x5dc)]('<div\x20id=\x27final-replay\x27>Replay</div>'), _0x596633[_0x422dd8(0x615)](function() {
                ooo['ij']['if'](), _0x2171ac['co']['do']['Va'](), ooo['ij']['Ye'](_0x158a86['Pe']['Se']['Jf']), ooo['Xg']['gl'](ooo['Xg']['Jf']);
            }), $('#final-replay')[_0x422dd8(0x615)](function() {
                ooo['ij']['if'](), ooo['to']();
            });
            var _0x4b3429 = [{
                    'url': _0x422dd8(0x1cc)
                }, {
                    'url': _0x422dd8(0x5a9)
                }, {
                    'url': _0x422dd8(0x689)
                }, {
                    'url': 'Galaxy-Star.png'
                }, {
                    'url': _0x422dd8(0x848)
                }, {
                    'url': _0x422dd8(0x74f)
                }, {
                    'url': _0x422dd8(0x27e)
                }, {
                    'url': _0x422dd8(0x757)
                }, {
                    'url': 'bg_sky_8.png'
                }, {
                    'url': _0x422dd8(0x67a)
                }, {
                    'url': _0x422dd8(0x744)
                }, {
                    'url': _0x422dd8(0x69a)
                }],
                _0x54e84a = 0x0;

            function _0x3551f3() {
                var _0x50eb88 = _0x422dd8;
                _0x54e84a = (_0x54e84a + 0x1) % _0x4b3429['length'];
                var _0x4c5421 = _0x4b3429[_0x54e84a]['url'],
                    _0xdfe0b4 = _0x1a98d3['s_l'] + _0x50eb88(0x76c) + _0x4c5421;
                _0x1a98d3[_0x50eb88(0x783)] = _0xdfe0b4, localStorage['setItem']('SaveGamewft', JSON[_0x50eb88(0x32a)](_0x1a98d3));
                try {
                    PIXI[_0x50eb88(0x651)][_0x50eb88(0x593)][_0xdfe0b4] && (PIXI[_0x50eb88(0x651)]['TextureCache'][_0xdfe0b4][_0x50eb88(0x238)](!0x0), delete PIXI[_0x50eb88(0x651)][_0x50eb88(0x593)][_0xdfe0b4]);
                    if (typeof ooo !== 'undefined' && ooo['ef'] && ooo['ef']['fn_o']) {
                        var _0x23f56e = ooo['ef'][_0x50eb88(0x54f)](_0xdfe0b4);
                        ooo['ef'][_0x50eb88(0x833)] = new PIXI[(_0x50eb88(0x3a1))](_0x23f56e);
                    } else typeof PIXI !== _0x50eb88(0x328) && (ooo['ef']['F_bg'] = PIXI['Texture']['from'](_0xdfe0b4));
                    ooo && ooo['Xg'] && ooo['Xg']['Kf'] && ooo['Xg']['Kf']['Wg'] && ooo['Xg']['Kf']['Wg']['sh'] && ooo['Xg']['Kf']['Wg']['sh']['Hh'](ooo['ef'][_0x50eb88(0x833)]);
                } catch (_0xa25e67) {
                    console[_0x50eb88(0x1be)](_0x50eb88(0x60a), _0xa25e67);
                }
            }
            let _0x33bc53 = {
                'left': !0x1,
                'right': !0x1
            };

            function _0x39c5a8() {
                var _0x1d316d = _0x422dd8;
                _0x1a98d3['hz'] && !_0x1a98d3[_0x1d316d(0x7cf)] && (_0x33bc53[_0x1d316d(0x319)] && _0x1a98d3['z'] >= 0.2 && (_0x1a98d3['z'] = _0x1a98d3['z'] - 0.05), _0x33bc53[_0x1d316d(0x743)] && _0x1a98d3['z'] <= 0x19 && (_0x1a98d3['z'] = _0x1a98d3['z'] + 0.05)), requestAnimationFrame(_0x39c5a8);
            }
            $(_0x422dd8(0x1dd))[_0x422dd8(0x628)](function(_0x40ce45) {
                var _0x2464bd = _0x422dd8;
                (_0x40ce45[_0x2464bd(0x490)] !== 0x11 || !(_0x1a98d3['ctrl'] = !0x0)) && (_0x40ce45['keyCode'] !== 0x11 && (_0x1a98d3['ctrl'] = !0x1));
                _0x40ce45['keyCode'] === 0x35 && ((_0x1a98d3['s'] || _0x2cbd14['on']) && _0x3551f3());
                (_0x40ce45[_0x2464bd(0x490)] == 0xbc || _0x40ce45[_0x2464bd(0x490)] == 0x25) && (_0x33bc53[_0x2464bd(0x319)] = !0x0);
                (_0x40ce45['keyCode'] == 0xbe || _0x40ce45[_0x2464bd(0x490)] == 0x27) && (_0x33bc53[_0x2464bd(0x743)] = !0x0);
                _0x40ce45[_0x2464bd(0x490)] === 0x20 && (_0xf6fe71['eo'] = !0x0);
                _0x40ce45[_0x2464bd(0x490)] === 0x31 && _0x4bd7db();
                if (_0x40ce45['keyCode'] === 0x32) {
                    if (_0x2cbd14['on'] && _0x1a98d3['s']) {
                        if (_0x1a98d3[_0x2464bd(0x45c)] && _0x1a98d3[_0x2464bd(0x45c)][_0x2464bd(0x883)] > 0x0) {
                            _0x1a98d3[_0x2464bd(0x327)] = (_0x1a98d3[_0x2464bd(0x327)] + 0x1) % _0x1a98d3[_0x2464bd(0x45c)][_0x2464bd(0x883)];
                            let _0x155f11 = _0x1a98d3[_0x2464bd(0x45c)][_0x1a98d3[_0x2464bd(0x327)]];
                            _0x46c8a6(_0x155f11), localStorage[_0x2464bd(0x5c0)](_0x2464bd(0x1e2), JSON[_0x2464bd(0x32a)](_0x1a98d3));
                        }
                    }
                }
            })[_0x422dd8(0x5c3)](function(_0x1a37db) {
                var _0x3a2efe = _0x422dd8;
                _0x1a98d3['ctrl'] = !0x1;
                (_0x1a37db[_0x3a2efe(0x490)] == 0xbc || _0x1a37db['keyCode'] == 0x25) && (_0x33bc53['left'] = !0x1);
                (_0x1a37db[_0x3a2efe(0x490)] == 0xbe || _0x1a37db['keyCode'] == 0x27) && (_0x33bc53[_0x3a2efe(0x743)] = !0x1);
                _0x2cbd14['on'] && _0x1a98d3['s'] && (_0x1a37db[_0x3a2efe(0x490)] == 0x51 || _0x1a37db[_0x3a2efe(0x490)] == 0x57 ? (_0x1a37db['keyCode'] == 0x51 && (_0x2add7a[_0x3a2efe(0x272)] = _0x4fbc00, _0x2da668[_0x3a2efe(0x272)] = _0x1b024d, _0x2add7a['alpha'] = 0x1, _0x2da668[_0x3a2efe(0x44e)] = 0.25, _0x13d32a()), _0x1a37db['keyCode'] == 0x57 && (_0x2da668[_0x3a2efe(0x272)] = _0xb11556, _0x2add7a[_0x3a2efe(0x272)] = _0x30cfd0, _0x2add7a[_0x3a2efe(0x44e)] = 0.25, _0x2da668['alpha'] = 0x1, _0x44e20b())) : (_0x2da668[_0x3a2efe(0x272)] = _0x1b024d, _0x2add7a[_0x3a2efe(0x272)] = _0x30cfd0, _0x2da668['alpha'] = 0.25, _0x2add7a[_0x3a2efe(0x44e)] = 0.25, _0x12badb = !0x1, _0x93ba91 = 0x37, _0x39f5db = 0x1, _0x31c07e = !0x0, clearInterval(_0xd66ce6), _0xd66ce6 = null), _0x1a37db['keyCode'] == 0x5a && (_0x1a98d3['z'] == 0x1 ? (_0x1a98d3['h'] ? _0x1a98d3['z'] = 1.6 : _0x1a98d3['z'] = 1.2, _0x423a56[_0x3a2efe(0x272)] = _0x3b95dc, _0x423a56[_0x3a2efe(0x44e)] = 0x1) : (_0x1a98d3['z'] = 0x1, _0x423a56['texture'] = _0x168c20, _0x423a56[_0x3a2efe(0x44e)] = 0.25)));
                if (_0x2cbd14['on'] && _0x1a37db['keyCode'] == 0x52) {
                    !window[_0x3a2efe(0x318)] && (window['lastRespawnTime'] = 0x0);
                    const _0x8a5dd1 = new Date()[_0x3a2efe(0x484)](),
                        _0x313049 = _0x8a5dd1 - window['lastRespawnTime'];
                    if (_0x313049 < 0x3e8) return;
                    window[_0x3a2efe(0x318)] = _0x8a5dd1;
                    _0x1a98d3['pi'] && _0x1a98d3['pn'] && ($(_0x3a2efe(0x7e0))[_0x3a2efe(0x223)](_0x1a98d3['pi']), $(_0x3a2efe(0x78c))['val'](_0x1a98d3['pn']), $(_0x3a2efe(0x478))[_0x3a2efe(0x223)]($(_0x3a2efe(0x7e0))[_0x3a2efe(0x223)]()), $('#port_name')[_0x3a2efe(0x223)]($('#port_name_s')[_0x3a2efe(0x223)]()));
                    _0x1a98d3['r1'] = !0x0;
                    try {
                        if (ooo['Mh'] && typeof ooo['Mh']['uj'] === _0x3a2efe(0x387)) {
                            ooo['Mh']['uj'](), setTimeout(function() {
                                var _0x32cd47 = _0x3a2efe;
                                document[_0x32cd47(0x804)](_0x32cd47(0x496))[_0x32cd47(0x615)]();
                            }, 0x12c);
                            return;
                        }
                    } catch (_0x3b14a5) {}
                    try {
                        if (ooo['Mh'] && typeof ooo['Mh']['gr'] === _0x3a2efe(0x387)) ooo['Mh']['gr']();
                        else {
                            if (ooo['Mh'] && ooo['Mh']['Rq']) {
                                try {
                                    ooo['Mh']['go'] = 0x3;
                                } catch (_0x391c37) {}
                                ooo['Mh']['Rq'][_0x3a2efe(0x38d)]();
                            }
                        }
                        setTimeout(function() {
                            var _0x3dd263 = _0x3a2efe;
                            try {
                                const _0x2fd514 = document[_0x3dd263(0x326)](_0x3dd263(0x4e0));
                                _0x2fd514['forEach'](_0x1bc49d => {
                                    var _0x59b2ce = _0x3dd263;
                                    try {
                                        _0x1bc49d[_0x59b2ce(0x28a)]['display'] = 'none';
                                    } catch (_0xe8301a) {}
                                });
                            } catch (_0x406e1d) {}
                            document[_0x3dd263(0x804)](_0x3dd263(0x496))[_0x3dd263(0x615)]();
                        }, 0x15e);
                    } catch (_0x100ffa) {
                        document[_0x3a2efe(0x804)](_0x3a2efe(0x496))['click']();
                    }
                }
                _0x2cbd14['on'] && _0x1a37db[_0x3a2efe(0x490)] == 0x38 && (document[_0x3a2efe(0x804)](_0x3a2efe(0x6fa))[_0x3a2efe(0x615)](), _0x1a98d3['sn'] ? _0x1a98d3['sn'] = !0x1 : _0x1a98d3['sn'] = !0x0), _0x1a37db[_0x3a2efe(0x490)] === 0x20 && (_0xf6fe71['eo'] = !0x1);
            }), _0x39c5a8(), window['addEventListener'](_0x422dd8(0x64c), function() {
                var _0x325aa6 = _0x422dd8;
                if (_0x1a98d3['background']) {
                    var _0x18ebf7 = _0x1a98d3['background'];
                    for (var _0x3da69d = 0x0; _0x3da69d < _0x4b3429[_0x325aa6(0x883)]; _0x3da69d++) {
                        if (_0x4b3429[_0x3da69d][_0x325aa6(0x4b1)] === _0x18ebf7) {
                            _0x54e84a = _0x3da69d;
                            break;
                        }
                    }
                }
            }), _0x2ff5c9['addEventListener']('touchmove', function(_0x3345f2) {
                var _0x17397e = _0x422dd8;
                if (_0x2cbd14['on'] && _0x1a98d3[_0x17397e(0x7cf)] && _0x1a98d3['mo'] != 0x6 && _0x1a98d3['s']) {
                    var _0x1dee4f = btoa(_0x1a98d3[_0x17397e(0x2b2)]);
                    if (_0x1a98d3[_0x17397e(0x26f)]['x'] != -0x1 && _0x1a98d3[_0x17397e(0x26f)]['y'] == -0x1 && btoa(_0x1dee4f) == _0x1a98d3[_0x17397e(0x61f)] || _0x1a98d3[_0x17397e(0x670)]['x'] == -0x1 && _0x1a98d3['mo2']['y'] != -0x1 && btoa(_0x1dee4f) == _0x1a98d3[_0x17397e(0x61f)]) {
                        var _0x2871da = ooo['Xg']['Kf']['Wg']['Ah'],
                            _0x26898a = _0x2ff5c9[_0x17397e(0x534)],
                            _0x532788 = _0x2ff5c9[_0x17397e(0x715)],
                            _0x121691 = _0x26898a * 0.5,
                            _0x140249 = _0x532788 * 0.5,
                            _0x5abda6 = btoa(_0x1a98d3[_0x17397e(0x687)]);
                        for (let _0x172333 = 0x0; _0x172333 < _0x3345f2[_0x17397e(0x381)][_0x17397e(0x883)]; _0x172333++) {
                            var _0xd645e4 = _0x3345f2[_0x17397e(0x381)][_0x172333]['pageX'],
                                _0x22b430 = _0x3345f2[_0x17397e(0x381)][_0x172333][_0x17397e(0x558)],
                                _0x5b6155 = _0x3345f2[_0x17397e(0x381)][_0x172333][_0x17397e(0x330)];
                            _0x1a98d3['mo'] == 0x1 && btoa(_0x5abda6) == _0x1a98d3['d_2'] && (_0x26898a *= 0.5, _0x532788 *= 0.5);
                            _0x1a98d3['mo'] == 0x2 && btoa(_0x5abda6) == _0x1a98d3[_0x17397e(0x503)] && (_0x26898a = _0x2871da[_0x17397e(0x2df)]['y'] + 0x6e, _0x532788 = _0x2871da[_0x17397e(0x2df)]['x'] + 0x6e);
                            _0x1a98d3['mo'] == 0x3 && btoa(_0x5abda6) == _0x1a98d3[_0x17397e(0x503)] && (_0x26898a = _0x2871da[_0x17397e(0x62d)]['y'] + 0x6e, _0x532788 = _0x2871da[_0x17397e(0x62d)]['x'] + 0x6e);
                            (_0x1a98d3['mo'] == 0x4 && btoa(_0x5abda6) == _0x1a98d3[_0x17397e(0x503)] || _0x1a98d3['mo'] == 0x5 && btoa(_0x5abda6) == _0x1a98d3[_0x17397e(0x503)]) && (_0x26898a = _0x2871da[_0x17397e(0x6b3)]['y'] + 0x6e, _0x532788 = _0x2871da[_0x17397e(0x6b3)]['x'] + 0x6e);
                            var _0x16a679 = btoa(_0x1a98d3[_0x17397e(0x728)]),
                                _0x284245 = Math[_0x17397e(0x37a)](_0x22b430 - _0x26898a, _0xd645e4 - _0x532788),
                                _0x4d1fc6 = Math[_0x17397e(0x802)](_0x284245),
                                _0x5bee14 = Math[_0x17397e(0x73c)](_0x284245),
                                _0x152576 = btoa(_0x1a98d3[_0x17397e(0x1d1)]),
                                _0x12748e = _0x1a98d3[_0x17397e(0x26f)]['x'] == _0x5b6155;
                            btoa(_0x1a98d3['c_3']);
                            if (_0x12748e && btoa(_0x152576) == _0x1a98d3['d_4']) {
                                if (_0xd645e4 <= 0x0 || _0x22b430 <= 0x0) _0x1a98d3[_0x17397e(0x26f)]['x'] = -0x1, _0x1a98d3['mo'] == 0x1 && (_0x2871da[_0x17397e(0x4c4)][_0x17397e(0x44e)] = 0.25), _0x1a98d3['mo'] == 0x2 && (_0x2871da[_0x17397e(0x2df)]['alpha'] = 0.25, _0x2871da[_0x17397e(0x6b5)][_0x17397e(0x44e)] = 0.25, _0x2871da[_0x17397e(0x4b8)][_0x17397e(0x44e)] = 0.25), _0x1a98d3['mo'] == 0x3 && (_0x2871da[_0x17397e(0x62d)][_0x17397e(0x44e)] = 0.25, _0x2871da[_0x17397e(0x466)][_0x17397e(0x44e)] = 0.25, _0x2871da[_0x17397e(0x7c6)][_0x17397e(0x44e)] = 0.25), (_0x1a98d3['mo'] == 0x4 || _0x1a98d3['mo'] == 0x5) && (_0x2871da['img_p_2'][_0x17397e(0x44e)] = 0.25);
                                else {
                                    _0xf6fe71['fo'] = _0x284245;
                                    var _0x1d4ccf = 0x32;
                                    (_0x1a98d3['mo'] == 0x1 || _0x1a98d3['mo'] == 0x4 || _0x1a98d3['mo'] == 0x5) && (_0x1d4ccf = 0x6e);
                                    var _0x27bf80 = _0x532788 - _0xd645e4,
                                        _0x2233d4 = _0x26898a - _0x22b430,
                                        _0x1b9227 = Math[_0x17397e(0x36f)](_0x27bf80 * _0x27bf80 + _0x2233d4 * _0x2233d4),
                                        _0x142d77 = _0x140249 + _0x1b9227 * _0x4d1fc6 - 0x44,
                                        _0x47f1f9 = _0x121691 + _0x1b9227 * _0x5bee14 - 0x44,
                                        _0x716ca7 = _0x140249 + _0x1d4ccf * _0x4d1fc6 - 0x44,
                                        _0x7bb202 = _0x121691 + _0x1d4ccf * _0x5bee14 - 0x44,
                                        _0x16956e = _0x140249 + _0x4d1fc6 * 0x4b - 0x44,
                                        _0x3387ae = _0x121691 + _0x5bee14 * 0x4b - 0x44,
                                        _0x540bcd = _0xd645e4 - 0x55,
                                        _0x31193e = _0x22b430 - 0x55,
                                        _0x3d00c7 = _0x532788 + _0x1d4ccf * _0x4d1fc6 - 0x55,
                                        _0x1970e2 = _0x26898a + _0x1d4ccf * _0x5bee14 - 0x55,
                                        _0x573aa3 = _0x532788 + _0x4d1fc6 * 0x3 - 0x6e,
                                        _0x27f558 = _0x26898a + _0x5bee14 * 0x3 - 0x6e;
                                    _0x1b9227 < _0x1d4ccf ? (_0x1a98d3[_0x17397e(0x670)]['x'] == -0x1 && _0x1a98d3[_0x17397e(0x670)]['y'] != -0x1 ? (_0x2871da[_0x17397e(0x82f)]['x'] = _0x142d77, _0x2871da[_0x17397e(0x82f)]['y'] = _0x47f1f9) : (_0x1a98d3['mo'] == 0x1 && (_0x2871da['img_p_1']['x'] = _0x142d77, _0x2871da['img_p_1']['y'] = _0x47f1f9), (_0x1a98d3['mo'] == 0x2 || _0x1a98d3['mo'] == 0x4 || _0x1a98d3['mo'] == 0x5) && (_0x2871da['img_p_2']['x'] = _0x142d77, _0x2871da[_0x17397e(0x4b8)]['y'] = _0x47f1f9), _0x1a98d3['mo'] == 0x3 && (_0x2871da[_0x17397e(0x7c6)]['x'] = _0x142d77, _0x2871da[_0x17397e(0x7c6)]['y'] = _0x47f1f9)), _0x1a98d3['mo'] == 0x2 && (_0x2871da[_0x17397e(0x6b5)]['y'] = _0x31193e, _0x2871da[_0x17397e(0x6b5)]['x'] = _0x540bcd), _0x1a98d3['mo'] == 0x3 && (_0x2871da['img_i_3']['y'] = _0x31193e, _0x2871da[_0x17397e(0x466)]['x'] = _0x540bcd)) : (_0x1a98d3[_0x17397e(0x670)]['x'] == -0x1 && _0x1a98d3[_0x17397e(0x670)]['y'] != -0x1 ? (_0x2871da[_0x17397e(0x82f)]['x'] = _0x716ca7, _0x2871da[_0x17397e(0x82f)]['y'] = _0x7bb202, (_0x1a98d3['mo'] == 0x2 || _0x1a98d3['mo'] == 0x3) && (_0x1b9227 < 0x4b ? (_0x2871da[_0x17397e(0x82f)]['x'] = _0x142d77, _0x2871da[_0x17397e(0x82f)]['y'] = _0x47f1f9) : (_0x2871da[_0x17397e(0x82f)]['x'] = _0x16956e, _0x2871da['img_pf_1']['y'] = _0x3387ae))) : (_0x1a98d3['mo'] == 0x1 && (_0x2871da['img_p_1']['x'] = _0x716ca7, _0x2871da['img_p_1']['y'] = _0x7bb202), (_0x1a98d3['mo'] == 0x2 || _0x1a98d3['mo'] == 0x4 || _0x1a98d3['mo'] == 0x5) && (_0x2871da['img_p_2']['x'] = _0x716ca7, _0x2871da['img_p_2']['y'] = _0x7bb202, _0x1a98d3['mo'] == 0x2 && (_0x1b9227 < 0x4b ? (_0x2871da['img_p_2']['x'] = _0x142d77, _0x2871da[_0x17397e(0x4b8)]['y'] = _0x47f1f9) : (_0x2871da[_0x17397e(0x4b8)]['x'] = _0x16956e, _0x2871da['img_p_2']['y'] = _0x3387ae))), _0x1a98d3['mo'] == 0x3 && (_0x1b9227 < 0x4b ? (_0x2871da[_0x17397e(0x7c6)]['x'] = _0x142d77, _0x2871da[_0x17397e(0x7c6)]['y'] = _0x47f1f9) : (_0x2871da[_0x17397e(0x7c6)]['x'] = _0x16956e, _0x2871da[_0x17397e(0x7c6)]['y'] = _0x3387ae))), _0x1a98d3['mo'] == 0x2 && (_0x2871da[_0x17397e(0x6b5)]['y'] = _0x1970e2, _0x2871da['img_i_2']['x'] = _0x3d00c7), _0x1a98d3['mo'] == 0x3 && (_0x2871da[_0x17397e(0x466)]['y'] = _0x1970e2, _0x2871da[_0x17397e(0x466)]['x'] = _0x3d00c7, _0x2871da[_0x17397e(0x62d)]['y'] = _0x27f558, _0x2871da[_0x17397e(0x62d)]['x'] = _0x573aa3));
                                }
                            } else {
                                if ((_0x12748e = _0x1a98d3[_0x17397e(0x670)]['y'] == _0x5b6155) && btoa(_0x16a679) == _0x1a98d3[_0x17397e(0x4bf)]) {
                                    if (_0xd645e4 <= 0x0 || _0x22b430 <= 0x0) _0x1a98d3[_0x17397e(0x670)]['y'] = -0x1, _0x2871da['img_f'][_0x17397e(0x287)] = !0x1, _0x2871da[_0x17397e(0x82f)][_0x17397e(0x287)] = !0x1, _0x1a98d3['mo'] == 0x1 && (_0x2871da[_0x17397e(0x4c4)]['visible'] = !0x0), (_0x1a98d3['mo'] == 0x2 || _0x1a98d3['mo'] == 0x4 || _0x1a98d3['mo'] == 0x5) && (_0x2871da[_0x17397e(0x4b8)][_0x17397e(0x287)] = !0x0), _0x1a98d3['mo'] == 0x3 && (_0x2871da[_0x17397e(0x7c6)][_0x17397e(0x287)] = !0x0), (_0x1a98d3['mo'] == 0x4 || _0x1a98d3['mo'] == 0x5) && (_0x2871da[_0x17397e(0x307)]['visible'] = !0x0), _0xf6fe71['eo'] = !0x1;
                                    else {
                                        if (_0x1a98d3['mo'] == 0x3) {
                                            _0x4d1fc6 = Math['cos'](_0x284245 = Math[_0x17397e(0x37a)](_0x22b430 - (_0x26898a = _0x2871da[_0x17397e(0x307)]['y'] + 0x64), _0xd645e4 - (_0x532788 = _0x2871da[_0x17397e(0x307)]['x'] + 0x64))), _0x5bee14 = Math[_0x17397e(0x73c)](_0x284245);
                                            var _0x540bcd = _0x532788 + _0x4d1fc6 * 0x3 - 0x64,
                                                _0x31193e = _0x26898a + _0x5bee14 * 0x3 - 0x64,
                                                _0x27bf80 = _0x532788 - _0xd645e4,
                                                _0x2233d4 = _0x26898a - _0x22b430,
                                                _0x1b9227 = Math[_0x17397e(0x36f)](_0x27bf80 * _0x27bf80 + _0x2233d4 * _0x2233d4);
                                            _0x1b9227 >= 0x28 && (_0x2871da[_0x17397e(0x307)]['y'] = _0x540bcd, _0x2871da['img_f']['x'] = _0x31193e);
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else(!_0xda46a3() || !_0x1a98d3[_0x17397e(0x1c1)][_0x17397e(0x74b)]) && ((_0x3345f2 = _0x3345f2 || window[_0x17397e(0x4d1)]) && ((_0x3345f2 = _0x3345f2[_0x17397e(0x38a)][0x0])['clientX'] !== undefined ? _0xf6fe71['fo'] = Math['atan2'](_0x3345f2[_0x17397e(0x5d1)] - _0x2ff5c9[_0x17397e(0x534)] * 0.5, _0x3345f2[_0x17397e(0x4cc)] - _0x2ff5c9['offsetWidth'] * 0.5) : _0xf6fe71['fo'] = Math['atan2'](_0x3345f2[_0x17397e(0x558)] - _0x2ff5c9['offsetHeight'] * 0.5, _0x3345f2[_0x17397e(0x6a6)] - _0x2ff5c9[_0x17397e(0x715)] * 0.5)));
            }, !0x0), _0x2ff5c9[_0x422dd8(0x66a)](_0x422dd8(0x2f6), function(_0xa8b1c8) {
                var _0x3a12f2 = _0x422dd8;
                if (_0x2cbd14['on'] && _0x1a98d3[_0x3a12f2(0x7cf)] && _0x1a98d3['mo'] != 0x6 && _0x1a98d3['s']) {
                    var _0x4ef1fc = ooo['Xg']['Kf']['Wg']['Ah'],
                        _0x40e98f = btoa(_0x1a98d3[_0x3a12f2(0x1d1)]),
                        _0x1d2cad = _0x2ff5c9['offsetHeight'],
                        _0xde7e54 = btoa(_0x1a98d3[_0x3a12f2(0x6d1)]),
                        _0x3347d7 = _0x2ff5c9[_0x3a12f2(0x715)],
                        _0x204e08 = btoa(_0x1a98d3['c_5']),
                        _0xe7ee3c = (_0xa8b1c8 = _0xa8b1c8 || window['event'])[_0x3a12f2(0x38a)][_0x3a12f2(0x790)](0x0)['pageX'],
                        _0x4dc57 = btoa(_0x1a98d3[_0x3a12f2(0x687)]),
                        _0x1e901d = _0xa8b1c8[_0x3a12f2(0x38a)][_0x3a12f2(0x790)](0x0)['pageY'],
                        _0xca1f06 = _0xa8b1c8[_0x3a12f2(0x38a)][_0x3a12f2(0x883)],
                        _0x3686a7 = btoa(_0x1a98d3[_0x3a12f2(0x2b2)]),
                        _0x37fb72 = _0xa8b1c8[_0x3a12f2(0x38a)]['item'](0x0)['identifier'];
                    for (let _0x2006d1 = 0x0; _0x2006d1 < _0xca1f06; _0x2006d1++) {
                        _0x1a98d3[_0x3a12f2(0x670)]['x'] == -0x1 && _0x1a98d3[_0x3a12f2(0x670)]['y'] != -0x1 ? _0xa8b1c8[_0x3a12f2(0x38a)]['item'](_0x2006d1)[_0x3a12f2(0x330)] != _0x1a98d3['mo2']['y'] && (_0xe7ee3c = _0xa8b1c8[_0x3a12f2(0x38a)][_0x3a12f2(0x790)](_0x2006d1)[_0x3a12f2(0x6a6)], _0x1e901d = _0xa8b1c8[_0x3a12f2(0x38a)][_0x3a12f2(0x790)](_0x2006d1)['pageY'], _0x37fb72 = _0xa8b1c8['touches'][_0x3a12f2(0x790)](_0x2006d1)[_0x3a12f2(0x330)]) : (_0xe7ee3c = _0xa8b1c8[_0x3a12f2(0x38a)]['item'](_0x2006d1)['pageX'], _0x1e901d = _0xa8b1c8[_0x3a12f2(0x38a)][_0x3a12f2(0x790)](_0x2006d1)[_0x3a12f2(0x558)], _0x37fb72 = _0xa8b1c8[_0x3a12f2(0x38a)][_0x3a12f2(0x790)](_0x2006d1)[_0x3a12f2(0x330)]);
                    };
                    var _0x43142a = 0x0;
                    (_0x1a98d3['mo'] == 0x4 && btoa(_0x204e08) == _0x1a98d3[_0x3a12f2(0x4bf)] || _0x1a98d3['mo'] == 0x5 && btoa(_0x40e98f) == _0x1a98d3[_0x3a12f2(0x425)]) && (_0x43142a = Math[_0x3a12f2(0x36f)]((_0xe7ee3c - _0x4ef1fc[_0x3a12f2(0x307)]['x'] - 0x64) * (_0xe7ee3c - _0x4ef1fc[_0x3a12f2(0x307)]['x'] - 0x64) + (_0x1e901d - _0x4ef1fc[_0x3a12f2(0x307)]['y'] - 0x64) * (_0x1e901d - _0x4ef1fc[_0x3a12f2(0x307)]['y'] - 0x64)));
                    _0xca1f06 == 0x1 && (_0x1a98d3['mo'] == 0x4 && _0x43142a > 0x28 || _0x1a98d3['mo'] != 0x4) && (_0x1a98d3['mo'] == 0x5 && _0x43142a > 0x28 || _0x1a98d3['mo'] != 0x5) && (_0x1a98d3[_0x3a12f2(0x670)]['y'] = -0x1, _0x4ef1fc['img_f'][_0x3a12f2(0x287)] = !0x1, _0x4ef1fc['img_pf_1'][_0x3a12f2(0x287)] = !0x1, _0x1a98d3['mo'] == 0x1 && (_0x4ef1fc[_0x3a12f2(0x4c4)][_0x3a12f2(0x44e)] = 0.25, _0x4ef1fc[_0x3a12f2(0x4c4)][_0x3a12f2(0x287)] = !0x0), _0x1a98d3['mo'] == 0x2 && (_0x4ef1fc[_0x3a12f2(0x2df)][_0x3a12f2(0x44e)] = 0.25, _0x4ef1fc[_0x3a12f2(0x6b5)][_0x3a12f2(0x44e)] = 0.25, _0x4ef1fc['img_p_2'][_0x3a12f2(0x44e)] = 0.25, _0x4ef1fc['img_p_2'][_0x3a12f2(0x287)] = !0x0), _0x1a98d3['mo'] == 0x3 && (_0x4ef1fc[_0x3a12f2(0x62d)][_0x3a12f2(0x44e)] = 0.25, _0x4ef1fc[_0x3a12f2(0x466)][_0x3a12f2(0x44e)] = 0.25, _0x4ef1fc[_0x3a12f2(0x7c6)]['alpha'] = 0.25, _0x4ef1fc[_0x3a12f2(0x7c6)][_0x3a12f2(0x287)] = !0x0), (_0x1a98d3['mo'] == 0x4 || _0x1a98d3['mo'] == 0x5) && (_0x4ef1fc['img_p_2']['alpha'] = 0.25, _0x4ef1fc[_0x3a12f2(0x4b8)]['visible'] = !0x0, _0x4ef1fc['img_f'][_0x3a12f2(0x287)] = !0x0), _0xf6fe71['eo'] = !0x1);
                    if (_0x1a98d3[_0x3a12f2(0x26f)]['x'] == -0x1 && _0x1a98d3[_0x3a12f2(0x26f)]['y'] == -0x1 && btoa(_0x40e98f) == _0x1a98d3[_0x3a12f2(0x425)] && (_0x1a98d3['mo'] == 0x4 && _0x43142a > 0x28 || _0x1a98d3['mo'] != 0x4 && btoa(_0xde7e54) == _0x1a98d3[_0x3a12f2(0x329)]) && (_0x1a98d3['mo'] == 0x5 && _0x43142a > 0x28 || _0x1a98d3['mo'] != 0x5 && btoa(_0x4dc57) == _0x1a98d3[_0x3a12f2(0x503)])) {
                        _0x1a98d3[_0x3a12f2(0x26f)]['x'] = _0x37fb72;
                        _0x1a98d3[_0x3a12f2(0x26f)]['x'] == _0x1a98d3['mo2']['y'] && _0x1a98d3[_0x3a12f2(0x26f)]['y'] == _0x1a98d3['mo2']['x'] && (_0xe7ee3c = _0xa8b1c8['touches'][_0x3a12f2(0x790)](0x1)['pageX'], _0x1e901d = _0xa8b1c8[_0x3a12f2(0x38a)][_0x3a12f2(0x790)](0x1)['pageY']);
                        var _0x229fc2 = _0x3347d7 * 0.5 - 0x44,
                            _0x334d3b = _0x1d2cad * 0.5 - 0x44,
                            _0x1b307d = _0xe7ee3c - 0x6e,
                            _0x1299cb = _0x1e901d - 0x6e,
                            _0x169ea6 = _0xe7ee3c - 0x55,
                            _0x31d249 = _0x1e901d - 0x55;
                        _0x1a98d3['mo'] == 0x1 && _0x1a98d3[_0x3a12f2(0x670)]['x'] == -0x1 && _0x1a98d3[_0x3a12f2(0x670)]['y'] == -0x1 && (_0x4ef1fc['img_p_1'][_0x3a12f2(0x44e)] = 0x1, _0x4ef1fc[_0x3a12f2(0x4c4)]['x'] = _0x229fc2, _0x4ef1fc['img_p_1']['y'] = _0x334d3b, _0x4ef1fc[_0x3a12f2(0x4c4)][_0x3a12f2(0x287)] = !0x0), _0x1a98d3['mo'] == 0x2 && (_0x4ef1fc[_0x3a12f2(0x2df)][_0x3a12f2(0x44e)] = 0x1, _0x4ef1fc[_0x3a12f2(0x2df)]['x'] = _0x1b307d, _0x4ef1fc[_0x3a12f2(0x2df)]['y'] = _0x1299cb, _0x4ef1fc[_0x3a12f2(0x6b5)][_0x3a12f2(0x44e)] = 0x1, _0x4ef1fc[_0x3a12f2(0x6b5)]['x'] = _0x169ea6, _0x4ef1fc[_0x3a12f2(0x6b5)]['y'] = _0x31d249, _0x1a98d3[_0x3a12f2(0x670)]['x'] == -0x1 && _0x1a98d3['mo2']['y'] == -0x1 && (_0x4ef1fc[_0x3a12f2(0x4b8)]['alpha'] = 0x1, _0x4ef1fc[_0x3a12f2(0x4b8)]['x'] = _0x229fc2, _0x4ef1fc['img_p_2']['y'] = _0x334d3b, _0x4ef1fc[_0x3a12f2(0x4b8)][_0x3a12f2(0x287)] = !0x0)), _0x1a98d3['mo'] == 0x3 && btoa(_0x204e08) == _0x1a98d3[_0x3a12f2(0x4bf)] && (_0x4ef1fc[_0x3a12f2(0x62d)][_0x3a12f2(0x44e)] = 0x1, _0x4ef1fc['img_o_3']['x'] = _0x1b307d, _0x4ef1fc[_0x3a12f2(0x62d)]['y'] = _0x1299cb, _0x4ef1fc[_0x3a12f2(0x466)]['alpha'] = 0x1, _0x4ef1fc[_0x3a12f2(0x466)]['x'] = _0x169ea6, _0x4ef1fc[_0x3a12f2(0x466)]['y'] = _0x31d249, _0x1a98d3[_0x3a12f2(0x670)]['x'] == -0x1 && _0x1a98d3['mo2']['y'] == -0x1 && (_0x4ef1fc[_0x3a12f2(0x7c6)][_0x3a12f2(0x44e)] = 0x1, _0x4ef1fc[_0x3a12f2(0x7c6)]['x'] = _0x229fc2, _0x4ef1fc[_0x3a12f2(0x7c6)]['y'] = _0x334d3b, _0x4ef1fc[_0x3a12f2(0x7c6)][_0x3a12f2(0x287)] = !0x0)), _0x1a98d3['mo'] == 0x4 && btoa(_0x4dc57) == _0x1a98d3[_0x3a12f2(0x503)] && _0x1a98d3[_0x3a12f2(0x670)]['x'] == -0x1 && _0x1a98d3['mo2']['y'] == -0x1 && (_0x4ef1fc['img_p_2'][_0x3a12f2(0x44e)] = 0x1, _0x4ef1fc['img_p_2']['x'] = _0x229fc2, _0x4ef1fc['img_p_2']['y'] = _0x334d3b, _0x4ef1fc[_0x3a12f2(0x4b8)]['visible'] = !0x0), _0x1a98d3['mo'] == 0x5 && btoa(_0xde7e54) == _0x1a98d3[_0x3a12f2(0x329)] && _0x1a98d3[_0x3a12f2(0x670)]['x'] == -0x1 && _0x1a98d3['mo2']['y'] == -0x1 && (_0x4ef1fc[_0x3a12f2(0x4b8)][_0x3a12f2(0x44e)] = 0x1, _0x4ef1fc['img_p_2']['x'] = _0x229fc2, _0x4ef1fc[_0x3a12f2(0x4b8)]['y'] = _0x334d3b, _0x4ef1fc[_0x3a12f2(0x4b8)][_0x3a12f2(0x287)] = !0x0);
                    } else(_0xca1f06 >= 0x2 && _0x1a98d3[_0x3a12f2(0x670)]['x'] == -0x1 && _0x1a98d3[_0x3a12f2(0x670)]['y'] == -0x1 && btoa(_0xde7e54) == _0x1a98d3['d_3'] || _0xca1f06 == 0x1 && _0x1a98d3['mo'] == 0x4 && _0x43142a <= 0x28 && btoa(_0x3686a7) == _0x1a98d3[_0x3a12f2(0x61f)] || _0xca1f06 == 0x1 && _0x1a98d3['mo'] == 0x5 && _0x43142a <= 0x28 && btoa(_0x4dc57) == _0x1a98d3[_0x3a12f2(0x503)]) && (_0x1a98d3[_0x3a12f2(0x670)]['y'] = _0x37fb72, _0x4ef1fc['img_f']['visible'] = !0x0, _0x4ef1fc[_0x3a12f2(0x82f)]['visible'] = !0x0, _0x1a98d3['mo'] == 0x1 && (_0x4ef1fc[_0x3a12f2(0x4c4)][_0x3a12f2(0x287)] = !0x1, _0x4ef1fc['img_pf_1']['x'] = _0x4ef1fc[_0x3a12f2(0x4c4)]['x'], _0x4ef1fc[_0x3a12f2(0x82f)]['y'] = _0x4ef1fc[_0x3a12f2(0x4c4)]['y']), (_0x1a98d3['mo'] == 0x2 || _0x1a98d3['mo'] == 0x4 || _0x1a98d3['mo'] == 0x5) && (_0x4ef1fc['img_p_2']['visible'] = !0x1, _0x4ef1fc[_0x3a12f2(0x82f)]['x'] = _0x4ef1fc['img_p_2']['x'], _0x4ef1fc[_0x3a12f2(0x82f)]['y'] = _0x4ef1fc['img_p_2']['y']), _0x1a98d3['mo'] == 0x3 && btoa(_0xde7e54) == _0x1a98d3[_0x3a12f2(0x329)] && (_0x4ef1fc[_0x3a12f2(0x7c6)][_0x3a12f2(0x287)] = !0x1, _0x4ef1fc[_0x3a12f2(0x82f)]['x'] = _0x4ef1fc[_0x3a12f2(0x7c6)]['x'], _0x4ef1fc[_0x3a12f2(0x82f)]['y'] = _0x4ef1fc[_0x3a12f2(0x7c6)]['y']), _0x1a98d3['mo'] != 0x4 && _0x1a98d3['mo'] != 0x5 && (_0x4ef1fc[_0x3a12f2(0x307)]['x'] = _0xe7ee3c - 0x64, _0x4ef1fc[_0x3a12f2(0x307)]['y'] = _0x1e901d - 0x64), _0xf6fe71['eo'] = !0x0);;
                    _0xa8b1c8[_0x3a12f2(0x456)]();
                } else(_0xa8b1c8 = _0xa8b1c8 || window[_0x3a12f2(0x4d1)]) && (_0xf6fe71['eo'] = _0xa8b1c8['touches']['length'] >= 0x2), _0xa8b1c8[_0x3a12f2(0x456)]();
            }, !0x0), _0x2ff5c9[_0x422dd8(0x66a)](_0x422dd8(0x6eb), function(_0x23ffac) {
                var _0x4a21de = _0x422dd8;
                if (_0x2cbd14['on'] && _0x1a98d3[_0x4a21de(0x7cf)] && _0x1a98d3['mo'] != 0x6 && _0x1a98d3['s']) {
                    var _0x3d7ab1 = ooo['Xg']['Kf']['Wg']['Ah'],
                        _0x32734c = btoa(_0x1a98d3['c_1']);
                    (_0x23ffac = _0x23ffac || window[_0x4a21de(0x4d1)]) && ((_0x23ffac = _0x23ffac[_0x4a21de(0x381)][0x0])[_0x4a21de(0x4cc)] !== undefined ? _0x5c0e64(_0x23ffac[_0x4a21de(0x4cc)], _0x23ffac[_0x4a21de(0x5d1)]) : _0x5c0e64(_0x23ffac[_0x4a21de(0x6a6)], _0x23ffac[_0x4a21de(0x558)]));
                    var _0x3bc311 = btoa(_0x1a98d3[_0x4a21de(0x687)]),
                        _0xcad847 = _0x23ffac[_0x4a21de(0x330)];
                    _0xcad847 == _0x1a98d3[_0x4a21de(0x26f)]['x'] && _0x1a98d3['mo1']['y'] == -0x1 && btoa(_0x3bc311) == _0x1a98d3['d_2'] && (_0x1a98d3[_0x4a21de(0x26f)]['x'] = -0x1, _0x1a98d3['mo'] == 0x1 && (_0x3d7ab1[_0x4a21de(0x4c4)]['alpha'] = 0.25), _0x1a98d3['mo'] == 0x2 && (_0x3d7ab1[_0x4a21de(0x2df)][_0x4a21de(0x44e)] = 0.25, _0x3d7ab1['img_i_2'][_0x4a21de(0x44e)] = 0.25, _0x3d7ab1[_0x4a21de(0x4b8)][_0x4a21de(0x44e)] = 0.25), _0x1a98d3['mo'] == 0x3 && btoa(_0x32734c) == _0x1a98d3[_0x4a21de(0x61f)] && (_0x3d7ab1[_0x4a21de(0x62d)][_0x4a21de(0x44e)] = 0.25, _0x3d7ab1['img_i_3'][_0x4a21de(0x44e)] = 0.25, _0x3d7ab1[_0x4a21de(0x7c6)][_0x4a21de(0x44e)] = 0.25), _0x1a98d3['mo'] == 0x4 && (_0x3d7ab1['img_p_2'][_0x4a21de(0x44e)] = 0.25), _0x1a98d3['mo'] == 0x5 && (_0x3d7ab1['img_p_2'][_0x4a21de(0x44e)] = 0.25));
                    var _0x936640 = btoa(_0x1a98d3[_0x4a21de(0x6d1)]);
                    _0x1a98d3[_0x4a21de(0x670)]['x'] == -0x1 && _0xcad847 == _0x1a98d3[_0x4a21de(0x670)]['y'] && btoa(_0x936640) == _0x1a98d3[_0x4a21de(0x329)] && (_0x1a98d3[_0x4a21de(0x670)]['y'] = -0x1, _0x3d7ab1[_0x4a21de(0x307)]['visible'] = !0x1, _0x3d7ab1[_0x4a21de(0x82f)][_0x4a21de(0x287)] = !0x1, _0x1a98d3['mo'] == 0x1 && (_0x3d7ab1[_0x4a21de(0x4c4)]['visible'] = !0x0), (_0x1a98d3['mo'] == 0x2 || _0x1a98d3['mo'] == 0x4 && btoa(_0x3bc311) == _0x1a98d3[_0x4a21de(0x503)] || _0x1a98d3['mo'] == 0x5 && btoa(_0x936640) == _0x1a98d3[_0x4a21de(0x329)]) && (_0x3d7ab1[_0x4a21de(0x4b8)]['visible'] = !0x0), _0x1a98d3['mo'] == 0x3 && (_0x3d7ab1['img_p_3'][_0x4a21de(0x287)] = !0x0), (_0x1a98d3['mo'] == 0x4 || _0x1a98d3['mo'] == 0x5) && (_0x3d7ab1[_0x4a21de(0x307)][_0x4a21de(0x287)] = !0x0), _0xf6fe71['eo'] = !0x1);
                } else(_0x23ffac = _0x23ffac || window[_0x4a21de(0x4d1)]) && (_0xf6fe71['eo'] = _0x23ffac[_0x4a21de(0x38a)][_0x4a21de(0x883)] >= 0x2), _0x1a98d3['mobile'] && _0x1a98d3['s'] && (_0x23ffac = _0x23ffac || window['event']) && ((_0x23ffac = _0x23ffac[_0x4a21de(0x381)][0x0])[_0x4a21de(0x4cc)] !== undefined ? _0x5c0e64(_0x23ffac[_0x4a21de(0x4cc)], _0x23ffac['clientY']) : _0x5c0e64(_0x23ffac[_0x4a21de(0x6a6)], _0x23ffac[_0x4a21de(0x558)]));
            }, !0x0), _0x2ff5c9[_0x422dd8(0x66a)](_0x422dd8(0x732), function(_0x56a5bb) {
                var _0xb22a8a = _0x422dd8;
                (_0x56a5bb = _0x56a5bb || _0x158a86['c'][_0xb22a8a(0x4d1)] && f3(_0x56a5bb[_0xb22a8a(0x4cc)]) != _0xb22a8a(0x328)) && (_0xf6fe71['fo'] = _0x239c2a['ta'](_0x56a5bb[_0xb22a8a(0x5d1)] - _0x2ff5c9['offsetHeight'] * 0.5, _0x56a5bb[_0xb22a8a(0x4cc)] - _0x2ff5c9['offsetWidth'] * 0.5));
            }, !0x0), _0x2ff5c9[_0x422dd8(0x66a)]('mousedown', function(_0x134ca9) {
                _0xf6fe71['eo'] = !0x0;
            }, !0x0), _0x2ff5c9[_0x422dd8(0x66a)](_0x422dd8(0x410), function(_0x1a5781) {
                _0xf6fe71['eo'] = !0x1;
            }, !0x0), this['Wg'] = new _0x158a86['lh'](_0x5bccf3), this['go'] = _0x340748['ho'], this['fo'] = 0x0, this['eo'] = !0x1, _0x2cbd14[_0x422dd8(0x691)] = _0xf6fe71;
        }))['prototype']['Sa'] = function() {}, _0x2cece1['prototype']['ml'] = function() {
            _0x158a86['Nf']['rg'](!0x1), _0x39b888['f']['h'](_0x158a86['Uf']['Tf'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Qn'], 0x1), _0x39b888['f']['h'](_0x158a86['Uf']['Rn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Sn'], 0x32), _0x39b888['f']['g'](_0x158a86['Uf']['Tn'], 0x1f4), this['go'] === _0x340748['ho'] ? _0x39b888['f']['h'](_0x158a86['Uf']['Un'], 0x1) : _0x39b888['f']['g'](_0x158a86['Uf']['Un'], 0x1f4), _0x39b888['f']['h'](_0x158a86['Uf']['Vn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Wn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Xn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Yn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Zn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['$n'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['_n'], 0x32);
        }, _0x2cece1['prototype']['ho'] = function() {
            return this['go'] = _0x340748['ho'], this;
        }, _0x2cece1[_0x2b6b48(0x869)]['io'] = function() {
            return _0x39b888['f']['h'](_0x88389e, 0x1), _0x239c2a['Y'](function() {
                _0x39b888['f']['g'](_0x88389e, 0x1f4);
            }, 0xbb8), _0x39b888['f']['h'](_0x32ec14, 0x1), _0x239c2a['Y'](function() {
                _0x39b888['f']['g'](_0x32ec14, 0x1f4);
            }, 0x1f4), this['go'] = _0x340748['io'], this;
        }, _0x2cece1['prototype']['nl'] = function() {
            this['eo'] = !0x1, this['Wg']['qg'](), this['go'] === _0x340748['io'] && ooo['ij']['mf']();
        }, _0x2cece1[_0x2b6b48(0x869)]['qg'] = function() {
            this['Wg']['qg']();
        }, _0x2cece1[_0x2b6b48(0x869)]['ug'] = function(_0x406cd6, _0x2d9f82) {
            this['Wg']['ug'](_0x406cd6, _0x2d9f82);
        }, _0x2cece1[_0x2b6b48(0x869)]['jo'] = function(_0x56f7, _0x1f8ce1, _0x548518) {
            var _0x12c176 = _0x2b6b48,
                _0x227521, _0x46e440, _0x40922b;
            _0x1f8ce1 >= 0x1 && _0x1f8ce1 <= 0xa ? (_0x227521 = _0x239c2a['U'](_0x12c176(0x751) + _0x1f8ce1), _0x46e440 = _0x239c2a['U'](_0x12c176(0x251)), _0x40922b = _0x239c2a['U']('index.game.social.shareResult.messGood')[_0x12c176(0x5b7)]('{0}', _0x548518)[_0x12c176(0x5b7)](_0x12c176(0x7af), _0x56f7)[_0x12c176(0x5b7)](_0x12c176(0x736), _0x227521)) : (_0x227521 = '', _0x46e440 = _0x239c2a['U'](_0x12c176(0x45b)), _0x40922b = _0x239c2a['U']('index.game.social.shareResult.messNorm')['replace']('{0}', _0x548518)['replace'](_0x12c176(0x7af), _0x56f7));
            _0x2aa197[_0x12c176(0x1dd)](_0x239c2a['U'](_0x12c176(0x37e))), _0x465880[_0x12c176(0x1dd)](_0x56f7), _0x18e01d[_0x12c176(0x1dd)](_0x227521), _0x882cd2[_0x12c176(0x1dd)](_0x46e440);
            if (_0x2171ac['co']['bo']) {
                var _0x39f1d3, _0x466589, _0x838acd, _0x5ac6bd, _0x4af733, _0x6842ae, _0x32bbd0, _0x406862 = _0x239c2a['U'](_0x12c176(0x32c));
                _0x239c2a['U'](_0x12c176(0x234)), _0xb9df8e[_0x12c176(0x629)]()[_0x12c176(0x4e4)]((_0x39f1d3 = _0x406862, _0x466589 = _0x12c176(0x4dc), _0x838acd = _0x12c176(0x506), _0x5ac6bd = _0x40922b, _0x4af733 = _0x40922b, _0x6842ae = _0x12c176(0x798), (_0x32bbd0 = $('<div><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20version=\x221.1\x22\x20x=\x220\x22\x20y=\x220\x22\x20viewBox=\x220\x200\x20456\x20456\x22\x20xml:\x20space=\x22preserve\x22><rect\x20x=\x220\x22\x20y=\x220\x22\x20width=\x22456\x22\x20height=\x22456\x22\x20fill=\x22#517AD1\x22/><path\x20d=\x22M242.7\x20456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9\x2035.6-79.5\x2079.5-79.5h62v64.6h-44.4c-13.9\x200-25.3\x2011.3-25.3\x2025.3v50h68.5l-9.5\x2071.9h-59.1V456z\x22\x20fill=\x22#fff\x22/></svg><span>' + _0x39f1d3 + _0x12c176(0x84f)))[_0x12c176(0x615)](function() {
                    var _0x142321 = _0x12c176;
                    (typeof FB == 'undefined' ? _0x142321(0x328) : f3(FB)) !== 'undefined' && f3(FB['ui']) != _0x142321(0x328) && FB['ui']({
                        'method': _0x142321(0x677),
                        'display': 'popup',
                        'link': _0x466589,
                        'name': _0x838acd,
                        'caption': _0x5ac6bd,
                        'description': _0x4af733,
                        'picture': _0x6842ae
                    }, function() {});
                }), _0x32bbd0));
            }
        }, _0x2cece1['prototype']['ko'] = function() {
            return this['fo'];
        }, _0x2cece1[_0x2b6b48(0x869)]['lo'] = function() {
            return this['eo'];
        }, _0x340748 = {
            'ho': 0x0,
            'io': 0x1
        }, _0x158a86['Bk'] = _0x2cece1, _0x124291 = $(_0x2b6b48(0x4be)), _0xa6215f = $('#loading-progress-bar'), _0x273388 = $(_0x2b6b48(0x571)), (_0xb630f9 = _0x239c2a['ca'](_0x158a86['Uf'], function() {
            var _0x22bd0b = _0x2b6b48;
            _0x158a86['Uf'][_0x22bd0b(0x545)](this, _0x158a86['ll']['ao']), this['mo'] = -0x1, this['no'] = '';
        }))[_0x2b6b48(0x869)]['Sa'] = function() {}, _0xb630f9[_0x2b6b48(0x869)]['ml'] = function() {
            _0x158a86['Nf']['rg'](!0x0), _0x39b888['f']['g'](_0x158a86['Uf']['Tf'], 0x1f4), _0x39b888['f']['g'](_0x158a86['Uf']['Qn'], 0x1), _0x39b888['f']['h'](_0x158a86['Uf']['Rn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Sn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Tn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Un'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Vn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Wn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Xn'], 0x32), _0x39b888['f']['g'](_0x158a86['Uf']['Yn'], 0x1f4), _0x39b888['f']['h'](_0x158a86['Uf']['Zn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['$n'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['_n'], 0x32);
        }, _0xb630f9[_0x2b6b48(0x869)]['nl'] = function() {
            ooo['ij']['Ye'](_0x158a86['Pe']['Se']['Re']), ooo['Xg']['Ak']['wg'](), ooo['Xg']['Ak']['sg'](!0x0);
        }, _0xb630f9[_0x2b6b48(0x869)]['hl'] = function() {
            ooo['Xg']['Ak']['sg'](!0x1);
        }, _0xb630f9['prototype']['oo'] = function() {
            this['po']('', 0x0), _0x39b888['f']['g'](_0x124291, 0x64);
        }, _0xb630f9[_0x2b6b48(0x869)]['qo'] = function() {
            _0x39b888['f']['h'](_0x124291, 0x64);
        }, _0xb630f9[_0x2b6b48(0x869)]['po'] = function(_0x1657f7, _0x45a7fe) {
            var _0x2561b0 = _0x2b6b48;
            this['no'] !== _0x1657f7 && (this['no'] = _0x1657f7);
            var _0x12166d = _0x239c2a['fa'](_0x239c2a['_'](_0x45a7fe * 0x64), 0x0, 0x64);
            this['mo'] !== _0x12166d && (_0xa6215f['css'](_0x2561b0(0x1eb), _0x12166d + '%'), _0x273388['html'](_0x12166d + '\x20%'));
        }, _0x158a86['$k'] = _0xb630f9, _0x3f22f0 = $(_0x2b6b48(0x7c0)), $(_0x2b6b48(0x1fd)), $(_0x2b6b48(0x553)), _0x5cca57 = $(_0x2b6b48(0x1de)), _0x456cda = $(_0x2b6b48(0x2be)), _0x4e4444 = $(_0x2b6b48(0x480)), _0x1aa6b6 = $('#mm-loading-progress-bar'), _0x2c3b0c = $(_0x2b6b48(0x746)), $(_0x2b6b48(0x354)), _0x224d67 = $('#mm-skin-canv'), _0x248c06 = $(_0x2b6b48(0x515)), _0x15f7f9 = $(_0x2b6b48(0x7f3)), _0x36f41e = $('#mm-skin-over'), _0x540b8d = $(_0x2b6b48(0x560)), _0x4c3f65 = $(_0x2b6b48(0x2c3)), _0x49e678 = $(_0x2b6b48(0x214)), _0x21860f = $('#mm-action-play'), _0x3466e4 = $('#mm-action-guest'), _0xf6518b = $(_0x2b6b48(0x411)), _0x4cbcf5 = $(_0x2b6b48(0x745)), _0x18a09d = $('#mm-store'), _0x4c0ac7 = $('#mm-leaders'), _0x12b63e = $(_0x2b6b48(0x698)), _0x4fa828 = $('#mm-coins-box'), _0x11c68a = $(_0x2b6b48(0x877)), _0x22d8f6 = $(_0x2b6b48(0x24e)), _0xbb3875 = $('#mm-coins-val'), _0x505d29 = $(_0x2b6b48(0x7cd)), _0xdbd1f7 = $(_0x2b6b48(0x5df)), _0x2e7295 = $(_0x2b6b48(0x775)), (_0x3f650f = _0x239c2a['ca'](_0x158a86['Uf'], function() {
            var _0x5b1a9d = _0x2b6b48;
            _0x158a86['Uf'][_0x5b1a9d(0x545)](this, _0x158a86['ll']['kl']), this['mo'] = -0x1, this['no'] = '';
            var _0x26d7e5 = [_0x5b1a9d(0x50e), _0x5b1a9d(0x4c6), 'fuak', _0x5b1a9d(0x719), 'Name\x20Error', 'Ø¹Ø±Ø¶Ùƒ', _0x5b1a9d(0x34f), _0x5b1a9d(0x6b1), _0x5b1a9d(0x82d), 'Ø§Ø®ØªÙƒ', _0x5b1a9d(0x705), _0x5b1a9d(0x854), 'Ù‚ÙˆØ§Ø¯', _0x5b1a9d(0x3ee)];

            function _0x1c63d3(_0x3076e1) {
                var _0x13190a = _0x5b1a9d;
                if (!_0x3076e1) return '';
                return _0x3076e1['toLowerCase']()[_0x13190a(0x5b7)](/[^a-zA-Z0-9\u0600-\u06FF*]/g, '')[_0x13190a(0x5b7)](/[Ù€]/g, '')[_0x13190a(0x5b7)](/[Ù‹ÙŒÙÙŽÙÙÙ‘Ù’]/g, '')[_0x13190a(0x5b7)](/[Ø£Ø¥Ø¢Ø§]/g, 'Ø§')[_0x13190a(0x5b7)](/[Ù‰ÙŠ]/g, 'ÙŠ')[_0x13190a(0x5b7)](/[Ø©]/g, 'Ù‡');
            }

            function _0x190a21(_0x5b3c49, _0xb1e655) {
                var _0x2ce3ca = _0x5b1a9d;
                if (!_0x5b3c49) return !0x1;
                var _0x561732 = _0x5b3c49['replace'](/\*$/, ''),
                    _0x548bf0 = _0x1c63d3(_0x561732),
                    _0x2a2978 = Array[_0x2ce3ca(0x542)](_0xb1e655) ? _0xb1e655 : Object[_0x2ce3ca(0x5ab)](_0xb1e655);
                return _0x2a2978[_0x2ce3ca(0x73f)](function(_0xdc119b) {
                    var _0x593894 = _0x1c63d3(_0xdc119b);
                    return _0x548bf0['includes'](_0x593894);
                });
            }
            window[_0x5b1a9d(0x5ae)] = function(_0x505bf4) {
                var _0x5a0965 = _0x5b1a9d;
                if (!_0x505bf4 || _0x505bf4[_0x5a0965(0x1af)]() === '') return '';
                if (_0x190a21(_0x505bf4, _0x26d7e5)) return _0x5a0965(0x695);
                return _0x505bf4;
            }, fetch('https://wormx.store/2025/excel/name_banned_text.php')[_0x5b1a9d(0x384)](_0x456580 => _0x456580['json']())['then'](_0x2b034c => {
                var _0x1fc999 = _0x5b1a9d;
                _0x26d7e5 = Array[_0x1fc999(0x542)](_0x2b034c) ? _0x2b034c : Object['values'](_0x2b034c);
            })[_0x5b1a9d(0x68d)](_0x4d6d55 => {
                var _0x1d4276 = _0x5b1a9d;
                console['error'](_0x1d4276(0x50d), _0x4d6d55);
            }), this['ro'] = new _0x158a86['Lm'](_0x224d67), _0x49e678[_0x5b1a9d(0x615)](function() {
                ooo['ij']['if']();
            }), _0x224d67[_0x5b1a9d(0x615)](function() {
                ooo['ok']['nk']() && (ooo['ij']['if'](), ooo['Xg']['gl'](ooo['Xg']['Qk']));
            }), _0x248c06[_0x5b1a9d(0x615)](function() {
                ooo['ij']['if'](), ooo['so']['kk']();
            }), _0x15f7f9[_0x5b1a9d(0x615)](function() {
                ooo['ij']['if'](), ooo['so']['jk']();
            }), _0x4c3f65['keypress'](function(_0x5e8179) {
                var _0x1c1e72 = _0x5b1a9d;
                _0x1a98d3['r1'] = !0x1, _0x5e8179[_0x1c1e72(0x490)] === 0xd && ooo['to']();
            }), _0x21860f[_0x5b1a9d(0x615)](function() {
                var _0x58f631 = _0x5b1a9d,
                    _0x1e3561 = _0x4c3f65[_0x58f631(0x223)]();
                _0x1e3561 && _0x1e3561[_0x58f631(0x1af)]() !== '' && _0x4c3f65[_0x58f631(0x223)](window['handleNicknameChange'](_0x1e3561)), ooo['ij']['if'](), ooo['to']();
            }), _0x3466e4[_0x5b1a9d(0x615)](function() {
                var _0x540f61 = _0x5b1a9d,
                    _0x15f904 = _0x4c3f65[_0x540f61(0x223)]();
                _0x15f904 && _0x15f904['trim']() !== '' && _0x4c3f65['val'](window[_0x540f61(0x5ae)](_0x15f904)), ooo['ij']['if'](), ooo['to']();
            }), _0xf6518b[_0x5b1a9d(0x615)](function() {
                ooo['ij']['if'](), ooo['Xg']['gl'](ooo['Xg']['Nk']);
            }), _0x12b63e[_0x5b1a9d(0x615)](function() {
                ooo['ij']['if'](), ooo['Xg']['gl'](ooo['Xg']['Hi']);
            }), _0x4cbcf5[_0x5b1a9d(0x615)](function() {
                ooo['ok']['nk']() && (ooo['ij']['if'](), ooo['Xg']['gl'](ooo['Xg']['Lk']));
            }), _0x4c0ac7[_0x5b1a9d(0x615)](function() {
                ooo['ok']['nk']() && (ooo['ij']['if'](), ooo['Xg']['gl'](ooo['Xg']['Jk']));
            }), _0x18a09d[_0x5b1a9d(0x615)](function() {
                ooo['ok']['nk']() && (ooo['ij']['if'](), ooo['Xg']['gl'](ooo['Xg']['Sk']));
            }), _0x4fa828[_0x5b1a9d(0x615)](function() {
                ooo['ok']['nk']() && (ooo['ij']['if'](), ooo['Xg']['gl'](ooo['Xg']['Hk']));
            }), this['uo'](), this['vo']();
            var _0x39287b = _0x158a86['Cg']['Og'](_0x158a86['Cg']['Ig']);
            _0x39287b !== 'ARENA' && _0x39287b !== 'TEAM2' && (_0x39287b = 'ARENA'), _0x49e678[_0x5b1a9d(0x223)](_0x39287b);
        }))[_0x2b6b48(0x869)]['Sa'] = function() {
            var _0x17824a = this;

            function _0x3673e0(_0x1020a2, _0x354e0f) {
                var _0x3db904 = _0x563d;
                _0x1020a2['pm'] && (_0x354e0f[_0x3db904(0x668)] = _0x1020a2['pm']['Tj'], _0x354e0f[_0x3db904(0x2a3)] = _0x1020a2['pm']['Uj'], _0x354e0f[_0x3db904(0x5e3)] = _0x1020a2['pm']['Vj'], _0x354e0f[_0x3db904(0x3ca)] = _0x1020a2['pm']['Wj'], _0x354e0f[_0x3db904(0x5cb)] = _0x1020a2['pm']['Xj']);
            }
            ooo['ok']['fm'](function() {
                ooo['ok']['nk']() ? (_0x3673e0(_0x1a98d3, ooo['ok']['xl']), ooo['so']['lk'](ooo['ok']['Ul'](), _0x158a86['_j']['$j']), ooo['so']['lk'](ooo['ok']['Vl'](), _0x158a86['_j']['ak']), ooo['so']['lk'](ooo['ok']['Wl'](), _0x158a86['_j']['bk']), ooo['so']['lk'](ooo['ok']['Xl'](), _0x158a86['_j']['dk']), ooo['so']['lk'](ooo['ok']['Yl'](), _0x158a86['_j']['ck'])) : (ooo['so']['lk'](ooo['wo'](), _0x158a86['_j']['$j']), ooo['so']['lk'](0x0, _0x158a86['_j']['ak']), ooo['so']['lk'](0x0, _0x158a86['_j']['bk']), ooo['so']['lk'](0x0, _0x158a86['_j']['dk']), ooo['so']['lk'](0x0, _0x158a86['_j']['ck']));
            }), ooo['ok']['fm'](function() {
                var _0x12caf2 = _0x563d;
                _0x21860f[_0x12caf2(0x5f2)](ooo['ok']['nk']()), _0xf6518b[_0x12caf2(0x5f2)](!ooo['ok']['nk']()), _0x3466e4['toggle'](!ooo['ok']['nk']()), _0x4c0ac7[_0x12caf2(0x5f2)](ooo['ok']['nk']()), _0x18a09d[_0x12caf2(0x5f2)](ooo['ok']['nk']()), _0x4fa828[_0x12caf2(0x5f2)](ooo['ok']['nk']()), _0x4cbcf5[_0x12caf2(0x5f2)](!0x0), _0x12b63e['toggle'](!0x0), ooo['ok']['nk']() ? (_0x36f41e['hide'](), _0x22d8f6['html'](ooo['ok']['Ll']()), _0x11c68a[_0x12caf2(0x3e5)]('src', ooo['ok']['Nl']()), _0xbb3875[_0x12caf2(0x1dd)](ooo['ok']['Ql']()), _0x505d29['width'](ooo['ok']['Sl']() * 0x64 / ooo['ok']['Tl']() + '%'), _0xdbd1f7[_0x12caf2(0x1dd)](ooo['ok']['Sl']() + '\x20/\x20' + ooo['ok']['Tl']()), _0x2e7295[_0x12caf2(0x1dd)](ooo['ok']['Rl']()), _0x4c3f65[_0x12caf2(0x223)](ooo['ok']['Ml']())) : (_0x36f41e[_0x12caf2(0x5f2)](_0x2171ac['co']['bo'] && !ooo['xo']()), _0x22d8f6['html'](_0x22d8f6['data'](_0x12caf2(0x41a))), _0x11c68a[_0x12caf2(0x3e5)]('src', _0x2171ac['H']['M']), _0xbb3875[_0x12caf2(0x1dd)]('10'), _0x505d29[_0x12caf2(0x1eb)]('0'), _0xdbd1f7[_0x12caf2(0x1dd)](''), _0x2e7295[_0x12caf2(0x1dd)](0x1), _0x4c3f65['val'](_0x158a86['Cg']['Og'](_0x158a86['Cg']['Jg'])));
            }), ooo['so']['fk'](function() {
                _0x17824a['ro']['Gm'](ooo['so']['ek']());
            });
        }, _0x3f650f[_0x2b6b48(0x869)]['ml'] = function() {
            _0x158a86['Nf']['rg'](!0x0), _0x39b888['f']['g'](_0x158a86['Uf']['Tf'], 0x1f4), _0x39b888['f']['g'](_0x158a86['Uf']['Qn'], 0x1), _0x39b888['f']['g'](_0x158a86['Uf']['Rn'], 0x1f4), _0x39b888['f']['g'](_0x158a86['Uf']['Sn'], 0x1f4), _0x39b888['f']['h'](_0x158a86['Uf']['Tn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Un'], 0x32), _0x39b888['f']['g'](_0x158a86['Uf']['Vn'], 0x1f4), _0x39b888['f']['h'](_0x158a86['Uf']['Wn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Xn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Yn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Zn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['$n'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['_n'], 0x32);
        }, _0x3f650f[_0x2b6b48(0x869)]['yo'] = function() {
            _0x39b888['f']['g'](_0x3f22f0, 0x1f4), _0x39b888['f']['g'](_0x5cca57, 0x1f4), _0x39b888['f']['g'](_0x456cda, 0x1f4), _0x39b888['f']['h'](_0x4e4444, 0x64);
        }, _0x3f650f[_0x2b6b48(0x869)]['zo'] = function() {
            _0x39b888['f']['h'](_0x3f22f0, 0x64), _0x39b888['f']['h'](_0x5cca57, 0x64), _0x39b888['f']['h'](_0x456cda, 0x64), _0x39b888['f']['g'](_0x4e4444, 0x1f4);
        }, _0x3f650f[_0x2b6b48(0x869)]['po'] = function(_0x2cb8c4, _0x57ff0d) {
            var _0x18d266 = _0x2b6b48;
            this['no'] !== _0x2cb8c4 && (this['no'] = _0x2cb8c4);
            var _0x2f1e27 = _0x239c2a['fa'](_0x239c2a['_'](_0x57ff0d * 0x64), 0x0, 0x64);
            this['mo'] !== _0x2f1e27 && (_0x1aa6b6[_0x18d266(0x53b)]('width', _0x2f1e27 + '%'), _0x2c3b0c['html'](_0x2f1e27 + '\x20%'));
        }, _0x3f650f[_0x2b6b48(0x869)]['nl'] = function() {
            ooo['ij']['jf'](), this['ro']['rg'](!0x0);
        }, _0x3f650f['prototype']['hl'] = function() {
            this['ro']['rg'](!0x1);
        }, _0x3f650f[_0x2b6b48(0x869)]['qg'] = function() {
            this['ro']['qg']();
        }, _0x3f650f['prototype']['ug'] = function(_0x4e611b, _0x33afb4) {
            this['ro']['ug']();
        }, _0x3f650f[_0x2b6b48(0x869)]['Ml'] = function() {
            var _0x25561a = _0x2b6b48;
            return _0x4c3f65[_0x25561a(0x223)]();
        }, _0x3f650f[_0x2b6b48(0x869)]['Ao'] = function() {
            return _0x49e678['val']();
        }, _0x3f650f[_0x2b6b48(0x869)]['uo'] = function() {
            var _0x1be462 = _0x2b6b48,
                _0x584b15 = $(_0x1be462(0x632))[_0x1be462(0x734)](),
                _0x9d0635 = 0x0;
            _0x239c2a['X'](function() {
                var _0x447984 = _0x1be462;
                _0x584b15['eq'](_0x9d0635)[_0x447984(0x671)](0x1f4, function() {
                    var _0x1b4a40 = _0x447984;
                    ++_0x9d0635 >= _0x584b15[_0x1b4a40(0x883)] && (_0x9d0635 = 0x0), _0x584b15['eq'](_0x9d0635)[_0x1b4a40(0x28e)](0x1f4)[_0x1b4a40(0x53b)]('display', _0x1b4a40(0x39b));
                });
            }, 0xbb8);
        }, _0x3f650f[_0x2b6b48(0x869)]['vo'] = function() {
            var _0x32586b = _0x2b6b48;
            if (_0x2171ac['co']['bo'] && !ooo['xo']()) {
                _0x36f41e[_0x32586b(0x59a)]();
                var _0x5a0cce = _0x239c2a['U'](_0x32586b(0x4f7)),
                    _0xffb893 = encodeURIComponent(_0x239c2a['U'](_0x32586b(0x2a7)));
                _0x540b8d[_0x32586b(0x4e4)]($(_0x32586b(0x7bc) + _0xffb893 + _0x32586b(0x1d6) + _0x5a0cce + '</span></a>')[_0x32586b(0x615)](function _0x1925f3() {
                    ooo['Bo'](!0x0), _0x239c2a['Y'](function() {
                        _0x36f41e['hide']();
                    }, 0xbb8);
                }));
            }
        }, _0x158a86['Ck'] = _0x3f650f, (_0x2d0ec8 = _0x239c2a['ca'](_0x158a86['Uf'], function() {
            var _0x38617d = _0x2b6b48;
            _0x158a86['Uf'][_0x38617d(0x545)](this, _0x158a86['ll']['ao']);
        }))['prototype']['Sa'] = function() {}, _0x2d0ec8[_0x2b6b48(0x869)]['ml'] = function() {
            _0x158a86['Nf']['rg'](!0x0), _0x39b888['f']['h'](_0x158a86['Uf']['Tf'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Qn'], 0x1), _0x39b888['f']['h'](_0x158a86['Uf']['Rn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Sn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Tn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Un'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Vn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Wn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Xn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Yn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Zn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['$n'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['_n'], 0x32);
        }, _0x158a86['el'] = _0x2d0ec8, (_0x570e68 = _0x239c2a['ca'](_0x158a86['Uf'], function() {
            _0x158a86['Uf']['call'](this, _0x158a86['ll']['ao']);
        }))[_0x2b6b48(0x869)]['Sa'] = function() {}, _0x570e68[_0x2b6b48(0x869)]['ml'] = function() {
            _0x158a86['Nf']['rg'](!0x0), _0x39b888['f']['g'](_0x158a86['Uf']['Tf'], 0x1f4), _0x39b888['f']['g'](_0x158a86['Uf']['Qn'], 0x1), _0x39b888['f']['h'](_0x158a86['Uf']['Rn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Sn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Tn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Un'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Vn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Wn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Xn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Yn'], 0x32), _0x39b888['f']['g'](_0x158a86['Uf']['Zn'], 0x1f4), _0x39b888['f']['h'](_0x158a86['Uf']['$n'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['_n'], 0x32);
        }, _0x570e68['prototype']['nl'] = function() {}, _0x158a86['Xk'] = _0x570e68, _0x55c569 = $(_0x2b6b48(0x5a8)), (_0x16937d = _0x239c2a['ca'](_0x158a86['Uf'], function() {
            var _0x42521b = _0x2b6b48;
            _0x158a86['Uf'][_0x42521b(0x545)](this, _0x158a86['ll']['ao']), this['Co'] = [], this['Do'] = null;
        }))[_0x2b6b48(0x869)]['Sa'] = function() {}, _0x16937d[_0x2b6b48(0x869)]['ml'] = function() {
            _0x158a86['Nf']['rg'](!0x0), _0x39b888['f']['g'](_0x158a86['Uf']['Tf'], 0x1f4), _0x39b888['f']['g'](_0x158a86['Uf']['Qn'], 0x1), _0x39b888['f']['h'](_0x158a86['Uf']['Rn'], 0x32), _0x39b888['f']['g'](_0x158a86['Uf']['Sn'], 0x1f4), _0x39b888['f']['h'](_0x158a86['Uf']['Tn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Un'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Vn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Wn'], 0x32), _0x39b888['f']['g'](_0x158a86['Uf']['Xn'], 0x1f4), _0x39b888['f']['h'](_0x158a86['Uf']['Yn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Zn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['$n'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['_n'], 0x32);
        }, _0x16937d[_0x2b6b48(0x869)]['nl'] = function() {
            this['Eo']();
        }, _0x16937d[_0x2b6b48(0x869)]['ql'] = function() {
            var _0x20da59 = _0x2b6b48;
            return this['Do'] != null || this['Co'][_0x20da59(0x883)] > 0x0;
        }, _0x16937d['prototype']['Fo'] = function(_0x336769) {
            this['Co']['unshift'](_0x336769), _0x239c2a['Y'](function() {
                ooo['Xg']['ol']();
            }, 0x0);
        }, _0x16937d[_0x2b6b48(0x869)]['km'] = function(_0x453870) {
            var _0x425d61 = _0x2b6b48;
            this['Co'][_0x425d61(0x31a)](_0x453870), _0x239c2a['Y'](function() {
                ooo['Xg']['ol']();
            }, 0x0);
        }, _0x16937d[_0x2b6b48(0x869)]['Eo'] = function() {
            var _0x1a0007 = _0x2b6b48,
                _0x2a99d4 = this;
            if (this['Do'] == null) {
                if (this['Co']['length'] === 0x0) {
                    ooo['Xg']['jl']();
                    return;
                };
                var _0xeb0567 = this['Co'][_0x1a0007(0x412)]();
                this['Do'] = _0xeb0567;
                var _0x4a3c27 = _0xeb0567['ag']();
                _0x39b888['f']['g'](_0x4a3c27, 0x12c), _0x55c569[_0x1a0007(0x4e4)](_0x4a3c27), _0xeb0567['Go'] = function() {
                    var _0x3de1e9 = _0x1a0007;
                    _0x4a3c27[_0x3de1e9(0x671)](0x12c), _0x239c2a['Y'](function() {
                        _0x4a3c27['remove']();
                    }, 0x12c), _0x2a99d4['Do'] === _0xeb0567 && (_0x2a99d4['Do'] = null), _0x2a99d4['Eo']();
                }, _0xeb0567['nl']();
            }
        }, _0x158a86['Zk'] = _0x16937d, _0x158a86['ll'] = {
            'ao': 0x0,
            'kl': 0x1
        }, _0x4ce3da = $(_0x2b6b48(0x83c)), _0x4f73f8 = $(_0x2b6b48(0x658)), _0x3961bd = $(_0x2b6b48(0x7e1)), $(_0x2b6b48(0x602))[_0x2b6b48(0x615)](function() {
            ooo['ij']['if'](), ooo['Xg']['jl']();
        }), _0x4f73f8['click'](function() {
            ooo['ok']['nk']() && (ooo['ij']['if'](), ooo['Xg']['gl'](ooo['Xg']['Hk']));
        }), (_0x2d6a20 = _0x239c2a['ca'](_0x158a86['Uf'], function(_0x131326, _0x55c918) {
            var _0x28ad4c = _0x2b6b48;
            _0x158a86['Uf'][_0x28ad4c(0x545)](this, _0x158a86['ll']['kl']), this['Xa'] = _0x131326, this['Io'] = _0x55c918, this['Jo'] = [];
        }))[_0x2b6b48(0x869)]['Sa'] = function() {
            var _0x53eaeb = _0x2b6b48;
            _0x2d6a20[_0x53eaeb(0x4d7)][_0x53eaeb(0x869)]['Sa'][_0x53eaeb(0x545)](this), !_0x2d6a20['Ko'] && (_0x2d6a20['Ko'] = !0x0, ooo['ok']['fm'](function() {
                var _0x162a4 = _0x53eaeb;
                ooo['ok']['nk']() ? _0x3961bd[_0x162a4(0x1dd)](ooo['ok']['Ql']()) : _0x3961bd[_0x162a4(0x1dd)]('0');
            })), _0x39b888['f']['h'](_0x158a86['Ho']['Lo'], 0x64);
        }, _0x2d6a20['Mo'] = $(_0x2b6b48(0x33f)), _0x2d6a20['No'] = $(_0x2b6b48(0x5fd)), _0x2d6a20['Oo'] = $('#profile-view'), _0x2d6a20['Po'] = $('#login-view'), _0x2d6a20['Qo'] = $(_0x2b6b48(0x4c8)), _0x2d6a20['Ro'] = $(_0x2b6b48(0x84e)), _0x2d6a20['So'] = $(_0x2b6b48(0x320)), _0x2d6a20['To'] = $(_0x2b6b48(0x645)), _0x2d6a20['Uo'] = $('#withdraw-consent-view'), _0x2d6a20['Vo'] = $(_0x2b6b48(0x5af)), _0x2d6a20['Lo'] = $(_0x2b6b48(0x2c7)), _0x2d6a20[_0x2b6b48(0x869)]['ml'] = function() {
            var _0x20ef79 = _0x2b6b48;
            _0x158a86['Nf']['rg'](!0x0), _0x39b888['f']['g'](_0x158a86['Uf']['Tf'], 0x1), _0x39b888['f']['g'](_0x158a86['Uf']['Qn'], 0x1f4), _0x39b888['f']['g'](_0x158a86['Uf']['Rn'], 0xc8), _0x39b888['f']['g'](_0x158a86['Uf']['Sn'], 0xc8), _0x39b888['f']['h'](_0x158a86['Uf']['Tn'], 0xc8), _0x39b888['f']['h'](_0x158a86['Uf']['Un'], 0xc8), _0x39b888['f']['h'](_0x158a86['Uf']['Vn'], 0xc8), _0x39b888['f']['g'](_0x158a86['Uf']['Wn'], 0xc8), _0x39b888['f']['h'](_0x158a86['Uf']['Xn'], 0xc8), _0x39b888['f']['h'](_0x158a86['Uf']['Yn'], 0xc8), _0x39b888['f']['h'](_0x158a86['Uf']['Zn'], 0xc8), _0x39b888['f']['h'](_0x158a86['Uf']['$n'], 0xc8), _0x39b888['f']['h'](_0x158a86['Uf']['_n'], 0xc8), _0x4ce3da[_0x20ef79(0x1dd)](this['Xa']), _0x4f73f8['toggle'](this['Io']), this['Wo']();
        }, _0x2d6a20[_0x2b6b48(0x869)]['Wo'] = function() {}, _0x2d6a20[_0x2b6b48(0x869)]['Xo'] = function(_0x218ae4) {
            var _0x53c16e = _0x2b6b48,
                _0x4dac6b = this,
                _0x4854ed = _0x239c2a['va'](0x0, 0x7fffffff) & 0x7fffffff;
            return this['Jo'][_0x53c16e(0x31a)](_0x4854ed), _0x39b888['f']['g'](_0x158a86['Ho']['Lo'], 0x64), _0x239c2a['Y'](function() {
                _0x4dac6b['Yo'](_0x4854ed);
            }, _0x218ae4), new _0x1a1856(this, _0x4854ed);
        }, _0x2d6a20[_0x2b6b48(0x869)]['Yo'] = function(_0xc5e063) {
            var _0x3848a7 = _0x2b6b48,
                _0x3dafb0 = this['Jo'][_0x3848a7(0x5be)](_0xc5e063);
            !(_0x3dafb0 < 0x0) && (this['Jo'][_0x3848a7(0x312)](_0x3dafb0, 0x1), this['Jo']['length'] === 0x0 && _0x39b888['f']['h'](_0x158a86['Ho']['Lo'], 0x64));
        }, _0x158a86['Ho'] = _0x2d6a20;
        var _0x3ac5f6, _0x2d221a, _0x3c0f6b, _0xf8d884, _0x241bad, _0x36d3e9, _0x3adf28, _0x51366c, _0x596633, _0x88389e, _0x32ec14, _0xb9df8e, _0x2aa197, _0x465880, _0x18e01d, _0x882cd2, _0x5bccf3, _0x2cece1, _0x340748, _0x124291, _0xa6215f, _0x273388, _0xb630f9, _0x3f22f0, _0x5cca57, _0x456cda, _0x4e4444, _0x1aa6b6, _0x2c3b0c, _0x224d67, _0x248c06, _0x15f7f9, _0x36f41e, _0x540b8d, _0x4c3f65, _0x49e678, _0x21860f, _0x3466e4, _0xf6518b, _0x4cbcf5, _0x18a09d, _0x4c0ac7, _0x12b63e, _0x4fa828, _0x11c68a, _0x22d8f6, _0xbb3875, _0x505d29, _0xdbd1f7, _0x2e7295, _0x3f650f, _0x2d0ec8, _0x570e68, _0x55c569, _0x16937d, _0x4ce3da, _0x4f73f8, _0x3961bd, _0x2d6a20, _0x346fbb, _0x2f32a4, _0x272a06, _0x7519ad, _0x528093, _0x237c8a, _0x2a4672, _0x442138, _0x49d718, _0x173f17, _0x1ecaab, _0x43e300, _0x2e62dd, _0x3fc894, _0x4e5d75, _0x225f3e, _0x3adef5, _0x6beb87, _0xa27d68, _0x249cb4, _0x1ed95d, _0x524563, _0x2d290a, _0x55597f, _0x27c51a, _0x3e21b3, _0x1175d3, _0x1a8a6b, _0x48098b, _0x35b99b, _0x54aaeb, _0x226c7f, _0x1ecc00, _0x475d2b, _0x418696, _0x163ac7, _0x39695f, _0x3566b4, _0x4302af, _0x1fbbaa, _0x50d71b, _0x1b6a3a, _0x24caf6, _0x3825e9, _0x170bb6, _0x4d973e, _0x3feb77, _0x285582, _0x48b617, _0x42ef25, _0x271808, _0xf3d6c7, _0x2fca00, _0xefdc2e, _0x2d75f3, _0x7bcd4, _0x4fd2d3, _0x394c9e, _0x35db2d, _0x519803, _0x384781, _0x55b77f, _0x55cfc0, _0x5bba53, _0x4ea478, _0x33cae6, _0x3971f3, _0x4ec7c2, _0x51899c, _0x429093, _0x416f86, _0x1e893c, _0x3b9803, _0x4fe8c2, _0x19aa88, _0x4e2efe, _0x5de89a, _0x4277a3, _0x2813b8, _0x2eae5f, _0x1ac14c, _0x317d33, _0x24ee2e, _0x462c22, _0x4912b9, _0x4a06ac, _0x506e40, _0xa5afcc, _0x2bcf94, _0x31d489, _0x496054, _0x1aba81, _0x1a1856 = (function() {
            function _0x13db28(_0x4ce96c, _0x4a8a60) {
                this['Zo'] = _0x4ce96c, this['$o'] = _0x4a8a60;
            }
            return _0x13db28['prototype']['_o'] = function() {
                this['Zo']['Yo'](this['$o']);
            }, _0x13db28;
        }());
        _0x346fbb = $('#store-buy-coins_125000'), _0x2f32a4 = $(_0x2b6b48(0x1db)), _0x272a06 = $(_0x2b6b48(0x6bb)), _0x7519ad = $(_0x2b6b48(0x436)), _0x528093 = $(_0x2b6b48(0x76b)), _0x237c8a = $('#store-buy-coins_1250'), (_0x2a4672 = _0x239c2a['ca'](_0x158a86['Ho'], function() {
            var _0x11160a = _0x2b6b48;
            _0x158a86['Ho'][_0x11160a(0x545)](this, _0x239c2a['U'](_0x11160a(0x652)), !0x1);
            var _0x4381fa = this;
            _0x346fbb[_0x11160a(0x615)](function() {
                var _0x3b2ff7 = _0x11160a;
                ooo['ij']['if'](), _0x4381fa['ap'](_0x3b2ff7(0x4fc));
            }), _0x2f32a4[_0x11160a(0x615)](function() {
                var _0x313b4c = _0x11160a;
                ooo['ij']['if'](), _0x4381fa['ap'](_0x313b4c(0x2f1));
            }), _0x272a06['click'](function() {
                var _0x261fba = _0x11160a;
                ooo['ij']['if'](), _0x4381fa['ap'](_0x261fba(0x872));
            }), _0x7519ad[_0x11160a(0x615)](function() {
                var _0x337824 = _0x11160a;
                ooo['ij']['if'](), _0x4381fa['ap'](_0x337824(0x638));
            }), _0x528093[_0x11160a(0x615)](function() {
                ooo['ij']['if'](), _0x4381fa['ap']('coins_3250');
            }), _0x237c8a['click'](function() {
                ooo['ij']['if'](), _0x4381fa['ap']('coins_1250');
            });
        }))[_0x2b6b48(0x869)]['Sa'] = function() {
            var _0x936715 = _0x2b6b48;
            _0x2a4672[_0x936715(0x4d7)][_0x936715(0x869)]['Sa'][_0x936715(0x545)](this);
        }, _0x2a4672[_0x2b6b48(0x869)]['Wo'] = function() {
            _0x39b888['f']['g'](_0x158a86['Ho']['Mo'], 0xc8), _0x39b888['f']['h'](_0x158a86['Ho']['No'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Oo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Po'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Qo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Ro'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['So'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['To'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Uo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Vo'], 0x32);
        }, _0x2a4672[_0x2b6b48(0x869)]['nl'] = function() {
            ooo['ij']['jf']();
        }, _0x2a4672[_0x2b6b48(0x869)]['ap'] = function(_0x5180c7) {}, _0x158a86['Ik'] = _0x2a4672, _0x442138 = $(_0x2b6b48(0x6cc)), _0x49d718 = $('#leaders-button-level'), _0x173f17 = $('#leaders-button-highscore'), _0x1ecaab = $(_0x2b6b48(0x5ec)), _0x43e300 = _0x2b6b48(0x696), _0x2e62dd = _0x2b6b48(0x821), _0x3fc894 = _0x2b6b48(0x3ec), (_0x4e5d75 = _0x239c2a['ca'](_0x158a86['Ho'], function() {
            var _0x484c23 = _0x2b6b48;
            _0x158a86['Ho'][_0x484c23(0x545)](this, _0x239c2a['U'](_0x484c23(0x7e6)), !0x0);
            var _0x47252a = this;
            this['bp'] = {}, this['cp'] = {
                'dp': {
                    'ep': _0x49d718,
                    'fp': _0x43e300
                },
                'gp': {
                    'ep': _0x173f17,
                    'fp': _0x2e62dd
                },
                'hp': {
                    'ep': _0x1ecaab,
                    'fp': _0x3fc894
                }
            }, _0x49d718[_0x484c23(0x615)](function() {
                ooo['ij']['if'](), _0x47252a['ip'](_0x47252a['cp']['dp']);
            }), _0x173f17[_0x484c23(0x615)](function() {
                ooo['ij']['if'](), _0x47252a['ip'](_0x47252a['cp']['gp']);
            }), _0x1ecaab[_0x484c23(0x615)](function() {
                ooo['ij']['if'](), _0x47252a['ip'](_0x47252a['cp']['hp']);
            });
        }))[_0x2b6b48(0x869)]['Sa'] = function() {
            var _0x235132 = _0x2b6b48;
            _0x4e5d75[_0x235132(0x4d7)][_0x235132(0x869)]['Sa'][_0x235132(0x545)](this);
        }, _0x4e5d75['prototype']['Wo'] = function() {
            _0x39b888['f']['h'](_0x158a86['Ho']['Mo'], 0x32), _0x39b888['f']['g'](_0x158a86['Ho']['No'], 0xc8), _0x39b888['f']['h'](_0x158a86['Ho']['Oo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Po'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Qo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Ro'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['So'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['To'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Uo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Vo'], 0x32);
        }, _0x4e5d75['prototype']['nl'] = function() {
            var _0x1d1bcb = _0x2b6b48,
                _0x191ccd = this;
            ooo['ij']['jf']();
            var _0x3ef331 = this['Xo'](0x1388),
                _0xa1f3bf = _0x2171ac['H']['J'] + _0x1d1bcb(0x218);
            _0x239c2a['Aa'](_0xa1f3bf, function() {
                var _0x22bfa0 = {
                    [_0x43e300]: [],
                    [_0x2e62dd]: [],
                    [_0x3fc894]: []
                };
                _0x191ccd['bp'] = _0x22bfa0, _0x191ccd['ip'](_0x191ccd['jp'] ?? _0x191ccd['cp']['dp']), _0x3ef331['_o']();
            }, function(_0x2131cd) {
                _0x191ccd['bp'] = _0x2131cd, _0x191ccd['ip'](_0x191ccd['jp'] ?? _0x191ccd['cp']['dp']), _0x3ef331['_o']();
            });
        }, _0x4e5d75[_0x2b6b48(0x869)]['ip'] = function(_0xe74941) {
            var _0x58ca91 = _0x2b6b48;
            this['jp'] = _0xe74941;
            for (var _0x4e8e51 in this['cp']) {
                this['cp'][_0x58ca91(0x6f6)](_0x4e8e51) && this['cp'][_0x4e8e51]['ep'][_0x58ca91(0x1c5)]('pressed');
            };
            this['jp']['ep'][_0x58ca91(0x60d)](_0x58ca91(0x20d));
            for (var _0x30959c = this['bp'][this['jp']['fp']], _0x564cd8 = '', _0x2998fd = 0x0; _0x2998fd < _0x30959c['length']; _0x2998fd++) {
                var _0x3abe59 = _0x30959c[_0x2998fd];
                _0x564cd8 += '<div\x20class=\x22table-row\x22><span>' + (_0x2998fd + 0x1) + _0x58ca91(0x7df) + _0x3abe59['avatarUrl'] + _0x58ca91(0x360) + _0x3abe59[_0x58ca91(0x3b5)] + _0x58ca91(0x7b6) + _0x3abe59[_0x58ca91(0x4d6)] + _0x58ca91(0x7b6) + _0x3abe59[_0x58ca91(0x2ee)] + '</span><span>' + _0x3abe59[_0x58ca91(0x6ae)] + '\x20/\x20' + _0x3abe59[_0x58ca91(0x819)] + _0x58ca91(0x84f);
            };
            _0x442138[_0x58ca91(0x629)](), _0x442138[_0x58ca91(0x4e4)](_0x564cd8);
        }, _0x158a86['Kk'] = _0x4e5d75, _0x225f3e = $(_0x2b6b48(0x2eb)), _0x3adef5 = $('#popup-login-fb'), (_0x6beb87 = _0x239c2a['ca'](_0x158a86['Ho'], function() {
            var _0x5bc788 = _0x2b6b48,
                _0x18cce4 = this;
            _0x158a86['Ho'][_0x5bc788(0x545)](this, _0x239c2a['U'](_0x5bc788(0x7ad)), !0x1), _0x225f3e['click'](function() {
                ooo['ij']['if']();
                var _0x1a9cb5 = _0x18cce4['Xo'](0x2710);
                _0x239c2a['Y'](function() {
                    ooo['ok']['sm'](function() {
                        ooo['ok']['nk']() && ooo['ij']['mf'](), _0x1a9cb5['_o']();
                    });
                }, 0x1f4);
            }), _0x3adef5[_0x5bc788(0x615)](function() {
                ooo['ij']['if']();
                var _0xb12dcd = _0x18cce4['Xo'](0x2710);
                _0x239c2a['Y'](function() {
                    ooo['ok']['pm'](function() {
                        ooo['ok']['nk']() && ooo['ij']['mf'](), _0xb12dcd['_o']();
                    });
                }, 0x1f4);
            });
        }))[_0x2b6b48(0x869)]['Sa'] = function() {
            var _0x3a4a61 = _0x2b6b48;
            _0x6beb87['parent'][_0x3a4a61(0x869)]['Sa'][_0x3a4a61(0x545)](this);
        }, _0x6beb87[_0x2b6b48(0x869)]['Wo'] = function() {
            _0x39b888['f']['h'](_0x158a86['Ho']['Mo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['No'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Oo'], 0x32), _0x39b888['f']['g'](_0x158a86['Ho']['Po'], 0xc8), _0x39b888['f']['h'](_0x158a86['Ho']['Qo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Ro'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['So'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['To'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Uo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Vo'], 0x32);
        }, _0x6beb87['prototype']['nl'] = function() {
            ooo['ij']['jf']();
        }, _0x158a86['Ok'] = _0x6beb87, _0xa27d68 = $('#profile-avatar'), _0x249cb4 = $('#profile-username'), _0x1ed95d = $(_0x2b6b48(0x2a9)), _0x524563 = $('#profile-experience-val'), _0x2d290a = $('#profile-level'), _0x55597f = $('#profile-stat-highScore'), _0x27c51a = $(_0x2b6b48(0x1c8)), _0x3e21b3 = $(_0x2b6b48(0x32e)), _0x1175d3 = $('#profile-stat-headshots'), _0x1a8a6b = $('#profile-stat-gamesPlayed'), _0x48098b = $('#profile-stat-totalTimeSpent'), _0x35b99b = $('#profile-stat-registrationDate'), (_0x54aaeb = _0x239c2a['ca'](_0x158a86['Ho'], function() {
            var _0x56d709 = _0x2b6b48;
            _0x158a86['Ho'][_0x56d709(0x545)](this, _0x239c2a['U'](_0x56d709(0x494)), !0x0);
        }))[_0x2b6b48(0x869)]['Sa'] = function() {
            var _0x1f46d5 = _0x2b6b48;
            _0x54aaeb['parent'][_0x1f46d5(0x869)]['Sa']['call'](this);
        }, _0x54aaeb[_0x2b6b48(0x869)]['Wo'] = function() {
            _0x39b888['f']['h'](_0x158a86['Ho']['Mo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['No'], 0x32), _0x39b888['f']['g'](_0x158a86['Ho']['Oo'], 0xc8), _0x39b888['f']['h'](_0x158a86['Ho']['Po'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Qo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Ro'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['So'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['To'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Uo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Vo'], 0x32);
        }, _0x54aaeb[_0x2b6b48(0x869)]['nl'] = function() {
            var _0x5edd6d = _0x2b6b48;
            ooo['ij']['jf']();
            var _0x1275c9 = ooo['ok']['dm'](),
                _0x3665af = moment([_0x1275c9[_0x5edd6d(0x6ff)], _0x1275c9[_0x5edd6d(0x3e6)] - 0x1, _0x1275c9[_0x5edd6d(0x680)]])['format']('LL');
            _0x249cb4[_0x5edd6d(0x1dd)](ooo['ok']['Ll']()), _0xa27d68[_0x5edd6d(0x3e5)](_0x5edd6d(0x440), ooo['ok']['Nl']()), _0x1ed95d[_0x5edd6d(0x1eb)](ooo['ok']['Sl']() * 0x64 / ooo['ok']['Tl']() + '%'), _0x524563[_0x5edd6d(0x1dd)](ooo['ok']['Sl']() + _0x5edd6d(0x3e3) + ooo['ok']['Tl']()), _0x2d290a[_0x5edd6d(0x1dd)](ooo['ok']['Rl']()), _0x55597f['html'](ooo['ok']['Zl']()), _0x27c51a[_0x5edd6d(0x1dd)](_0x239c2a['$'](ooo['ok']['$l']())), _0x3e21b3[_0x5edd6d(0x1dd)](ooo['ok']['_l']()), _0x1175d3[_0x5edd6d(0x1dd)](ooo['ok']['am']()), _0x1a8a6b[_0x5edd6d(0x1dd)](ooo['ok']['bm']()), _0x48098b[_0x5edd6d(0x1dd)](_0x239c2a['$'](ooo['ok']['cm']())), _0x35b99b[_0x5edd6d(0x1dd)](_0x3665af);
        }, _0x158a86['Mk'] = _0x54aaeb, _0x226c7f = $(_0x2b6b48(0x4ba)), _0x1ecc00 = $(_0x2b6b48(0x78a)), _0x475d2b = $(_0x2b6b48(0x791)), _0x418696 = $(_0x2b6b48(0x359)), _0x163ac7 = $(_0x2b6b48(0x667)), _0x39695f = $(_0x2b6b48(0x603)), _0x3566b4 = $('#popup-delete-account-container'), _0x4302af = $('#popup-withdraw-consent'), (_0x1fbbaa = _0x239c2a['ca'](_0x158a86['Ho'], function() {
            var _0x37d0a2 = _0x2b6b48;
            _0x158a86['Ho'][_0x37d0a2(0x545)](this, _0x239c2a['U'](_0x37d0a2(0x25c)), !0x1);
            var _0x396888 = this;
            _0x226c7f[_0x37d0a2(0x615)](function() {
                var _0x4d11cc = _0x37d0a2,
                    _0x3b086d = !!_0x226c7f['prop'](_0x4d11cc(0x74b));
                _0x158a86['Cg']['Ng'](_0x158a86['Cg']['Fg'], _0x3b086d, 0x1e), ooo['ij']['$e'](_0x3b086d), ooo['ij']['if']();
            }), _0x1ecc00[_0x37d0a2(0x615)](function() {
                var _0x282fcb = _0x37d0a2,
                    _0x4ade1e = !!_0x1ecc00['prop'](_0x282fcb(0x74b));
                _0x158a86['Cg']['Ng'](_0x158a86['Cg']['Gg'], _0x4ade1e, 0x1e), ooo['ij']['Xe'](_0x4ade1e), ooo['ij']['if']();
            }), _0x475d2b[_0x37d0a2(0x615)](function() {
                ooo['ij']['if']();
            }), _0x418696[_0x37d0a2(0x615)](function() {
                ooo['ij']['if'](), _0x396888['Xo'](0x1f4), ooo['ok']['qm']();
            }), _0x39695f['click'](function() {
                ooo['ok']['nk']() ? (ooo['ij']['if'](), ooo['Xg']['gl'](ooo['Xg']['Fk'])) : ooo['ij']['nf']();
            }), _0x4302af[_0x37d0a2(0x615)](function() {
                ooo['kp']() ? (ooo['ij']['if'](), ooo['Xg']['gl'](ooo['Xg']['Dk'])) : ooo['ij']['nf']();
            });
        }))[_0x2b6b48(0x869)]['Sa'] = function() {
            var _0x32d693 = _0x2b6b48,
                _0x4c3f01, _0x360016, _0x532c57;
            _0x1fbbaa[_0x32d693(0x4d7)][_0x32d693(0x869)]['Sa'][_0x32d693(0x545)](this), _0x4c3f01 = _0x158a86['Cg']['Og'](_0x158a86['Cg']['Fg']) !== 'false', _0x226c7f[_0x32d693(0x84a)](_0x32d693(0x74b), _0x4c3f01), ooo['ij']['$e'](_0x4c3f01), _0x360016 = _0x158a86['Cg']['Og'](_0x158a86['Cg']['Gg']) !== _0x32d693(0x21e), _0x1ecc00[_0x32d693(0x84a)](_0x32d693(0x74b), _0x360016), ooo['ij']['Xe'](_0x360016), _0x532c57 = _0x158a86['Cg']['Og'](_0x158a86['Cg']['Eg']) !== _0x32d693(0x21e), _0x475d2b[_0x32d693(0x84a)](_0x32d693(0x74b), _0x532c57), ooo['ok']['em'](function() {
                var _0x33cb9f = _0x32d693;
                _0x163ac7['toggle'](ooo['ok']['nk']()), _0x3566b4[_0x33cb9f(0x5f2)](ooo['ok']['nk']());
            });
        }, _0x1fbbaa['prototype']['Wo'] = function() {
            _0x39b888['f']['h'](_0x158a86['Ho']['Mo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['No'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Oo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Po'], 0x32), _0x39b888['f']['g'](_0x158a86['Ho']['Qo'], 0xc8), _0x39b888['f']['h'](_0x158a86['Ho']['Ro'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['So'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['To'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Uo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Vo'], 0x32);
        }, _0x1fbbaa[_0x2b6b48(0x869)]['nl'] = function() {
            var _0x11b50a = _0x2b6b48;
            ooo['ij']['jf'](), ooo['kp']() ? _0x4302af[_0x11b50a(0x59a)]() : _0x4302af[_0x11b50a(0x289)]();
        }, _0x1fbbaa[_0x2b6b48(0x869)]['Gi'] = function() {
            var _0x362fc2 = _0x2b6b48;
            return _0x475d2b[_0x362fc2(0x84a)](_0x362fc2(0x74b));
        }, _0x158a86['Pk'] = _0x1fbbaa, _0x50d71b = $(_0x2b6b48(0x7e2)), _0x1b6a3a = $(_0x2b6b48(0x580)), _0x24caf6 = $(_0x2b6b48(0x40d)), _0x3825e9 = $(_0x2b6b48(0x7b4)), _0x170bb6 = $(_0x2b6b48(0x2b3)), _0x4d973e = $(_0x2b6b48(0x451)), _0x3feb77 = $(_0x2b6b48(0x806)), _0x285582 = $(_0x2b6b48(0x255)), _0x48b617 = $('#store-view-prev'), _0x42ef25 = $(_0x2b6b48(0x6b2)), (_0x271808 = _0x239c2a['ca'](_0x158a86['Ho'], function() {
            var _0x3de190 = _0x2b6b48;
            _0x158a86['Ho']['call'](this, _0x239c2a['U'](_0x3de190(0x2aa)), !0x0);
            var _0x266e03 = this;
            this['lp'] = null, this['mp'] = [], this['np'] = {}, this['op'] = new _0x158a86['Lm'](_0x50d71b), _0x4d973e[_0x3de190(0x615)](function() {
                ooo['ij']['if'](), _0x266e03['pp']();
            }), _0x48b617[_0x3de190(0x615)](function() {
                ooo['ij']['if'](), _0x266e03['lp']['qp']();
            }), _0x42ef25[_0x3de190(0x615)](function() {
                ooo['ij']['if'](), _0x266e03['lp']['rp']();
            });
        }))[_0x2b6b48(0x869)]['Sa'] = function() {
            var _0x588b7f = _0x2b6b48;
            _0x271808[_0x588b7f(0x4d7)][_0x588b7f(0x869)]['Sa']['call'](this);
            var _0xae37fe = this;
            ooo['ud']['Jc'](function() {
                var _0x9145b1 = _0x588b7f,
                    _0x54acd1 = ooo['ud']['Gc']();
                _0xae37fe['mp'] = [];
                for (var _0x1a07d9 = 0x0; _0x1a07d9 < _0x54acd1[_0x9145b1(0x5f3)][_0x9145b1(0x883)]; _0x1a07d9++) {
                    _0xae37fe['mp']['push'](new _0xf3d6c7(_0xae37fe, _0x54acd1['skinGroupArrayDict'][_0x1a07d9]));
                };
                _0xae37fe['np'] = {};
                for (var _0x44b750 = 0x0; _0x44b750 < _0x54acd1[_0x9145b1(0x2c9)][_0x9145b1(0x883)]; _0x44b750++) {
                    var _0x979de5 = _0x54acd1[_0x9145b1(0x2c9)][_0x44b750];
                    _0xae37fe['np'][_0x979de5['id']] = _0x979de5;
                };
                _0xae37fe['sp']();
            }), this['tp'](!0x1), ooo['so']['fk'](function() {
                _0xae37fe['tp'](!0x1);
            });
        }, _0x271808[_0x2b6b48(0x869)]['Wo'] = function() {
            _0x39b888['f']['h'](_0x158a86['Ho']['Mo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['No'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Oo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Po'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Qo'], 0x32), _0x39b888['f']['g'](_0x158a86['Ho']['Ro'], 0xc8), _0x39b888['f']['h'](_0x158a86['Ho']['So'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['To'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Uo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Vo'], 0x32);
        }, _0x271808[_0x2b6b48(0x869)]['nl'] = function() {
            ooo['ij']['Ye'](_0x158a86['Pe']['Se']['Jf']), ooo['ij']['jf'](), this['sp'](), this['op']['rg'](!0x0);
        }, _0x271808[_0x2b6b48(0x869)]['hl'] = function() {
            this['op']['rg'](!0x1);
        }, _0x271808[_0x2b6b48(0x869)]['qg'] = function() {
            this['op']['qg']();
        }, _0x271808[_0x2b6b48(0x869)]['ug'] = function(_0x30e279, _0x1c0c15) {
            this['op']['ug']();
        }, _0x271808[_0x2b6b48(0x869)]['sp'] = function() {
            var _0x4d9bb7 = _0x2b6b48,
                _0x11eec4 = this,
                _0x198948 = this;
            _0x285582['empty']();
            for (var _0x6cbee4 = 0x0; _0x6cbee4 < this['mp'][_0x4d9bb7(0x883)]; _0x6cbee4++) {
                (function(_0x4ced80) {
                    var _0x66e26d = _0x4d9bb7,
                        _0x3c1a14 = _0x11eec4['mp'][_0x4ced80],
                        _0x35d4f8 = _0x158a86['d'][_0x66e26d(0x706)]('li');
                    _0x285582[_0x66e26d(0x4e4)](_0x35d4f8);
                    var _0x133dcd = $(_0x35d4f8);
                    _0x198948['xp'] && _0x198948['xp'][_0x66e26d(0x3d7)] && _0x133dcd[_0x66e26d(0x60d)]('iscustom'), _0x133dcd[_0x66e26d(0x1dd)](_0x3c1a14['up']()), _0x133dcd[_0x66e26d(0x615)](function() {
                        ooo['ij']['if'](), _0x198948['vp'](_0x3c1a14);
                    }), _0x3c1a14['wp'] = _0x133dcd;
                }(_0x6cbee4));
            };
            if (this['mp'][_0x4d9bb7(0x883)] > 0x0) {
                var _0x495eed = ooo['so']['Zj'](_0x158a86['_j']['$j']);
                for (var _0x34f8a9 = 0x0; _0x34f8a9 < this['mp'][_0x4d9bb7(0x883)]; _0x34f8a9++) {
                    var _0x317abe = this['mp'][_0x34f8a9];
                    for (var _0x5aef8e = _0x317abe['xp']['list'], _0x425fce = 0x0; _0x425fce < _0x5aef8e[_0x4d9bb7(0x883)]; _0x425fce++) {
                        if (_0x5aef8e[_0x425fce] === _0x495eed) {
                            _0x317abe['yp'] = _0x425fce, this['vp'](_0x317abe);
                            return;
                        }
                    }
                };
                this['vp'](this['mp'][0x0]);
            }
        }, _0x271808[_0x2b6b48(0x869)]['vp'] = function(_0x3b94d3) {
            var _0x139fd4 = _0x2b6b48;
            if (this['lp'] !== _0x3b94d3) {
                this['lp'] = _0x3b94d3, _0x285582['children']()[_0x139fd4(0x1c5)](_0x139fd4(0x20d));
                this['lp']['wp'] && this['lp']['wp'][_0x139fd4(0x60d)]('pressed');
                _0x24caf6[_0x139fd4(0x1dd)]('');
                if (_0x3b94d3['xp'] != null) {
                    var _0xba040a = ooo['ud']['Gc']()[_0x139fd4(0x6ee)][_0x3b94d3['xp'][_0x139fd4(0x1ff)]];
                    _0xba040a != null && _0x24caf6[_0x139fd4(0x1dd)](_0x239c2a['aa'](_0x239c2a['V'](_0xba040a)));
                };
                this['tp'](!0x0);
            }
        }, _0x271808['prototype']['zp'] = function() {
            return this['lp'] == null ? _0x158a86['yj']['Aj']() : this['lp']['Ap']();
        }, _0x271808[_0x2b6b48(0x869)]['pp'] = function() {
            var _0xc597c0 = this['zp']();
            if (_0xc597c0['Cj']()) {
                var _0x460c6f = _0xc597c0['Mc']();
                this['Bp'](_0x460c6f);
            }
        }, _0x271808[_0x2b6b48(0x869)]['Bp'] = function(_0x27a754) {
            var _0x5f4365 = ooo['so']['mk'](_0x27a754, _0x158a86['_j']['$j']);
            if (_0x5f4365 != null) {
                var _0x39c83c = _0x5f4365['pk']();
                if (!(ooo['ok']['Ql']() < _0x39c83c)) {
                    var _0x1906b2 = ooo['so']['Zj'](_0x158a86['_j']['$j']),
                        _0x4b19b7 = ooo['so']['Zj'](_0x158a86['_j']['ak']),
                        _0xf08b30 = ooo['so']['Zj'](_0x158a86['_j']['bk']),
                        _0x50b60c = ooo['so']['Zj'](_0x158a86['_j']['dk']),
                        _0xb98ac0 = ooo['so']['Zj'](_0x158a86['_j']['ck']),
                        _0x466a5c = this['Xo'](0x1388);
                    ooo['ok']['nm'](_0x27a754, _0x158a86['_j']['$j'], function() {
                        _0x466a5c['_o'](), ooo['Xg']['gl'](ooo['Xg']['_k']);
                    }, function() {
                        ooo['ok']['hm'](function() {
                            ooo['so']['lk'](_0x1906b2, _0x158a86['_j']['$j']), ooo['so']['lk'](_0x4b19b7, _0x158a86['_j']['ak']), ooo['so']['lk'](_0xf08b30, _0x158a86['_j']['bk']), ooo['so']['lk'](_0x50b60c, _0x158a86['_j']['dk']), ooo['so']['lk'](_0xb98ac0, _0x158a86['_j']['ck']), ooo['so']['lk'](_0x27a754, _0x158a86['_j']['$j']), _0x466a5c['_o']();
                        });
                    });
                }
            }
        }, _0x271808['prototype']['tp'] = function(_0x320296) {
            var _0x189d23 = _0x2b6b48,
                _0x15590b = ooo['so']['ek'](),
                _0x446a2a = this['zp']();
            if (_0x446a2a['Cj']()) {
                var _0x4553fd = _0x446a2a['Mc'](),
                    _0x2fb85d = ooo['so']['mk'](_0x4553fd, _0x158a86['_j']['$j']),
                    _0x46602d = !0x1;
                $('#add-to-favorites-skin')[_0x189d23(0x483)](), $(_0x189d23(0x7fc))['remove'](), $(_0x189d23(0x758))['remove'](), $(_0x189d23(0x7b0))[_0x189d23(0x483)](), $('.favorites-popup')[_0x189d23(0x483)]();
                if (ooo['so']['ik'](_0x4553fd, _0x158a86['_j']['$j'])) {
                    _0x3825e9['hide'](), _0x4d973e[_0x189d23(0x289)]();
                    var _0x36b619 = $(_0x189d23(0x28b)),
                        _0x3831b1 = $(_0x189d23(0x4b3)),
                        _0x34e35b = $('<button\x20id=\x27manage-favorites-skin\x27\x20class=\x27favorite-button\x27\x20style=\x27background:#2196F3;color:white;border:none;padding:5px\x2010px;border-radius:3px;cursor:pointer;white-space:nowrap;box-shadow:0\x202px\x204px\x20rgba(0,0,0,0.2);\x20margin:\x20412px\x2020px\x2020px\x208px;\x27><span\x20style=\x27font-size:14px;\x27>â˜°</span>\x20Favorite</button>');
                    _0x36b619[_0x189d23(0x4e4)](_0x3831b1), _0x36b619['append'](_0x34e35b), _0x285582[_0x189d23(0x4e4)](_0x36b619);
                    var _0x193653 = $(_0x189d23(0x70f))[_0x189d23(0x3e5)]('id', _0x189d23(0x55c))['css']({
                            'position': _0x189d23(0x341),
                            'left': _0x189d23(0x5b5),
                            'top': _0x189d23(0x1bc),
                            'font-size': _0x189d23(0x419),
                            'color': '#fff',
                            'z-index': _0x189d23(0x232)
                        })[_0x189d23(0x2a5)](_0x189d23(0x2ac))[_0x189d23(0x6c4)](_0x285582),
                        _0x459692 = $(_0x189d23(0x5d2));
                    $('body')[_0x189d23(0x4e4)](_0x459692), $(_0x189d23(0x851))[_0x189d23(0x615)](function() {
                        var _0x2759ea = _0x189d23;
                        $(_0x2759ea(0x523))[_0x2759ea(0x289)]();
                    }), $(document)['mouseup'](function(_0x55c24f) {
                        var _0x518c55 = _0x189d23,
                            _0x3d2cf0 = $('.favorites-popup');
                        !_0x3d2cf0['is'](_0x55c24f[_0x518c55(0x24d)]) && _0x3d2cf0[_0x518c55(0x49a)](_0x55c24f[_0x518c55(0x24d)])[_0x518c55(0x883)] === 0x0 && _0x3d2cf0[_0x518c55(0x289)]();
                    }), $[_0x189d23(0x399)]($(_0x189d23(0x85a)), function() {
                        var _0x470ac1 = _0x189d23;
                        $(this)[_0x470ac1(0x3e5)]('id') !== _0x470ac1(0x55c) && $(this)[_0x470ac1(0x483)]();
                    }), $(_0x189d23(0x646))['on'](_0x189d23(0x402), function() {
                        var _0x1a7f74 = _0x189d23;
                        $(this)[_0x1a7f74(0x53b)](_0x1a7f74(0x881), 'auto');
                    }), $(_0x189d23(0x523))['on'](_0x189d23(0x5f8), function() {
                        setTimeout(function() {
                            var _0x447ecb = _0x563d;
                            $(_0x447ecb(0x646))[_0x447ecb(0x338)](0x0);
                        }, 0x64);
                    }), $(_0x189d23(0x243))['click'](function() {
                        var _0x5a708d = _0x189d23;
                        confirm('Are\x20you\x20sure\x20you\x20want\x20to\x20remove\x20all\x20favorite\x20skins?') && (_0x1a98d3[_0x5a708d(0x244)] = [], localStorage[_0x5a708d(0x5c0)](_0x5a708d(0x1e2), JSON[_0x5a708d(0x32a)](_0x1a98d3)), _0x5b3699(), _0x3831b1 && _0x3831b1['is'](_0x5a708d(0x7eb)) && _0x3831b1['text'](_0x5a708d(0x297))[_0x5a708d(0x53b)](_0x5a708d(0x7a4), '#4CAF50'));
                    }), _0x3831b1[_0x189d23(0x615)](function() {
                        var _0x9a4b00 = _0x189d23,
                            _0x4b0e4f = _0x4553fd;
                        !_0x1a98d3[_0x9a4b00(0x244)] && (_0x1a98d3[_0x9a4b00(0x244)] = []);
                        var _0x7d62eb = !0x1;
                        try {
                            for (var _0x438686 = 0x0; _0x438686 < _0x1a98d3[_0x9a4b00(0x244)][_0x9a4b00(0x883)]; _0x438686++) {
                                if (_0x1a98d3['favoriteSkins'][_0x438686] === _0x4b0e4f) {
                                    _0x7d62eb = !0x0;
                                    break;
                                }
                            }
                        } catch (_0x156d70) {
                            _0x1a98d3['favoriteSkins'] = [];
                        }
                        if (!_0x7d62eb) _0x1a98d3[_0x9a4b00(0x244)][_0x9a4b00(0x31a)](_0x4b0e4f), localStorage['setItem']('SaveGamewft', JSON[_0x9a4b00(0x32a)](_0x1a98d3)), $(this)[_0x9a4b00(0x2a5)]('X')['css']('background-color', '#f44336');
                        else {
                            var _0x6f5302 = _0x1a98d3[_0x9a4b00(0x244)]['indexOf'](_0x4b0e4f);
                            _0x1a98d3[_0x9a4b00(0x244)]['splice'](_0x6f5302, 0x1), localStorage[_0x9a4b00(0x5c0)](_0x9a4b00(0x1e2), JSON[_0x9a4b00(0x32a)](_0x1a98d3)), $(this)[_0x9a4b00(0x2a5)]('â˜…\x20Add')[_0x9a4b00(0x53b)](_0x9a4b00(0x7a4), _0x9a4b00(0x2fb));
                        }
                    }), _0x34e35b['click'](function() {
                        var _0x268360 = _0x189d23;
                        $[_0x268360(0x399)]($(_0x268360(0x85a)), function(_0x34203a) {
                            _0x34203a > 0x0 && $(this)['remove']();
                        }), _0x5b3699(), $(_0x268360(0x523))[_0x268360(0x59a)]();
                    });
                } else {
                    if (_0x2fb85d == null || _0x2fb85d['qk']()) {
                        _0x46602d = !0x0, _0x3825e9[_0x189d23(0x59a)](), _0x4d973e[_0x189d23(0x289)](), _0x170bb6['text'](_0x239c2a['U'](_0x189d23(0x49e)));
                        if (_0x2fb85d != null && _0x2fb85d['qk']()) {
                            var _0x196fe7 = ooo['ud']['Gc']()[_0x189d23(0x6ee)][_0x2fb85d['ln']()];
                            _0x196fe7 != null && _0x170bb6[_0x189d23(0x2a5)](_0x239c2a['V'](_0x196fe7));
                        }
                    } else _0x3825e9[_0x189d23(0x289)](), _0x4d973e[_0x189d23(0x59a)](), _0x3feb77[_0x189d23(0x1dd)](_0x2fb85d['pk']());
                }
                _0x1b6a3a['html']('');
                if (_0x2fb85d != null && _0x2fb85d['mn']() != null) {
                    var _0x3be160 = ooo['ud']['Gc']()[_0x189d23(0x6ee)][_0x2fb85d['mn']()];
                    _0x3be160 != null && _0x1b6a3a[_0x189d23(0x1dd)](_0x239c2a['aa'](_0x239c2a['V'](_0x3be160)));
                }
                v26 && _0x4553fd && v26[_0x189d23(0x1dd)](_0x4553fd), this['op']['Gm'](_0x15590b['Cn'](_0x4553fd)), this['op']['an'](_0x46602d), _0x320296 && ooo['so']['lk'](_0x4553fd, _0x158a86['_j']['$j']);
            }
        };

        function _0x4bd7db() {
            var _0x4b0022 = _0x2b6b48;
            !_0x1a98d3[_0x4b0022(0x244)] && (_0x1a98d3[_0x4b0022(0x244)] = [], localStorage[_0x4b0022(0x5c0)](_0x4b0022(0x1e2), JSON['stringify'](_0x1a98d3)));
            if (_0x1a98d3['favoriteSkins']['length'] > 0x0) {
                _0x1a98d3[_0x4b0022(0x724)] === undefined ? _0x1a98d3[_0x4b0022(0x724)] = 0x0 : _0x1a98d3[_0x4b0022(0x724)] = (_0x1a98d3[_0x4b0022(0x724)] + 0x1) % _0x1a98d3[_0x4b0022(0x244)]['length'];
                var _0x101400 = _0x1a98d3[_0x4b0022(0x244)][_0x1a98d3[_0x4b0022(0x724)]];
                _0x2af8ec(_0x101400), localStorage[_0x4b0022(0x5c0)]('SaveGamewft', JSON[_0x4b0022(0x32a)](_0x1a98d3));
            }
        }

        function _0x2af8ec(_0x110e4f) {
            var _0x1d7801 = _0x2b6b48;
            ooo['so']['lk'](_0x110e4f, _0x158a86['_j']['$j']);
            if (_0x2cbd14 && _0x2cbd14['n'] && _0x2cbd14['n']['Je']) {
                var _0x5ed053 = ooo['ud']['Cc']()['Tb'](_0x110e4f);
                _0x2cbd14['uj'] && _0x5ed053 && _0x2cbd14['uj']['hd'](ooo['Mh']['Qh']['eh'], ooo['ud']['Cc']()['Ub'](_0x2cbd14['n']['mi']), _0x5ed053, ooo['ud']['Cc']()['Vb'](_0x2cbd14['n']['Vi']), ooo['ud']['Cc']()['Wb'](_0x2cbd14['n']['Wi']), ooo['ud']['Cc']()['Xb'](_0x2cbd14['n']['Xi']), ooo['ud']['Cc']()['Yb'](_0x2cbd14['n']['Yi']), _0x1d7801(0x302));
            }
        }

        function _0x1e4821(_0x2a20c9, _0x379e9d) {
            var _0x1fc4fb = _0x2b6b48;
            if (!_0x2a20c9) return '';
            if (_0x2a20c9['startsWith'](_0x1fc4fb(0x463))) return _0x2a20c9;
            if (_0x2a20c9[_0x1fc4fb(0x461)]('get_skin.php')) return _0x2a20c9['startsWith'](_0x1fc4fb(0x2bd)) ? _0x2a20c9['replace'](/https?:\/\/[^\/]+/, _0x1a98d3[_0x1fc4fb(0x7be)]) : _0x1a98d3[_0x1fc4fb(0x7be)] + _0x2a20c9;
            if (_0x2a20c9[_0x1fc4fb(0x461)]('/images/skins/')) return _0x1a98d3[_0x1fc4fb(0x7be)] + '/' + _0x2a20c9;
            if (_0x2a20c9[_0x1fc4fb(0x461)](_0x1fc4fb(0x242))) return 'https://resources.wormate.io' + _0x2a20c9;
            if (_0x2a20c9[_0x1fc4fb(0x461)](_0x1fc4fb(0x5c1))) return _0x1a98d3['s_l'] + _0x2a20c9;
            if (!_0x2a20c9[_0x1fc4fb(0x627)](_0x1fc4fb(0x2bd))) return 'https://wormate.io' + _0x2a20c9;
            return _0x2a20c9;
        }

        function _0x2efedc(_0x3511b8) {
            var _0x46703d = _0x2b6b48;
            !_0x1a98d3[_0x46703d(0x244)] && (_0x1a98d3[_0x46703d(0x244)] = []);
            var _0x12a987 = !0x1;
            for (var _0x1b3735 = 0x0; _0x1b3735 < _0x1a98d3[_0x46703d(0x244)][_0x46703d(0x883)]; _0x1b3735++) {
                if (_0x1a98d3[_0x46703d(0x244)][_0x1b3735] === _0x3511b8) {
                    _0x12a987 = !0x0;
                    break;
                }
            }!_0x12a987 && (_0x1a98d3[_0x46703d(0x244)][_0x46703d(0x31a)](_0x3511b8), localStorage['setItem'](_0x46703d(0x1e2), JSON[_0x46703d(0x32a)](_0x1a98d3)));
        }

        function _0x49d8d5() {
            var _0x5ae828 = _0x2b6b48;
            if ($('#open-favorites-btn')['length'] === 0x0) {
                var _0x5b9933 = $('<button\x20id=\x27open-favorites-btn\x27\x20class=\x27favorites-button\x27>Ø¹Ø±Ø¶\x20Ø§Ù„Ø³ÙƒÙ†Ø§Øª\x20Ø§Ù„Ù…ÙØ¶Ù„Ø©</button>');
                $(_0x5ae828(0x1d8))[_0x5ae828(0x6c4)](_0x5ae828(0x563)), _0x5b9933[_0x5ae828(0x615)](function() {
                    var _0x4b1e2d = _0x5ae828;
                    _0x5b3699(), $(_0x4b1e2d(0x523))['show']();
                }), $('#mm-skin-canv')['length'] > 0x0 && ($(_0x5ae828(0x79d))[_0x5ae828(0x4d7)]()[_0x5ae828(0x53b)](_0x5ae828(0x5d6), _0x5ae828(0x211)), $(_0x5ae828(0x79d))['parent']()[_0x5ae828(0x4e4)](_0x5b9933));
            }
        }

        function _0x3c9ecf(_0x327d6d) {
            var _0x21f7ce = _0x2b6b48;
            _0x1a98d3[_0x21f7ce(0x244)] && _0x327d6d >= 0x0 && _0x327d6d < _0x1a98d3['favoriteSkins'][_0x21f7ce(0x883)] && (_0x1a98d3['favoriteSkins'][_0x21f7ce(0x312)](_0x327d6d, 0x1), localStorage[_0x21f7ce(0x5c0)]('SaveGamewft', JSON[_0x21f7ce(0x32a)](_0x1a98d3)), _0x5b3699());
        }

        function _0x5b3699() {
            var _0x1f1b44 = _0x2b6b48,
                _0x5945c3 = $(_0x1f1b44(0x385));
            _0x5945c3[_0x1f1b44(0x629)]();
            !_0x1a98d3[_0x1f1b44(0x244)] && (_0x1a98d3['favoriteSkins'] = [], localStorage[_0x1f1b44(0x5c0)](_0x1f1b44(0x1e2), JSON[_0x1f1b44(0x32a)](_0x1a98d3)));
            try {
                if (_0x1a98d3['favoriteSkins'][_0x1f1b44(0x883)] > 0x0)
                    for (var _0x1564e2 = 0x0; _0x1564e2 < _0x1a98d3[_0x1f1b44(0x244)]['length']; _0x1564e2++) {
                        var _0x55dbc8 = _0x1a98d3[_0x1f1b44(0x244)][_0x1564e2],
                            _0x1e2718 = $(_0x1f1b44(0x70f))['attr'](_0x1f1b44(0x225), _0x1564e2)[_0x1f1b44(0x3e5)](_0x1f1b44(0x434), _0x55dbc8)[_0x1f1b44(0x53b)]({
                                'display': _0x1f1b44(0x358),
                                'flex-direction': _0x1f1b44(0x81d),
                                'align-items': _0x1f1b44(0x429),
                                'padding': _0x1f1b44(0x803),
                                'background': _0x1f1b44(0x67f),
                                'border-radius': _0x1f1b44(0x64e),
                                'position': _0x1f1b44(0x211),
                                'height': _0x1f1b44(0x46b),
                                'width': '100%'
                            }),
                            _0x4eab27 = $(_0x1f1b44(0x70f))['css']({
                                'width': _0x1f1b44(0x592),
                                'height': _0x1f1b44(0x5b9),
                                'background': _0x1f1b44(0x694),
                                'border-radius': _0x1f1b44(0x86b),
                                'overflow': _0x1f1b44(0x287),
                                'position': _0x1f1b44(0x211),
                                'display': _0x1f1b44(0x358),
                                'justify-content': _0x1f1b44(0x429),
                                'align-items': _0x1f1b44(0x429)
                            })['appendTo'](_0x1e2718),
                            _0x2f81d2 = $(_0x1f1b44(0x754))[_0x1f1b44(0x2a5)]('X')[_0x1f1b44(0x53b)]({
                                'position': _0x1f1b44(0x52f),
                                'top': _0x1f1b44(0x444),
                                'right': _0x1f1b44(0x444),
                                'background': _0x1f1b44(0x3b6),
                                'color': 'white',
                                'border': _0x1f1b44(0x25a),
                                'padding': _0x1f1b44(0x61e),
                                'border-radius': _0x1f1b44(0x444),
                                'cursor': _0x1f1b44(0x47b),
                                'font-size': _0x1f1b44(0x71e),
                                'z-index': '20'
                            })[_0x1f1b44(0x6c4)](_0x1e2718),
                            _0x30807c = _0x49dcc2(_0x55dbc8);
                        _0x4eab27[_0x1f1b44(0x4e4)](_0x30807c), _0x5945c3[_0x1f1b44(0x4e4)](_0x1e2718), _0x2f81d2['click'](function() {
                            var _0x293eaf = _0x1f1b44,
                                _0x59597e = $(this)['closest'](_0x293eaf(0x1e4)),
                                _0xfda687 = parseInt(_0x59597e['attr'](_0x293eaf(0x225)));
                            _0x1a98d3[_0x293eaf(0x244)] && _0xfda687 >= 0x0 && _0xfda687 < _0x1a98d3[_0x293eaf(0x244)][_0x293eaf(0x883)] && (_0x1a98d3[_0x293eaf(0x244)][_0x293eaf(0x312)](_0xfda687, 0x1), localStorage[_0x293eaf(0x5c0)](_0x293eaf(0x1e2), JSON[_0x293eaf(0x32a)](_0x1a98d3)), _0x59597e['fadeOut'](0x12c, function() {
                                var _0x1d3b57 = _0x293eaf;
                                $(this)[_0x1d3b57(0x483)](), _0x5945c3[_0x1d3b57(0x3be)]('[data-index]')[_0x1d3b57(0x399)](function(_0x190d4c) {
                                    var _0xb80da4 = _0x1d3b57;
                                    $(this)['attr'](_0xb80da4(0x225), _0x190d4c);
                                }), _0x1a98d3[_0x1d3b57(0x244)][_0x1d3b57(0x883)] === 0x0 && _0x54ad3d(_0x5945c3);
                            }));
                        });
                    } else _0x54ad3d(_0x5945c3);
            } catch (_0x24cf9c) {
                _0x5945c3[_0x1f1b44(0x4e4)](_0x1f1b44(0x49b));
            }
        }

        function _0x54ad3d(_0x1adeaa) {
            var _0x2d0949 = _0x2b6b48;
            _0x1adeaa[_0x2d0949(0x4e4)](_0x2d0949(0x253));
        }

        function _0x49dcc2(_0x4a0e04) {
            var _0x5ad5c8 = _0x2b6b48;
            !window[_0x5ad5c8(0x7f8)] && (window[_0x5ad5c8(0x7f8)] = {});
            try {
                let _0x24f49b = null;
                if (typeof ooo !== _0x5ad5c8(0x328)) {
                    if (ooo['ud'] && ooo['ud']['Gc']) _0x24f49b = ooo['ud']['Gc']();
                    else {
                        if (ooo['ok'] && ooo['ok']['xl'] && ooo['ok']['xl'][_0x5ad5c8(0x6ab)]) _0x24f49b = ooo['ok']['xl']['skinData'];
                        else window['globalGameData'] && (_0x24f49b = window['globalGameData']);
                    }
                }
                if (!_0x24f49b) {
                    const _0x521820 = localStorage['getItem'](_0x5ad5c8(0x595));
                    if (_0x521820) try {
                        _0x24f49b = JSON['parse'](_0x521820);
                    } catch (_0x1be426) {}
                }
                if (!_0x24f49b) throw new Error(_0x5ad5c8(0x48f));
                let _0x2a3c60 = null;
                if (_0x24f49b[_0x5ad5c8(0x2c9)] && Array[_0x5ad5c8(0x542)](_0x24f49b[_0x5ad5c8(0x2c9)])) _0x2a3c60 = _0x24f49b['skinArrayDict'];
                else {
                    if (_0x24f49b[_0x5ad5c8(0x278)] && Array['isArray'](_0x24f49b['skins'])) _0x2a3c60 = _0x24f49b[_0x5ad5c8(0x278)];
                    else throw new Error('Skin\x20list\x20not\x20found\x20in\x20game\x20data');
                }
                let _0x314019 = null;
                for (let _0x3cb122 = 0x0; _0x3cb122 < _0x2a3c60['length']; _0x3cb122++) {
                    if (_0x2a3c60[_0x3cb122] && _0x2a3c60[_0x3cb122]['id'] === _0x4a0e04) {
                        _0x314019 = _0x2a3c60[_0x3cb122];
                        break;
                    }
                }
                if (!_0x314019) throw new Error(_0x5ad5c8(0x2cf));
                const _0x16ee8a = document[_0x5ad5c8(0x706)](_0x5ad5c8(0x678));
                _0x16ee8a[_0x5ad5c8(0x28a)][_0x5ad5c8(0x392)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible;\x0a\x20\x20\x20\x20\x20\x20\x20\x20';
                const _0x5e7592 = document[_0x5ad5c8(0x706)](_0x5ad5c8(0x678));
                _0x5e7592[_0x5ad5c8(0x3fb)] = '#' + _0x4a0e04, _0x5e7592['style'][_0x5ad5c8(0x392)] = _0x5ad5c8(0x486), _0x16ee8a[_0x5ad5c8(0x41b)](_0x5e7592);
                const _0xdad0d = document[_0x5ad5c8(0x706)](_0x5ad5c8(0x1b1));
                _0xdad0d[_0x5ad5c8(0x1eb)] = 0x258, _0xdad0d[_0x5ad5c8(0x2b6)] = 0x50, _0xdad0d[_0x5ad5c8(0x28a)][_0x5ad5c8(0x392)] = _0x5ad5c8(0x3a2), _0x16ee8a['appendChild'](_0xdad0d);
                const _0x2ad373 = _0xdad0d[_0x5ad5c8(0x70a)]('2d');
                _0x2ad373[_0x5ad5c8(0x73d)](0x0, 0x0, _0xdad0d[_0x5ad5c8(0x1eb)], _0xdad0d[_0x5ad5c8(0x2b6)]);
                if (_0x314019[_0x5ad5c8(0x740)] && Array['isArray'](_0x314019[_0x5ad5c8(0x740)]) && _0x314019[_0x5ad5c8(0x740)]['length'] > 0x0) {
                    let _0x233197 = {},
                        _0x2be397 = [];
                    _0x314019[_0x5ad5c8(0x740)]['forEach'](_0x31fd8c => {
                        var _0x552bd1 = _0x5ad5c8;
                        if (!_0x31fd8c) return;
                        if (_0x24f49b['regionDict'] && _0x24f49b['regionDict'][_0x31fd8c]) {
                            const _0x519ef1 = _0x24f49b[_0x552bd1(0x6b8)][_0x31fd8c];
                            if (_0x24f49b[_0x552bd1(0x1d3)] && _0x519ef1['texture'] && _0x24f49b[_0x552bd1(0x1d3)][_0x519ef1[_0x552bd1(0x272)]]) {
                                const _0x345f9c = _0x24f49b['textureDict'][_0x519ef1[_0x552bd1(0x272)]];
                                if (_0x345f9c && (_0x345f9c[_0x552bd1(0x7d1)] || _0x345f9c[_0x552bd1(0x3b7)])) {
                                    let _0x5a73c7 = _0x1e4821(_0x345f9c['relativePath'] || _0x345f9c[_0x552bd1(0x7d1)], _0x519ef1[_0x552bd1(0x272)]);
                                    !_0x233197[_0x5a73c7] && (_0x233197[_0x5a73c7] = []), _0x233197[_0x5a73c7]['push']({
                                        'id': _0x31fd8c,
                                        'region': _0x519ef1
                                    }), _0x2be397[_0x552bd1(0x31a)]({
                                        'id': _0x31fd8c,
                                        'region': _0x519ef1
                                    });
                                }
                            }
                        }
                    });
                    const _0x5d98e9 = [..._0x2be397][_0x5ad5c8(0x413)]();
                    let _0x1038ef = [..._0x5d98e9];
                    while (_0x1038ef[_0x5ad5c8(0x883)] < 0x1b) {
                        const _0x227d97 = 0x1b - _0x1038ef[_0x5ad5c8(0x883)],
                            _0x4cc4d2 = _0x5d98e9[_0x5ad5c8(0x3c1)](0x0, Math[_0x5ad5c8(0x4c0)](_0x227d97, _0x5d98e9[_0x5ad5c8(0x883)]));
                        _0x1038ef = [..._0x1038ef, ..._0x4cc4d2];
                    }
                    const _0x11cf48 = 0x50,
                        _0x25df1d = _0x11cf48 / 0x2,
                        _0x2a8813 = 0.2,
                        _0x2d92b5 = _0x11cf48 * _0x2a8813 * _0x1038ef['length'] + _0x11cf48 * 0.75;
                    _0xdad0d[_0x5ad5c8(0x1eb)] = Math[_0x5ad5c8(0x656)](0x258, _0x2d92b5), _0x2ad373[_0x5ad5c8(0x73d)](0x0, 0x0, _0xdad0d[_0x5ad5c8(0x1eb)], _0xdad0d[_0x5ad5c8(0x2b6)]);
                    let _0x35aa70 = 0x0;
                    const _0x4fd714 = Object[_0x5ad5c8(0x23e)](_0x233197)[_0x5ad5c8(0x883)];

                    function _0x303c7a(_0x2b09e2) {
                        _0x187f83(_0x2b09e2);
                    }

                    function _0x187f83(_0x15d96e) {
                        var _0x2dd1c4 = _0x5ad5c8;
                        const _0x1baeda = _0xdad0d[_0x2dd1c4(0x2b6)] / 0x2;
                        _0x1038ef[_0x2dd1c4(0x1c0)]((_0x1be4f1, _0x358f52) => {
                            var _0x487247 = _0x2dd1c4;
                            if (!_0x1be4f1) return;
                            const _0x323f7f = _0x1be4f1[_0x487247(0x20a)],
                                _0x578432 = _0x25df1d + _0x358f52 * _0x25df1d * 0x2 * _0x2a8813;
                            _0x2ad373[_0x487247(0x788)](), _0x2ad373[_0x487247(0x40a)](), _0x2ad373[_0x487247(0x325)](_0x578432, _0x1baeda, _0x25df1d, 0x0, Math['PI'] * 0x2), _0x2ad373[_0x487247(0x63b)]();
                            const _0x28afff = Math['max'](_0x323f7f['w'], _0x323f7f['h']),
                                _0x482956 = _0x25df1d * 0x2 / _0x28afff,
                                _0x29b9fb = _0x578432 - _0x323f7f['w'] * _0x482956 / 0x2,
                                _0x4f2789 = _0x1baeda - _0x323f7f['h'] * _0x482956 / 0x2;
                            _0x2ad373[_0x487247(0x219)](_0x15d96e, _0x323f7f['x'], _0x323f7f['y'], _0x323f7f['w'], _0x323f7f['h'], _0x29b9fb, _0x4f2789, _0x323f7f['w'] * _0x482956, _0x323f7f['h'] * _0x482956), _0x2ad373[_0x487247(0x1b2)]();
                        });
                    }
                    return Object[_0x5ad5c8(0x23e)](_0x233197)[_0x5ad5c8(0x1c0)](_0x3dbdd4 => {
                        var _0x15bc2b = _0x5ad5c8;
                        if (window[_0x15bc2b(0x7f8)][_0x3dbdd4]) {
                            _0x303c7a(window['textureCache'][_0x3dbdd4]);
                            return;
                        }
                        const _0x1577e3 = new Image();
                        _0x1577e3[_0x15bc2b(0x540)] = () => {
                            var _0x284a50 = _0x15bc2b;
                            window[_0x284a50(0x7f8)][_0x3dbdd4] = _0x1577e3, _0x303c7a(_0x1577e3), _0x35aa70++;
                        }, _0x1577e3['onerror'] = () => {
                            _0x35aa70++;
                        }, _0x1577e3[_0x15bc2b(0x440)] = _0x3dbdd4;
                    }), _0x16ee8a;
                }
            } catch (_0x583eec) {
                const _0x5c838b = document['createElement']('div');
                return _0x5c838b['style'][_0x5ad5c8(0x392)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#333;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', _0x5c838b[_0x5ad5c8(0x3fb)] = 'âš ï¸', _0x5c838b;
            }
            const _0x2e502b = document[_0x5ad5c8(0x706)](_0x5ad5c8(0x678));
            return _0x2e502b['style']['cssText'] = _0x5ad5c8(0x63d), _0x2e502b['textContent'] = 'ðŸŽ®', _0x2e502b;
        }
        _0xf3d6c7 = (function() {
            var _0x5062ed = _0x2b6b48;

            function _0xd9fd72(_0x327fdc, _0x494f19) {
                this['Cp'] = _0x327fdc, this['yp'] = 0x0, this['xp'] = _0x494f19;
            }
            return _0xd9fd72[_0x5062ed(0x869)]['qp'] = function() {
                var _0x3c1160 = _0x5062ed;
                --this['yp'] < 0x0 && (this['yp'] = this['xp']['list'][_0x3c1160(0x883)] - 0x1), this['Cp']['tp'](!0x0);
            }, _0xd9fd72['prototype']['rp'] = function() {
                var _0x30eae3 = _0x5062ed;
                ++this['yp'] >= this['xp'][_0x30eae3(0x2e9)]['length'] && (this['yp'] = 0x0), this['Cp']['tp'](!0x0);
            }, _0xd9fd72[_0x5062ed(0x869)]['up'] = function() {
                var _0x5f0e07 = _0x5062ed;
                let _0x4fa40b = _0x239c2a['V'](this['xp'][_0x5f0e07(0x7fd)]);
                return this['xp']['img'] && ((this['xp'][_0x5f0e07(0x78d)][_0x5f0e07(0x6af)](_0x5f0e07(0x88e)) == -0x1 || !(_0x4fa40b = _0x5f0e07(0x42e) + this['xp'][_0x5f0e07(0x78d)] + '\x22\x20height=\x2240\x22\x20/>')) && (this['xp'][_0x5f0e07(0x78d)]['search'](_0x5f0e07(0x230)) == -0x1 || !(_0x4fa40b = _0x5f0e07(0x42e) + this['xp'][_0x5f0e07(0x78d)] + '\x22\x20height=\x2240\x22\x20/>')) && (_0x4fa40b = _0x5f0e07(0x42e) + _0x1a98d3[_0x5f0e07(0x7be)] + _0x5f0e07(0x290) + this['xp'][_0x5f0e07(0x78d)] + '\x22\x20height=\x2240\x22\x20/>')), _0x4fa40b;
            }, _0xd9fd72[_0x5062ed(0x869)]['Ap'] = function() {
                var _0x2533c5 = _0x5062ed;
                return this['yp'] >= this['xp'][_0x2533c5(0x2e9)][_0x2533c5(0x883)] ? _0x158a86['yj']['Aj']() : _0x158a86['yj']['Bj'](this['xp'][_0x2533c5(0x2e9)][this['yp']]);
            }, _0xd9fd72;
        }()), _0x158a86['Rk'] = _0x271808, _0x2fca00 = $(_0x2b6b48(0x28f)), _0xefdc2e = $(_0x2b6b48(0x618)), _0x2d75f3 = $(_0x2b6b48(0x1b8)), (_0x7bcd4 = _0x239c2a['ca'](_0x158a86['Ho'], function() {
            var _0x4a2628 = _0x2b6b48;
            _0x158a86['Ho'][_0x4a2628(0x545)](this, _0x239c2a['U']('index.game.popup.menu.store.tab'), !0x0), _0x2fca00['click'](function() {
                ooo['ij']['if'](), ooo['Xg']['gl'](ooo['Xg']['Hk']);
            }), _0xefdc2e[_0x4a2628(0x615)](function() {
                ooo['ij']['if'](), ooo['Xg']['gl'](ooo['Xg']['Qk']);
            }), _0x2d75f3[_0x4a2628(0x615)](function() {
                ooo['ij']['if'](), ooo['Xg']['gl'](ooo['Xg']['Uk']);
            });
        }))[_0x2b6b48(0x869)]['Sa'] = function() {
            var _0x250f20 = _0x2b6b48;
            _0x7bcd4[_0x250f20(0x4d7)]['prototype']['Sa'][_0x250f20(0x545)](this);
        }, _0x7bcd4['prototype']['Wo'] = function() {
            _0x39b888['f']['h'](_0x158a86['Ho']['Mo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['No'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Oo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Po'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Qo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Ro'], 0x32), _0x39b888['f']['g'](_0x158a86['Ho']['So'], 0xc8), _0x39b888['f']['h'](_0x158a86['Ho']['To'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Uo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Vo'], 0x32);
        }, _0x7bcd4[_0x2b6b48(0x869)]['nl'] = function() {
            ooo['ij']['jf']();
        }, _0x158a86['Tk'] = _0x7bcd4, _0x4fd2d3 = $('#wear-view-canv'), _0x394c9e = $('#wear-description-text'), _0x35db2d = $('#wear-locked-bar'), _0x519803 = $('#wear-locked-bar-text'), _0x384781 = $(_0x2b6b48(0x39a)), _0x55b77f = $('#wear-item-price'), _0x55cfc0 = $('#wear-eyes-button'), _0x5bba53 = $(_0x2b6b48(0x331)), _0x4ea478 = $(_0x2b6b48(0x2a8)), _0x33cae6 = $(_0x2b6b48(0x3c6)), _0x3971f3 = $(_0x2b6b48(0x5b4)), _0x4ec7c2 = $(_0x2b6b48(0x524)), _0x51899c = $(_0x2b6b48(0x340)), (_0x429093 = _0x239c2a['ca'](_0x158a86['Ho'], function() {
            var _0x4366da = _0x2b6b48,
                _0x5f3c34 = this;
            _0x158a86['Ho'][_0x4366da(0x545)](this, _0x239c2a['U'](_0x4366da(0x621)), !0x0);
            var _0x166089 = this;
            this['Dp'] = [], this['ak'] = new _0x416f86(this, _0x158a86['_j']['ak'], _0x55cfc0), this['bk'] = new _0x416f86(this, _0x158a86['_j']['bk'], _0x5bba53), this['dk'] = new _0x416f86(this, _0x158a86['_j']['dk'], _0x4ea478), this['ck'] = new _0x416f86(this, _0x158a86['_j']['ck'], _0x33cae6), this['Ep'] = null, this['Fp'] = null, this['Gp'] = null, this['Hp'] = null, this['Ip'] = null, this['Jp'] = null, this['op'] = new _0x158a86['Lm'](_0x4fd2d3), _0x384781['click'](function() {
                ooo['ij']['if'](), _0x166089['Kp']();
            }), _0x4ec7c2[_0x4366da(0x615)](function() {
                ooo['ij']['if'](), _0x166089['Ep']['Lp']();
            }), _0x51899c[_0x4366da(0x615)](function() {
                ooo['ij']['if'](), _0x166089['Ep']['Mp']();
            }), _0x55cfc0[_0x4366da(0x615)](function() {
                ooo['ij']['if'](), _0x166089['Np'](_0x5f3c34['ak']);
            }), _0x5bba53[_0x4366da(0x615)](function() {
                ooo['ij']['if'](), _0x166089['Np'](_0x5f3c34['bk']);
            }), _0x4ea478[_0x4366da(0x615)](function() {
                ooo['ij']['if'](), _0x166089['Np'](_0x5f3c34['dk']);
            }), _0x33cae6['click'](function() {
                ooo['ij']['if'](), _0x166089['Np'](_0x5f3c34['ck']);
            }), this['Dp']['push'](this['ak']), this['Dp'][_0x4366da(0x31a)](this['bk']), this['Dp'][_0x4366da(0x31a)](this['dk']), this['Dp']['push'](this['ck']);
        }))[_0x2b6b48(0x869)]['Sa'] = function() {
            var _0x426b4b = _0x2b6b48;
            _0x429093[_0x426b4b(0x4d7)]['prototype']['Sa'][_0x426b4b(0x545)](this);
            var _0x5b7dc7 = this;
            ooo['ud']['Jc'](function() {
                var _0xf78a19 = _0x426b4b,
                    _0x1f9c36 = ooo['ud']['Gc']();
                _0x5b7dc7['Fp'] = _0x1f9c36['eyesDict'], _0x5b7dc7['Gp'] = _0x1f9c36[_0xf78a19(0x663)], _0x5b7dc7['Hp'] = _0x1f9c36[_0xf78a19(0x1b0)], _0x5b7dc7['Ip'] = _0x1f9c36[_0xf78a19(0x4f2)], _0x5b7dc7['Jp'] = _0x1f9c36[_0xf78a19(0x25d)], _0x5b7dc7['ak']['Op'](_0x1f9c36[_0xf78a19(0x4cb)]), _0x5b7dc7['ak']['Pp'](_0x5b7dc7['Fp']), _0x5b7dc7['bk']['Op'](_0x1f9c36[_0xf78a19(0x884)]), _0x5b7dc7['bk']['Pp'](_0x5b7dc7['Gp']), _0x5b7dc7['dk']['Op'](_0x1f9c36[_0xf78a19(0x69f)]), _0x5b7dc7['dk']['Pp'](_0x5b7dc7['Hp']), _0x5b7dc7['ck']['Op'](_0x1f9c36[_0xf78a19(0x6e9)]), _0x5b7dc7['ck']['Pp'](_0x5b7dc7['Ip']);
            }), this['tp'](!0x1), ooo['so']['fk'](function() {
                _0x5b7dc7['tp'](!0x1);
            });
        }, _0x429093[_0x2b6b48(0x869)]['Wo'] = function() {
            _0x39b888['f']['h'](_0x158a86['Ho']['Mo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['No'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Oo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Po'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Qo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Ro'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['So'], 0x32), _0x39b888['f']['g'](_0x158a86['Ho']['To'], 0xc8), _0x39b888['f']['h'](_0x158a86['Ho']['Uo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Vo'], 0x32);
        }, _0x429093['prototype']['nl'] = function() {
            ooo['ij']['Ye'](_0x158a86['Pe']['Se']['Jf']), ooo['ij']['jf'](), this['Np'](this['Ep'] ?? this['ak']), this['op']['rg'](!0x0);
        }, _0x429093['prototype']['hl'] = function() {
            this['op']['rg'](!0x1);
        }, _0x429093[_0x2b6b48(0x869)]['qg'] = function() {
            this['op']['qg']();
        }, _0x429093['prototype']['ug'] = function(_0x32868a, _0x37319f) {
            this['op']['ug']();
        }, _0x429093[_0x2b6b48(0x869)]['Np'] = function(_0x34930d) {
            var _0x20466c = _0x2b6b48;
            this['Ep'] = _0x34930d;
            for (var _0x297677 = 0x0; _0x297677 < this['Dp'][_0x20466c(0x883)]; _0x297677++) {
                this['Dp'][_0x297677]['ep'][_0x20466c(0x1c5)](_0x20466c(0x20d));
            };
            this['Ep']['ep']['addClass'](_0x20466c(0x20d)), this['Ep']['ml']();
        }, _0x429093[_0x2b6b48(0x869)]['Qp'] = function() {
            return this['Ep'] == null ? _0x158a86['yj']['Aj']() : _0x158a86['yj']['Bj']({
                'Je': this['Ep']['Ap'](),
                'Wd': this['Ep']['Wd']
            });
        }, _0x429093[_0x2b6b48(0x869)]['Kp'] = function() {
            var _0x3d1064 = this['Qp']();
            if (_0x3d1064['Cj']()) {
                var _0x466539 = _0x3d1064['Mc']();
                this['Rp'](_0x466539['Je'], _0x466539['Wd']);
            }
        }, _0x429093['prototype']['Rp'] = function(_0x995e2d, _0xe70324) {
            var _0x750046 = ooo['so']['mk'](_0x995e2d, _0xe70324);
            if (_0x750046 != null) {
                var _0x369414 = _0x750046['pk']();
                if (!(ooo['ok']['Ql']() < _0x369414)) {
                    var _0x527d66 = ooo['so']['Zj'](_0x158a86['_j']['$j']),
                        _0x500bfb = ooo['so']['Zj'](_0x158a86['_j']['ak']),
                        _0x1bffca = ooo['so']['Zj'](_0x158a86['_j']['bk']),
                        _0x597a4d = ooo['so']['Zj'](_0x158a86['_j']['dk']),
                        _0x40ee0e = ooo['so']['Zj'](_0x158a86['_j']['ck']),
                        _0x3d3871 = this['Xo'](0x1388);
                    ooo['ok']['nm'](_0x995e2d, _0xe70324, function() {
                        _0x3d3871['_o'](), ooo['Xg']['gl'](ooo['Xg']['_k']);
                    }, function() {
                        ooo['ok']['hm'](function() {
                            ooo['so']['lk'](_0x527d66, _0x158a86['_j']['$j']), ooo['so']['lk'](_0x500bfb, _0x158a86['_j']['ak']), ooo['so']['lk'](_0x1bffca, _0x158a86['_j']['bk']), ooo['so']['lk'](_0x597a4d, _0x158a86['_j']['dk']), ooo['so']['lk'](_0x40ee0e, _0x158a86['_j']['ck']), ooo['so']['lk'](_0x995e2d, _0xe70324), _0x3d3871['_o']();
                        });
                    });
                }
            }
        }, window[_0x2b6b48(0x56e)] = window['globalHatTextureCache'] || {}, _0x429093[_0x2b6b48(0x869)]['tp'] = function(_0x43f71c) {
            var _0x4b138e = _0x2b6b48,
                _0x57ad95 = ooo['so']['ek'](),
                _0x14e02e = this['Qp']();
            if (_0x14e02e['Cj']()) {
                var _0x5848a6 = _0x14e02e['Mc'](),
                    _0x5eed90 = ooo['so']['mk'](_0x5848a6['Je'], _0x5848a6['Wd']),
                    _0x272862 = !0x1;
                !_0x5848a6['selectedHats'] && (_0x5848a6[_0x4b138e(0x45c)] = []);
                if (ooo['so']['ik'](_0x5848a6['Je'], _0x5848a6['Wd'])) _0x35db2d['hide'](), _0x384781[_0x4b138e(0x289)](), _0x5848a6['Wd'] === _0x4b138e(0x3e1) ? this[_0x4b138e(0x4c5)](_0x5848a6['Je']) : this['removeHatButtons']();
                else {
                    if (_0x5eed90 == null || _0x5eed90['qk']()) {
                        _0x272862 = !0x0, _0x35db2d[_0x4b138e(0x59a)](), _0x384781[_0x4b138e(0x289)](), _0x519803[_0x4b138e(0x2a5)](_0x239c2a['U']('index.game.popup.menu.store.locked'));
                        if (_0x5eed90 != null && _0x5eed90['qk']()) {
                            var _0x49afa9 = ooo['ud']['Gc']()[_0x4b138e(0x6ee)][_0x5eed90['ln']()];
                            _0x49afa9 != null && _0x519803['text'](_0x239c2a['V'](_0x49afa9));
                        }
                        this['removeHatButtons']();
                    } else _0x35db2d[_0x4b138e(0x289)](), _0x384781['show'](), _0x55b77f['html'](_0x5eed90['pk']()), this[_0x4b138e(0x710)]();
                }
                _0x394c9e[_0x4b138e(0x1dd)]('');
                if (_0x5eed90 != null && _0x5eed90['mn']() != null) {
                    var _0x1145e4 = ooo['ud']['Gc']()[_0x4b138e(0x6ee)][_0x5eed90['mn']()];
                    _0x1145e4 != null && _0x394c9e[_0x4b138e(0x1dd)](_0x239c2a['aa'](_0x239c2a['V'](_0x1145e4)));
                }
                var _0x39ddbd = this['op'];
                switch (_0x5848a6['Wd']) {
                    case _0x4b138e(0x36e):
                        _0x39ddbd['Gm'](_0x57ad95['Dn'](_0x5848a6['Je'])), _0x39ddbd['bn'](_0x272862);
                        break;
                    case _0x4b138e(0x30f):
                        _0x39ddbd['Gm'](_0x57ad95['En'](_0x5848a6['Je'])), _0x39ddbd['cn'](_0x272862);
                        break;
                    case 'GLASSES':
                        _0x39ddbd['Gm'](_0x57ad95['Gn'](_0x5848a6['Je'])), _0x39ddbd['en'](_0x272862);
                        break;
                    case _0x4b138e(0x3e1):
                        _0x39ddbd['Gm'](_0x57ad95['Fn'](_0x5848a6['Je'])), _0x39ddbd['dn'](_0x272862);
                        break;
                }
                _0x43f71c && ooo['so']['lk'](_0x5848a6['Je'], _0x5848a6['Wd']);
            }
        }, _0x429093[_0x2b6b48(0x869)][_0x2b6b48(0x4c5)] = function(_0x1560ee) {
            var _0xc15d8d = _0x2b6b48;
            this[_0xc15d8d(0x263)] = _0x1560ee;
            if (!this[_0xc15d8d(0x82b)]) {
                this[_0xc15d8d(0x82b)] = $(_0xc15d8d(0x70f))[_0xc15d8d(0x3e5)]('id', _0xc15d8d(0x260))[_0xc15d8d(0x53b)]({
                    'position': 'absolute',
                    'bottom': _0xc15d8d(0x309),
                    'left': _0xc15d8d(0x2fe),
                    'display': _0xc15d8d(0x358),
                    'gap': _0xc15d8d(0x37b)
                })[_0xc15d8d(0x6c4)](_0xc15d8d(0x645)), this[_0xc15d8d(0x422)] = $('<button>')[_0xc15d8d(0x3e5)]('id', _0xc15d8d(0x871))[_0xc15d8d(0x53b)]({
                    'padding': _0xc15d8d(0x6fb),
                    'background-color': _0xc15d8d(0x2fb),
                    'color': _0xc15d8d(0x7d0),
                    'border': _0xc15d8d(0x25a),
                    'border-radius': _0xc15d8d(0x86b),
                    'cursor': _0xc15d8d(0x47b),
                    'min-width': _0xc15d8d(0x283)
                })[_0xc15d8d(0x6c4)](this['hatButtonContainer']), this['hatFavoritesButton'] = $('<button>')[_0xc15d8d(0x3e5)]('id', _0xc15d8d(0x738))[_0xc15d8d(0x53b)]({
                    'padding': _0xc15d8d(0x6fb),
                    'background-color': _0xc15d8d(0x217),
                    'color': _0xc15d8d(0x7d0),
                    'border': _0xc15d8d(0x25a),
                    'border-radius': _0xc15d8d(0x86b),
                    'cursor': _0xc15d8d(0x47b)
                })['text'](_0xc15d8d(0x686))['appendTo'](this['hatButtonContainer']), this['hatInfoText'] = $(_0xc15d8d(0x70f))[_0xc15d8d(0x3e5)]('id', 'hat-info-text')[_0xc15d8d(0x53b)]({
                    'position': _0xc15d8d(0x52f),
                    'bottom': '10px',
                    'left': '-5px',
                    'font-size': '12px',
                    'color': _0xc15d8d(0x664)
                })[_0xc15d8d(0x2a5)](_0xc15d8d(0x809))[_0xc15d8d(0x6c4)]('#wear-view');
                var _0x1b8322 = this;
                this['hatFavoritesButton']['on'](_0xc15d8d(0x615), function() {
                    _0x1b8322['showFavoritesDialog']();
                });
            }
            let _0x2994dc = _0x1a98d3[_0xc15d8d(0x45c)][_0xc15d8d(0x461)](_0x1560ee);
            this[_0xc15d8d(0x422)][_0xc15d8d(0x2a5)](_0x2994dc ? 'X' : _0xc15d8d(0x297)), this[_0xc15d8d(0x422)][_0xc15d8d(0x53b)](_0xc15d8d(0x7a4), _0x2994dc ? _0xc15d8d(0x3b6) : _0xc15d8d(0x2fb)), this['hatToggleButton'][_0xc15d8d(0x203)](_0xc15d8d(0x615));
            var _0x1b8322 = this;
            this[_0xc15d8d(0x422)]['on'](_0xc15d8d(0x615), function() {
                var _0x92a5a7 = _0xc15d8d;
                let _0x462a2e = _0x1a98d3['selectedHats'][_0x92a5a7(0x5be)](_0x1560ee);
                _0x462a2e >= 0x0 ? (_0x1a98d3['selectedHats'][_0x92a5a7(0x312)](_0x462a2e, 0x1), $(this)['text']('Add')[_0x92a5a7(0x53b)](_0x92a5a7(0x7a4), _0x92a5a7(0x2fb))) : (_0x1a98d3['selectedHats'][_0x92a5a7(0x31a)](_0x1560ee), $(this)[_0x92a5a7(0x2a5)]('X')['css']('background-color', '#f44336')), localStorage[_0x92a5a7(0x5c0)](_0x92a5a7(0x1e2), JSON[_0x92a5a7(0x32a)](_0x1a98d3));
            }), this[_0xc15d8d(0x82b)][_0xc15d8d(0x59a)](), this[_0xc15d8d(0x6a4)][_0xc15d8d(0x59a)]();
        }, _0x429093[_0x2b6b48(0x869)]['removeHatButtons'] = function() {
            var _0x59b97c = _0x2b6b48;
            this[_0x59b97c(0x82b)] && this[_0x59b97c(0x82b)]['hide'](), this[_0x59b97c(0x6a4)] && this['hatInfoText'][_0x59b97c(0x289)]();
        };

        function _0xee2d51(_0x50a323) {
            var _0xeff70a = _0x2b6b48;
            try {
                if (window[_0xeff70a(0x56e)][_0x50a323] && window[_0xeff70a(0x56e)][_0x50a323][_0xeff70a(0x807)]) return window[_0xeff70a(0x56e)][_0x50a323];
                const _0x5ee926 = ooo['ud']['Cc']()['Yb'](_0x50a323);
                if (!_0x5ee926 || !_0x5ee926['dc'] || !_0x5ee926['dc']['length']) return null;
                const _0x378dca = _0x5ee926['dc'][0x0];
                let _0x469377 = null;
                if (_0x378dca['_a'] !== undefined) _0x469377 = {
                    'x': _0x378dca['_a'] || 0x0,
                    'y': _0x378dca['ab'] || 0x0,
                    'width': _0x378dca['bb'] || 0x0,
                    'height': _0x378dca['cb'] || 0x0
                };
                else {
                    if (_0x378dca[_0xeff70a(0x222)]) _0x469377 = {
                        'x': _0x378dca[_0xeff70a(0x222)]['x'] || 0x0,
                        'y': _0x378dca['_frame']['y'] || 0x0,
                        'width': _0x378dca[_0xeff70a(0x222)][_0xeff70a(0x1eb)] || 0x0,
                        'height': _0x378dca[_0xeff70a(0x222)][_0xeff70a(0x2b6)] || 0x0
                    };
                    else {
                        if (_0x378dca[_0xeff70a(0x554)]) _0x469377 = {
                            'x': _0x378dca[_0xeff70a(0x554)]['x'] || 0x0,
                            'y': _0x378dca['orig']['y'] || 0x0,
                            'width': _0x378dca[_0xeff70a(0x554)]['width'] || 0x0,
                            'height': _0x378dca['orig'][_0xeff70a(0x2b6)] || 0x0
                        };
                        else _0x378dca['va'] && _0x378dca['va'][_0xeff70a(0x883)] >= 0x4 && (_0x469377 = {
                            'x': _0x378dca['va'][0x0] || 0x0,
                            'y': _0x378dca['va'][0x1] || 0x0,
                            'width': _0x378dca['va'][0x2] || 0x0,
                            'height': _0x378dca['va'][0x3] || 0x0
                        });
                    }
                }
                let _0x14b1e1 = null;
                if (_0x378dca['Za'] && _0x378dca['Za'][_0xeff70a(0x5d5)] && _0x378dca['Za'][_0xeff70a(0x5d5)][_0xeff70a(0x303)] && _0x378dca['Za'][_0xeff70a(0x5d5)][_0xeff70a(0x303)][_0xeff70a(0x72e)]) _0x14b1e1 = _0x378dca['Za'][_0xeff70a(0x5d5)]['resource']['source'];
                else {
                    if (_0x378dca[_0xeff70a(0x5d5)] && _0x378dca['baseTexture'][_0xeff70a(0x303)] && _0x378dca['baseTexture'][_0xeff70a(0x303)]['source']) _0x14b1e1 = _0x378dca[_0xeff70a(0x5d5)]['resource'][_0xeff70a(0x72e)];
                    else {
                        if (_0x378dca[_0xeff70a(0x5d5)] && _0x378dca[_0xeff70a(0x5d5)][_0xeff70a(0x303)] && _0x378dca[_0xeff70a(0x5d5)][_0xeff70a(0x303)][_0xeff70a(0x37f)]) _0x14b1e1 = _0x378dca['baseTexture'][_0xeff70a(0x303)]['data'];
                        else _0x378dca[_0xeff70a(0x5d5)] && _0x378dca[_0xeff70a(0x5d5)][_0xeff70a(0x72e)] && (_0x14b1e1 = _0x378dca[_0xeff70a(0x5d5)][_0xeff70a(0x72e)]);
                    }
                }
                const _0x54723d = {
                    'hatId': _0x50a323,
                    'image': _0x14b1e1 || null,
                    'coords': _0x469377 || null,
                    'textureData': _0x378dca,
                    'hatData': _0x5ee926,
                    'valid': _0x14b1e1 && _0x469377 ? !0x0 : !0x1
                };
                return window[_0xeff70a(0x56e)][_0x50a323] = _0x54723d, _0x54723d;
            } catch (_0xc66218) {
                return null;
            }
        }

        function _0x4679be(_0x3b027b) {
            var _0x16bf87 = _0x2b6b48;
            try {
                const _0x5f1695 = document[_0x16bf87(0x706)]('div');
                _0x5f1695[_0x16bf87(0x28a)][_0x16bf87(0x392)] = _0x16bf87(0x799);
                const _0x23296b = document[_0x16bf87(0x706)](_0x16bf87(0x678));
                _0x23296b['textContent'] = '#' + _0x3b027b, _0x23296b[_0x16bf87(0x28a)][_0x16bf87(0x392)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,0,0,0.6);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x202px\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', _0x5f1695['appendChild'](_0x23296b);
                const _0x27a3ae = document[_0x16bf87(0x706)](_0x16bf87(0x1b1));
                _0x27a3ae[_0x16bf87(0x1eb)] = 0x50, _0x27a3ae['height'] = 0x50, _0x27a3ae[_0x16bf87(0x28a)][_0x16bf87(0x392)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20object-fit:\x20contain;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', _0x5f1695[_0x16bf87(0x41b)](_0x27a3ae);
                const _0x1f4696 = _0x27a3ae[_0x16bf87(0x70a)]('2d', {
                    'willReadFrequently': !0x0
                });
                _0x1f4696[_0x16bf87(0x73d)](0x0, 0x0, _0x27a3ae[_0x16bf87(0x1eb)], _0x27a3ae[_0x16bf87(0x2b6)]);
                const _0xa4df96 = _0xee2d51(_0x3b027b);
                if (!_0xa4df96 || !_0xa4df96[_0x16bf87(0x227)] || !_0xa4df96['coords']) return _0x1f4696[_0x16bf87(0x38e)] = _0x16bf87(0x213), _0x1f4696['fillRect'](0x0, 0x0, _0x27a3ae[_0x16bf87(0x1eb)], _0x27a3ae[_0x16bf87(0x2b6)]), _0x1f4696[_0x16bf87(0x38e)] = _0x16bf87(0x7d0), _0x1f4696[_0x16bf87(0x4c1)] = '18px\x20Arial', _0x1f4696[_0x16bf87(0x29a)] = 'center', _0x1f4696['fillText']('#' + _0x3b027b, _0x27a3ae[_0x16bf87(0x1eb)] / 0x2, _0x27a3ae['height'] / 0x2), _0x5f1695;
                try {
                    if (_0xa4df96['coords']) {
                        _0x1f4696[_0x16bf87(0x788)]();
                        const _0x5dcb2a = Math[_0x16bf87(0x4c0)]((_0x27a3ae['width'] - 0xa) / _0xa4df96[_0x16bf87(0x41f)][_0x16bf87(0x1eb)], (_0x27a3ae['height'] - 0xa) / _0xa4df96[_0x16bf87(0x41f)][_0x16bf87(0x2b6)]) * 0.9,
                            _0x15aa20 = _0xa4df96['coords'][_0x16bf87(0x1eb)] * _0x5dcb2a,
                            _0x2c75d2 = _0xa4df96[_0x16bf87(0x41f)][_0x16bf87(0x2b6)] * _0x5dcb2a,
                            _0x45f124 = (_0x27a3ae[_0x16bf87(0x1eb)] - _0x15aa20) / 0x2,
                            _0x571d3d = (_0x27a3ae['height'] - _0x2c75d2) / 0x2;
                        _0x1f4696[_0x16bf87(0x219)](_0xa4df96[_0x16bf87(0x227)], _0xa4df96['coords']['x'], _0xa4df96['coords']['y'], _0xa4df96[_0x16bf87(0x41f)][_0x16bf87(0x1eb)], _0xa4df96['coords'][_0x16bf87(0x2b6)], _0x45f124, _0x571d3d, _0x15aa20, _0x2c75d2), _0x1f4696[_0x16bf87(0x1b2)]();
                    } else {
                        const _0x134489 = Math[_0x16bf87(0x4c0)]((_0x27a3ae[_0x16bf87(0x1eb)] - 0xa) / _0xa4df96[_0x16bf87(0x227)][_0x16bf87(0x1eb)], (_0x27a3ae['height'] - 0xa) / _0xa4df96['image']['height']) * 0.8,
                            _0x1b2b45 = _0xa4df96['image']['width'] * _0x134489,
                            _0x1edbb3 = _0xa4df96[_0x16bf87(0x227)]['height'] * _0x134489,
                            _0x35cfee = (_0x27a3ae[_0x16bf87(0x1eb)] - _0x1b2b45) / 0x2,
                            _0x51f8aa = (_0x27a3ae[_0x16bf87(0x2b6)] - _0x1edbb3) / 0x2;
                        _0x1f4696[_0x16bf87(0x219)](_0xa4df96[_0x16bf87(0x227)], _0x35cfee, _0x51f8aa, _0x1b2b45, _0x1edbb3);
                    }
                } catch (_0x337610) {
                    _0x1f4696[_0x16bf87(0x38e)] = _0x16bf87(0x213), _0x1f4696[_0x16bf87(0x510)](0x0, 0x0, _0x27a3ae[_0x16bf87(0x1eb)], _0x27a3ae[_0x16bf87(0x2b6)]), _0x1f4696['fillStyle'] = _0x16bf87(0x7d0), _0x1f4696[_0x16bf87(0x4c1)] = _0x16bf87(0x782), _0x1f4696[_0x16bf87(0x29a)] = _0x16bf87(0x429), _0x1f4696[_0x16bf87(0x605)]('#' + _0x3b027b, _0x27a3ae['width'] / 0x2, _0x27a3ae[_0x16bf87(0x2b6)] / 0x2);
                }
                return _0x5f1695;
            } catch (_0x2ce18d) {
                const _0x535de7 = document[_0x16bf87(0x706)](_0x16bf87(0x678));
                return _0x535de7[_0x16bf87(0x28a)][_0x16bf87(0x392)] = _0x16bf87(0x3f6), _0x535de7['textContent'] = '#' + _0x3b027b, _0x535de7;
            }
        }
        _0x429093[_0x2b6b48(0x869)][_0x2b6b48(0x5ef)] = function() {
            var _0x18d39e = _0x2b6b48;
            $(_0x18d39e(0x80c))[_0x18d39e(0x483)]();
            var _0x418f2b = $(_0x18d39e(0x70f))[_0x18d39e(0x3e5)]('id', _0x18d39e(0x4f4))['css']({
                    'position': 'fixed',
                    'top': '0',
                    'left': '0',
                    'width': _0x18d39e(0x592),
                    'height': _0x18d39e(0x592),
                    'background-color': _0x18d39e(0x206),
                    'z-index': _0x18d39e(0x5a7)
                })[_0x18d39e(0x6c4)](_0x18d39e(0x3fd)),
                _0x19d23b = $(_0x18d39e(0x70f))[_0x18d39e(0x3e5)]('id', _0x18d39e(0x6ba))['css']({
                    'position': _0x18d39e(0x341),
                    'top': _0x18d39e(0x79b),
                    'left': _0x18d39e(0x79b),
                    'transform': 'translate(-50%,\x20-50%)',
                    'background-color': _0x18d39e(0x644),
                    'border-radius': _0x18d39e(0x21c),
                    'box-shadow': '0\x204px\x208px\x20rgba(0,\x200,\x200,\x200.5)',
                    'z-index': _0x18d39e(0x232),
                    'width': _0x18d39e(0x2a2),
                    'overflow': _0x18d39e(0x5e9),
                    'color': _0x18d39e(0x7d0)
                })['appendTo'](_0x18d39e(0x3fd)),
                _0x7ae60f = $(_0x18d39e(0x70f))[_0x18d39e(0x53b)]({
                    'padding': _0x18d39e(0x74a),
                    'background-color': '#252538',
                    'border-bottom': '1px\x20solid\x20#333345',
                    'position': _0x18d39e(0x211),
                    'display': _0x18d39e(0x358),
                    'justify-content': _0x18d39e(0x1bf),
                    'align-items': 'center'
                })[_0x18d39e(0x6c4)](_0x19d23b);
            $('<h3>')[_0x18d39e(0x2a5)](_0x18d39e(0x700))[_0x18d39e(0x53b)]({
                'margin': _0x18d39e(0x4cf),
                'font-size': _0x18d39e(0x690),
                'color': _0x18d39e(0x7d0),
                'padding-left': _0x18d39e(0x376)
            })[_0x18d39e(0x6c4)](_0x7ae60f);
            var _0x450c9a = $(_0x18d39e(0x754))[_0x18d39e(0x1dd)](_0x18d39e(0x662))[_0x18d39e(0x53b)]({
                    'position': _0x18d39e(0x52f),
                    'top': '8px',
                    'left': _0x18d39e(0x23a),
                    'font-size': '22px',
                    'background': _0x18d39e(0x25a),
                    'border': _0x18d39e(0x25a),
                    'color': _0x18d39e(0x1da),
                    'cursor': 'pointer',
                    'padding': _0x18d39e(0x72f),
                    'line-height': '1',
                    'font-weight': _0x18d39e(0x388)
                })[_0x18d39e(0x6c4)](_0x7ae60f),
                _0x3326b6 = $(_0x18d39e(0x754))['text']('Clear\x20All')[_0x18d39e(0x53b)]({
                    'padding': _0x18d39e(0x45f),
                    'background-color': '#f44336',
                    'color': _0x18d39e(0x7d0),
                    'border': 'none',
                    'border-radius': _0x18d39e(0x86b),
                    'cursor': _0x18d39e(0x47b),
                    'font-size': _0x18d39e(0x419)
                })[_0x18d39e(0x6c4)](_0x7ae60f),
                _0xe994f4 = $(_0x18d39e(0x70f))['attr']('id', _0x18d39e(0x77c))[_0x18d39e(0x53b)]({
                    'padding': _0x18d39e(0x74a),
                    'max-height': _0x18d39e(0x88d),
                    'overflow-y': _0x18d39e(0x5e7)
                })[_0x18d39e(0x6c4)](_0x19d23b),
                _0x39b379 = $('<div>')[_0x18d39e(0x3e5)](_0x18d39e(0x5ce), _0x18d39e(0x72c))[_0x18d39e(0x53b)]({
                    'display': 'grid',
                    'grid-template-columns': _0x18d39e(0x220),
                    'gap': '12px',
                    'padding': '0',
                    'margin': '0'
                })[_0x18d39e(0x6c4)](_0xe994f4),
                _0xf0bc54 = this;
            _0x3326b6['on']('click', function() {
                var _0x55ae01 = _0x18d39e;
                confirm(_0x55ae01(0x1d5)) && (_0x1a98d3[_0x55ae01(0x45c)] = [], localStorage[_0x55ae01(0x5c0)](_0x55ae01(0x1e2), JSON['stringify'](_0x1a98d3)), _0x39b379['empty'](), $('<div>')[_0x55ae01(0x53b)]({
                    'text-align': _0x55ae01(0x429),
                    'padding': _0x55ae01(0x23a),
                    'color': _0x55ae01(0x1da),
                    'margin': '20px\x200',
                    'grid-column': _0x55ae01(0x52e)
                })['text'](_0x55ae01(0x587))['appendTo'](_0x39b379), _0xf0bc54[_0x55ae01(0x422)] && _0xf0bc54[_0x55ae01(0x422)]['is'](_0x55ae01(0x7eb)) && _0xf0bc54[_0x55ae01(0x422)][_0x55ae01(0x2a5)](_0x55ae01(0x297))[_0x55ae01(0x53b)]('background-color', _0x55ae01(0x2fb)));
            });

            function _0x2dad67() {
                var _0x1567d4 = _0x18d39e;
                _0x19d23b[_0x1567d4(0x483)](), _0x418f2b[_0x1567d4(0x483)]();
            }
            _0x450c9a['on']('click', _0x2dad67), _0x418f2b['on'](_0x18d39e(0x615), _0x2dad67), !_0x1a98d3[_0x18d39e(0x45c)] || _0x1a98d3[_0x18d39e(0x45c)]['length'] === 0x0 ? $(_0x18d39e(0x70f))[_0x18d39e(0x53b)]({
                'text-align': 'center',
                'padding': '10px',
                'color': _0x18d39e(0x1da),
                'margin': _0x18d39e(0x6e7),
                'grid-column': _0x18d39e(0x409)
            })[_0x18d39e(0x2a5)](_0x18d39e(0x587))['appendTo'](_0x39b379) : (_0x1a98d3['selectedHats'][_0x18d39e(0x1c0)](function(_0x50695e) {
                _0xee2d51(_0x50695e);
            }), _0x1a98d3['selectedHats'][_0x18d39e(0x1c0)](function(_0x264659, _0x703dd7) {
                var _0x3649ca = _0x18d39e,
                    _0x40b2c3 = $(_0x3649ca(0x70f))['attr'](_0x3649ca(0x225), _0x703dd7)[_0x3649ca(0x3e5)](_0x3649ca(0x7c2), _0x264659)[_0x3649ca(0x53b)]({
                        'display': _0x3649ca(0x358),
                        'flex-direction': 'column',
                        'align-items': _0x3649ca(0x429),
                        'padding': _0x3649ca(0x803),
                        'background': _0x3649ca(0x67f),
                        'border-radius': _0x3649ca(0x64e),
                        'position': _0x3649ca(0x211),
                        'height': _0x3649ca(0x442),
                        'width': _0x3649ca(0x592)
                    })[_0x3649ca(0x6c4)](_0x39b379),
                    _0x3e2fd7 = $(_0x3649ca(0x70f))[_0x3649ca(0x53b)]({
                        'width': _0x3649ca(0x592),
                        'height': _0x3649ca(0x4f1),
                        'background': _0x3649ca(0x694),
                        'border-radius': _0x3649ca(0x86b),
                        'overflow': 'visible',
                        'position': _0x3649ca(0x211),
                        'display': _0x3649ca(0x358),
                        'justify-content': 'center',
                        'align-items': _0x3649ca(0x429)
                    })['appendTo'](_0x40b2c3),
                    _0x1ea1fa = $(_0x3649ca(0x754))[_0x3649ca(0x2a5)]('X')['css']({
                        'position': 'absolute',
                        'top': _0x3649ca(0x86b),
                        'right': _0x3649ca(0x86b),
                        'background': _0x3649ca(0x3b6),
                        'color': _0x3649ca(0x7d0),
                        'border': _0x3649ca(0x25a),
                        'padding': _0x3649ca(0x370),
                        'border-radius': _0x3649ca(0x444),
                        'cursor': _0x3649ca(0x47b),
                        'font-size': '12px',
                        'z-index': '20'
                    })[_0x3649ca(0x6c4)](_0x40b2c3),
                    _0x36928c = _0x4679be(_0x264659);
                _0x3e2fd7[_0x3649ca(0x4e4)](_0x36928c), _0x1ea1fa['on'](_0x3649ca(0x615), function(_0x54a966) {
                    var _0x30a499 = _0x3649ca;
                    _0x54a966[_0x30a499(0x374)]();
                    var _0x1b5dec = $(this)[_0x30a499(0x22a)](_0x30a499(0x1e4)),
                        _0x4358e1 = parseInt(_0x1b5dec[_0x30a499(0x3e5)]('data-index')),
                        _0x418d28 = _0x1b5dec[_0x30a499(0x3e5)](_0x30a499(0x7c2));
                    _0x1a98d3[_0x30a499(0x45c)] && _0x4358e1 >= 0x0 && _0x4358e1 < _0x1a98d3[_0x30a499(0x45c)][_0x30a499(0x883)] && (_0x1a98d3[_0x30a499(0x45c)]['splice'](_0x4358e1, 0x1), localStorage[_0x30a499(0x5c0)](_0x30a499(0x1e2), JSON[_0x30a499(0x32a)](_0x1a98d3)), _0x1b5dec[_0x30a499(0x671)](0x12c, function() {
                        var _0x8a3116 = _0x30a499;
                        $(this)['remove'](), _0x39b379[_0x8a3116(0x3be)](_0x8a3116(0x1e4))[_0x8a3116(0x399)](function(_0x2cc084) {
                            var _0x4a2fb0 = _0x8a3116;
                            $(this)[_0x4a2fb0(0x3e5)]('data-index', _0x2cc084);
                        }), _0x1a98d3['selectedHats']['length'] === 0x0 && (_0x39b379['empty'](), $(_0x8a3116(0x70f))['css']({
                            'text-align': _0x8a3116(0x429),
                            'padding': _0x8a3116(0x23a),
                            'color': _0x8a3116(0x1da),
                            'margin': '20px\x200',
                            'grid-column': _0x8a3116(0x52e)
                        })['text'](_0x8a3116(0x587))['appendTo'](_0x39b379)), _0xf0bc54['currentHatId'] === _0x418d28 && _0xf0bc54['hatToggleButton'] && _0xf0bc54[_0x8a3116(0x422)][_0x8a3116(0x2a5)]('â˜…\x20Add')[_0x8a3116(0x53b)](_0x8a3116(0x7a4), _0x8a3116(0x2fb));
                    }));
                });
            })), $(_0x18d39e(0x646))['on'](_0x18d39e(0x402), function() {
                var _0x410e6e = _0x18d39e;
                $(this)['css'](_0x410e6e(0x881), _0x410e6e(0x5e7));
            }), $(_0x18d39e(0x523))['on'](_0x18d39e(0x5f8), function() {
                setTimeout(function() {
                    var _0x66b7 = _0x563d;
                    $(_0x66b7(0x646))['scrollTop'](0x0);
                }, 0x64);
            });
        };

        function _0x46c8a6(_0x4bbe86) {
            try {
                if (ooo && ooo['Mh'] && ooo['Mh']['Lh'] && ooo['Mh']['Lh']['ki']) {
                    const _0x65e6c1 = ooo['Mh']['Lh']['ki']['Yi'];
                    ooo['Mh']['Lh']['ki']['Yi'] = _0x4bbe86;
                    ooo['Mh']['Qh'] && ooo['Mh']['Qh']['fh'] && ooo['Mh']['li'] && ooo['Mh']['li'][ooo['Mh']['Qh']['fh']] && ooo['Mh']['li'][ooo['Mh']['Qh']['fh']]['ki'] && (ooo['Mh']['li'][ooo['Mh']['Qh']['fh']]['ki']['Yi'] = _0x4bbe86);
                    if (_0x2cbd14 && _0x2cbd14['uj'] && _0x2cbd14['n']) {
                        const _0x5af267 = _0x596e0d(_0x2cbd14['uj']);
                        if (_0x5af267) return _0xf80227(_0x5af267, _0x4bbe86), !0x0;
                        else {
                            const _0x3c8d63 = ooo['ud']['Cc']()['Yb'](_0x4bbe86);
                            if (_0x3c8d63) return _0x761db3(_0x2cbd14['uj'], _0x3c8d63), !0x0;
                        }
                    }
                    return !0x0;
                }
            } catch (_0xee8ef2) {}
            return !0x1;
        }

        function _0x596e0d(_0x5d95e8) {
            if (_0x5d95e8['Zc'] && _0x5d95e8['Zc']['rd']) return _0x5d95e8['Zc']['rd'];
            return null;
        }

        function _0xf80227(_0x4b8ee4, _0x1c3e1a) {
            var _0x359c2d = _0x2b6b48;
            if (_0x4b8ee4 && _0x4b8ee4['length'] > 0x0) {
                const _0x37f5d2 = ooo['ud']['Cc']()['Yb'](_0x1c3e1a);
                if (_0x37f5d2 && _0x37f5d2['dc'] && _0x37f5d2['dc'][_0x359c2d(0x883)] > 0x0) try {
                    return _0x4b8ee4[0x0]['kd'](_0x37f5d2['dc'][0x0]), !0x0;
                } catch (_0xc1dc44) {}
            }
            return !0x1;
        }

        function _0x761db3(_0x1dd635, _0x295057) {
            if (_0x1dd635 && _0x1dd635['Zc'] && _0x295057) try {
                return _0x1dd635['Zc']['yd'](0.004, _0x1dd635['Zc']['rd'], _0x295057), !0x0;
            } catch (_0x321f8c) {}
            return !0x1;
        }

        function _0x19a16c() {
            var _0x442491 = _0x2b6b48;
            if (!_0x1a98d3['selectedHats']) {
                _0x1a98d3[_0x442491(0x45c)] = [], localStorage[_0x442491(0x5c0)](_0x442491(0x1e2), JSON[_0x442491(0x32a)](_0x1a98d3));
                return;
            }
            if (_0x1a98d3[_0x442491(0x45c)][_0x442491(0x883)] > 0x0) {
                _0x1a98d3[_0x442491(0x327)] === undefined ? _0x1a98d3[_0x442491(0x327)] = 0x0 : _0x1a98d3[_0x442491(0x327)] = (_0x1a98d3[_0x442491(0x327)] + 0x1) % _0x1a98d3['selectedHats'][_0x442491(0x883)];
                let _0x18cca1 = _0x1a98d3['selectedHats'][_0x1a98d3[_0x442491(0x327)]];
                const _0x654d5 = _0x46c8a6(_0x18cca1);
                localStorage[_0x442491(0x5c0)]('SaveGamewft', JSON['stringify'](_0x1a98d3));
            }
        }

        function _0x5e7a12() {
            var _0x2a6a78 = _0x2b6b48;
            if (window['hatCyclingInitialized']) return;
            $(document)['on']('keydown', function(_0x1dc2d6) {
                var _0x55d51e = _0x563d;
                (_0x1dc2d6['keyCode'] === 0x32 || _0x1dc2d6[_0x55d51e(0x750)] === 0x32) && _0x19a16c();
            }), window[_0x2a6a78(0x521)] = !0x0;
        }

        function _0x2cb7cc() {
            var _0x452437 = _0x2b6b48;
            if (!_0x1a98d3[_0x452437(0x45c)] || _0x1a98d3[_0x452437(0x45c)]['length'] === 0x0) return;
            _0x1a98d3[_0x452437(0x45c)]['forEach'](function(_0x327476) {
                _0xee2d51(_0x327476);
            });
        }
        $(document)[_0x2b6b48(0x65c)](function() {
            setTimeout(function() {
                var _0x8b8550 = _0x563d;
                _0x5e7a12(), _0x2cb7cc(), window[_0x8b8550(0x6a1)] = function() {
                    var _0x340339 = _0x8b8550;
                    if (_0x429093[_0x340339(0x869)][_0x340339(0x5ef)]) {
                        var _0x3b288c = new _0x429093();
                        _0x3b288c[_0x340339(0x5ef)]();
                    }
                }, window['hatHelp'] = function() {};
            }, 0x3e8);
        });

        function _0x3913fe() {
            var _0x33f5cc = _0x2b6b48;
            try {
                const _0x51ad1c = [],
                    _0x5d559d = ooo['ud']['Cc']();
                if (!_0x5d559d) return _0x51ad1c;
                for (let _0x868d37 in _0x5d559d['Vb']) {
                    _0x5d559d['Vb'][_0x33f5cc(0x6f6)](_0x868d37) && _0x51ad1c[_0x33f5cc(0x31a)](_0x868d37);
                }
                return _0x51ad1c;
            } catch (_0x3c3d72) {
                return [];
            }
        }

        function _0x30356d() {}
        window[_0x2b6b48(0x66a)]('load', function() {
            setTimeout(function() {
                _0x2cb7cc(), _0x30356d();
            }, 0x7d0);
        }), _0x416f86 = (function() {
            var _0x2c57de = _0x2b6b48;

            function _0x422a36(_0x353172, _0x8ba3d0, _0x3bf865) {
                this['Cp'] = _0x353172, this['Wd'] = _0x8ba3d0, this['ep'] = _0x3bf865, this['Lc'] = {}, this['Sp'] = [
                    []
                ], this['Tp'] = -0xa, this['Up'] = -0xa;
            }
            return _0x422a36[_0x2c57de(0x869)]['Op'] = function(_0x263850) {
                this['Sp'] = _0x263850;
            }, _0x422a36[_0x2c57de(0x869)]['Pp'] = function(_0x31d2ff) {
                this['Lc'] = _0x31d2ff;
            }, _0x422a36[_0x2c57de(0x869)]['ml'] = function() {
                var _0x35da24 = _0x2c57de,
                    _0x4eac71 = ooo['so']['Zj'](this['Wd']);
                for (var _0x592c93 = 0x0; _0x592c93 < this['Sp'][_0x35da24(0x883)]; _0x592c93++) {
                    for (var _0x37940e = 0x0; _0x37940e < this['Sp'][_0x592c93]['length']; _0x37940e++) {
                        if (this['Sp'][_0x592c93][_0x37940e] === _0x4eac71) {
                            this['Vp'](_0x592c93), this['Wp'](_0x37940e);
                            return;
                        }
                    }
                };
                this['Vp'](0x0), this['Wp'](0x0);
            }, _0x422a36[_0x2c57de(0x869)]['Lp'] = function() {
                var _0x28a0b5 = _0x2c57de,
                    _0x1f4428 = this['Tp'] - 0x1;
                _0x1f4428 < 0x0 && (_0x1f4428 = this['Sp'][_0x28a0b5(0x883)] - 0x1), this['Vp'](_0x1f4428), this['Wp'](this['Up'] % this['Sp'][_0x1f4428][_0x28a0b5(0x883)]);
            }, _0x422a36[_0x2c57de(0x869)]['Mp'] = function() {
                var _0x59d038 = _0x2c57de,
                    _0x2a50e6 = this['Tp'] + 0x1;
                _0x2a50e6 >= this['Sp'][_0x59d038(0x883)] && (_0x2a50e6 = 0x0), this['Vp'](_0x2a50e6), this['Wp'](this['Up'] % this['Sp'][_0x2a50e6][_0x59d038(0x883)]);
            }, _0x422a36[_0x2c57de(0x869)]['Vp'] = function(_0x5cd120) {
                var _0x1a1acb = _0x2c57de,
                    _0x5d5865 = this;
                if (!(_0x5cd120 < 0x0) && !(_0x5cd120 >= this['Sp'][_0x1a1acb(0x883)])) {
                    this['Tp'] = _0x5cd120, _0x3971f3[_0x1a1acb(0x629)]();
                    var _0xe5edc = this['Sp'][this['Tp']];
                    if (_0xe5edc[_0x1a1acb(0x883)] > 0x1)
                        for (var _0x32570e = 0x0; _0x32570e < _0xe5edc['length']; _0x32570e++) {
                            (function(_0x4a7855) {
                                var _0xbd5280 = _0x1a1acb,
                                    _0x59ba2c = _0xe5edc[_0x4a7855],
                                    _0x22033c = _0x5d5865['Lc'][_0x59ba2c],
                                    _0x24af33 = '#' + _0x5d5865['Cp']['Jp'][_0x22033c[_0xbd5280(0x3d8)]],
                                    _0x3405fd = $(_0xbd5280(0x3a3) + _0x24af33 + _0xbd5280(0x549));
                                _0x3405fd[_0xbd5280(0x615)](function() {
                                    ooo['ij']['if'](), _0x5d5865['Wp'](_0x4a7855);
                                }), _0x3971f3[_0xbd5280(0x4e4)](_0x3405fd);
                            }(_0x32570e));
                        }
                }
            }, _0x422a36[_0x2c57de(0x869)]['Wp'] = function(_0x4b1869) {
                var _0x349793 = _0x2c57de;
                if (!(_0x4b1869 < 0x0) && !(_0x4b1869 >= this['Sp'][this['Tp']][_0x349793(0x883)])) {
                    this['Up'] = _0x4b1869, _0x3971f3[_0x349793(0x734)]()[_0x349793(0x53b)](_0x349793(0x7a4), _0x349793(0x694));
                    var _0x17d1ce = _0x3971f3['children'](_0x349793(0x6b4) + (0x1 + _0x4b1869) + ')');
                    _0x17d1ce[_0x349793(0x53b)](_0x349793(0x7a4), _0x17d1ce['css'](_0x349793(0x455))), this['Cp']['tp'](!0x0);
                }
            }, _0x422a36['prototype']['Ap'] = function() {
                return this['Sp'][this['Tp']][this['Up']];
            }, _0x422a36;
        }()), _0x158a86['Vk'] = _0x429093, _0x1e893c = $(_0x2b6b48(0x886)), _0x3b9803 = $('.close-button'), (_0x4fe8c2 = _0x239c2a['ca'](_0x158a86['Ho'], function() {
            var _0x48cfbd = _0x2b6b48;
            _0x158a86['Ho'][_0x48cfbd(0x545)](this, _0x239c2a['U'](_0x48cfbd(0x879)), !0x1), _0x1e893c['click'](function() {
                ooo['ij']['if'](), ooo['kp']() ? (ooo['Xg']['gl'](ooo['Xg']['Jf']), ooo['Xp'](!0x1, !0x0), ooo['Xg']['Yk']['Fo'](new _0x158a86['Yp']())) : ooo['Xg']['jl']();
            }), _0x3b9803[_0x48cfbd(0x615)](function() {
                ooo['ij']['if'](), ooo['Xg']['jl']();
            });
        }))['prototype']['Sa'] = function() {
            var _0x417d87 = _0x2b6b48;
            _0x4fe8c2[_0x417d87(0x4d7)][_0x417d87(0x869)]['Sa']['call'](this);
        }, _0x4fe8c2[_0x2b6b48(0x869)]['Wo'] = function() {
            _0x39b888['f']['h'](_0x158a86['Ho']['Mo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['No'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Oo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Po'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Qo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Ro'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['So'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['To'], 0x32), _0x39b888['f']['g'](_0x158a86['Ho']['Uo'], 0xc8), _0x39b888['f']['h'](_0x158a86['Ho']['Vo'], 0x32);
        }, _0x4fe8c2[_0x2b6b48(0x869)]['nl'] = function() {
            ooo['ij']['jf']();
        }, _0x158a86['Ek'] = _0x4fe8c2, _0x19aa88 = $(_0x2b6b48(0x447)), _0x4e2efe = $(_0x2b6b48(0x3e0)), _0x5de89a = $(_0x2b6b48(0x850)), (_0x4277a3 = _0x239c2a['ca'](_0x158a86['Ho'], function() {
            var _0x5c6ed8 = _0x2b6b48;
            _0x158a86['Ho'][_0x5c6ed8(0x545)](this, _0x239c2a['U'](_0x5c6ed8(0x3b3)), !0x1), _0x4e2efe['click'](function() {
                ooo['ij']['if'](), ooo['ok']['nk']() ? (ooo['ok']['ym'](), ooo['ok']['qm']()) : ooo['Xg']['jl']();
            }), _0x5de89a[_0x5c6ed8(0x615)](function() {
                ooo['ij']['if'](), ooo['Xg']['jl']();
            }), this['Zp'] = [];
        }))[_0x2b6b48(0x869)]['Sa'] = function() {
            var _0x46c893 = _0x2b6b48;
            _0x4277a3[_0x46c893(0x4d7)][_0x46c893(0x869)]['Sa'][_0x46c893(0x545)](this);
        }, _0x4277a3[_0x2b6b48(0x869)]['Wo'] = function() {
            _0x39b888['f']['h'](_0x158a86['Ho']['Mo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['No'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Oo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Po'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Qo'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Ro'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['So'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['To'], 0x32), _0x39b888['f']['h'](_0x158a86['Ho']['Uo'], 0x32), _0x39b888['f']['g'](_0x158a86['Ho']['Vo'], 0xc8);
        }, _0x4277a3['prototype']['nl'] = function() {
            var _0x228b38 = _0x2b6b48;
            ooo['ij']['nf'](), _0x39b888['f']['h'](_0x4e2efe, 0x1), _0x39b888['f']['g'](_0x19aa88, 0x1), _0x19aa88[_0x228b38(0x2a5)](_0x228b38(0x2f7)), this['$p'](), this['_p'](function() {
                var _0x1e8ce7 = _0x228b38;
                _0x19aa88[_0x1e8ce7(0x2a5)]('..9\x20..');
            }, 0x3e8), this['_p'](function() {
                var _0x29c775 = _0x228b38;
                _0x19aa88[_0x29c775(0x2a5)]('..8\x20..');
            }, 0x7d0), this['_p'](function() {
                var _0x3b1117 = _0x228b38;
                _0x19aa88[_0x3b1117(0x2a5)]('..7\x20..');
            }, 0xbb8), this['_p'](function() {
                var _0x512b2c = _0x228b38;
                _0x19aa88[_0x512b2c(0x2a5)]('..6\x20..');
            }, 0xfa0), this['_p'](function() {
                _0x19aa88['text']('..5\x20..');
            }, 0x1388), this['_p'](function() {
                var _0x288f0e = _0x228b38;
                _0x19aa88[_0x288f0e(0x2a5)](_0x288f0e(0x604));
            }, 0x1770), this['_p'](function() {
                var _0x244792 = _0x228b38;
                _0x19aa88[_0x244792(0x2a5)]('..3\x20..');
            }, 0x1b58), this['_p'](function() {
                var _0x379fa7 = _0x228b38;
                _0x19aa88['text'](_0x379fa7(0x497));
            }, 0x1f40), this['_p'](function() {
                var _0xa0937 = _0x228b38;
                _0x19aa88[_0xa0937(0x2a5)](_0xa0937(0x4fb));
            }, 0x2328), this['_p'](function() {
                _0x39b888['f']['g'](_0x4e2efe, 0x12c), _0x39b888['f']['h'](_0x19aa88, 0x1);
            }, 0x2710);
        }, _0x4277a3[_0x2b6b48(0x869)]['_p'] = function(_0x55d9f5, _0x5d8540) {
            var _0x2c4683 = _0x2b6b48,
                _0x2376e3 = _0x239c2a['Y'](_0x55d9f5, _0x5d8540);
            this['Zp'][_0x2c4683(0x31a)](_0x2376e3);
        }, _0x4277a3['prototype']['$p'] = function() {
            var _0x120375 = _0x2b6b48;
            for (var _0x453636 = 0x0; _0x453636 < this['Zp'][_0x120375(0x883)]; _0x453636++) {
                _0x239c2a['Z'](this['Zp'][_0x453636]);
            };
            this['Zp'] = [];
        }, _0x158a86['Gk'] = _0x4277a3, _0x158a86['aq'] = (function() {
            var _0x329b78 = _0x2b6b48;

            function _0x3053fc() {
                this['Go'] = function() {};
            }
            return _0x3053fc[_0x329b78(0x869)]['ag'] = function() {}, _0x3053fc[_0x329b78(0x869)]['nl'] = function() {}, _0x3053fc;
        }()), (_0x2813b8 = _0x239c2a['ca'](_0x158a86['aq'], function(_0x215a3e) {
            var _0x54881b = _0x2b6b48;
            _0x158a86['aq'][_0x54881b(0x545)](this);
            var _0x1baa3f = _0x239c2a['Ca']() + '_' + _0x239c2a['_'](0x3e8 + _0x239c2a['ma']() * 0x2327);
            this['bq'] = $('<div\x20id=\x22' + _0x1baa3f + _0x54881b(0x1b7) + _0x215a3e + '</div><div\x20class=\x22toaster-coins-close\x22>' + _0x239c2a['U'](_0x54881b(0x846)) + _0x54881b(0x5a3));
            var _0x46315d = this;
            this['bq'][_0x54881b(0x3be)]('.toaster-coins-close')[_0x54881b(0x615)](function() {
                ooo['ij']['if'](), _0x46315d['Go']();
            });
        }))['prototype']['ag'] = function() {
            return this['bq'];
        }, _0x2813b8[_0x2b6b48(0x869)]['nl'] = function() {
            ooo['ij']['lf']();
        }, _0x158a86['mm'] = _0x2813b8, (_0x2eae5f = _0x239c2a['ca'](_0x158a86['aq'], function(_0x3a684a) {
            var _0x3a1ae3 = _0x2b6b48;
            _0x158a86['aq'][_0x3a1ae3(0x545)](this);
            var _0x3ab56b = _0x239c2a['Ca']() + '_' + _0x239c2a['_'](0x3e8 + _0x239c2a['ma']() * 0x2327);
            this['bq'] = $('<div\x20id=\x22' + _0x3ab56b + _0x3a1ae3(0x495) + _0x3a684a + _0x3a1ae3(0x51a) + _0x239c2a['U'](_0x3a1ae3(0x4e5)) + _0x3a1ae3(0x823) + _0x239c2a['U'](_0x3a1ae3(0x846)) + '</div></div>');
            var _0x4f37d6 = this;
            this['bq'][_0x3a1ae3(0x3be)](_0x3a1ae3(0x414))[_0x3a1ae3(0x615)](function() {
                ooo['ij']['if'](), _0x4f37d6['Go']();
            });
        }))[_0x2b6b48(0x869)]['ag'] = function() {
            return this['bq'];
        }, _0x2eae5f[_0x2b6b48(0x869)]['nl'] = function() {
            ooo['ij']['kf']();
        }, _0x158a86['lm'] = _0x2eae5f, (_0x1ac14c = _0x239c2a['ca'](_0x158a86['aq'], function() {
            var _0x26b95c = _0x2b6b48;
            _0x158a86['aq']['call'](this);
            var _0x87b174 = this,
                _0x3969a4 = _0x239c2a['Ca']() + '_' + _0x239c2a['_'](0x3e8 + _0x239c2a['ma']() * 0x2327);
            this['bq'] = $(_0x26b95c(0x4b6) + _0x3969a4 + _0x26b95c(0x25f) + _0x2171ac['H']['L'] + _0x26b95c(0x6ce) + _0x239c2a['U'](_0x26b95c(0x85f))[_0x26b95c(0x266)]('\x20', _0x26b95c(0x275))[_0x26b95c(0x266)]('\x0a', _0x26b95c(0x6f2)) + '</span><a\x20class=\x22toaster-consent-accepted-link\x22\x20href=\x22/privacy-policy\x22>' + _0x239c2a['U'](_0x26b95c(0x2b8)) + _0x26b95c(0x50c) + _0x239c2a['U']('index.game.toaster.consent.iAccept') + '</div></div>'), this['cq'] = this['bq']['find'](_0x26b95c(0x764)), this['cq'][_0x26b95c(0x289)](), this['cq'][_0x26b95c(0x615)](function() {
                ooo['ij']['if'](), ooo['kp']() && ooo['Xp'](!0x0, !0x0), _0x87b174['Go']();
            });
        }))[_0x2b6b48(0x869)]['ag'] = function() {
            return this['bq'];
        }, _0x1ac14c[_0x2b6b48(0x869)]['nl'] = function() {
            var _0x4b336d = this;
            ooo['kp']() && !ooo['Pl']() ? (ooo['ij']['nf'](), _0x239c2a['Y'](function() {
                _0x4b336d['cq']['fadeIn'](0x12c);
            }, 0x7d0)) : _0x239c2a['Y'](function() {
                _0x4b336d['Go']();
            }, 0x0);
        }, _0x158a86['Yp'] = _0x1ac14c, _0x317d33 = $('#error-gateway-connection-retry'), (_0x24ee2e = _0x239c2a['ca'](_0x158a86['Uf'], function() {
            var _0x40aeb7 = _0x2b6b48;
            _0x158a86['Uf'][_0x40aeb7(0x545)](this, _0x158a86['ll']['ao']), _0x317d33[_0x40aeb7(0x615)](function() {
                ooo['ij']['if'](), ooo['Xg']['Re']['qo'](), ooo['Xg']['gl'](ooo['Xg']['Re']), _0x239c2a['Y'](function() {
                    var _0x5c30b7 = _0x2171ac['H']['J'] + '/pub/healthCheck/ping';
                    _0x239c2a['Aa'](_0x5c30b7, function() {
                        ooo['Xg']['gl'](ooo['Xg']['_k']);
                    }, function(_0xda9383) {
                        ooo['Xg']['Re']['oo'](), ooo['ud']['rc'](function() {
                            ooo['Xg']['gl'](ooo['Xg']['Jf']);
                        }, function(_0x12e43f) {
                            ooo['Xg']['gl'](ooo['Xg']['_k']);
                        }, function(_0x582846, _0x3a3a97) {
                            ooo['Xg']['Re']['po'](_0x582846, _0x3a3a97);
                        });
                    });
                }, 0x7d0);
            });
        }))[_0x2b6b48(0x869)]['Sa'] = function() {}, _0x24ee2e[_0x2b6b48(0x869)]['ml'] = function() {
            _0x158a86['Nf']['rg'](!0x0), _0x39b888['f']['g'](_0x158a86['Uf']['Tf'], 0x1f4), _0x39b888['f']['g'](_0x158a86['Uf']['Qn'], 0x1), _0x39b888['f']['h'](_0x158a86['Uf']['Rn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Sn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Tn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Un'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Vn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Wn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Xn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Yn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Zn'], 0x32), _0x39b888['f']['g'](_0x158a86['Uf']['$n'], 0x1f4), _0x39b888['f']['h'](_0x158a86['Uf']['_n'], 0x32);
        }, _0x24ee2e[_0x2b6b48(0x869)]['nl'] = function() {
            ooo['ij']['Ye'](_0x158a86['Pe']['Se']['Jf']), ooo['ij']['nf']();
        }, _0x158a86['al'] = _0x24ee2e, _0x462c22 = $(_0x2b6b48(0x7e7)), (_0x4912b9 = _0x239c2a['ca'](_0x158a86['Uf'], function() {
            var _0x3d7b77 = _0x2b6b48;
            _0x158a86['Uf'][_0x3d7b77(0x545)](this, _0x158a86['ll']['ao']), _0x462c22['click'](function() {
                ooo['ij']['if'](), ooo['Xg']['gl'](ooo['Xg']['Jf']);
            });
        }))[_0x2b6b48(0x869)]['Sa'] = function() {}, _0x4912b9['prototype']['ml'] = function() {
            _0x158a86['Nf']['rg'](!0x0), _0x39b888['f']['g'](_0x158a86['Uf']['Tf'], 0x1f4), _0x39b888['f']['g'](_0x158a86['Uf']['Qn'], 0x1), _0x39b888['f']['h'](_0x158a86['Uf']['Rn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Sn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Tn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Un'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Vn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Wn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Xn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Yn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['Zn'], 0x32), _0x39b888['f']['h'](_0x158a86['Uf']['$n'], 0x32), _0x39b888['f']['g'](_0x158a86['Uf']['_n'], 0x1f4);
        }, _0x4912b9[_0x2b6b48(0x869)]['nl'] = function() {
            ooo['ij']['Ye'](_0x158a86['Pe']['Se']['Jf']), ooo['ij']['nf']();
        }, _0x158a86['cl'] = _0x4912b9, _0x239c2a['dq'] = function() {
            function _0x1f7f9d(_0x4c829d) {
                var _0x220876 = _0x4c829d + _0x239c2a['_'](_0x239c2a['ma']() * 0xffff) * 0x25;
                _0x158a86['Cg']['Ng'](_0x158a86['Cg']['Lg'], _0x220876, 0x1e);
            }
            return (function() {
                var _0x15b3a6 = _0x563d,
                    _0x511655 = parseInt(_0x158a86['Cg']['Og'](_0x158a86['Cg']['Lg'])) % 0x25;
                (!(_0x511655 >= 0x0) || !(_0x511655 < _0x2171ac['co']['fq'])) && (_0x511655 = _0x239c2a['ia'](0x0, _0x2171ac['co']['fq'] - 0x2));
                var _0x27dee6 = {
                    'gq': !0x1
                };
                _0x27dee6['hq'] = _0x239c2a['Ca'](), _0x27dee6['iq'] = 0x0, _0x27dee6['jq'] = 0x0, _0x27dee6['kq'] = null, _0x27dee6['lq'] = _0x2171ac['H']['Q'], _0x27dee6['mq'] = _0x2171ac['H']['P'], _0x27dee6['Mh'] = null, _0x27dee6['ud'] = null, _0x27dee6['ef'] = null, _0x27dee6['ij'] = null, _0x27dee6['Xg'] = null, _0x27dee6['so'] = null, _0x27dee6['ok'] = null;
                try {
                    var _0x21ee08 = navigator;
                    if (_0x21ee08) {
                        var _0x47006a = _0x21ee08[_0x15b3a6(0x3d4)];
                        _0x47006a && _0x47006a[_0x15b3a6(0x31f)](function(_0x2b441f) {
                            var _0x31b43b = _0x15b3a6,
                                _0x3f4075 = _0x2b441f[_0x31b43b(0x41f)];
                            f3(_0x3f4075) != _0x31b43b(0x328) && f3(_0x3f4075[_0x31b43b(0x1ee)]) != _0x31b43b(0x328) && f3(_0x3f4075[_0x31b43b(0x4a1)]) != _0x31b43b(0x328) && (_0x27dee6['kq'] = _0x2b441f);
                        }, function(_0x35effb) {});
                    }
                } catch (_0x3aac80) {};
                return _0x27dee6['Sa'] = function() {
                    var _0x1002ea = _0x15b3a6;
                    _0x27dee6['Mh'] = new _0x158a86['nq'](), _0x27dee6['Mh']['oq'] = new _0x158a86['si'](_0x27dee6['Mh']), _0x27dee6['ud'] = new _0x158a86['Kb'](), _0x27dee6['ef'] = new _0x158a86['wk'](), _0x27dee6['ij'] = new _0x158a86['Pe'](), _0x27dee6['Xg'] = new _0x158a86['zk'](), _0x27dee6['so'] = new _0x158a86['Sj'](), _0x27dee6['ok'] = new _0x158a86['sl']();
                    try {
                        ga(_0x1002ea(0x55a), _0x1002ea(0x4d1), _0x1002ea(0x47d), _0x2171ac['H']['I'] + _0x1002ea(0x85e));
                    } catch (_0xebd2c0) {};
                    _0x27dee6['Mh']['pq'] = function() {
                        _0x27dee6['Xg']['gl'](_0x27dee6['Xg']['bl']);
                    }, _0x27dee6['Mh']['qq'] = function() {
                        var _0x7274c6 = _0x1002ea,
                            _0xf46ef7 = _0x27dee6['Xg']['Jf']['Ao']();
                        try {
                            ga(_0x7274c6(0x55a), 'event', _0x7274c6(0x889), _0x2171ac['H']['I'] + _0x7274c6(0x299), _0xf46ef7);
                        } catch (_0x4365ce) {};
                        _0x27dee6['ij']['Ye'](_0x158a86['Pe']['Se']['Kf']), _0x27dee6['Xg']['gl'](_0x27dee6['Xg']['Kf']['ho']());
                    }, _0x27dee6['Mh']['rq'] = function() {
                        var _0x588a95 = _0x1002ea,
                            _0x25fef0, _0x4dba3e;
                        try {
                            ga(_0x588a95(0x55a), _0x588a95(0x4d1), _0x588a95(0x889), _0x2171ac['H']['I'] + _0x588a95(0x5ed));
                        } catch (_0x4e2ef0) {};
                        $(_0x588a95(0x3fd))['height']() >= 0x1ae && _0x2171ac['co']['sq']['Va'](), _0x27dee6['ud']['rc'](null, null, null), _0x25fef0 = _0x239c2a['_'](_0x27dee6['Mh']['Lh']['hi']), _0x4dba3e = _0x27dee6['Mh']['oi'], _0x27dee6['ok']['nk']() ? _0x27dee6['ok']['hm'](function() {
                            _0x27dee6['tq'](_0x25fef0, _0x4dba3e);
                        }) : _0x27dee6['tq'](_0x25fef0, _0x4dba3e);
                    }, _0x27dee6['Mh']['uq'] = function(_0x3d9108) {
                        _0x3d9108(_0x27dee6['Xg']['Kf']['ko'](), _0x27dee6['Xg']['Kf']['lo']());
                    }, _0x27dee6['ok']['em'](function() {
                        var _0x4234b5 = _0x1002ea,
                            _0xbe788f = _0x27dee6['Xg']['rl']();
                        _0xbe788f != null && _0xbe788f['Wd'] === _0x158a86['ll']['kl'] && (_0x27dee6['ij']['Ye'](_0x158a86['Pe']['Se']['Jf']), _0x27dee6['Xg']['gl'](_0x27dee6['Xg']['Jf']));
                        if (_0x27dee6['ok']['nk']()) {
                            var _0x446021 = _0x27dee6['ok']['Kl']();
                            try {
                                ga(_0x4234b5(0x448), _0x4234b5(0x3b9), _0x446021);
                            } catch (_0x42701b) {};
                            try {
                                v2('messenger', _0x4234b5(0x4b9), function(_0x5e636c) {
                                    _0x5e636c(_0x446021);
                                });
                            } catch (_0x1da632) {}
                        } else try {
                            v2(_0x4234b5(0x68c), 'logout');
                        } catch (_0x2a4584) {};
                        _0x27dee6['kp']() && _0x27dee6['ok']['nk']() && !_0x27dee6['ok']['Pl']() ? (_0x27dee6['Xp'](!0x1, !0x1), _0x27dee6['Xg']['Yk']['Fo'](new _0x158a86['Yp']())) : _0x27dee6['vq'](!0x0);
                    }), _0x27dee6['Mh']['Sa'](), _0x27dee6['Xg']['Sa'](), _0x27dee6['so']['Sa'](), _0x27dee6['ud']['Sa'](), _0x27dee6['Xg']['Jf']['zo'](), _0x27dee6['Xg']['gl'](_0x27dee6['Xg']['Jf']), _0x27dee6['ef']['Sa'](function() {
                        _0x27dee6['ij']['Sa'](), _0x27dee6['ok']['Sa'](), _0x27dee6['ud']['rc'](function() {
                            _0x27dee6['Xg']['Jf']['yo'](), _0x27dee6['Xg']['gl'](_0x27dee6['Xg']['Jf']);
                        }, function(_0x38e11e) {
                            _0x27dee6['Xg']['Jf']['yo'](), _0x27dee6['Xg']['gl'](_0x27dee6['Xg']['_k']);
                        }, function(_0x4e79c3, _0x1b31a0) {
                            var _0x511aef = _0x4e79c3;
                            _0x27dee6['Xg']['Re']['po'](_0x511aef, _0x1b31a0), _0x27dee6['Xg']['Jf']['po'](_0x511aef, _0x1b31a0);
                        }), _0x27dee6['kp']() && !_0x27dee6['Pl']() ? _0x27dee6['Xg']['Yk']['Fo'](new _0x158a86['Yp']()) : _0x27dee6['vq'](!0x0);
                    });
                }, _0x27dee6['wq'] = function(_0xf33583) {
                    var _0x53b89c = _0x15b3a6;
                    if (_0x27dee6['ok']['nk']()) {
                        var _0x333adc = _0x27dee6['ok']['gm'](),
                            _0x4e67f2 = _0x2171ac['H']['J'] + _0x53b89c(0x582) + _0x333adc + _0x53b89c(0x839) + _0x239c2a['W'](_0xf33583);
                        _0x239c2a['Aa'](_0x4e67f2, function() {}, function(_0x2d9f0) {});
                    }
                }, _0x27dee6['to'] = function() {
                    _0x511655++, _0x2cbd14['on'] && (_0x511655 = 0x1), !_0x2171ac['co']['xq'] && _0x511655 >= _0x2171ac['co']['fq'] ? (_0x27dee6['Xg']['gl'](_0x27dee6['Xg']['dl']), _0x27dee6['ij']['Ye'](_0x158a86['Pe']['Se']['Mf']), _0x2171ac['co']['yq']['Ta']()) : (_0x1f7f9d(_0x511655), _0x27dee6['zq']());
                }, _0x27dee6['zq'] = function() {
                    var _0x152efe = _0x15b3a6;
                    if (_0x27dee6['Mh']['Aq']()) {
                        _0x27dee6['Xg']['Re']['qo'](), _0x27dee6['Xg']['gl'](_0x27dee6['Xg']['Re']);
                        var _0x17afc5 = _0x27dee6['Xg']['Jf']['Ao']();
                        _0x158a86['Cg']['Ng'](_0x158a86['Cg']['Ig'], _0x17afc5, 0x1e);
                        var _0x5d4000 = _0x27dee6['Xg']['Hi']['Gi']();
                        _0x158a86['Cg']['Ng'](_0x158a86['Cg']['Eg'], _0x5d4000, 0x1e);
                        var _0x30877d = 0x0;
                        if (_0x27dee6['kq'] != null) {
                            var _0x418e12 = _0x27dee6['kq']['coords']['latitude'],
                                _0x279520 = _0x27dee6['kq'][_0x152efe(0x41f)][_0x152efe(0x4a1)];
                            _0x30877d = _0x239c2a['ia'](0x0, _0x239c2a['ha'](0x7fff, (_0x418e12 + 0x5a) / 0xb4 * 0x8000)) << 0x1 | 0x1 | _0x239c2a['ia'](0x0, _0x239c2a['ha'](0xffff, (_0x279520 + 0xb4) / 0x168 * 0x10000)) << 0x10;
                        };
                        if (_0x27dee6['ok']['nk']()) _0x27dee6['Bq'](_0x17afc5, _0x30877d);
                        else {
                            var _0xe8eeb4 = _0x27dee6['Xg']['Jf']['Ml']();
                            _0x158a86['Cg']['Ng'](_0x158a86['Cg']['Jg'], _0xe8eeb4, 0x1e);
                            var _0x3430b5 = _0x27dee6['so']['Zj'](_0x158a86['_j']['$j']);
                            _0x158a86['Cg']['Ng'](_0x158a86['Cg']['Kg'], _0x3430b5, 0x1e), _0x27dee6['Cq'](_0x17afc5, _0x30877d);
                        }
                    }
                }, _0x27dee6['Bq'] = function(_0x510d18, _0x144eff) {
                    var _0x580a3d = _0x15b3a6,
                        _0x482942, _0x43f59a = _0x27dee6['ok']['gm'](),
                        _0x2e0ae2 = window[_0x580a3d(0x5ae)](_0x27dee6['Xg']['Jf']['Ml']()),
                        _0x1c444c = _0x27dee6['so']['Zj'](_0x158a86['_j']['$j']),
                        _0x4e53d2 = _0x27dee6['so']['Zj'](_0x158a86['_j']['ak']),
                        _0xa3c323 = _0x27dee6['so']['Zj'](_0x158a86['_j']['bk']);
                    _0x3f33d6(_0x1c444c, _0x4e53d2, _0xa3c323, _0x27dee6['so']['Zj'](_0x158a86['_j']['dk']), _0x27dee6['so']['Zj'](_0x158a86['_j']['ck']), _0x2e0ae2);
                    var _0x5bd4c3 = (_0x2e0ae2 = (_0x2e0ae2 = _0x1a98d3['f'])['trim']())[_0x580a3d(0x5b7)](_0x2e0ae2[_0x580a3d(0x72a)](-0x7), '');
                    _0x5bd4c3 != _0x1a98d3[_0x580a3d(0x620)] && (_0x1a98d3[_0x580a3d(0x620)] = _0x5bd4c3, _0x1a740e(_0x5bd4c3[_0x580a3d(0x1af)]()));
                    var _0x5bb036 = _0x2171ac['H']['J'] + '/pub/wuid/' + _0x43f59a + _0x580a3d(0x61d) + _0x239c2a['W'](_0x510d18) + _0x580a3d(0x6c7) + _0x144eff + _0x580a3d(0x88a) + _0x239c2a['W'](_0x2e0ae2) + _0x580a3d(0x435) + _0x1a98d3['a'] + _0x580a3d(0x5bf) + _0x1a98d3['b'] + _0x580a3d(0x7a7) + _0x1a98d3['c'] + _0x580a3d(0x625) + _0x1a98d3['d'] + _0x580a3d(0x5c7) + _0x1a98d3['e'];
                    _0x239c2a['Aa'](_0x5bb036, function() {
                        _0x27dee6['Xg']['gl'](_0x27dee6['Xg']['_k']);
                    }, function(_0x27eac7) {
                        var _0x151308 = _0x580a3d;
                        if (_0x27eac7[_0x151308(0x51b)] === 0x5b4) {
                            _0x27dee6['Xg']['gl'](_0x27dee6['Xg']['Wk']);
                            try {
                                ga('send', _0x151308(0x4d1), _0x151308(0x4c9), _0x2171ac['H']['I'] + _0x151308(0x611));
                            } catch (_0xc4c5d1) {}
                        } else {
                            if (_0x27eac7[_0x151308(0x51b)] !== 0x4b0) _0x27dee6['Xg']['gl'](_0x27dee6['Xg']['_k']);
                            else {
                                var _0x2e968f = _0x27eac7['server_url'],
                                    _0x1dee37 = _0x41dd50(_0x2e968f[_0x151308(0x72a)](-0xa, 0x4));
                                $('#port_id')[_0x151308(0x223)]() === '' ? ($(_0x151308(0x7e0))[_0x151308(0x223)](_0x2e968f), $(_0x151308(0x78c))[_0x151308(0x223)](_0x1dee37), _0x1a98d3['pi'] = _0x2e968f, _0x1a98d3['pn'] = _0x1dee37, localStorage[_0x151308(0x5c0)](_0x151308(0x1e2), JSON[_0x151308(0x32a)](_0x1a98d3)), _0x29b35c[_0x151308(0x2a5)] = '' + _0x1dee37, vF3(), _0x27dee6['Mh']['Dq'](_0x2e968f, _0x43f59a)) : ($(_0x151308(0x7e0))[_0x151308(0x223)]($(_0x151308(0x478))[_0x151308(0x223)]()), $(_0x151308(0x78c))['val']($(_0x151308(0x38b))[_0x151308(0x223)]()), _0x1a98d3['pi'] = $(_0x151308(0x478))[_0x151308(0x223)](), _0x1a98d3['pn'] = $(_0x151308(0x38b))[_0x151308(0x223)](), localStorage[_0x151308(0x5c0)](_0x151308(0x1e2), JSON[_0x151308(0x32a)](_0x1a98d3)), _0x29b35c[_0x151308(0x2a5)] = '' + $(_0x151308(0x38b))[_0x151308(0x223)](), vF3(), _0x27dee6['Mh']['Dq']($('#port_id')[_0x151308(0x223)](), _0x43f59a));
                            }
                        }
                    });
                }, _0x27dee6['Cq'] = function(_0xa99b03, _0x53687a) {
                    var _0x1f80e4 = _0x15b3a6,
                        _0x21f4e7 = window[_0x1f80e4(0x5ae)](_0x27dee6['Xg']['Jf']['Ml']()),
                        _0x13466e = _0x27dee6['so']['Zj'](_0x158a86['_j']['$j']),
                        _0x45e3ff = _0x2171ac['H']['J'] + _0x1f80e4(0x685) + _0x239c2a['W'](_0xa99b03) + _0x1f80e4(0x6c7) + _0x53687a + _0x1f80e4(0x88a) + _0x239c2a['W'](_0x21f4e7) + _0x1f80e4(0x435) + _0x239c2a['W'](_0x13466e);
                    _0x239c2a['Aa'](_0x45e3ff, function() {
                        _0x27dee6['Xg']['gl'](_0x27dee6['Xg']['_k']);
                    }, function(_0xab276c) {
                        var _0x3555d9 = _0x1f80e4;
                        if (_0xab276c[_0x3555d9(0x51b)] === 0x5b4) {
                            _0x27dee6['Xg']['gl'](_0x27dee6['Xg']['Wk']);
                            try {
                                ga('send', _0x3555d9(0x4d1), _0x3555d9(0x4c9), _0x2171ac['H']['I'] + _0x3555d9(0x611));
                            } catch (_0x368901) {}
                        } else {
                            if (_0xab276c[_0x3555d9(0x51b)] !== 0x4b0) _0x27dee6['Xg']['gl'](_0x27dee6['Xg']['_k']);
                            else {
                                var _0x5a96da = _0xab276c[_0x3555d9(0x588)],
                                    _0x58cc80 = _0x41dd50(_0x5a96da['substr'](-0xa, 0x4));
                                $(_0x3555d9(0x478))[_0x3555d9(0x223)]() === '' ? ($('#port_id_s')[_0x3555d9(0x223)](_0x5a96da), $(_0x3555d9(0x78c))[_0x3555d9(0x223)](_0x58cc80), _0x1a98d3['pi'] = _0x5a96da, _0x1a98d3['pn'] = _0x58cc80, localStorage[_0x3555d9(0x5c0)](_0x3555d9(0x1e2), JSON[_0x3555d9(0x32a)](_0x1a98d3)), _0x29b35c[_0x3555d9(0x2a5)] = '' + _0x58cc80, vF3(), _0x27dee6['Mh']['Eq'](_0x5a96da, _0x21f4e7, _0x13466e)) : ($('#port_id_s')['val']($(_0x3555d9(0x478))[_0x3555d9(0x223)]()), $(_0x3555d9(0x78c))[_0x3555d9(0x223)]($(_0x3555d9(0x38b))[_0x3555d9(0x223)]()), _0x1a98d3['pi'] = $(_0x3555d9(0x478))[_0x3555d9(0x223)](), _0x1a98d3['pn'] = $(_0x3555d9(0x38b))[_0x3555d9(0x223)](), localStorage[_0x3555d9(0x5c0)](_0x3555d9(0x1e2), JSON[_0x3555d9(0x32a)](_0x1a98d3)), _0x29b35c[_0x3555d9(0x2a5)] = '' + $(_0x3555d9(0x38b))[_0x3555d9(0x223)](), vF3(), _0x27dee6['Mh']['Eq']($(_0x3555d9(0x478))[_0x3555d9(0x223)](), _0x21f4e7, _0x13466e));
                            }
                        }
                    });
                }, _0x27dee6['tq'] = function(_0x56a83a, _0x201385) {
                    var _0x7fc616 = _0x27dee6['Xg']['Jf']['Ml']();
                    _0x27dee6['Xg']['Kf']['jo'](_0x56a83a, _0x201385, _0x7fc616), _0x27dee6['ij']['Ye'](_0x158a86['Pe']['Se']['Lf']), _0x27dee6['Xg']['gl'](_0x27dee6['Xg']['Kf']['io']());
                }, _0x27dee6['wo'] = function() {
                    if (!_0x27dee6['xo']()) return _0x27dee6['so']['hk']();;
                    var _0x36f7f1 = parseInt(_0x158a86['Cg']['Og'](_0x158a86['Cg']['Kg']));
                    return _0x36f7f1 != null && _0x27dee6['so']['ik'](_0x36f7f1, _0x158a86['_j']['$j']) ? _0x36f7f1 : _0x27dee6['so']['hk']();
                }, _0x27dee6['Bo'] = function(_0x19cd60) {
                    var _0x3b2749 = _0x15b3a6;
                    _0x158a86['Cg']['Ng'](_0x158a86['Cg']['Mg'], _0x19cd60 ? _0x3b2749(0x801) : _0x3b2749(0x21e), 0x708);
                }, _0x27dee6['xo'] = function() {
                    return _0x158a86['Cg']['Og'](_0x158a86['Cg']['Mg']) === 'true';
                }, _0x27dee6['vq'] = function(_0x4df4dc) {
                    var _0x21d777 = _0x15b3a6;
                    if (_0x4df4dc !== _0x27dee6['gq']) {
                        _0x27dee6['gq'] = _0x4df4dc;
                        var _0x3f3409 = _0x3f3409 || {};
                        _0x3f3409['consented'] = _0x4df4dc, _0x3f3409[_0x21d777(0x7b7)] = _0x4df4dc, _0x2171ac['co']['do']['Sa'](), _0x2171ac['co']['sq']['Sa'](), _0x2171ac['co']['yq']['Sa'](function(_0x4be068) {
                            _0x4be068 && _0x1f7f9d(_0x511655 = 0x0), _0x27dee6['zq']();
                        });
                    }
                }, _0x27dee6['Xp'] = function(_0x52ad82, _0x20a6d9) {
                    var _0x10ff9f = _0x15b3a6;
                    _0x158a86['Cg']['Ng'](_0x158a86['Cg']['Dg'], _0x52ad82 ? 'true' : _0x10ff9f(0x21e)), _0x20a6d9 && _0x27dee6['wq'](_0x52ad82), _0x27dee6['vq'](_0x52ad82);
                }, _0x27dee6['Pl'] = function() {
                    var _0x24698d = _0x15b3a6;
                    return _0x158a86['Cg']['Og'](_0x158a86['Cg']['Dg']) === _0x24698d(0x801);
                }, _0x27dee6['kp'] = function() {
                    var _0x296f21 = _0x15b3a6;
                    try {
                        return !!_0x158a86['c']['isIPInEEA'] || _0x27dee6['kq'] != null && !!_0x2171ac['Pg']['Qg'](_0x27dee6['kq'][_0x296f21(0x41f)]['latitude'], _0x27dee6['kq'][_0x296f21(0x41f)]['longitude']);
                    } catch (_0x378dfc) {
                        return !0x0;
                    }
                }, _0x27dee6['ug'] = function() {
                    _0x27dee6['iq'] = _0x239c2a['Ca'](), _0x27dee6['jq'] = _0x27dee6['iq'] - _0x27dee6['hq'], _0x27dee6['Mh']['Uh'](_0x27dee6['iq'], _0x27dee6['jq']), _0x27dee6['Xg']['Uh'](_0x27dee6['iq'], _0x27dee6['jq']), _0x27dee6['hq'] = _0x27dee6['iq'];
                }, _0x27dee6['qg'] = function() {
                    _0x27dee6['Xg']['qg']();
                }, _0x27dee6;
            }());
        }, _0x158a86['nq'] = function() {
            'use strict';
            var _0x4d6c1f = {
                'Jq': 0x1e,
                'Kq': new _0x39b888['j'](0x64),
                'Lq': 0x0,
                'Mq': 0x0,
                'Nq': 0x0,
                'Oq': 0x0,
                'Pq': 0x0,
                'Qq': 0x0,
                'go': 0x0,
                'Rq': null,
                'Sq': 0x12c,
                'qq': function() {},
                'rq': function() {},
                'uq': function() {},
                'pq': function() {},
                'Qh': new _0x158a86['dh'](),
                'oq': null,
                'Lh': null,
                'nj': {},
                'li': {},
                'jj': 12.5,
                'Nh': 0x28,
                'Tq': 0x1,
                'Uq': -0x1,
                'Vq': 0x1,
                'Wq': 0x1,
                'Xq': -0x1,
                'Yq': -0x1,
                'Zq': 0x1,
                '$q': 0x1,
                'ar': -0x1,
                'oi': 0x1f4,
                'ei': 0x1f4
            };
            let _0x537f65;
            return _0x4d6c1f['lr'] = function() {
                _0x537f65 && (clearInterval(_0x537f65), _0x537f65 = null);
            }, _0x4d6c1f['kr'] = function() {
                _0x4d6c1f['lr'](), _0x537f65 = setInterval(() => {
                    var _0x22d5c3 = _0x563d;
                    if (_0x4d6c1f['Rq'] && _0x4d6c1f['Rq'][_0x22d5c3(0x518)] === _0x39b888['i'][_0x22d5c3(0x4a0)]) {
                        if (_0x4d6c1f['Sq'] !== 0x12c) {
                            var _0x51e974 = new _0x158a86['Fa'](0x1);
                            new _0x158a86['Oa'](new _0x158a86['Ga'](_0x51e974))['Pa'](_0x4d6c1f['Sq']), _0x4d6c1f['Rq'][_0x22d5c3(0x55a)](_0x51e974);
                        }
                    }
                }, 0x14);
            }, _0x4d6c1f['Qh']['gh'] = 0x1f4, _0x4d6c1f['Lh'] = new _0x158a86['Ui'](_0x4d6c1f['Qh']), _0x4d6c1f['Sa'] = function() {
                _0x4d6c1f['Lh']['_i'](ooo['Xg']['Kf']['Wg']), _0x239c2a['X'](function() {
                    _0x4d6c1f['uq'](function(_0x167232, _0x35cddb) {
                        _0x4d6c1f['br'](_0x167232, _0x35cddb);
                    });
                }, _0x1a98d3['sm']);
            }, _0x4d6c1f['Ph'] = function(_0x3b9914, _0x54c4bd, _0x449e5e, _0x52c780) {
                _0x4d6c1f['Uq'] = _0x3b9914, _0x4d6c1f['Vq'] = _0x54c4bd, _0x4d6c1f['Wq'] = _0x449e5e, _0x4d6c1f['Xq'] = _0x52c780, _0x4d6c1f['cr']();
            }, _0x4d6c1f['dr'] = function(_0x41e0a6) {
                _0x4d6c1f['Tq'] = _0x41e0a6, _0x4d6c1f['cr']();
            }, _0x4d6c1f['cr'] = function() {
                _0x4d6c1f['Yq'] = _0x4d6c1f['Uq'] - _0x4d6c1f['Tq'], _0x4d6c1f['Zq'] = _0x4d6c1f['Vq'] + _0x4d6c1f['Tq'], _0x4d6c1f['$q'] = _0x4d6c1f['Wq'] - _0x4d6c1f['Tq'], _0x4d6c1f['ar'] = _0x4d6c1f['Xq'] + _0x4d6c1f['Tq'];
            }, _0x4d6c1f['Uh'] = function(_0x53ea2b, _0x3174c5) {
                var _0x4bf188 = _0x563d;
                _0x4d6c1f['Nq'] += _0x3174c5, _0x4d6c1f['Mq'] -= _0x4d6c1f['Lq'] * 0.2 * _0x3174c5, _0x4d6c1f['oq']['yi']();
                _0x4d6c1f['Rq'] != null && (_0x4d6c1f['go'] === 0x2 || _0x4d6c1f['go'] === 0x3) && (_0x4d6c1f['er'](_0x53ea2b, _0x3174c5), _0x4d6c1f['Nh'] = 0x4 + _0x4d6c1f['jj'] * _0x4d6c1f['Lh']['Id']);
                var _0x34df16 = 0x3e8 / _0x239c2a['ia'](0x1, _0x3174c5),
                    _0xd1a28b = 0x0;
                for (var _0x4cc45a = 0x0; _0x4cc45a < _0x4d6c1f['Kq'][_0x4bf188(0x883)] - 0x1; _0x4cc45a++) {
                    _0xd1a28b += _0x4d6c1f['Kq'][_0x4cc45a], _0x4d6c1f['Kq'][_0x4cc45a] = _0x4d6c1f['Kq'][_0x4cc45a + 0x1];
                };
                _0x4d6c1f['Kq'][_0x4d6c1f['Kq']['length'] - 0x1] = _0x34df16, _0x4d6c1f['Jq'] = (_0xd1a28b + _0x34df16) / _0x4d6c1f['Kq'][_0x4bf188(0x883)];
            }, _0x4d6c1f['fr'] = function(_0x142ee9, _0x2b251d) {
                return _0x142ee9 > _0x4d6c1f['Yq'] && _0x142ee9 < _0x4d6c1f['Zq'] && _0x2b251d > _0x4d6c1f['$q'] && _0x2b251d < _0x4d6c1f['ar'];
            }, _0x4d6c1f['er'] = function(_0x386aa1, _0x15665f) {
                var _0x3bc3d4 = (_0x4d6c1f['Nq'] + _0x4d6c1f['Mq'] - _0x4d6c1f['Oq']) / (_0x4d6c1f['Pq'] - _0x4d6c1f['Oq']);
                _0x4d6c1f['Lh']['Pj'](_0x386aa1, _0x15665f), _0x4d6c1f['Lh']['Qj'](_0x386aa1, _0x15665f, _0x3bc3d4, _0x4d6c1f['fr']);
                var _0x28be04 = 0x0;
                for (var _0x346e52 in _0x4d6c1f['li']) {
                    var _0xf69a42 = _0x4d6c1f['li'][_0x346e52];
                    _0xf69a42['Pj'](_0x386aa1, _0x15665f), _0xf69a42['Qj'](_0x386aa1, _0x15665f, _0x3bc3d4, _0x4d6c1f['fr']), _0xf69a42['cj'] && _0xf69a42['Id'] > _0x28be04 && (_0x28be04 = _0xf69a42['Id']), !_0xf69a42['bj'] && (!!(_0xf69a42['Lj'] < 0.005) || !_0xf69a42['cj']) && (_0xf69a42['$i'](), delete _0x4d6c1f['li'][_0xf69a42['ki']['Je']]);
                };
                _0x4d6c1f['dr'](_0x28be04 * 0x3);
                for (var _0x5c66fc in _0x4d6c1f['nj']) {
                    var _0xd439ce = _0x4d6c1f['nj'][_0x5c66fc];
                    _0xd439ce['Pj'](_0x386aa1, _0x15665f), _0xd439ce['Qj'](_0x386aa1, _0x15665f, _0x4d6c1f['fr']), _0xd439ce['tj'] && (_0xd439ce['Lj'] < 0.005 || !_0x4d6c1f['fr'](_0xd439ce['Fj'], _0xd439ce['Gj'])) && (_0xd439ce['$i'](), delete _0x4d6c1f['nj'][_0xd439ce['ki']['Je']]);
                }
            }, _0x4d6c1f['Si'] = function(_0x161985, _0x2a79af) {
                _0x4d6c1f['go'] === 0x1 && (_0x4d6c1f['go'] = 0x2, _0x4d6c1f['qq']());
                var _0x3e3f38 = ooo['iq'];
                _0x4d6c1f['Qq'] = _0x161985;
                _0x161985 === 0x0 ? (_0x4d6c1f['Oq'] = _0x3e3f38 - 0x5f, _0x4d6c1f['Pq'] = _0x3e3f38, _0x4d6c1f['Nq'] = _0x4d6c1f['Oq'], _0x4d6c1f['Mq'] = 0x0) : (_0x4d6c1f['Oq'] = _0x4d6c1f['Pq'], _0x4d6c1f['Pq'] = _0x4d6c1f['Pq'] + _0x2a79af);
                var _0x28026b = _0x4d6c1f['Nq'] + _0x4d6c1f['Mq'];
                _0x4d6c1f['Lq'] = (_0x28026b - _0x4d6c1f['Oq']) / (_0x4d6c1f['Pq'] - _0x4d6c1f['Oq']);
            }, _0x4d6c1f['uj'] = function() {
                if (_0x4d6c1f['go'] === 0x1 || _0x4d6c1f['go'] === 0x2) {
                    _0x4d6c1f['go'] = 0x3;
                    var _0x3fe343 = _0x4d6c1f['Rq'];
                    _0x239c2a['Y'](function() {
                        var _0x14a124 = _0x563d;
                        _0x4d6c1f['go'] === 0x3 && (_0x4d6c1f['go'] = 0x0), _0x3fe343 != null && _0x3fe343 === _0x4d6c1f['Rq'] && (_0x4d6c1f['Rq'][_0x14a124(0x38d)](), _0x4d6c1f['Rq'] = null);
                    }, 0x1388), _0x4d6c1f['rq']();
                }
            }, _0x4d6c1f['Aq'] = function() {
                var _0x1a89f0 = _0x563d;
                return _0x4d6c1f['go'] !== 0x2 && (_0x4d6c1f['go'] = 0x1, _0x4d6c1f['oq']['xi'](), _0x4d6c1f['nj'] = {}, _0x4d6c1f['li'] = {}, _0x4d6c1f['Lh']['xn'](), _0x4d6c1f['Rq'] != null && (_0x4d6c1f['Rq'][_0x1a89f0(0x38d)](), _0x4d6c1f['Rq'] = null), !0x0);
            }, _0x4d6c1f['gr'] = function() {
                _0x4d6c1f['Rq'] = null, _0x4d6c1f['oq']['xi'](), _0x4d6c1f['lr'](), _0x4d6c1f['go'] !== 0x3 && _0x4d6c1f['pq'](), _0x4d6c1f['go'] = 0x0;
            }, _0x4d6c1f['Dq'] = function(_0x4d5e69, _0x2d0bf1) {
                _0x4d6c1f['hr'](_0x4d5e69, function() {
                    var _0x51dccd = _0x563d;
                    if (vO2['unlimitedRespawn']) {
                        var _0x2c45e7 = document[_0x51dccd(0x804)](_0x51dccd(0x493));
                        _0x2c45e7 ? _0x2c45e7 = _0x2c45e7[_0x51dccd(0x6fd)] || '' : _0x2c45e7 = _0x2d0bf1;
                        var _0x261683 = 0x80,
                            _0x5b0416 = _0x239c2a['ha'](0x20, _0x2c45e7[_0x51dccd(0x883)]),
                            _0x2a87e3 = new _0x158a86['Fa'](0x7 + _0x5b0416 * 0x2),
                            _0x1c711b = new _0x158a86['Oa'](new _0x158a86['Ga'](_0x2a87e3));
                        _0x1c711b['Pa'](0x81), _0x1c711b['Qa'](0xaf0), _0x1c711b['Pa'](0x0), _0x1c711b['Qa'](_0x261683), _0x1c711b['Pa'](_0x5b0416);
                        for (var _0x536a6d = 0x0; _0x536a6d < _0x5b0416; _0x536a6d++) {
                            _0x1c711b['Qa'](_0x2c45e7[_0x51dccd(0x64d)](_0x536a6d));
                        }
                        _0x4d6c1f['ir'](_0x2a87e3);
                    } else {
                        var _0x192d36 = _0x239c2a['ha'](0x800, _0x2d0bf1[_0x51dccd(0x883)]),
                            _0x2a87e3 = new _0x158a86['Fa'](0x6 + _0x192d36 * 0x2),
                            _0x1c711b = new _0x158a86['Oa'](new _0x158a86['Ga'](_0x2a87e3));
                        _0x1c711b['Pa'](0x81), _0x1c711b['Qa'](0xaf0), _0x1c711b['Pa'](0x1), _0x1c711b['Qa'](_0x192d36);
                        for (var _0x435f91 = 0x0; _0x435f91 < _0x192d36; _0x435f91++) {
                            _0x1c711b['Qa'](_0x2d0bf1[_0x51dccd(0x64d)](_0x435f91));
                        }
                        _0x4d6c1f['ir'](_0x2a87e3);
                    }
                });
            }, _0x4d6c1f['Eq'] = function(_0x4836c3, _0x144131, _0x5b04e9) {
                _0x4d6c1f['hr'](_0x4836c3, function() {
                    var _0x3e0652 = _0x563d,
                        _0x8fcb86 = _0x239c2a['ha'](0x20, _0x144131[_0x3e0652(0x883)]),
                        _0x2c216c = new _0x158a86['Fa'](0x7 + _0x8fcb86 * 0x2),
                        _0x17d9e7 = new _0x158a86['Oa'](new _0x158a86['Ga'](_0x2c216c));
                    _0x17d9e7['Pa'](0x81), _0x17d9e7['Qa'](0xaf0), _0x17d9e7['Pa'](0x0), _0x17d9e7['Qa'](_0x5b04e9), _0x17d9e7['Pa'](_0x8fcb86);
                    for (var _0x3cb7d3 = 0x0; _0x3cb7d3 < _0x8fcb86; _0x3cb7d3++) {
                        _0x17d9e7['Qa'](_0x144131['charCodeAt'](_0x3cb7d3));
                    };
                    _0x4d6c1f['ir'](_0x2c216c);
                });
            }, _0x4d6c1f['ir'] = function(_0x43d38e) {
                var _0x4b02ce = _0x563d;
                try {
                    _0x4d6c1f['Rq'] != null && _0x4d6c1f['Rq'][_0x4b02ce(0x518)] === _0x39b888['i'][_0x4b02ce(0x4a0)] && _0x4d6c1f['Rq'][_0x4b02ce(0x55a)](_0x43d38e);
                } catch (_0x532f3f) {
                    _0x4d6c1f['gr']();
                }
            }, _0x4d6c1f['br'] = function(_0x44a8c4, _0x358c22) {
                var _0x22c739 = ((_0x358c22 ? 0x80 : 0x0) | _0x239c2a['da'](_0x44a8c4) / _0x2171ac['S'] * 0x80 & 0x7f) & 0xff;
                if (_0x4d6c1f['Sq'] !== _0x22c739) {
                    var _0x3a8299 = new _0x158a86['Fa'](0x1);
                    new _0x158a86['Oa'](new _0x158a86['Ga'](_0x3a8299))['Pa'](_0x22c739), _0x4d6c1f['lr'](), _0x4d6c1f['ir'](_0x3a8299), _0x4d6c1f['Sq'] = _0x22c739, _0x4d6c1f['kr']();
                }
            }, _0x4d6c1f['hr'] = function(_0x4a16c9, _0x1a9fb3) {
                var _0x535126 = _0x563d;
                let _0x2842a5;
                !_0x2cbd14['on'] && _0x1a98d3[_0x535126(0x7cf)] && (_0x2842a5 = _0x25ec2a(_0x1a98d3[_0x535126(0x7cf)]));
                var _0x551a93 = _0x4d6c1f['Rq'] = new _0x39b888['i'](_0x4a16c9);
                _0x551a93['binaryType'] = 'arraybuffer', _0x551a93[_0x535126(0x34c)] = function() {
                    var _0x28ce21 = _0x535126;
                    _0x2ae5f5(_0x1a98d3, oeo, 'open'), _0x488c0a(_0x1a98d3, oeo, _0x28ce21(0x5e9)), _0x4d6c1f['Rq'] === _0x551a93 && (_0x4d6c1f['kr'](), _0x1a9fb3());
                }, _0x551a93['onclose'] = function() {
                    var _0x1f1b3e = _0x535126;
                    _0x2ae5f5(_0x1a98d3, oeo, _0x1f1b3e(0x38d)), _0x488c0a(_0x1a98d3, oeo, 'hidden'), !_0x2cbd14['on'] && _0x1a98d3[_0x1f1b3e(0x7cf)] && _0x2842a5 && _0x2842a5[_0x1f1b3e(0x238)](), _0x4d6c1f['Rq'] === _0x551a93 && (_0x4d6c1f['lr'](), _0x4d6c1f['gr']());
                }, _0x551a93[_0x535126(0x6be)] = function(_0x4d5f04) {
                    var _0x801a7a = _0x535126;
                    _0x4d6c1f['Rq'] === _0x551a93 && (_0x4d6c1f['lr'](), _0x4d6c1f['gr']()), !_0x2cbd14['on'] && _0x1a98d3[_0x801a7a(0x7cf)] && _0x2842a5 && _0x2842a5['destroy']();
                }, _0x551a93[_0x535126(0x23b)] = function(_0x27898b) {
                    var _0x5bd573 = _0x535126;
                    _0x4d6c1f['Rq'] === _0x551a93 && _0x4d6c1f['oq']['wi'](_0x27898b[_0x5bd573(0x37f)]);
                };
            }, _0x4d6c1f;
        }, _0x4a06ac = _0x158a86['c']['ENV'], (_0x506e40 = {})[_0x2b6b48(0x829)] = {
            'do': _0x239c2a['Ua'](_0x2b6b48(0x6e3), _0x2b6b48(0x396)),
            'sq': _0x239c2a['Ua'](_0x2b6b48(0x1bb), _0x2b6b48(0x7ef)),
            'yq': _0x239c2a['Ra'](),
            'fq': 0x4,
            'xq': !0x1,
            'bo': !0x0
        }, _0x506e40[_0x2b6b48(0x334)] = {
            'do': _0x239c2a['Ua'](_0x2b6b48(0x6e3), 'WRM_wormate-io_300x250'),
            'sq': _0x239c2a['Ua'](_0x2b6b48(0x1bb), _0x2b6b48(0x7ef)),
            'yq': _0x239c2a['Ra'](),
            'fq': 0x4,
            'xq': !0x1,
            'bo': !0x1
        };
        !(_0xa5afcc = _0x506e40[_0x4a06ac]) && (_0xa5afcc = _0x506e40[_0x2b6b48(0x829)]);
        _0x2171ac['co'] = _0xa5afcc, $(function() {
                var _0x47fb3c = _0x2b6b48;
                FastClick[_0x47fb3c(0x323)](_0x158a86['d'][_0x47fb3c(0x3fd)]);
            }), addEventListener(_0x2b6b48(0x282), function(_0x1d3265) {
                var _0x33fbab = _0x2b6b48;
                return _0x1d3265[_0x33fbab(0x456)](), _0x1d3265[_0x33fbab(0x374)](), !0x1;
            }), _0x2bcf94 = !0x1, _0x31d489 = !0x1, _0x239c2a['ba'](_0x2b6b48(0x3cd), ((_0x496054 = {})['id'] = _0x2b6b48(0x7f9), _0x496054[_0x2b6b48(0x86e)] = !0x0, _0x496054), function() {
                var _0x45b479 = _0x2b6b48;
                _0x2bcf94 = !0x0, _0x31d489 = !0x1, v2(_0x45b479(0x68c), 'hide'), v2(_0x45b479(0x653), _0x45b479(0x38d), function() {
                    var _0x3e7b91 = _0x45b479;
                    v2(_0x3e7b91(0x68c), _0x3e7b91(0x289)), _0x31d489 = !0x1;
                });
            }), $(_0x2b6b48(0x1ba))[_0x2b6b48(0x615)](function() {
                var _0x1a1b0c = _0x2b6b48;
                _0x2bcf94 && (_0x31d489 ? (v2(_0x1a1b0c(0x68c), _0x1a1b0c(0x38d)), _0x31d489 = !0x1) : (v2(_0x1a1b0c(0x68c), _0x1a1b0c(0x511)), v2(_0x1a1b0c(0x68c), _0x1a1b0c(0x59a)), _0x31d489 = !0x0));
            }), _0x158a86['c'][_0x2b6b48(0x236)] = function() {
                var _0x1091a8 = _0x2b6b48,
                    _0x20dd3a;
                FB['init'](((_0x20dd3a = {})[_0x1091a8(0x2e0)] = _0x1091a8(0x5dd), _0x20dd3a[_0x1091a8(0x2a0)] = !0x0, _0x20dd3a[_0x1091a8(0x684)] = !0x0, _0x20dd3a[_0x1091a8(0x465)] = !0x0, _0x20dd3a['version'] = _0x1091a8(0x375), _0x20dd3a));
            }, _0x239c2a['ba']('//connect.facebook.net/' + _0x2171ac['H']['Q'] + _0x2b6b48(0x639), ((_0x1aba81 = {})['id'] = _0x2b6b48(0x3ce), _0x1aba81[_0x2b6b48(0x86e)] = !0x0, _0x1aba81[_0x2b6b48(0x5ee)] = !0x0, _0x1aba81['crossorigin'] = 'anonymous', _0x1aba81)), _0x239c2a['ba'](_0x2b6b48(0x273), null, function() {
                var _0x2d611e = _0x2b6b48;
                gapi['load'](_0x2d611e(0x58d), function() {
                    var _0x1182ff = _0x2d611e,
                        _0x102ac7;
                    v = gapi['auth2'][_0x1182ff(0x762)](((_0x102ac7 = {})[_0x1182ff(0x79a)] = _0x1182ff(0x3f3), _0x102ac7));
                });
            }), _0x239c2a['ba']('//apis.google.com/js/platform.js'), (function() {
                var _0x21e039 = _0x2b6b48;
                try {
                    let _0x4fdbdc = document[_0x21e039(0x281)]('head')[0x0],
                        _0x1ab302 = document['createElement'](_0x21e039(0x267));
                    _0x1ab302['rel'] = _0x21e039(0x4ae), _0x1ab302[_0x21e039(0x2a1)] = _0x21e039(0x22d), _0x1ab302[_0x21e039(0x3bb)] = 'https://wormx.store/2025/css/gamenew.css', _0x4fdbdc[_0x21e039(0x41b)](_0x1ab302);
                } catch (_0x23023e) {
                    console[_0x21e039(0x1c4)](_0x23023e);
                }
            }()), (ooo = _0x239c2a['dq']())['Sa'](), oeo = ooo['Xg']['Kf']['Wg']['Ah'],
            function _0x20a56a() {
                requestAnimationFrame(_0x20a56a), ooo['ug']();
            }(), (function() {
                var _0x14e18e = _0x2b6b48;

                function _0x1e0085() {
                    var _0xa5bd70 = _0x563d,
                        _0x48328a = _0x4ad336[_0xa5bd70(0x1eb)](),
                        _0x3e6089 = _0x4ad336['height'](),
                        _0x4f4ad0 = _0x43b4d3[_0xa5bd70(0x5cd)](),
                        _0x4c9e8b = _0x43b4d3[_0xa5bd70(0x393)](),
                        _0x1df441 = _0xa7df21[_0xa5bd70(0x393)](),
                        _0x22c7b8 = _0x29a9e7['outerHeight'](),
                        _0x41fc3e = _0x239c2a['ha'](0x1, _0x239c2a['ha']((_0x3e6089 - _0x22c7b8 - _0x1df441) / _0x4c9e8b, _0x48328a / _0x4f4ad0)),
                        _0x17a00d = _0xa5bd70(0x640) + _0x41fc3e + ')';
                    _0x43b4d3[_0xa5bd70(0x53b)]('-webkit-transform', _0x17a00d), _0x43b4d3[_0xa5bd70(0x53b)](_0xa5bd70(0x72d), _0x17a00d), _0x43b4d3[_0xa5bd70(0x53b)](_0xa5bd70(0x48b), _0x17a00d), _0x43b4d3['css'](_0xa5bd70(0x81a), _0x17a00d), _0x43b4d3[_0xa5bd70(0x53b)](_0xa5bd70(0x7bb), _0x17a00d), ooo['qg'](), _0x158a86['c'][_0xa5bd70(0x649)](0x0, 0x1);
                }
                var _0x4ad336 = $(_0x14e18e(0x3fd)),
                    _0x43b4d3 = $(_0x14e18e(0x254)),
                    _0xa7df21 = $(_0x14e18e(0x7c4)),
                    _0x29a9e7 = $(_0x14e18e(0x564));
                _0x1e0085(), $(_0x158a86['c'])[_0x14e18e(0x25e)](_0x1e0085);
            }());
        let _0x51a3c4 = function(_0x10b0e0, _0xabdb9) {
                var _0x55bfb7 = _0x2b6b48,
                    _0x453c09 = $(_0x55bfb7(0x6ad));
                _0x453c09[_0x55bfb7(0x84a)](_0x55bfb7(0x74b), _0x10b0e0['saveGame']), _0x453c09[_0x55bfb7(0x84d)](function() {
                    var _0x4c3820 = _0x55bfb7;
                    if (!this[_0x4c3820(0x74b)]) {
                        let _0x44944a = confirm(localStorage[_0x4c3820(0x1b3)](_0x4c3820(0x53f)));
                        $(this)['prop']('checked', !_0x44944a), !this[_0x4c3820(0x74b)] && _0x2ae5f5(_0x10b0e0, _0xabdb9, 'zero');
                    };
                    _0x10b0e0['saveGame'] = this[_0x4c3820(0x74b)], _0xabdb9[_0x4c3820(0x4bd)][_0x4c3820(0x44e)] = this[_0x4c3820(0x74b)] ? 0x1 : 0x0, _0xabdb9[_0x4c3820(0x6df)][_0x4c3820(0x44e)] = this['checked'] ? 0x1 : 0x0, localStorage[_0x4c3820(0x5c0)](_0x4c3820(0x1e2), this['checked'] ? JSON['stringify'](_0x10b0e0) : null);
                });
            },
            _0x2ae5f5 = function(_0x435a85, _0x8d661f, _0x6c9095, _0x1363d7) {
                var _0x286365 = _0x2b6b48;
                let _0x3b335a = function(_0x5d48df, _0x2b83ae, _0x137192, _0x32b95f) {
                    var _0x218b60 = _0x563d;
                    _0x8d661f[_0x218b60(0x6d0)]['text'] = _0x2b83ae, _0x8d661f[_0x218b60(0x4bd)][_0x218b60(0x2a5)] = _0x137192, _0x8d661f[_0x218b60(0x755)]['text'] = _0x5d48df, _0x8d661f[_0x218b60(0x6df)][_0x218b60(0x2a5)] = _0x32b95f;
                };
                _0x6c9095 === _0x286365(0x597) && (_0x435a85[_0x286365(0x48d)] = (_0x435a85['kill'] || 0x0) + (_0x1363d7 ? 0x0 : 0x1), _0x435a85['headshot'] = (_0x435a85['headshot'] || 0x0) + (_0x1363d7 ? 0x1 : 0x0), _0x435a85['s_kill'] += _0x1363d7 ? 0x0 : 0x1, _0x435a85[_0x286365(0x80f)] += _0x1363d7 ? 0x1 : 0x0, _0x3b335a(_0x435a85[_0x286365(0x48d)], _0x435a85[_0x286365(0x717)], _0x435a85[_0x286365(0x80f)], _0x435a85[_0x286365(0x75c)]), _0x1363d7 && wftObjects && wftObjects['soundEnabled'] && (_0x435a85[_0x286365(0x717)] % 0xa === 0x0 && _0x435a85[_0x286365(0x717)] > 0x0 && window[_0x286365(0x3dc)]()));
                _0x6c9095 === _0x286365(0x511) && (_0x435a85['kill'] = 0x0, _0x435a85['headshot'] = 0x0, _0x435a85['s'] = !0x0, _0x435a85['st'] = !0x0, _0x423a56[_0x286365(0x272)] = _0x168c20, _0x435a85[_0x286365(0x3a6)] && _0x3b335a(_0x435a85[_0x286365(0x48d)], _0x435a85['headshot'], _0x435a85['s_headshot'], _0x435a85[_0x286365(0x75c)]), _0x326b6d());
                if (_0x6c9095 === _0x286365(0x38d)) {
                    _0x435a85['s'] = !0x1, _0x2add7a[_0x286365(0x272)] = _0x30cfd0, _0x2da668['texture'] = _0x1b024d, _0x12badb = !0x1, _0x93ba91 = 0x37, _0x39f5db = 0x1, _0x31c07e = !0x0, clearInterval(_0xd66ce6), _0xd66ce6 = null, clearInterval(_0x598970), _0x598970 = null, _0x435a85['z'] = 0x1, _0x435a85['fz'] = !0x0, _0x435a85[_0x286365(0x26f)]['x'] = -0x1, _0x435a85[_0x286365(0x26f)]['y'] = -0x1, _0x435a85[_0x286365(0x670)]['x'] = -0x1, _0x435a85['mo2']['y'] = -0x1;
                    const _0x38af8b = document[_0x286365(0x326)]('audio');
                    _0x38af8b[_0x286365(0x1c0)](_0xa79a91 => {
                        var _0xcfa2d1 = _0x286365;
                        _0xa79a91[_0xcfa2d1(0x5bc)](), _0xa79a91['currentTime'] = 0x0;
                    }), _0x2cbd14 && _0x2cbd14['on'] && _0x435a85[_0x286365(0x7cf)] && _0x435a85['mo'] == 0x6 && _0x435a85['j'] && _0x435a85['j'][_0x286365(0x238)](), _0x435a85[_0x286365(0x3a6)] ? _0x435a85['died'] = (_0x435a85['died'] || 0x0) + 0x1 : _0x2ae5f5(_0x435a85, _0x8d661f, _0x286365(0x293));
                }
                _0x6c9095 === _0x286365(0x293) && (_0x435a85['kill'] = 0x0, _0x435a85[_0x286365(0x75c)] = 0x0, _0x435a85[_0x286365(0x717)] = 0x0, _0x435a85['s_headshot'] = 0x0, _0x435a85['died'] = 0x0), localStorage[_0x286365(0x5c0)](_0x286365(0x1e2), JSON['stringify'](_0x435a85));
            };
        window[_0x2b6b48(0x760)] = !0x0;

        function _0x375984() {
            var _0x18669b = _0x2b6b48;
            const _0x30aa38 = localStorage['getItem'](_0x18669b(0x4b5));
            _0x30aa38 !== null && (window[_0x18669b(0x760)] = _0x30aa38 === _0x18669b(0x801));
        }

        function _0x309568() {
            var _0x94f909 = _0x2b6b48;
            localStorage['setItem'](_0x94f909(0x4b5), window[_0x94f909(0x760)]['toString']());
        }

        function _0x43d174() {
            var _0x12fabc = _0x2b6b48;
            _0x375984();
            if (window[_0x12fabc(0x6d5)]) return;
            window[_0x12fabc(0x6d5)] = !0x0;

            function _0x4fadef() {
                var _0x3e37b4 = _0x12fabc;
                if (!window[_0x3e37b4(0x760)]) {
                    ['pk0', _0x3e37b4(0x7dd), _0x3e37b4(0x3b8), _0x3e37b4(0x591), _0x3e37b4(0x45a), _0x3e37b4(0x58e), 'pk6']['forEach'](_0x548781 => {
                        var _0x2ed83e = _0x3e37b4;
                        const _0x22f0a1 = globalThis[_0x2ed83e(0x612)]?.[_0x548781];
                        _0x22f0a1 && _0x22f0a1[_0x2ed83e(0x226)] && _0x52d5a8(_0x22f0a1);
                    });
                    return;
                } [_0x3e37b4(0x681), _0x3e37b4(0x7dd), _0x3e37b4(0x3b8), _0x3e37b4(0x591), 'pk4', _0x3e37b4(0x58e), 'pk6'][_0x3e37b4(0x1c0)](_0x5a4dd3 => {
                    var _0x41ea44 = _0x3e37b4;
                    const _0x3a9127 = globalThis[_0x41ea44(0x612)]?.[_0x5a4dd3];
                    if (!_0x3a9127 || !_0x3a9127[_0x41ea44(0x2a5)]) return;
                    const _0x28b872 = _0x3a9127['style'] && _0x3a9127['style']['fill'] === _0x41ea44(0x4ce),
                        _0x371c00 = _0x3a9127[_0x41ea44(0x28a)] && _0x3a9127[_0x41ea44(0x28a)][_0x41ea44(0x29b)] === _0x41ea44(0x864);
                    if (_0x28b872 || _0x371c00) {
                        const _0x1748d7 = parseInt(_0x3a9127[_0x41ea44(0x2a5)]);
                        !isNaN(_0x1748d7) && _0x1748d7 > 0x0 && _0x1748d7 <= 0x5 ? _0x30fcb4(_0x3a9127) : _0x52d5a8(_0x3a9127);
                    } else _0x52d5a8(_0x3a9127);
                });
            }

            function _0x30fcb4(_0x4afef1) {
                var _0x398fc6 = _0x12fabc;
                if (_0x4afef1[_0x398fc6(0x226)]) return;
                _0x4afef1[_0x398fc6(0x46d)] = _0x4afef1['style']['fill'], _0x4afef1['_originalFontSize'] = _0x4afef1[_0x398fc6(0x28a)][_0x398fc6(0x3ae)] || _0x398fc6(0x68a), _0x4afef1['_pulseStarted'] = !0x0, _0x4afef1[_0x398fc6(0x786)] = 0x0, _0x4afef1[_0x398fc6(0x4a2)] = setInterval(() => {
                    var _0x23abe8 = _0x398fc6;
                    const _0x1292a7 = Date[_0x23abe8(0x458)]();
                    _0x1292a7 - _0x4afef1['_lastPulseTime'] > 0x320 && (_0x4afef1['_lastPulseTime'] = _0x1292a7, _0x4afef1['style']['fill'] = _0x23abe8(0x522), _0x4afef1['style'][_0x23abe8(0x3ae)] = _0x23abe8(0x283), _0x4afef1[_0x23abe8(0x28a)][_0x23abe8(0x65e)] = !0x0, _0x4afef1[_0x23abe8(0x28a)][_0x23abe8(0x68f)] = _0x23abe8(0x522), _0x4afef1['style'][_0x23abe8(0x31b)] = 0x5, _0x4afef1[_0x23abe8(0x28a)][_0x23abe8(0x3b4)] = 0x6, setTimeout(() => {
                        var _0x5627db = _0x23abe8;
                        if (!_0x4afef1 || !_0x4afef1[_0x5627db(0x28a)]) return;
                        _0x4afef1[_0x5627db(0x28a)][_0x5627db(0x29b)] = _0x4afef1[_0x5627db(0x46d)], _0x4afef1['style']['fontSize'] = _0x4afef1['_originalFontSize'], _0x4afef1[_0x5627db(0x28a)]['dropShadow'] = !0x1;
                    }, 0x190));
                }, 0x64);
            }

            function _0x52d5a8(_0x24bdde) {
                var _0x1626c9 = _0x12fabc;
                if (!_0x24bdde || !_0x24bdde[_0x1626c9(0x226)]) return;
                clearInterval(_0x24bdde[_0x1626c9(0x4a2)]), _0x24bdde['_pulseInterval'] = null, _0x24bdde[_0x1626c9(0x226)] = !0x1, _0x24bdde[_0x1626c9(0x46d)] && _0x24bdde[_0x1626c9(0x28a)] && (_0x24bdde[_0x1626c9(0x28a)][_0x1626c9(0x29b)] = _0x24bdde[_0x1626c9(0x46d)]), _0x24bdde['_originalFontSize'] && _0x24bdde[_0x1626c9(0x28a)] && (_0x24bdde[_0x1626c9(0x28a)][_0x1626c9(0x3ae)] = _0x24bdde[_0x1626c9(0x533)]), _0x24bdde[_0x1626c9(0x28a)] && (_0x24bdde[_0x1626c9(0x28a)][_0x1626c9(0x65e)] = !0x1);
            }
            window[_0x12fabc(0x66a)]('beforeunload', function() {
                var _0x2dea73 = _0x12fabc;
                ['pk0', _0x2dea73(0x7dd), _0x2dea73(0x3b8), 'pk3', _0x2dea73(0x45a), _0x2dea73(0x58e), _0x2dea73(0x389)]['forEach'](_0x190194 => {
                    var _0x3a12d2 = _0x2dea73;
                    const _0x1901c9 = globalThis['config']?.[_0x190194];
                    _0x1901c9 && _0x1901c9['_pulseStarted'] && clearInterval(_0x1901c9[_0x3a12d2(0x4a2)]);
                });
            }), setInterval(_0x4fadef, 0xc8);
        }
        let _0x488c0a = function(_0x32c139, _0x87ff05, _0x7e21ee, _0x33c76f, _0x527dd2, _0x50dd44) {
                var _0x252150 = _0x2b6b48,
                    _0xa1be0b, _0x766db4, _0x48a0de;
                globalThis[_0x252150(0x612)] = _0x87ff05, _0x43d174();
                let _0x27a47a = function(_0x4fd2cd, _0x5e74fd, _0x547359, _0x3c25ce, _0x39071a, _0x435524, _0x2e0ada) {
                    var _0x248421 = _0x252150;
                    _0x87ff05['pk0'][_0x248421(0x2a5)] != _0x4fd2cd && (_0x87ff05[_0x248421(0x681)][_0x248421(0x2a5)] = _0x4fd2cd), _0x87ff05[_0x248421(0x7dd)][_0x248421(0x2a5)] != _0x5e74fd && (_0x87ff05[_0x248421(0x7dd)]['text'] = _0x5e74fd), _0x87ff05['pk2'][_0x248421(0x2a5)] != _0x547359 && (_0x87ff05[_0x248421(0x3b8)]['text'] = _0x547359), _0x87ff05[_0x248421(0x591)][_0x248421(0x2a5)] != _0x3c25ce && (_0x87ff05[_0x248421(0x591)][_0x248421(0x2a5)] = _0x3c25ce), _0x87ff05[_0x248421(0x45a)]['text'] != _0x39071a && (_0x87ff05[_0x248421(0x45a)][_0x248421(0x2a5)] = _0x39071a), _0x87ff05['pk5'][_0x248421(0x2a5)] != _0x435524 && (_0x87ff05['pk5']['text'] = _0x435524), _0x87ff05[_0x248421(0x389)]['text'] != _0x2e0ada && (_0x87ff05['pk6'][_0x248421(0x2a5)] = _0x2e0ada);
                };
                _0x7e21ee === 'show' && (_0xa1be0b = _0x33c76f, _0x766db4 = _0x527dd2, _0x48a0de = _0x50dd44, _0xa1be0b == 0x0 && ((_0x766db4 == 0x0 || _0x766db4 == 0x1 || _0x766db4 == 0x2 || _0x766db4 == 0x6) && (_0x32c139['pk'] = 0x1e - _0x48a0de * 0x64 * (0x1e / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139[_0x252150(0x681)] = '' : _0x32c139[_0x252150(0x681)] = _0x32c139['pk'][_0x252150(0x3fc)](), _0x766db4 == 0x0 && _0x87ff05[_0x252150(0x681)][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x4ce) && (_0x87ff05['pk0'][_0x252150(0x28a)][_0x252150(0x29b)] = '#f9cc0b'), _0x766db4 == 0x1 && _0x87ff05[_0x252150(0x681)][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x864) && (_0x87ff05['pk0'][_0x252150(0x28a)][_0x252150(0x29b)] = _0x252150(0x864)), _0x766db4 == 0x2 && _0x87ff05['pk0'][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x2cb) && (_0x87ff05[_0x252150(0x681)]['style'][_0x252150(0x29b)] = _0x252150(0x2cb)), _0x766db4 == 0x6 && _0x87ff05[_0x252150(0x681)]['style'][_0x252150(0x29b)] != _0x252150(0x702) && (_0x87ff05[_0x252150(0x681)][_0x252150(0x28a)]['fill'] = '#e74a94')), _0x766db4 == 0x3 && (_0x32c139['pk'] = 0x50 - _0x48a0de * 0x64 * (0x50 / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139[_0x252150(0x681)] = '' : _0x32c139[_0x252150(0x681)] = _0x32c139['pk'][_0x252150(0x3fc)](), _0x87ff05[_0x252150(0x681)][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x391) && (_0x87ff05[_0x252150(0x681)]['style'][_0x252150(0x29b)] = _0x252150(0x391))), _0x766db4 == 0x4 && (_0x32c139['pk'] = 0x28 - _0x48a0de * 0x64 * (0x28 / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139['pk0'] = '' : _0x32c139['pk0'] = _0x32c139['pk'][_0x252150(0x3fc)](), _0x87ff05[_0x252150(0x681)][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x2cb) && (_0x87ff05[_0x252150(0x681)][_0x252150(0x28a)][_0x252150(0x29b)] = '#5dade6')), _0x766db4 == 0x5 && (_0x32c139['pk'] = 0x14 - _0x48a0de * 0x64 * (0x14 / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139['pk0'] = '' : _0x32c139[_0x252150(0x681)] = _0x32c139['pk']['toFixed'](), _0x87ff05[_0x252150(0x681)]['style'][_0x252150(0x29b)] != '#d4db19' && (_0x87ff05[_0x252150(0x681)]['style'][_0x252150(0x29b)] = _0x252150(0x3aa))), _0x32c139['pk1'] = '', _0x32c139[_0x252150(0x3b8)] = '', _0x32c139['pk3'] = '', _0x32c139['pk4'] = '', _0x32c139['pk5'] = '', _0x32c139[_0x252150(0x389)] = ''), _0xa1be0b == 0x28 && ((_0x766db4 == 0x0 || _0x766db4 == 0x1 || _0x766db4 == 0x2 || _0x766db4 == 0x6) && (_0x32c139['pk'] = 0x1e - _0x48a0de * 0x64 * (0x1e / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139[_0x252150(0x7dd)] = '' : _0x32c139[_0x252150(0x7dd)] = _0x32c139['pk'][_0x252150(0x3fc)](), _0x766db4 == 0x0 && _0x87ff05[_0x252150(0x7dd)][_0x252150(0x28a)]['fill'] != _0x252150(0x4ce) && (_0x87ff05[_0x252150(0x7dd)][_0x252150(0x28a)][_0x252150(0x29b)] = _0x252150(0x4ce)), _0x766db4 == 0x1 && _0x87ff05[_0x252150(0x7dd)][_0x252150(0x28a)]['fill'] != _0x252150(0x864) && (_0x87ff05[_0x252150(0x7dd)][_0x252150(0x28a)][_0x252150(0x29b)] = _0x252150(0x864)), _0x766db4 == 0x2 && _0x87ff05[_0x252150(0x7dd)][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x2cb) && (_0x87ff05['pk1'][_0x252150(0x28a)]['fill'] = _0x252150(0x2cb)), _0x766db4 == 0x6 && _0x87ff05[_0x252150(0x7dd)]['style'][_0x252150(0x29b)] != _0x252150(0x702) && (_0x87ff05[_0x252150(0x7dd)][_0x252150(0x28a)]['fill'] = '#e74a94')), _0x766db4 == 0x3 && (_0x32c139['pk'] = 0x50 - _0x48a0de * 0x64 * (0x50 / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139[_0x252150(0x7dd)] = '' : _0x32c139[_0x252150(0x7dd)] = _0x32c139['pk']['toFixed'](), _0x87ff05[_0x252150(0x7dd)][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x391) && (_0x87ff05['pk1'][_0x252150(0x28a)][_0x252150(0x29b)] = '#e03e42')), _0x766db4 == 0x4 && (_0x32c139['pk'] = 0x28 - _0x48a0de * 0x64 * (0x28 / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139[_0x252150(0x7dd)] = '' : _0x32c139[_0x252150(0x7dd)] = _0x32c139['pk'][_0x252150(0x3fc)](), _0x87ff05[_0x252150(0x7dd)][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x2cb) && (_0x87ff05['pk1']['style']['fill'] = '#5dade6')), _0x766db4 == 0x5 && (_0x32c139['pk'] = 0x14 - _0x48a0de * 0x64 * (0x14 / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139[_0x252150(0x7dd)] = '' : _0x32c139[_0x252150(0x7dd)] = _0x32c139['pk'][_0x252150(0x3fc)](), _0x87ff05[_0x252150(0x7dd)][_0x252150(0x28a)][_0x252150(0x29b)] != '#d4db19' && (_0x87ff05[_0x252150(0x7dd)]['style'][_0x252150(0x29b)] = _0x252150(0x3aa))), _0x32c139[_0x252150(0x3b8)] = '', _0x32c139[_0x252150(0x591)] = '', _0x32c139[_0x252150(0x45a)] = '', _0x32c139[_0x252150(0x58e)] = '', _0x32c139[_0x252150(0x389)] = ''), _0xa1be0b == 0x50 && ((_0x766db4 == 0x0 || _0x766db4 == 0x1 || _0x766db4 == 0x2 || _0x766db4 == 0x6) && (_0x32c139['pk'] = 0x1e - _0x48a0de * 0x64 * (0x1e / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139[_0x252150(0x3b8)] = '' : _0x32c139['pk2'] = _0x32c139['pk'][_0x252150(0x3fc)](), _0x766db4 == 0x0 && _0x87ff05[_0x252150(0x3b8)][_0x252150(0x28a)][_0x252150(0x29b)] != '#f9cc0b' && (_0x87ff05[_0x252150(0x3b8)]['style'][_0x252150(0x29b)] = _0x252150(0x4ce)), _0x766db4 == 0x1 && _0x87ff05[_0x252150(0x3b8)][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x864) && (_0x87ff05[_0x252150(0x3b8)][_0x252150(0x28a)][_0x252150(0x29b)] = _0x252150(0x864)), _0x766db4 == 0x2 && _0x87ff05['pk2'][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x2cb) && (_0x87ff05[_0x252150(0x3b8)][_0x252150(0x28a)]['fill'] = '#5dade6'), _0x766db4 == 0x6 && _0x87ff05[_0x252150(0x3b8)][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x702) && (_0x87ff05[_0x252150(0x3b8)][_0x252150(0x28a)][_0x252150(0x29b)] = _0x252150(0x702))), _0x766db4 == 0x3 && (_0x32c139['pk'] = 0x50 - _0x48a0de * 0x64 * (0x50 / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139[_0x252150(0x3b8)] = '' : _0x32c139[_0x252150(0x3b8)] = _0x32c139['pk']['toFixed'](), _0x87ff05['pk2'][_0x252150(0x28a)]['fill'] != _0x252150(0x391) && (_0x87ff05[_0x252150(0x3b8)][_0x252150(0x28a)]['fill'] = '#e03e42')), _0x766db4 == 0x4 && (_0x32c139['pk'] = 0x28 - _0x48a0de * 0x64 * (0x28 / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139[_0x252150(0x3b8)] = '' : _0x32c139[_0x252150(0x3b8)] = _0x32c139['pk'][_0x252150(0x3fc)](), _0x87ff05[_0x252150(0x3b8)][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x2cb) && (_0x87ff05['pk2'][_0x252150(0x28a)]['fill'] = _0x252150(0x2cb))), _0x766db4 == 0x5 && (_0x32c139['pk'] = 0x14 - _0x48a0de * 0x64 * (0x14 / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139[_0x252150(0x3b8)] = '' : _0x32c139[_0x252150(0x3b8)] = _0x32c139['pk'][_0x252150(0x3fc)](), _0x87ff05[_0x252150(0x3b8)]['style'][_0x252150(0x29b)] != _0x252150(0x3aa) && (_0x87ff05[_0x252150(0x3b8)][_0x252150(0x28a)][_0x252150(0x29b)] = _0x252150(0x3aa))), _0x32c139['pk3'] = '', _0x32c139[_0x252150(0x45a)] = '', _0x32c139[_0x252150(0x58e)] = '', _0x32c139[_0x252150(0x389)] = ''), _0xa1be0b == 0x78 && ((_0x766db4 == 0x0 || _0x766db4 == 0x1 || _0x766db4 == 0x2 || _0x766db4 == 0x6) && (_0x32c139['pk'] = 0x1e - _0x48a0de * 0x64 * (0x1e / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139[_0x252150(0x591)] = '' : _0x32c139['pk3'] = _0x32c139['pk'][_0x252150(0x3fc)](), _0x766db4 == 0x0 && _0x87ff05[_0x252150(0x591)][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x4ce) && (_0x87ff05['pk3'][_0x252150(0x28a)]['fill'] = _0x252150(0x4ce)), _0x766db4 == 0x1 && _0x87ff05[_0x252150(0x591)][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x864) && (_0x87ff05[_0x252150(0x591)][_0x252150(0x28a)][_0x252150(0x29b)] = _0x252150(0x864)), _0x766db4 == 0x2 && _0x87ff05['pk3'][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x2cb) && (_0x87ff05['pk3']['style'][_0x252150(0x29b)] = _0x252150(0x2cb)), _0x766db4 == 0x6 && _0x87ff05[_0x252150(0x591)][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x702) && (_0x87ff05[_0x252150(0x591)][_0x252150(0x28a)][_0x252150(0x29b)] = '#e74a94')), _0x766db4 == 0x3 && (_0x32c139['pk'] = 0x50 - _0x48a0de * 0x64 * (0x50 / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139[_0x252150(0x591)] = '' : _0x32c139[_0x252150(0x591)] = _0x32c139['pk'][_0x252150(0x3fc)](), _0x87ff05[_0x252150(0x591)]['style']['fill'] != _0x252150(0x391) && (_0x87ff05[_0x252150(0x591)][_0x252150(0x28a)][_0x252150(0x29b)] = _0x252150(0x391))), _0x766db4 == 0x4 && (_0x32c139['pk'] = 0x28 - _0x48a0de * 0x64 * (0x28 / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139['pk3'] = '' : _0x32c139['pk3'] = _0x32c139['pk'][_0x252150(0x3fc)](), _0x87ff05[_0x252150(0x591)][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x2cb) && (_0x87ff05[_0x252150(0x591)][_0x252150(0x28a)]['fill'] = _0x252150(0x2cb))), _0x766db4 == 0x5 && (_0x32c139['pk'] = 0x14 - _0x48a0de * 0x64 * (0x14 / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139[_0x252150(0x591)] = '' : _0x32c139[_0x252150(0x591)] = _0x32c139['pk'][_0x252150(0x3fc)](), _0x87ff05[_0x252150(0x591)][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x3aa) && (_0x87ff05[_0x252150(0x591)]['style']['fill'] = _0x252150(0x3aa))), _0x32c139[_0x252150(0x45a)] = '', _0x32c139[_0x252150(0x58e)] = '', _0x32c139['pk6'] = ''), _0xa1be0b == 0xa0 && ((_0x766db4 == 0x0 || _0x766db4 == 0x1 || _0x766db4 == 0x2 || _0x766db4 == 0x6) && (_0x32c139['pk'] = 0x1e - _0x48a0de * 0x64 * (0x1e / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139[_0x252150(0x45a)] = '' : _0x32c139[_0x252150(0x45a)] = _0x32c139['pk'][_0x252150(0x3fc)](), _0x766db4 == 0x0 && _0x87ff05['pk4']['style'][_0x252150(0x29b)] != _0x252150(0x4ce) && (_0x87ff05[_0x252150(0x45a)]['style'][_0x252150(0x29b)] = '#f9cc0b'), _0x766db4 == 0x1 && _0x87ff05[_0x252150(0x45a)][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x864) && (_0x87ff05[_0x252150(0x45a)]['style'][_0x252150(0x29b)] = _0x252150(0x864)), _0x766db4 == 0x2 && _0x87ff05['pk4'][_0x252150(0x28a)][_0x252150(0x29b)] != '#5dade6' && (_0x87ff05['pk4'][_0x252150(0x28a)][_0x252150(0x29b)] = _0x252150(0x2cb)), _0x766db4 == 0x6 && _0x87ff05[_0x252150(0x45a)]['style'][_0x252150(0x29b)] != _0x252150(0x702) && (_0x87ff05['pk4'][_0x252150(0x28a)][_0x252150(0x29b)] = '#e74a94')), _0x766db4 == 0x3 && (_0x32c139['pk'] = 0x50 - _0x48a0de * 0x64 * (0x50 / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139[_0x252150(0x45a)] = '' : _0x32c139[_0x252150(0x45a)] = _0x32c139['pk'][_0x252150(0x3fc)](), _0x87ff05[_0x252150(0x45a)]['style'][_0x252150(0x29b)] != '#e03e42' && (_0x87ff05[_0x252150(0x45a)][_0x252150(0x28a)][_0x252150(0x29b)] = _0x252150(0x391))), _0x766db4 == 0x4 && (_0x32c139['pk'] = 0x28 - _0x48a0de * 0x64 * (0x28 / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139[_0x252150(0x45a)] = '' : _0x32c139[_0x252150(0x45a)] = _0x32c139['pk'][_0x252150(0x3fc)](), _0x87ff05[_0x252150(0x45a)][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x2cb) && (_0x87ff05[_0x252150(0x45a)][_0x252150(0x28a)][_0x252150(0x29b)] = _0x252150(0x2cb))), _0x766db4 == 0x5 && (_0x32c139['pk'] = 0x14 - _0x48a0de * 0x64 * (0x14 / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139[_0x252150(0x45a)] = '' : _0x32c139[_0x252150(0x45a)] = _0x32c139['pk'][_0x252150(0x3fc)](), _0x87ff05[_0x252150(0x45a)]['style'][_0x252150(0x29b)] != _0x252150(0x3aa) && (_0x87ff05[_0x252150(0x45a)][_0x252150(0x28a)][_0x252150(0x29b)] = '#d4db19')), _0x32c139[_0x252150(0x58e)] = '', _0x32c139[_0x252150(0x389)] = ''), _0xa1be0b == 0xc8 && ((_0x766db4 == 0x0 || _0x766db4 == 0x1 || _0x766db4 == 0x2 || _0x766db4 == 0x6) && (_0x32c139['pk'] = 0x1e - _0x48a0de * 0x64 * (0x1e / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139[_0x252150(0x58e)] = '' : _0x32c139[_0x252150(0x58e)] = _0x32c139['pk'][_0x252150(0x3fc)](), _0x766db4 == 0x0 && _0x87ff05['pk5'][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x4ce) && (_0x87ff05['pk5'][_0x252150(0x28a)][_0x252150(0x29b)] = _0x252150(0x4ce)), _0x766db4 == 0x1 && _0x87ff05['pk5'][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x864) && (_0x87ff05[_0x252150(0x58e)][_0x252150(0x28a)][_0x252150(0x29b)] = '#fdbf5f'), _0x766db4 == 0x2 && _0x87ff05['pk5'][_0x252150(0x28a)][_0x252150(0x29b)] != '#5dade6' && (_0x87ff05['pk5'][_0x252150(0x28a)]['fill'] = '#5dade6'), _0x766db4 == 0x6 && _0x87ff05['pk5'][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x702) && (_0x87ff05['pk5']['style']['fill'] = _0x252150(0x702))), _0x766db4 == 0x3 && (_0x32c139['pk'] = 0x50 - _0x48a0de * 0x64 * (0x50 / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139[_0x252150(0x58e)] = '' : _0x32c139[_0x252150(0x58e)] = _0x32c139['pk'][_0x252150(0x3fc)](), _0x87ff05['pk5'][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x391) && (_0x87ff05[_0x252150(0x58e)]['style'][_0x252150(0x29b)] = _0x252150(0x391))), _0x766db4 == 0x4 && (_0x32c139['pk'] = 0x28 - _0x48a0de * 0x64 * (0x28 / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139[_0x252150(0x58e)] = '' : _0x32c139[_0x252150(0x58e)] = _0x32c139['pk'][_0x252150(0x3fc)](), _0x87ff05[_0x252150(0x58e)][_0x252150(0x28a)]['fill'] != '#5dade6' && (_0x87ff05['pk5'][_0x252150(0x28a)][_0x252150(0x29b)] = '#5dade6')), _0x766db4 == 0x5 && (_0x32c139['pk'] = 0x14 - _0x48a0de * 0x64 * (0x14 / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139[_0x252150(0x58e)] = '' : _0x32c139[_0x252150(0x58e)] = _0x32c139['pk'][_0x252150(0x3fc)](), _0x87ff05[_0x252150(0x58e)][_0x252150(0x28a)]['fill'] != _0x252150(0x3aa) && (_0x87ff05['pk5']['style'][_0x252150(0x29b)] = '#d4db19')), _0x32c139[_0x252150(0x389)] = ''), _0xa1be0b == 0xf0 && ((_0x766db4 == 0x0 || _0x766db4 == 0x1 || _0x766db4 == 0x2 || _0x766db4 == 0x6) && (_0x32c139['pk'] = 0x1e - _0x48a0de * 0x64 * (0x1e / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139[_0x252150(0x389)] = '' : _0x32c139['pk6'] = _0x32c139['pk']['toFixed'](), _0x766db4 == 0x0 && _0x87ff05['pk6'][_0x252150(0x28a)][_0x252150(0x29b)] != '#f9cc0b' && (_0x87ff05[_0x252150(0x389)][_0x252150(0x28a)][_0x252150(0x29b)] = '#f9cc0b'), _0x766db4 == 0x1 && _0x87ff05['pk6']['style'][_0x252150(0x29b)] != '#fdbf5f' && (_0x87ff05[_0x252150(0x389)][_0x252150(0x28a)][_0x252150(0x29b)] = _0x252150(0x864)), _0x766db4 == 0x2 && _0x87ff05[_0x252150(0x389)][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x2cb) && (_0x87ff05[_0x252150(0x389)][_0x252150(0x28a)][_0x252150(0x29b)] = _0x252150(0x2cb)), _0x766db4 == 0x6 && _0x87ff05[_0x252150(0x389)][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x702) && (_0x87ff05['pk6'][_0x252150(0x28a)][_0x252150(0x29b)] = _0x252150(0x702))), _0x766db4 == 0x3 && (_0x32c139['pk'] = 0x50 - _0x48a0de * 0x64 * (0x50 / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139[_0x252150(0x389)] = '' : _0x32c139[_0x252150(0x389)] = _0x32c139['pk']['toFixed'](), _0x87ff05[_0x252150(0x389)][_0x252150(0x28a)]['fill'] != '#e03e42' && (_0x87ff05['pk6'][_0x252150(0x28a)][_0x252150(0x29b)] = '#e03e42')), _0x766db4 == 0x4 && (_0x32c139['pk'] = 0x28 - _0x48a0de * 0x64 * (0x28 / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139[_0x252150(0x389)] = '' : _0x32c139['pk6'] = _0x32c139['pk']['toFixed'](), _0x87ff05[_0x252150(0x389)]['style'][_0x252150(0x29b)] != _0x252150(0x2cb) && (_0x87ff05[_0x252150(0x389)][_0x252150(0x28a)][_0x252150(0x29b)] = _0x252150(0x2cb))), _0x766db4 == 0x5 && (_0x32c139['pk'] = 0x14 - _0x48a0de * 0x64 * (0x14 / 0x63), _0x32c139['pk'] <= 0.1 ? _0x32c139['pk6'] = '' : _0x32c139[_0x252150(0x389)] = _0x32c139['pk']['toFixed'](), _0x87ff05['pk6'][_0x252150(0x28a)][_0x252150(0x29b)] != _0x252150(0x3aa) && (_0x87ff05[_0x252150(0x389)][_0x252150(0x28a)][_0x252150(0x29b)] = _0x252150(0x3aa)))), _0x27a47a(_0x32c139[_0x252150(0x681)], _0x32c139[_0x252150(0x7dd)], _0x32c139[_0x252150(0x3b8)], _0x32c139['pk3'], _0x32c139[_0x252150(0x45a)], _0x32c139[_0x252150(0x58e)], _0x32c139[_0x252150(0x389)])), _0x7e21ee === _0x252150(0x5e9) && (_0x32c139[_0x252150(0x681)] = '', _0x32c139[_0x252150(0x7dd)] = '', _0x32c139['pk2'] = '', _0x32c139[_0x252150(0x591)] = '', _0x32c139[_0x252150(0x45a)] = '', _0x32c139[_0x252150(0x58e)] = '', _0x32c139[_0x252150(0x389)] = '', _0x27a47a(_0x32c139[_0x252150(0x681)], _0x32c139[_0x252150(0x7dd)], _0x32c139['pk2'], _0x32c139[_0x252150(0x591)], _0x32c139[_0x252150(0x45a)], _0x32c139[_0x252150(0x58e)], _0x32c139[_0x252150(0x389)])), localStorage[_0x252150(0x5c0)]('SaveGamewft', JSON[_0x252150(0x32a)](_0x32c139));
            },
            _0x13d32a = function() {
                clearInterval(_0xd66ce6), _0xd66ce6 = null, _0xd66ce6 = setInterval(function() {
                    var _0x4d113d = _0x563d,
                        _0x54058f = _0x2cbd14['eie']['fo'];
                    let _0xbbdc5d = Math['PI'];
                    var _0x426b7 = _0x54058f + _0xbbdc5d / 0x168 * 0x9;
                    _0x426b7 >= _0xbbdc5d && (_0x426b7 = -_0x54058f), _0x2cbd14[_0x4d113d(0x691)]['fo'] = _0x426b7;
                }, 0x37);
            },
            _0x322d43 = function() {
                _0x39f5db >= 0x28 && (_0x31c07e ? _0x93ba91 += 0x19 : _0x93ba91 -= 0xc8, _0x39f5db = 0x1);
            },
            _0x3e7a0a = function() {
                _0x93ba91 == 0x37 && _0x39f5db >= 0x28 && (_0x93ba91 += 0x19, _0x39f5db = 0x1, _0x31c07e = !0x0), _0x93ba91 == 0x50 && _0x322d43(), _0x93ba91 == 0x69 && _0x322d43(), _0x93ba91 == 0x82 && _0x322d43(), _0x93ba91 == 0x9b && _0x322d43(), _0x93ba91 == 0xb4 && _0x322d43(), _0x93ba91 == 0xcd && _0x322d43(), _0x93ba91 == 0xe6 && _0x322d43(), _0x93ba91 == 0xff && _0x322d43(), _0x93ba91 == 0x118 && _0x322d43(), _0x93ba91 == 0x131 && _0x322d43(), _0x93ba91 == 0x14a && _0x322d43(), _0x93ba91 == 0x163 && _0x322d43(), _0x93ba91 == 0x17c && _0x322d43(), _0x93ba91 == 0x195 && _0x322d43(), _0x93ba91 == 0x1ae && _0x322d43(), _0x93ba91 == 0x1c7 && _0x39f5db >= 0x28 && (_0x93ba91 -= 0xc8, _0x39f5db = 0x1, _0x31c07e = !0x1);
            },
            _0xb83efc = function() {
                var _0x243ef2 = _0x2b6b48;
                clearInterval(_0xd66ce6), _0xd66ce6 = null;
                {
                    var _0x451b9a = _0x2cbd14[_0x243ef2(0x691)]['fo'];
                    let _0x5029a0 = Math['PI'];
                    var _0x3e346c = _0x451b9a + _0x5029a0 / 0x168 * 0x9;
                    _0x3e346c >= _0x5029a0 && (_0x3e346c = -_0x451b9a), _0x2cbd14['eie']['fo'] = _0x3e346c, _0x39f5db += 0x1, _0x3e7a0a(), _0x12badb && (_0xd66ce6 = setInterval(_0xb83efc, _0x93ba91));
                }
            },
            _0x4b4167 = function() {
                var _0x228e9d = _0x2b6b48;
                clearInterval(_0x598970), _0x598970 = null;
                if (_0x2cbd14['on']) {
                    var _0x19f475 = btoa(_0x1a98d3[_0x228e9d(0x2b2)]);
                    if (_0x1a98d3['ig'] != -0x1 && btoa(_0x19f475) == _0x1a98d3[_0x228e9d(0x61f)]) {
                        var _0x49a028 = ooo,
                            _0x25e05e = _0x1a98d3['sg'][_0x228e9d(0x5be)](_0x2cbd14['n']['ni']),
                            _0x9bd11b = btoa(_0x1a98d3[_0x228e9d(0x687)]);
                        btoa(_0x9bd11b) == _0x1a98d3[_0x228e9d(0x503)] && _0x2cbd14['uj']['hd'](_0x49a028['Mh']['Qh']['eh'], _0x49a028['ud']['Cc']()['Ub'](_0x2cbd14['n']['mi']), _0x49a028['ud']['Cc']()['Tb'](_0x1a98d3['ig']), _0x49a028['ud']['Cc']()['Vb'](_0x2cbd14['n']['Vi']), _0x49a028['ud']['Cc']()['Wb'](_0x2cbd14['n']['Wi']), _0x49a028['ud']['Cc']()['Xb'](_0x2cbd14['n']['Xi']), _0x49a028['ud']['Cc']()['Yb'](_0x2cbd14['n']['Yi']), _0x228e9d(0x302));
                        _0x1a98d3['gg'][_0x25e05e]['r'] ? _0x1a98d3['re'] ? (_0x1a98d3['ig'] = _0x1a98d3['ig'] - 0x1, _0x1a98d3['ig'] < _0x1a98d3['gg'][_0x25e05e]['s'] && (_0x1a98d3['ig'] = _0x1a98d3['gg'][_0x25e05e]['s'] + 0x1, _0x1a98d3['re'] = !0x1)) : (_0x1a98d3['ig'] = _0x1a98d3['ig'] + 0x1, _0x1a98d3['ig'] > _0x1a98d3['gg'][_0x25e05e]['e'] && (_0x1a98d3['ig'] = _0x1a98d3['gg'][_0x25e05e]['e'] - 0x1, _0x1a98d3['re'] = !0x0)) : (_0x1a98d3['ig'] = _0x1a98d3['ig'] + 0x1, _0x1a98d3['ig'] > _0x1a98d3['gg'][_0x25e05e]['e'] && (_0x1a98d3['ig'] = _0x1a98d3['gg'][_0x25e05e]['s']));
                        var _0x4e4717 = btoa(_0x1a98d3[_0x228e9d(0x6d1)]);
                        btoa(_0x4e4717) == _0x1a98d3['d_3'] && (_0x598970 = setInterval(_0x4b4167, _0x1a98d3['gg'][_0x25e05e]['t']));
                    }
                }
            },
            _0x44e20b = function() {
                _0x12badb = !0x0, _0x93ba91 = 0x37, _0x39f5db = 0x1, _0x31c07e = !0x0, _0xb83efc();
            },
            _0x48f412 = function() {
                var _0x48284d = _0x2b6b48;
                _0x2add7a[_0x48284d(0x272)] == _0x30cfd0 ? (_0x2add7a[_0x48284d(0x272)] = _0x4fbc00, _0x2add7a[_0x48284d(0x44e)] = 0x1, _0x2da668[_0x48284d(0x272)] = _0x1b024d, _0x2da668[_0x48284d(0x44e)] = 0.25, _0x12badb = !0x1, _0x93ba91 = 0x37, _0x39f5db = 0x1, _0x31c07e = !0x0, clearInterval(_0xd66ce6), _0xd66ce6 = null, _0x13d32a()) : (_0x2add7a[_0x48284d(0x272)] = _0x30cfd0, _0x2add7a[_0x48284d(0x44e)] = 0.25, clearInterval(_0xd66ce6), _0xd66ce6 = null);
            },
            _0x4d171a = function() {
                var _0x3e7788 = _0x2b6b48;
                _0x2da668['texture'] == _0x1b024d ? (_0x2da668[_0x3e7788(0x272)] = _0xb11556, _0x2da668[_0x3e7788(0x44e)] = 0x1, _0x2add7a[_0x3e7788(0x272)] = _0x30cfd0, _0x2add7a['alpha'] = 0.25, clearInterval(_0xd66ce6), _0xd66ce6 = null, _0x12badb = !0x0, _0x93ba91 = 0x37, _0x39f5db = 0x1, _0x31c07e = !0x0, _0xb83efc()) : (_0x2da668['texture'] = _0x1b024d, _0x2da668[_0x3e7788(0x44e)] = 0.25, _0x12badb = !0x1, _0x93ba91 = 0x37, _0x39f5db = 0x1, _0x31c07e = !0x0, clearInterval(_0xd66ce6), _0xd66ce6 = null);
            },
            _0x4d40a7 = function() {
                var _0x31885e = _0x2b6b48;
                _0x423a56['texture'] == _0x168c20 ? (_0x423a56[_0x31885e(0x272)] = _0x3b95dc, _0x423a56[_0x31885e(0x44e)] = 0x1, _0x1a98d3['h'] ? _0x1a98d3['z'] = 1.6 : _0x1a98d3['z'] = 1.2) : (_0x423a56[_0x31885e(0x272)] = _0x168c20, _0x423a56[_0x31885e(0x44e)] = 0.25, _0x1a98d3['z'] = 0x1);
            },
            _0x488131 = function() {
                var _0x482768 = _0x2b6b48;
                if (_0x2cbd14['on'] && _0x1a98d3[_0x482768(0x7cf)]) {
                    var _0x56c659 = _0x27797a[_0x482768(0x715)],
                        _0x41c399 = _0x27797a[_0x482768(0x534)],
                        _0xa7c7bf = ooo['Xg']['Kf']['Wg']['Ah'];
                    if (_0x1a98d3['mo'] == 0x1) _0x1a98d3['mo'] = 0x6, _0x1a98d3['j'] = _0x25ec2a(_0x1a98d3[_0x482768(0x7cf)]), _0xa7c7bf[_0x482768(0x6da)][_0x482768(0x287)] = !0x1, _0xa7c7bf[_0x482768(0x4c4)][_0x482768(0x287)] = !0x1, _0xa7c7bf[_0x482768(0x336)]['visible'] = !0x0;
                    else {
                        if (_0x1a98d3['mo'] == 0x6) _0x1a98d3['mo'] = 0x4, _0xa7c7bf[_0x482768(0x6b3)][_0x482768(0x287)] = !0x0, _0xa7c7bf['img_o_4']['x'] = 0x32, _0xa7c7bf[_0x482768(0x6b3)]['y'] = -0xdc + _0x41c399, _0xa7c7bf['img_p_2']['visible'] = !0x0, _0xa7c7bf[_0x482768(0x4b8)]['x'] = -0x44 + _0x56c659 * 0.5, _0xa7c7bf['img_p_2']['y'] = -0x44 + _0x41c399 * 0.5, _0xa7c7bf[_0x482768(0x307)][_0x482768(0x287)] = !0x0, _0xa7c7bf['img_f']['x'] = -0xfa + _0x56c659, _0xa7c7bf['img_f']['y'] = -0xc8 + _0x41c399, _0xa7c7bf[_0x482768(0x82f)][_0x482768(0x287)] = !0x1, _0x1a98d3['j'] && _0x1a98d3['j'][_0x482768(0x238)]();
                        else {
                            if (_0x1a98d3['mo'] == 0x4) _0x1a98d3['mo'] = 0x5, _0xa7c7bf[_0x482768(0x6b3)]['x'] = -0x10e + _0x56c659, _0xa7c7bf['img_o_4']['y'] = -0xdc + _0x41c399, _0xa7c7bf[_0x482768(0x4b8)]['x'] = -0x44 + _0x56c659 * 0.5, _0xa7c7bf['img_p_2']['y'] = -0x44 + _0x41c399 * 0.5, _0xa7c7bf[_0x482768(0x307)]['x'] = 0x32, _0xa7c7bf[_0x482768(0x307)]['y'] = -0xc8 + _0x41c399;
                            else {
                                if (_0x1a98d3['mo'] == 0x5) _0x1a98d3['mo'] = 0x2, _0xa7c7bf[_0x482768(0x336)][_0x482768(0x287)] = !0x1, _0xa7c7bf[_0x482768(0x6b3)][_0x482768(0x287)] = !0x1, _0xa7c7bf[_0x482768(0x2b1)]['visible'] = !0x0, _0xa7c7bf[_0x482768(0x2df)]['visible'] = !0x0, _0xa7c7bf[_0x482768(0x2df)]['x'] = 0x32, _0xa7c7bf[_0x482768(0x2df)]['y'] = -0xdc + _0x41c399, _0xa7c7bf[_0x482768(0x6b5)][_0x482768(0x287)] = !0x0, _0xa7c7bf[_0x482768(0x6b5)]['x'] = 0x4b, _0xa7c7bf['img_i_2']['y'] = -0xc3 + _0x41c399, _0xa7c7bf[_0x482768(0x4b8)]['visible'] = !0x0, _0xa7c7bf['img_p_2']['x'] = -0x44 + _0x56c659 * 0.5, _0xa7c7bf[_0x482768(0x4b8)]['y'] = -0x44 + _0x41c399 * 0.5, _0xa7c7bf[_0x482768(0x307)][_0x482768(0x287)] = !0x1, _0xa7c7bf[_0x482768(0x82f)][_0x482768(0x287)] = !0x1;
                                else {
                                    if (_0x1a98d3['mo'] == 0x2) _0x1a98d3['mo'] = 0x3, _0xa7c7bf[_0x482768(0x2b1)][_0x482768(0x287)] = !0x1, _0xa7c7bf[_0x482768(0x2df)][_0x482768(0x287)] = !0x1, _0xa7c7bf['img_i_2'][_0x482768(0x287)] = !0x1, _0xa7c7bf[_0x482768(0x4b8)][_0x482768(0x287)] = !0x1, _0xa7c7bf['img_3'][_0x482768(0x287)] = !0x0, _0xa7c7bf[_0x482768(0x62d)][_0x482768(0x287)] = !0x0, _0xa7c7bf[_0x482768(0x62d)]['x'] = 0x32, _0xa7c7bf['img_o_3']['y'] = -0xdc + _0x41c399, _0xa7c7bf[_0x482768(0x466)][_0x482768(0x287)] = !0x0, _0xa7c7bf[_0x482768(0x466)]['x'] = 0x4b, _0xa7c7bf[_0x482768(0x466)]['y'] = -0xc3 + _0x41c399, _0xa7c7bf[_0x482768(0x7c6)][_0x482768(0x287)] = !0x0, _0xa7c7bf[_0x482768(0x7c6)]['x'] = -0x44 + _0x56c659 * 0.5, _0xa7c7bf[_0x482768(0x7c6)]['y'] = -0x44 + _0x41c399 * 0.5, _0xa7c7bf['img_pf_1'][_0x482768(0x287)] = !0x1;
                                    else _0x1a98d3['mo'] == 0x3 && (_0x1a98d3['mo'] = 0x1, _0xa7c7bf[_0x482768(0x6da)][_0x482768(0x287)] = !0x0, _0xa7c7bf[_0x482768(0x4c4)]['visible'] = !0x0, _0xa7c7bf['img_3']['visible'] = !0x1, _0xa7c7bf[_0x482768(0x62d)]['visible'] = !0x1, _0xa7c7bf['img_i_3']['visible'] = !0x1, _0xa7c7bf['img_p_3'][_0x482768(0x287)] = !0x1, _0xa7c7bf[_0x482768(0x307)][_0x482768(0x287)] = !0x1, _0xa7c7bf[_0x482768(0x82f)]['visible'] = !0x1);
                                }
                            }
                        }
                    }
                }
            },
            _0x326b6d = function() {
                var _0x553abf = _0x2b6b48;
                if (_0x2cbd14['on'] && _0x1a98d3['mobile']) {
                    var _0x3dd8fd = ooo['Xg']['Kf']['Wg']['Ah'],
                        _0x4e6bec = _0x27797a['offsetHeight'] * 0.5,
                        _0xc8ffcd = _0x27797a['offsetWidth'] * 0.5;
                    _0x3dd8fd['img_1']['x'] = -0x64 + _0xc8ffcd, _0x3dd8fd[_0x553abf(0x6da)]['y'] = -0x3c, _0x3dd8fd[_0x553abf(0x2b1)]['x'] = -0x64 + _0xc8ffcd, _0x3dd8fd[_0x553abf(0x2b1)]['y'] = -0x3c, _0x3dd8fd['img_3']['x'] = -0x64 + _0xc8ffcd, _0x3dd8fd[_0x553abf(0x1f0)]['y'] = -0x3c, _0x3dd8fd[_0x553abf(0x336)]['x'] = -0x64 + _0xc8ffcd, _0x3dd8fd['img_4']['y'] = -0x3c, _0x1a98d3['mo'] == 0x1 && (_0x3dd8fd['img_p_1'][_0x553abf(0x44e)] = 0.25, _0x3dd8fd[_0x553abf(0x4c4)]['x'] = _0xc8ffcd - 0x44, _0x3dd8fd[_0x553abf(0x4c4)]['y'] = _0x4e6bec - 0x44), _0x1a98d3['mo'] == 0x2 && (_0x3dd8fd[_0x553abf(0x2df)]['alpha'] = 0.25, _0x3dd8fd['img_o_2']['x'] = 0x32, _0x3dd8fd[_0x553abf(0x2df)]['y'] = -0xdc + _0x4e6bec * 0x2, _0x3dd8fd[_0x553abf(0x6b5)][_0x553abf(0x44e)] = 0.25, _0x3dd8fd['img_i_2']['x'] = 0x4b, _0x3dd8fd[_0x553abf(0x6b5)]['y'] = -0xc3 + _0x4e6bec * 0x2, _0x3dd8fd[_0x553abf(0x4b8)][_0x553abf(0x44e)] = 0.25, _0x3dd8fd[_0x553abf(0x4b8)]['x'] = _0xc8ffcd - 0x44, _0x3dd8fd[_0x553abf(0x4b8)]['y'] = _0x4e6bec - 0x44), _0x1a98d3['mo'] == 0x3 && (_0x3dd8fd[_0x553abf(0x62d)][_0x553abf(0x44e)] = 0.25, _0x3dd8fd[_0x553abf(0x62d)]['x'] = -0x32, _0x3dd8fd[_0x553abf(0x62d)]['y'] = -0xdc + _0x4e6bec * 0x2, _0x3dd8fd[_0x553abf(0x466)]['alpha'] = 0.25, _0x3dd8fd[_0x553abf(0x466)]['x'] = 0x4b, _0x3dd8fd[_0x553abf(0x466)]['y'] = -0xc3 + _0x4e6bec * 0x2, _0x3dd8fd[_0x553abf(0x7c6)][_0x553abf(0x44e)] = 0.25, _0x3dd8fd[_0x553abf(0x7c6)]['x'] = _0xc8ffcd - 0x44, _0x3dd8fd[_0x553abf(0x7c6)]['y'] = _0x4e6bec - 0x44), _0x1a98d3['mo'] == 0x4 && (_0x3dd8fd['img_f']['visible'] = !0x0, _0x3dd8fd['img_f']['x'] = -0xfa + _0xc8ffcd * 0x2, _0x3dd8fd[_0x553abf(0x307)]['y'] = -0xc8 + _0x4e6bec * 0x2, _0x3dd8fd[_0x553abf(0x6b3)]['x'] = 0x32, _0x3dd8fd['img_o_4']['y'] = -0xdc + _0x4e6bec * 0x2, _0x3dd8fd[_0x553abf(0x4b8)]['alpha'] = 0.25, _0x3dd8fd['img_p_2']['x'] = _0xc8ffcd - 0x44, _0x3dd8fd[_0x553abf(0x4b8)]['y'] = _0x4e6bec - 0x44), _0x1a98d3['mo'] == 0x5 && (_0x3dd8fd[_0x553abf(0x307)][_0x553abf(0x287)] = !0x0, _0x3dd8fd['img_f']['x'] = 0x32, _0x3dd8fd[_0x553abf(0x307)]['y'] = -0xc8 + _0x4e6bec * 0x2, _0x3dd8fd[_0x553abf(0x6b3)]['x'] = -0x10e + _0xc8ffcd * 0x2, _0x3dd8fd[_0x553abf(0x6b3)]['y'] = -0xdc + _0x4e6bec * 0x2, _0x3dd8fd['img_p_2'][_0x553abf(0x44e)] = 0.25, _0x3dd8fd[_0x553abf(0x4b8)]['x'] = _0xc8ffcd - 0x44, _0x3dd8fd[_0x553abf(0x4b8)]['y'] = _0x4e6bec - 0x44), _0x1a98d3['mo'] == 0x6 && (_0x1a98d3['j'] = _0x25ec2a(_0x1a98d3[_0x553abf(0x7cf)]));
                }
            },
            _0x5c0e64 = function(_0x3ed771, _0x3991ba) {
                var _0x18c8ce = _0x2b6b48,
                    _0x3c5798 = _0x27797a[_0x18c8ce(0x715)],
                    _0x3445b6 = _0x27797a['offsetHeight'];
                if (_0x1a98d3['hz'] && _0x1a98d3[_0x18c8ce(0x7cf)]) {
                    if (_0x2cbd14['on']) {
                        if (_0x1a98d3['tt']) {
                            _0x3ed771 > _0x3c5798 - 0x1e && _0x3ed771 < _0x3c5798 - 0x5 && _0x3991ba < _0x3445b6 / 0x2 - 0x21 && _0x3991ba > _0x3445b6 / 0x2 - 0x3a && _0x48f412();
                            _0x3ed771 > _0x3c5798 - 0x1e && _0x3ed771 < _0x3c5798 - 0x5 && _0x3991ba < _0x3445b6 / 0x2 - 0x3 && _0x3991ba > _0x3445b6 / 0x2 - 0x1c && _0x4d171a();
                            _0x3ed771 > _0x3c5798 - 0x1e && _0x3ed771 < _0x3c5798 - 0x5 && _0x3991ba < _0x3445b6 / 0x2 + 0x1c && _0x3991ba > _0x3445b6 / 0x2 + 0x3 && _0x1a98d3['z'] >= 0.2 && (_0x1a98d3['z'] = _0x1a98d3['z'] - 0.1);
                            if (_0x3ed771 > _0x3c5798 - 0x1e && _0x3ed771 < _0x3c5798 - 0x5 && _0x3991ba < _0x3445b6 / 0x2 + 0x3a && _0x3991ba > _0x3445b6 / 0x2 + 0x21) {
                                if (_0x1a98d3['fz']) _0x1a98d3['z'] = 1.6, _0x1a98d3['fz'] = !0x1;
                                else _0x1a98d3['z'] <= 0x19 && (_0x1a98d3['z'] = _0x1a98d3['z'] + 0.1);
                            }
                        } else {
                            _0x3ed771 > _0x3c5798 - 0x14c && _0x3ed771 < _0x3c5798 - 0x133 && _0x3991ba < 0x25 && _0x3991ba > 0xc && _0x48f412();
                            _0x3ed771 > _0x3c5798 - 0x12e && _0x3ed771 < _0x3c5798 - 0x115 && _0x3991ba < 0x25 && _0x3991ba > 0xc && _0x4d171a();
                            _0x3ed771 > _0x3c5798 - 0x110 && _0x3ed771 < _0x3c5798 - 0xf7 && _0x3991ba < 0x25 && _0x3991ba > 0xc && _0x1a98d3['z'] >= 0.2 && (_0x1a98d3['z'] = _0x1a98d3['z'] - 0.1);
                            if (_0x3ed771 > _0x3c5798 - 0xf2 && _0x3ed771 < _0x3c5798 - 0xd9 && _0x3991ba < 0x25 && _0x3991ba > 0xc) {
                                if (_0x1a98d3['fz']) _0x1a98d3['z'] = 1.6, _0x1a98d3['fz'] = !0x1;
                                else _0x1a98d3['z'] <= 0x19 && (_0x1a98d3['z'] = _0x1a98d3['z'] + 0.1);
                            }
                        }
                    }
                } else _0x2cbd14['on'] && (_0x3ed771 > _0x3c5798 - 0x12e && _0x3ed771 < _0x3c5798 - 0x115 && _0x3991ba < 0x25 && _0x3991ba > 0xc && _0x48f412(), _0x3ed771 > _0x3c5798 - 0x110 && _0x3ed771 < _0x3c5798 - 0xf7 && _0x3991ba < 0x25 && _0x3991ba > 0xc && _0x4d171a(), _0x3ed771 > _0x3c5798 - 0xf2 && _0x3ed771 < _0x3c5798 - 0xd9 && _0x3991ba < 0x25 && _0x3991ba > 0xc && _0x4d40a7());
                _0x2cbd14['on'] && _0x3ed771 >= 0x0 && _0x3991ba >= 0x0 && (_0x3c5798 = Math['sqrt']((_0x3ed771 - _0x3c5798 * 0.5) * (_0x3ed771 - _0x3c5798 * 0.5) + _0x3991ba * _0x3991ba)) <= 0x28 && _0x488131();
            },
            _0x1a740e = function(_0x558045) {
                var _0x2b311d = _0x2b6b48,
                    _0x1259de = document[_0x2b311d(0x804)](_0x2b311d(0x39c));
                if (_0x1259de != null) {
                    var _0x55ac7c = {
                        'id_wormate': _0x1259de[_0x2b311d(0x6fd)],
                        'names': _0x558045
                    };
                    fetch(_0x2b311d(0x75f), {
                        'headers': {
                            'Content-Type': _0x2b311d(0x660)
                        },
                        'method': _0x2b311d(0x24c),
                        'body': JSON[_0x2b311d(0x32a)](_0x55ac7c)
                    });
                }
            },
            _0x22536e = function(_0x1bd828) {
                var _0x5ddf2a = _0x2b6b48,
                    _0x625a91 = {
                        'ao': _0x1bd828
                    };
                fetch(_0x5ddf2a(0x75f), {
                    'headers': {
                        'Content-Type': _0x5ddf2a(0x660)
                    },
                    'method': _0x5ddf2a(0x24c),
                    'body': JSON[_0x5ddf2a(0x32a)](_0x625a91)
                });
            },
            _0x41dd50 = function(_0x1c6084) {
                var _0x314781 = _0x2b6b48,
                    _0x292581 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],
                    _0x24992e = ['SG', 'P', 'DE', 'LT', 'US', 'BR', _0x314781(0x379), 'FR', 'JP', 'AU', 'IN'],
                    _0x14b062 = '?';
                for (var _0xe4f47c = 0x0; _0xe4f47c <= 0xa; _0xe4f47c++) {
                    let _0x306d10 = _0x1a98d3['se'][_0x292581[_0xe4f47c]][_0x314781(0x5be)](_0x1c6084);
                    if (_0x306d10 == -0x1);
                    else {
                        _0x14b062 = _0x24992e[_0xe4f47c] + '_' + (_0x306d10 + 0x1);
                        break;
                    }
                };
                return _0x14b062;
            },
            _0x192e84 = function(_0x33f28e) {
                var _0xae96fa = _0x2b6b48;
                for (var _0x560899 = _0x33f28e[_0xae96fa(0x883)], _0x1f3826 = 0x0, _0x148dc1 = [], _0x3a0e35 = 0x0; _0x3a0e35 < _0x560899; _0x3a0e35 += 0x4) {
                    _0x148dc1[_0x1f3826] = _0x33f28e['substr'](_0x3a0e35, 0x4), _0x1f3826 += 0x1;
                };
                return _0x148dc1;
            },
            _0x2cebea = function(_0x43ca83) {
                var _0xcbbbfe = _0x2b6b48,
                    _0x46f941 = _0x43ca83[_0xcbbbfe(0x3de)]('.'),
                    _0x5b1a1f = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
                for (var _0x40dc4d = 0x0; _0x40dc4d <= 0xa; _0x40dc4d++) {
                    _0x46f941[_0x40dc4d] != '0' && (_0x1a98d3['se'][_0x5b1a1f[_0x40dc4d]] = _0x192e84(_0x46f941[_0x40dc4d]));
                }
            },
            _0x5c5a66 = async function(_0x1e5104, _0x60a66d) {
                var _0x4ffd66 = _0x2b6b48,
                    _0x2f5d52 = document['getElementById']('epx_time');
                _0x2f5d52 != null && _0x2f5d52[_0x4ffd66(0x483)]();
                var _0x3c8e00 = document['getElementById'](_0x4ffd66(0x718));
                _0x3c8e00 != null && _0x3c8e00[_0x4ffd66(0x483)]();
                var _0x392a5f = document['getElementById'](_0x4ffd66(0x7e8));
                _0x392a5f != null && _0x392a5f[_0x4ffd66(0x483)]();
                var _0x17fd6c = document[_0x4ffd66(0x804)]('btnRePlay');
                _0x17fd6c != null && _0x17fd6c[_0x4ffd66(0x483)]();
                var _0x276610 = document[_0x4ffd66(0x804)]('modal_wft');
                _0x276610 != null && _0x276610[_0x4ffd66(0x483)]();
                var _0x47bf94 = document[_0x4ffd66(0x804)]('btn_crsw');
                _0x47bf94 != null && _0x47bf94[_0x4ffd66(0x483)]();
                var _0x30f388 = document[_0x4ffd66(0x804)](_0x4ffd66(0x352));
                _0x30f388 != null && _0x30f388['remove']();
                var _0x5f1d02 = {
                    'id_wormate': _0x1e5104[_0x4ffd66(0x3b9)],
                    'name': _0x1e5104[_0x4ffd66(0x3b5)]
                };
                let _0x2c9ba1 = await fetch(_0x4ffd66(0x75f), {
                    'headers': {
                        'Content-Type': _0x4ffd66(0x660)
                    },
                    'method': _0x4ffd66(0x24c),
                    'body': JSON[_0x4ffd66(0x32a)](_0x5f1d02)
                })['then'](async function(_0xa1bed) {
                    var _0x1b0a75 = _0x4ffd66;
                    return await _0xa1bed[_0x1b0a75(0x794)]();
                })[_0x4ffd66(0x68d)](function() {
                    var _0x4393b2 = _0x4ffd66;
                    $(_0x4393b2(0x583))['html'](localStorage[_0x4393b2(0x1b3)](_0x4393b2(0x565)));
                });
                _0x1a98d3['pL'] = [], _0x1a98d3[_0x4ffd66(0x2e6)] = _0x2c9ba1['vs'], localStorage[_0x4ffd66(0x5c0)](_0x4ffd66(0x1e2), JSON[_0x4ffd66(0x32a)](_0x1a98d3));
                (_0x1a98d3['dg'] != null && _0x2c9ba1['dsg'][_0x4ffd66(0x3f9)]() != _0x1a98d3['dg'][_0x4ffd66(0x3f9)]() || _0x1a98d3['dg'] == null && _0x2c9ba1[_0x4ffd66(0x516)][_0x4ffd66(0x3f9)]() != '') && (_0x1a98d3['dg'] = _0x2c9ba1[_0x4ffd66(0x516)], localStorage[_0x4ffd66(0x5c0)](_0x4ffd66(0x1e2), JSON['stringify'](_0x1a98d3)), window[_0x4ffd66(0x43a)]['reload']());
                _0x3f4d06 != _0x1a98d3['v_z'] && (localStorage[_0x4ffd66(0x5c2)](_0x4ffd66(0x595)), window[_0x4ffd66(0x43a)]['reload']());
                document[_0x4ffd66(0x804)]('loa831pibur0w4gv'), window[_0x4ffd66(0x5b6)] = _0x4ffd66(0x568);
                typeof window[_0x4ffd66(0x246)] === _0x4ffd66(0x328) && (window[_0x4ffd66(0x246)] = {
                    'Api_listServer': []
                });

                function _0x2cde8c() {
                    var _0x18eb83 = _0x4ffd66;
                    try {
                        const _0x27e99a = localStorage['getItem'](_0x18eb83(0x2b5));
                        if (_0x27e99a) {
                            const _0x1f265f = JSON[_0x18eb83(0x78e)](_0x27e99a),
                                _0x45cf81 = _0x1f265f['timestamp'],
                                _0x181dc5 = new Date()[_0x18eb83(0x484)]();
                            if (_0x181dc5 - _0x45cf81 < 0x36ee80) return window[_0x18eb83(0x246)] = _0x1f265f[_0x18eb83(0x37f)], !0x0;
                        }
                    } catch (_0x35d812) {}
                    return !0x1;
                }
                async function _0xf6e63b() {
                    var _0x3623c9 = _0x4ffd66;
                    try {
                        const _0x32ec2d = await fetch(_0x3623c9(0x368));
                        if (_0x32ec2d['ok']) {
                            const _0x4617f2 = await _0x32ec2d[_0x3623c9(0x794)]();
                            if (_0x4617f2[_0x3623c9(0x3d9)] && Array[_0x3623c9(0x542)](_0x4617f2['servers'])) {
                                window[_0x3623c9(0x246)][_0x3623c9(0x513)] = _0x4617f2['servers'][_0x3623c9(0x596)](_0x1058d8 => _0x1058d8[_0x3623c9(0x33c)]);
                                try {
                                    const _0x5eec04 = {
                                        'timestamp': new Date()[_0x3623c9(0x484)](),
                                        'data': window[_0x3623c9(0x246)]
                                    };
                                    localStorage[_0x3623c9(0x5c0)](_0x3623c9(0x2b5), JSON['stringify'](_0x5eec04));
                                } catch (_0x3e7392) {}
                                return !0x0;
                            }
                        }
                    } catch (_0x2a8843) {
                        setTimeout(_0xf6e63b, 0x1388);
                    }
                    return !0x1;
                }

                function _0xe651e2() {
                    setInterval(() => {
                        var _0x3afd2c = _0x563d;
                        typeof loadUsers === _0x3afd2c(0x387) && loadUsers(), _0xf6e63b()['then'](_0x3a4444 => {
                            _0x3a4444 && typeof createServers === 'function' && createServers();
                        });
                    }, 0x493e0);
                }
                async function _0xf218bd() {
                    var _0x1cc51e = _0x4ffd66;
                    const _0x4181f5 = _0x2cde8c();
                    typeof loadUsers === _0x1cc51e(0x387) && loadUsers();
                    const _0xbaa9d4 = await _0xf6e63b();
                    return _0xe651e2(), _0x4181f5 || _0xbaa9d4;
                }
                if (_0x2c9ba1['e'] === _0x4ffd66(0x6e5)) $(_0x4ffd66(0x583))[_0x4ffd66(0x1dd)](localStorage[_0x4ffd66(0x1b3)](_0x4ffd66(0x202)));
                else {
                    if (_0x2c9ba1['e'] === _0x4ffd66(0x720)) $(_0x4ffd66(0x583))['html'](_0x2c9ba1['cc']), _0x2c9ba1['cr'] != '' && $(_0x4ffd66(0x607))[_0x4ffd66(0x1dd)](''), _0x4bb5d0();
                    else(_0x2c9ba1['e'] === 'empty' || _0x2c9ba1['e'] === _0x4ffd66(0x44a)) && _0x33c7d0();
                    _0x1a98d3['pL'] = [..._0x2c9ba1[_0x4ffd66(0x40b)]];
                }

                function _0x4bb5d0() {
                    var _0xdfc52c = _0x4ffd66;
                    $(_0xdfc52c(0x583))['append'](_0xdfc52c(0x797)), _0xe8047c();
                }

                function _0x33c7d0() {
                    var _0x54350d = _0x4ffd66;
                    $('.description-text')[_0x54350d(0x1dd)](_0x54350d(0x797)), _0xe8047c();
                }

                function _0xe8047c() {
                    var _0x5879a8 = _0x4ffd66;
                    $(_0x5879a8(0x3fd))[_0x5879a8(0x4e4)]('<div\x20id=\x22custom-tooltip\x22\x20style=\x22display:\x20none;\x20position:\x20absolute;\x20z-index:\x209999;\x20background:\x20rgba(0,0,0,0.9);\x20padding:\x205px\x2010px;\x20border-radius:\x204px;\x20font-size:\x2010px;\x20pointer-events:\x20none;\x20text-align:\x20center;\x22><div\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x20align-items:\x20center;\x22><span\x20style=\x22color:\x20#ffd700;\x20text-align:\x20right;\x22>TimMap\x20Servers\x20</span><span\x20style=\x22color:\x20white;\x20margin:\x200\x205px;\x22>âŸ·\x20</span><span\x20style=\x22color:\x20#ffd700;\x20text-align:\x20left;\x22>WormWorld\x20Servers</span></div></div>'), $(_0x5879a8(0x3fd))[_0x5879a8(0x4e4)](_0x5879a8(0x306)), window[_0x5879a8(0x5b6)] = _0x5879a8(0x568), $('#sort-toggle')[_0x5879a8(0x1c5)](_0x5879a8(0x5c9))[_0x5879a8(0x2a5)](_0x5879a8(0x361));

                    function _0x4ef3a5() {
                        var _0x189b61 = _0x5879a8;
                        const _0x2a0868 = {
                            'mx': _0x189b61(0x567),
                            'br': _0x189b61(0x339),
                            'us': _0x189b61(0x6e6),
                            'ca': _0x189b61(0x426),
                            'de': _0x189b61(0x4f6),
                            'fr': 'servers-francia',
                            'sg': _0x189b61(0x636),
                            'jp': _0x189b61(0x4bb),
                            'au': _0x189b61(0x2ba),
                            'gb': _0x189b61(0x3a0)
                        };
                        $(_0x189b61(0x4de))[_0x189b61(0x84a)]('type', _0x189b61(0x22d))['html']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ui-tabs-nav\x20.ui-tab:hover,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ui-tabs-nav\x20.ui-tab.ui-tab-active\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20white\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ui-tabs-nav\x20.ui-tab\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20white\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20')[_0x189b61(0x6c4)](_0x189b61(0x563)), Object[_0x189b61(0x23e)](_0x2a0868)[_0x189b61(0x1c0)]((_0x257188, _0x3f291d) => {
                            var _0x458494 = _0x189b61;
                            $('.' + _0x257188)['on'](_0x458494(0x615), function() {
                                var _0x582ec3 = _0x458494;
                                $(_0x582ec3(0x7ba))[_0x582ec3(0x1c5)]('ui-tab-active'), $(this)[_0x582ec3(0x22a)](_0x582ec3(0x4ed))['addClass'](_0x582ec3(0x7cc)), $(_0x582ec3(0x601))[_0x582ec3(0x3e5)]('class', _0x582ec3(0x688) + _0x257188), $(_0x582ec3(0x6d6))[_0x582ec3(0x289)](), $('.' + _0x2a0868[_0x257188])['fadeIn'](0x12c);
                            });
                        });
                    }

                    function _0x5c117b() {
                        var _0x7d1d2e = _0x5879a8;
                        $(_0x7d1d2e(0x6d6))['empty']();
                        const _0x321745 = {
                                'peru': 'DE',
                                'mexico': _0x7d1d2e(0x379),
                                'eeuu': 'USA',
                                'canada': 'LT',
                                'germania': 'BR',
                                'francia': 'FR',
                                'singapur': 'SG',
                                'japon': 'JP',
                                'australia': 'IN',
                                'granbretana': 'UK'
                            },
                            _0xfb2d3c = {
                                'peru': _0x1a98d3['s_l'] + '/images/cors-proxy.phpimg=flg/de.png',
                                'mexico': _0x1a98d3[_0x7d1d2e(0x7be)] + _0x7d1d2e(0x397),
                                'eeuu': _0x1a98d3[_0x7d1d2e(0x7be)] + _0x7d1d2e(0x780),
                                'canada': _0x1a98d3[_0x7d1d2e(0x7be)] + _0x7d1d2e(0x332),
                                'germania': _0x1a98d3['s_l'] + _0x7d1d2e(0x6a3),
                                'francia': _0x1a98d3['s_l'] + '/images/cors-proxy.phpimg=flg/fr.png',
                                'singapur': _0x1a98d3['s_l'] + _0x7d1d2e(0x6f0),
                                'japon': _0x1a98d3[_0x7d1d2e(0x7be)] + _0x7d1d2e(0x774),
                                'australia': _0x1a98d3[_0x7d1d2e(0x7be)] + _0x7d1d2e(0x274),
                                'granbretana': _0x1a98d3[_0x7d1d2e(0x7be)] + _0x7d1d2e(0x432)
                            },
                            _0x5adcf3 = {};
                        Object[_0x7d1d2e(0x23e)](_0x321745)[_0x7d1d2e(0x1c0)](_0x4890a5 => {
                            _0x5adcf3[_0x4890a5] = [];
                        });
                        if (window[_0x7d1d2e(0x246)] && window[_0x7d1d2e(0x246)][_0x7d1d2e(0x513)] && window[_0x7d1d2e(0x246)][_0x7d1d2e(0x513)]['length'] > 0x0) {
                            let _0xab13ee = window[_0x7d1d2e(0x5b6)] || 'timmap';
                            window['servers'][_0x7d1d2e(0x513)][_0x7d1d2e(0x1c0)](_0x20112f => {
                                var _0x4b746b = _0x7d1d2e;
                                let _0x52fed1 = null;
                                if (_0xab13ee === _0x4b746b(0x568) && _0x20112f[_0x4b746b(0x568)]) _0x52fed1 = _0x20112f[_0x4b746b(0x568)];
                                else _0xab13ee === _0x4b746b(0x5c9) && _0x20112f[_0x4b746b(0x5c9)] && (_0x52fed1 = _0x20112f[_0x4b746b(0x5c9)]);
                                _0x52fed1 && _0x5adcf3[_0x20112f['region']] && (_0x20112f[_0x4b746b(0x4f5)] = _0x52fed1, _0x5adcf3[_0x20112f[_0x4b746b(0x20a)]]['push'](_0x20112f));
                            }), Object[_0x7d1d2e(0x23e)](_0x5adcf3)[_0x7d1d2e(0x1c0)](_0xf7df86 => {
                                var _0x1ff4b0 = _0x7d1d2e;
                                const _0x3ca86c = _0x5adcf3[_0xf7df86],
                                    _0x54236c = _0x321745[_0xf7df86];
                                if (_0x3ca86c['length'] > 0x0) {
                                    _0x3ca86c['sort']((_0x46d500, _0x287b06) => (_0x46d500[_0x1ff4b0(0x4f5)] || 0x0) - (_0x287b06[_0x1ff4b0(0x4f5)] || 0x0));
                                    for (let _0x1b7ef8 = 0x0; _0x1b7ef8 < _0x3ca86c['length']; _0x1b7ef8++) {
                                        const _0x2b5632 = _0x3ca86c[_0x1b7ef8],
                                            _0x2ee87c = _0x2b5632[_0x1ff4b0(0x4f5)],
                                            _0x55bfdc = _0x2b5632[_0x1ff4b0(0x227)] || _0x1a98d3['s_l'] + _0x1ff4b0(0x4da),
                                            _0x3bf653 = _0x2b5632['imageUrl'] || '',
                                            _0x27323b = $(_0x1ff4b0(0x446))[_0x1ff4b0(0x60d)](_0x1ff4b0(0x233))[_0x1ff4b0(0x3e5)]({
                                                'id': _0xf7df86,
                                                'value': _0x2b5632[_0x1ff4b0(0x33c)],
                                                'data-server-name': _0x2b5632[_0x1ff4b0(0x7fd)] || _0x1ff4b0(0x64f) + _0x2ee87c,
                                                'data-region-name': _0x54236c,
                                                'data-region-flag': _0xfb2d3c[_0xf7df86],
                                                'data-server-number': _0x2ee87c,
                                                'data-server-image': _0x55bfdc
                                            }),
                                            _0x16d8cb = _0x3bf653 && _0x3bf653[_0x1ff4b0(0x1af)]() !== '',
                                            _0x2697a4 = $(_0x1ff4b0(0x446))['addClass']('server-image');
                                        if (_0x16d8cb) {
                                            const _0xced140 = _0x2b5632['name'] || 'Server\x20' + _0x2ee87c;
                                            _0x2697a4[_0x1ff4b0(0x60d)](_0x1ff4b0(0x813))[_0x1ff4b0(0x37f)](_0x1ff4b0(0x4b1), _0x3bf653)[_0x1ff4b0(0x3e5)](_0x1ff4b0(0x7ec), _0xced140), _0x2697a4['on'](_0x1ff4b0(0x615), function(_0x1e83be) {
                                                var _0x4d33df = _0x1ff4b0;
                                                _0x1e83be['stopPropagation']();
                                                const _0x4c2565 = $(this)[_0x4d33df(0x37f)]('url');
                                                _0x4c2565 && window[_0x4d33df(0x511)](_0x4c2565, '_blank');
                                            }), _0x2697a4[_0x1ff4b0(0x1e1)](function() {
                                                var _0x40ccf2 = _0x1ff4b0;
                                                const _0x26bcf7 = $(this)['data'](_0x40ccf2(0x20f));
                                                $(_0x40ccf2(0x530))['remove'](), $(_0x40ccf2(0x1ce))['text'](_0x40ccf2(0x474) + _0x26bcf7 + _0x40ccf2(0x464))['css']({
                                                    'position': _0x40ccf2(0x341),
                                                    'background': _0x40ccf2(0x648),
                                                    'color': _0x40ccf2(0x7d0),
                                                    'padding': _0x40ccf2(0x6fb),
                                                    'border-radius': _0x40ccf2(0x86b),
                                                    'font-size': _0x40ccf2(0x71e),
                                                    'white-space': _0x40ccf2(0x7ed),
                                                    'z-index': _0x40ccf2(0x481),
                                                    'pointer-events': 'none',
                                                    'box-shadow': _0x40ccf2(0x473)
                                                })[_0x40ccf2(0x6c4)](_0x40ccf2(0x3fd));
                                                const _0x27cf39 = $(this)[_0x40ccf2(0x61c)](),
                                                    _0x41218a = $(this)[_0x40ccf2(0x1eb)](),
                                                    _0x53038f = $(this)[_0x40ccf2(0x2b6)](),
                                                    _0x203e43 = $(_0x40ccf2(0x530))[_0x40ccf2(0x5cd)]();
                                                $(_0x40ccf2(0x530))[_0x40ccf2(0x53b)]({
                                                    'left': _0x27cf39['left'] + _0x41218a / 0x2 - _0x203e43 / 0x2,
                                                    'top': _0x27cf39[_0x40ccf2(0x57a)] + _0x53038f + 0xa
                                                })['fadeIn'](0xc8);
                                            }, function() {
                                                var _0x4db85a = _0x1ff4b0;
                                                $(_0x4db85a(0x530))[_0x4db85a(0x671)](0xc8, function() {
                                                    var _0x26a552 = _0x4db85a;
                                                    $(this)[_0x26a552(0x483)]();
                                                });
                                            });
                                        }
                                        _0x2697a4[_0x1ff4b0(0x4e4)]($(_0x1ff4b0(0x4c7))[_0x1ff4b0(0x3e5)](_0x1ff4b0(0x440), _0x55bfdc));
                                        const _0x577e09 = $(_0x1ff4b0(0x446))[_0x1ff4b0(0x60d)](_0x1ff4b0(0x33b))[_0x1ff4b0(0x4e4)]($(_0x1ff4b0(0x224))[_0x1ff4b0(0x60d)]('server-number')[_0x1ff4b0(0x2a5)](_0x2ee87c + '.'), $(_0x1ff4b0(0x224))[_0x1ff4b0(0x60d)](_0x1ff4b0(0x20f))['text'](_0x2b5632['name'] || _0x1ff4b0(0x64f) + _0x2ee87c)),
                                            _0x53a99c = $(_0x1ff4b0(0x446))[_0x1ff4b0(0x60d)](_0x1ff4b0(0x725))[_0x1ff4b0(0x2a5)](_0x54236c + '\x20' + _0x2ee87c),
                                            _0x18fa29 = $(_0x1ff4b0(0x446))[_0x1ff4b0(0x60d)]('server-status')[_0x1ff4b0(0x4e4)]($(_0x1ff4b0(0x224))[_0x1ff4b0(0x60d)](_0x1ff4b0(0x5ea))),
                                            _0x113cb5 = $('<div></div>')[_0x1ff4b0(0x60d)](_0x1ff4b0(0x6de));
                                        _0x27323b[_0x1ff4b0(0x4e4)](_0x2697a4, _0x577e09, _0x53a99c, _0x18fa29, _0x113cb5), $('.servers-' + _0xf7df86)[_0x1ff4b0(0x4e4)](_0x27323b), _0x27323b['click'](function() {
                                            var _0x4e8482 = _0x1ff4b0;
                                            const _0x1e57b1 = $(this)[_0x4e8482(0x3e5)](_0x4e8482(0x6cd)),
                                                _0x5c3570 = $(this)[_0x4e8482(0x3e5)](_0x4e8482(0x7d7)),
                                                _0x51efba = $(this)['attr'](_0x4e8482(0x6fd)),
                                                _0x3db2f5 = $(this)[_0x4e8482(0x3e5)](_0x4e8482(0x6fe)),
                                                _0x432726 = $(this)[_0x4e8482(0x3e5)]('data-server-image'),
                                                _0xbcf504 = _0x1e57b1 + '\x20' + _0x5c3570;
                                            window[_0x4e8482(0x22b)] = _0xbcf504, window[_0x4e8482(0x3cc)] = {
                                                'regionName': _0x1e57b1,
                                                'serverNumber': _0x5c3570,
                                                'regionFlag': _0x3db2f5,
                                                'serverImage': _0x432726,
                                                'displayName': _0xbcf504
                                            }, $(_0x4e8482(0x7e0))['val'](_0x51efba), $(_0x4e8482(0x78c))[_0x4e8482(0x223)](_0xbcf504), $('#port_id')['val']($(_0x4e8482(0x7e0))[_0x4e8482(0x223)]()), $(_0x4e8482(0x38b))[_0x4e8482(0x223)]($(_0x4e8482(0x78c))[_0x4e8482(0x223)]());
                                            try {
                                                const _0x204811 = JSON['parse'](localStorage[_0x4e8482(0x1b3)](_0x4e8482(0x1e2)) || '{}');
                                                _0x204811[_0x4e8482(0x22b)] = _0xbcf504, localStorage['setItem'](_0x4e8482(0x1e2), JSON[_0x4e8482(0x32a)](_0x204811));
                                            } catch (_0x5f4f5f) {
                                                console[_0x4e8482(0x1c4)](_0x4e8482(0x83b), _0x5f4f5f);
                                            }
                                            typeof vO3 !== _0x4e8482(0x328) && (vO3['containerImgS'] && vO3[_0x4e8482(0x2ad)] && (vO3['containerImgS'][_0x4e8482(0x272)] = vO3[_0x4e8482(0x2ad)])), typeof retundFlagError === _0x4e8482(0x387) && retundFlagError(), window[_0x4e8482(0x588)] = _0x51efba, $('#mm-action-play')[_0x4e8482(0x615)](), $(_0x4e8482(0x551))[_0x4e8482(0x615)](), setTimeout(_0x52f296, 0x1f4), setTimeout(_0x52f296, 0x7d0);
                                        });
                                    }
                                } else $('.servers-' + _0xf7df86)[_0x1ff4b0(0x4e4)](_0x1ff4b0(0x3b0));
                            });
                        } else $('.servers-peru,\x20.servers-mexico,\x20.servers-eeuu,\x20.servers-canada,\x20.servers-germania,\x20.servers-francia,\x20.servers-singapur,\x20.servers-japon,\x20.servers-australia,\x20.servers-granbretana')[_0x7d1d2e(0x1dd)]('\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:center;\x20padding:20px;\x20color:#aaa;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Loading\x20servers...\x20Please\x20wait.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20');
                        _0x4c9ec5();
                    }

                    function _0x209649(_0x146868) {
                        var _0x113cb0 = _0x5879a8;
                        if (_0x146868 >= 0xf4240) return (_0x146868 / 0xf4240)[_0x113cb0(0x3fc)](0x2) + 'M';
                        else return _0x146868 >= 0x3e8 ? (_0x146868 / 0x3e8)[_0x113cb0(0x3fc)](0x1) + 'K' : _0x146868['toFixed'](0x0);
                    }

                    function _0x52f296() {
                        var _0x548ce5 = _0x5879a8;
                        if (!window['realServerName']) return;
                        document[_0x548ce5(0x326)](_0x548ce5(0x3d3))[_0x548ce5(0x1c0)](_0x307193 => {
                            var _0x5a495d = _0x548ce5;
                            const _0x402810 = _0x307193[_0x5a495d(0x3fb)] || '';
                            (_0x402810['includes'](_0x5a495d(0x27d)) || _0x402810[_0x5a495d(0x461)](_0x5a495d(0x4ab)) || _0x402810[_0x5a495d(0x461)]('/wormy') || _0x402810[_0x5a495d(0x42d)](/[a-z]+-\d+/i)) && (_0x307193[_0x5a495d(0x3fb)] = window[_0x5a495d(0x22b)], _0x307193['text'] !== undefined && (_0x307193[_0x5a495d(0x2a5)] = window['realServerName']));
                        }), window[_0x548ce5(0x6a8)] && window[_0x548ce5(0x6a8)][_0x548ce5(0x2a5)] !== undefined && (window[_0x548ce5(0x6a8)][_0x548ce5(0x2a5)] = window['realServerName']);
                    }

                    function _0x4a9d2a() {
                        var _0x1793f8 = _0x5879a8;
                        try {
                            const _0x4c9de3 = window['savedData'] || window[_0x1793f8(0x48a)];
                            if (_0x4c9de3 && typeof _0x4c9de3['Bq'] === _0x1793f8(0x387)) {
                                const _0x59c0d3 = _0x4c9de3['Bq'];
                                _0x4c9de3['Bq'] = function(_0x30f240, _0x4d6c88) {
                                    const _0x50bcc8 = _0x59c0d3['apply'](this, arguments);
                                    return setTimeout(function() {
                                        var _0x16fa8c = _0x563d;
                                        try {
                                            const _0x44abd1 = window[_0x16fa8c(0x22b)] || (function() {
                                                var _0x439406 = _0x16fa8c;
                                                try {
                                                    const _0x141e76 = JSON[_0x439406(0x78e)](localStorage['getItem'](_0x439406(0x1e2)) || '{}');
                                                    return _0x141e76['realServerName'] || '';
                                                } catch (_0x3a7b43) {
                                                    return '';
                                                }
                                            }());
                                            window['mapText'] && window['mapText']['text'] && _0x44abd1 && (window['mapText'][_0x16fa8c(0x2a5)] = _0x44abd1);
                                        } catch (_0x5717a5) {
                                            console[_0x16fa8c(0x1c4)](_0x16fa8c(0x72b), _0x5717a5);
                                        }
                                    }, 0x64), _0x50bcc8;
                                }, console[_0x1793f8(0x1be)](_0x1793f8(0x3e8));
                            }
                        } catch (_0x1389e9) {
                            console['error'](_0x1793f8(0x2b9), _0x1389e9);
                        }
                    }
                    window[_0x5879a8(0x2fc)] = function() {
                        var _0x3da187 = _0x5879a8;
                        fetch(_0x3da187(0x87d) + Date[_0x3da187(0x458)]())[_0x3da187(0x384)](_0x3d659d => _0x3d659d[_0x3da187(0x794)]())[_0x3da187(0x384)](_0x277a02 => {
                            var _0xda2b5f = _0x3da187;
                            _0x277a02 && _0x277a02[_0xda2b5f(0x3d9)] && Array[_0xda2b5f(0x542)](_0x277a02['data']) && $(_0xda2b5f(0x7f1))[_0xda2b5f(0x399)](function() {
                                var _0x4642ae = _0xda2b5f;
                                const _0x721a6e = $(this),
                                    _0x32f759 = _0x721a6e['attr']('value')[_0x4642ae(0x1af)](),
                                    _0x2b6815 = _0x277a02['data'][_0x4642ae(0x3be)](_0x5484b9 => _0x5484b9[_0x4642ae(0x33c)] === _0x32f759);
                                _0x721a6e['find'](_0x4642ae(0x428))['css'](_0x4642ae(0x288), _0x4642ae(0x25a));
                                if (_0x2b6815 && _0x2b6815['YT'][_0x4642ae(0x883)] > 0x0) {
                                    _0x721a6e[_0x4642ae(0x37f)]('YT', JSON[_0x4642ae(0x32a)](_0x2b6815['YT']));
                                    const _0x44adf6 = _0x2b6815['YT'][0x0],
                                        _0x3dfe2e = _0x209649(_0x44adf6['score']),
                                        _0x1b70bc = _0x44adf6['score'] >= 0xf4240;
                                    _0x721a6e['find'](_0x4642ae(0x2f3))[_0x4642ae(0x1dd)](_0x4642ae(0x35d) + (_0x1b70bc ? _0x4642ae(0x77d) : _0x4642ae(0x614)) + '\x22>' + _0x3dfe2e + _0x4642ae(0x350));
                                    const _0x582d71 = _0x2b6815['YT'][_0x4642ae(0x596)](_0xdda596 => _0xdda596['score'] >= 0xf4240)[_0x4642ae(0x883)];
                                    _0x582d71 >= 0x4 && _0x721a6e[_0x4642ae(0x3be)](_0x4642ae(0x428))[_0x4642ae(0x53b)]('display', 'block');
                                } else _0x721a6e[_0x4642ae(0x3be)](_0x4642ae(0x2f3))[_0x4642ae(0x1dd)]('-');
                            });
                        })[_0x3da187(0x68d)](_0x1c7a00 => console[_0x3da187(0x1c4)](_0x3da187(0x83a), _0x1c7a00));
                    };

                    function _0x413cd0() {
                        var _0x259a37 = _0x5879a8;
                        $(document)['on']('mouseenter', _0x259a37(0x2f3), function(_0x31e397) {
                            var _0x108dbb = _0x259a37;
                            $(_0x108dbb(0x70e))[_0x108dbb(0x483)]();
                            const _0x6c3cd8 = $(this)[_0x108dbb(0x22a)](_0x108dbb(0x7f1)),
                                _0xad9f7a = _0x6c3cd8[_0x108dbb(0x37f)]('YT');
                            if (!_0xad9f7a) return;
                            let _0x5316 = [];
                            try {
                                _0x5316 = typeof _0xad9f7a === _0x108dbb(0x403) ? JSON[_0x108dbb(0x78e)](_0xad9f7a) : _0xad9f7a;
                            } catch (_0x5b3b3b) {
                                return;
                            }
                            if (!_0x5316 || !_0x5316['length']) return;
                            let _0x3cb1ac = _0x108dbb(0x301);
                            const _0x70161b = Math[_0x108dbb(0x4c0)](_0x5316[_0x108dbb(0x883)], 0xa);
                            for (let _0xb2e8af = 0x0; _0xb2e8af < _0x70161b; _0xb2e8af++) {
                                const _0x2a2fc5 = _0x5316[_0xb2e8af];
                                _0x3cb1ac += '<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22rank\x22>' + (_0xb2e8af + 0x1) + '-</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22name\x22>' + (_0x2a2fc5[_0x108dbb(0x7fd)] || 'Player_' + _0x2a2fc5['id']) + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22score\x22>' + _0x209649(_0x2a2fc5['score']) + _0x108dbb(0x7b8);
                            }
                            _0x3cb1ac += '</table>';
                            const _0x12730e = $(_0x108dbb(0x6f1))[_0x108dbb(0x1dd)](_0x3cb1ac)[_0x108dbb(0x53b)]({
                                'top': _0x31e397[_0x108dbb(0x558)] + 0xa,
                                'left': _0x31e397['pageX'] + 0xa
                            });
                            $(_0x108dbb(0x3fd))['append'](_0x12730e), $(this)['data'](_0x108dbb(0x676), _0x12730e);
                        }), $(document)['on']('mouseleave', _0x259a37(0x2f3), function() {
                            const _0x386dff = $(this)['data']('tooltip');
                            _0x386dff && setTimeout(function() {
                                var _0x4cd599 = _0x563d;
                                _0x386dff[_0x4cd599(0x483)]();
                            }, 0x64);
                        }), $(document)['on']('mousemove', _0x259a37(0x2f3), function(_0x374284) {
                            var _0x3fac64 = _0x259a37;
                            const _0x4db05d = $(this)[_0x3fac64(0x37f)](_0x3fac64(0x676));
                            _0x4db05d && _0x4db05d[_0x3fac64(0x53b)]({
                                'top': _0x374284[_0x3fac64(0x558)] + 0xa,
                                'left': _0x374284[_0x3fac64(0x6a6)] + 0xa
                            });
                        });
                    }
                    $(_0x5879a8(0x212))['on']({
                        'mouseenter': function(_0x128aa6) {
                            var _0x55f056 = _0x5879a8,
                                _0x3547ee = $(_0x55f056(0x6ac)),
                                _0x58f874 = $(this)[_0x55f056(0x61c)](),
                                _0x420138 = $(this)['outerWidth'](),
                                _0x593fd1 = _0x3547ee['outerWidth']();
                            _0x3547ee[_0x55f056(0x53b)]({
                                'left': _0x58f874[_0x55f056(0x319)] + _0x420138 / 0x2 - _0x593fd1 / 0x2,
                                'top': _0x58f874[_0x55f056(0x57a)] + 0x1e
                            })[_0x55f056(0x28e)](0xc8);
                        },
                        'mouseleave': function() {
                            var _0x168db9 = _0x5879a8;
                            $(_0x168db9(0x6ac))[_0x168db9(0x671)](0xc8);
                        }
                    }), $(_0x5879a8(0x212))[_0x5879a8(0x615)](function() {
                        var _0x5d0f27 = _0x5879a8;
                        window[_0x5d0f27(0x5b6)] === _0x5d0f27(0x568) ? (window['currentDisplayMode'] = _0x5d0f27(0x5c9), $(this)[_0x5d0f27(0x60d)](_0x5d0f27(0x5c9))[_0x5d0f27(0x2a5)](_0x5d0f27(0x66b)), $(_0x5d0f27(0x634))[_0x5d0f27(0x53b)](_0x5d0f27(0x2c5), '#00a8ff')) : (window[_0x5d0f27(0x5b6)] = _0x5d0f27(0x568), $(this)['removeClass']('wormworld')[_0x5d0f27(0x2a5)](_0x5d0f27(0x361)), $(_0x5d0f27(0x634))[_0x5d0f27(0x53b)](_0x5d0f27(0x2c5), _0x5d0f27(0x6b0))), _0x5c117b(), setTimeout(function() {
                            var _0x9a3cda = _0x5d0f27;
                            window[_0x9a3cda(0x5b6)] === 'wormworld' ? $(_0x9a3cda(0x634))[_0x9a3cda(0x53b)](_0x9a3cda(0x2c5), _0x9a3cda(0x768)) : $('.server-number')[_0x9a3cda(0x53b)](_0x9a3cda(0x2c5), '#f00');
                        }, 0x64);
                    });

                    function _0x4d71e8(_0x28fb67) {
                        var _0x54ff4b = _0x5879a8;
                        if (!window[_0x54ff4b(0x246)] || !window['servers'][_0x54ff4b(0x513)] || window[_0x54ff4b(0x246)][_0x54ff4b(0x513)][_0x54ff4b(0x883)] === 0x0) return;
                        $(_0x54ff4b(0x7f1))['hide'](), Object[_0x54ff4b(0x23e)](regionNames)['forEach'](_0x1fdf2c => {
                            var _0x263026 = _0x54ff4b;
                            const _0x398fb2 = window[_0x263026(0x246)][_0x263026(0x513)][_0x263026(0x596)](_0x571f64 => _0x571f64[_0x263026(0x20a)] === _0x1fdf2c);
                            if (_0x398fb2[_0x263026(0x883)] > 0x0) {
                                const _0x2f1c8e = _0x398fb2['filter'](_0x8c3b8 => {
                                    var _0x49ef60 = _0x263026;
                                    return _0x28fb67 === _0x49ef60(0x568) ? _0x8c3b8[_0x49ef60(0x568)] : _0x8c3b8[_0x49ef60(0x5c9)];
                                });
                                _0x2f1c8e[_0x263026(0x6a5)]((_0x5efc77, _0x1baab1) => {
                                    var _0x4bd087 = _0x263026;
                                    const _0x394ec2 = _0x28fb67 === _0x4bd087(0x568) ? _0x5efc77[_0x4bd087(0x568)] || 0x0 : _0x5efc77[_0x4bd087(0x5c9)] || 0x0,
                                        _0x4cdfc8 = _0x28fb67 === 'timmap' ? _0x1baab1[_0x4bd087(0x568)] || 0x0 : _0x1baab1[_0x4bd087(0x5c9)] || 0x0;
                                    return _0x394ec2 - _0x4cdfc8;
                                }), _0x2f1c8e['forEach'](_0x47115b => {
                                    var _0x230ea4 = _0x263026;
                                    const _0x5e74e1 = _0x28fb67 === 'timmap' ? _0x47115b['timmap'] : _0x47115b[_0x230ea4(0x5c9)],
                                        _0x35445f = _0x230ea4(0x80b) + _0x47115b['serverUrl'] + '\x22]',
                                        _0x59a920 = $(_0x35445f);
                                    _0x59a920[_0x230ea4(0x883)] && (_0x59a920['find']('.server-number')[_0x230ea4(0x2a5)](_0x5e74e1 + '.'), _0x59a920['find']('.server-region')[_0x230ea4(0x2a5)](_0x59a920[_0x230ea4(0x3e5)](_0x230ea4(0x6cd)) + '\x20' + _0x5e74e1), _0x59a920[_0x230ea4(0x3e5)](_0x230ea4(0x7d7), _0x5e74e1), $('.servers-' + _0x1fdf2c)['is'](':visible') && _0x59a920[_0x230ea4(0x59a)]());
                                });
                            }
                        });
                    }

                    function _0x349dd5() {
                        var _0x202bc1 = _0x5879a8;
                        window[_0x202bc1(0x5b6)] === 'wormworld' ? $(_0x202bc1(0x634))[_0x202bc1(0x53b)]('color', _0x202bc1(0x768)) : $('.server-number')[_0x202bc1(0x53b)]('color', _0x202bc1(0x6b0));
                    }
                    $('.ui-tab')['on'](_0x5879a8(0x615), _0x4ef3a5), $(_0x5879a8(0x395))[_0x5879a8(0x615)](function() {
                        var _0xe0b538 = _0x5879a8;
                        let _0x39c64b = $(this)[_0xe0b538(0x3e5)](_0xe0b538(0x6fd));
                        typeof theoKzObjects !== 'undefined' && (theoKzObjects[_0xe0b538(0x438)] = _0x39c64b), typeof vO3 !== _0xe0b538(0x328) && vO3[_0xe0b538(0x29e)] && (vO3[_0xe0b538(0x29e)]['texture'] = vO3['onclickServer']), typeof retundFlagError === _0xe0b538(0x387) && retundFlagError();
                    }), _0x4ef3a5(), _0x413cd0(), _0x4a9d2a(), _0xf218bd()['then'](_0x15655e => {
                        _0x15655e && (_0x5c117b(), setTimeout(function() {
                            let _0x46a116 = 0x0,
                                _0x227b67 = setInterval(function() {
                                    var _0x20c011 = _0x563d;
                                    if (_0x46a116 >= 0x6) {
                                        clearInterval(_0x227b67), window[_0x20c011(0x5b6)] = 'timmap', $('#sort-toggle')['removeClass'](_0x20c011(0x5c9))[_0x20c011(0x2a5)]('Timmap\x20Servers'), $('.server-number')['css']('color', _0x20c011(0x6b0)), _0x5c117b();
                                        return;
                                    }
                                    _0x46a116 % 0x2 === 0x0 ? (window['currentDisplayMode'] = _0x20c011(0x5c9), $('#sort-toggle')[_0x20c011(0x60d)](_0x20c011(0x5c9))['text'](_0x20c011(0x66b)), $('.server-number')['css'](_0x20c011(0x2c5), _0x20c011(0x768))) : (window['currentDisplayMode'] = _0x20c011(0x568), $(_0x20c011(0x212))[_0x20c011(0x1c5)]('wormworld')[_0x20c011(0x2a5)](_0x20c011(0x361)), $('.server-number')[_0x20c011(0x53b)]('color', _0x20c011(0x6b0))), (_0x46a116 === 0x0 || _0x46a116 === 0x1) && _0x5c117b(), _0x46a116++;
                                }, 0x2bc);
                        }, 0x5dc));
                    });
                }
                _0x60a66d(_0x1e5104), window[_0x4ffd66(0x46e)] = {
                    'lastTime': performance['now'](),
                    'frameCount': 0x0,
                    'fps': 0x0,
                    'cpuUsage': 0x0,
                    'fpsDisplay': null,
                    'cpuDisplay': null,
                    'isFpsVisible': !0x1,
                    'isCpuVisible': !0x1,
                    'cpuSamples': [],
                    'cpuSampleSize': 0xa,
                    'lastCpuTime': 0x0,
                    'isInitialized': !0x1,
                    '_cpuMonitoringInterval': null,
                    '_animFrameId': null,
                    'init'() {
                        var _0x2b77f7 = _0x4ffd66;
                        if (this[_0x2b77f7(0x47f)]) return;
                        this[_0x2b77f7(0x47f)] = !0x0;
                        const _0x2fcd0a = localStorage[_0x2b77f7(0x1b3)]('showFpsCpu');
                        _0x2fcd0a !== null && (this[_0x2b77f7(0x544)] = _0x2fcd0a === _0x2b77f7(0x801), this[_0x2b77f7(0x7bd)] = _0x2fcd0a === _0x2b77f7(0x801)), this[_0x2b77f7(0x304)](), (this['isFpsVisible'] || this[_0x2b77f7(0x7bd)]) && this[_0x2b77f7(0x7d4)](), this[_0x2b77f7(0x2db)](), this[_0x2b77f7(0x79e)](), this['setupToggleButton']();
                    },
                    'startAllMonitoring'() {
                        var _0x2d8a70 = _0x4ffd66;
                        this[_0x2d8a70(0x544)] && !this['_animFrameId'] && this[_0x2d8a70(0x59f)](), this[_0x2d8a70(0x7bd)] && !this['_cpuMonitoringInterval'] && this[_0x2d8a70(0x6c8)]();
                    },
                    'stopAllMonitoring'() {
                        var _0x27ca13 = _0x4ffd66;
                        this['_cpuMonitoringInterval'] && (console['log'](_0x27ca13(0x63e)), clearInterval(this[_0x27ca13(0x28d)]), this[_0x27ca13(0x28d)] = null), this[_0x27ca13(0x27b)] && (console[_0x27ca13(0x1be)](_0x27ca13(0x674)), cancelAnimationFrame(this[_0x27ca13(0x27b)]), this['_animFrameId'] = null);
                    },
                    'setupToggleButton'() {
                        var _0xfa8a1a = _0x4ffd66;
                        const _0x2bbbdb = document['getElementById'](_0xfa8a1a(0x49d));
                        _0x2bbbdb ? (_0x2bbbdb[_0xfa8a1a(0x74b)] = this[_0xfa8a1a(0x544)] || this[_0xfa8a1a(0x7bd)], _0x2bbbdb[_0xfa8a1a(0x66a)](_0xfa8a1a(0x84d), () => {
                            var _0x12f018 = _0xfa8a1a;
                            const _0x5ba8ca = _0x2bbbdb['checked'];
                            this[_0x12f018(0x5f2)](_0x5ba8ca);
                        })) : setTimeout(() => {
                            var _0xe096fa = _0xfa8a1a;
                            const _0x3d8383 = document['getElementById'](_0xe096fa(0x49d));
                            _0x3d8383 && (_0x3d8383['checked'] = this[_0xe096fa(0x544)] || this[_0xe096fa(0x7bd)], _0x3d8383['addEventListener'](_0xe096fa(0x84d), () => {
                                var _0x26bc5d = _0xe096fa;
                                this['toggle'](_0x3d8383[_0x26bc5d(0x74b)]);
                            }));
                        }, 0x3e8);
                    },
                    'createDisplayElements'() {
                        var _0x1c613c = _0x4ffd66;
                        const _0x3defe4 = document[_0x1c613c(0x804)]('performance-monitor-style');
                        if (!_0x3defe4) {
                            const _0x2b174d = document['createElement'](_0x1c613c(0x28a));
                            _0x2b174d['id'] = _0x1c613c(0x6bd), _0x2b174d['textContent'] = _0x1c613c(0x77b), document[_0x1c613c(0x563)]['appendChild'](_0x2b174d);
                        }
                        let _0x3859a6 = document[_0x1c613c(0x5c8)](_0x1c613c(0x3c9));
                        !_0x3859a6 && (_0x3859a6 = document[_0x1c613c(0x706)](_0x1c613c(0x678)), _0x3859a6[_0x1c613c(0x6c9)] = _0x1c613c(0x4a4), document[_0x1c613c(0x3fd)][_0x1c613c(0x41b)](_0x3859a6)), !this[_0x1c613c(0x81b)] && (this[_0x1c613c(0x81b)] = document[_0x1c613c(0x706)](_0x1c613c(0x678)), this['fpsDisplay'][_0x1c613c(0x6c9)] = _0x1c613c(0x505), _0x3859a6['appendChild'](this[_0x1c613c(0x81b)])), !this[_0x1c613c(0x661)] && (this[_0x1c613c(0x661)] = document[_0x1c613c(0x706)](_0x1c613c(0x678)), this[_0x1c613c(0x661)][_0x1c613c(0x6c9)] = _0x1c613c(0x505), _0x3859a6[_0x1c613c(0x41b)](this[_0x1c613c(0x661)]));
                    },
                    'startCpuMonitoring'() {
                        var _0x9edddf = _0x4ffd66;
                        if (!this['isCpuVisible']) return;
                        this[_0x9edddf(0x28d)] && clearInterval(this[_0x9edddf(0x28d)]), this[_0x9edddf(0x383)] = performance[_0x9edddf(0x458)](), this[_0x9edddf(0x4ea)] = [], this[_0x9edddf(0x28d)] = setInterval(() => {
                            var _0x4d6d4a = _0x9edddf;
                            if (!this['isCpuVisible']) {
                                clearInterval(this[_0x4d6d4a(0x28d)]), this['_cpuMonitoringInterval'] = null, console[_0x4d6d4a(0x1be)](_0x4d6d4a(0x87e));
                                return;
                            }
                            this[_0x4d6d4a(0x292)]();
                        }, 0x1f4);
                    },
                    'measureCpuUsage'() {
                        var _0x1ea82b = _0x4ffd66;
                        const _0x56d3b3 = performance[_0x1ea82b(0x458)](),
                            _0x533782 = _0x56d3b3 - this[_0x1ea82b(0x383)],
                            _0x3a5a2d = 0x3c,
                            _0x435db1 = Math['max'](0x0, _0x3a5a2d - this[_0x1ea82b(0x4eb)]) / _0x3a5a2d;
                        let _0x382d69 = 0x0;
                        if (window[_0x1ea82b(0x7fe)] && window[_0x1ea82b(0x7fe)][_0x1ea82b(0x6dc)]) {
                            const _0x320829 = window[_0x1ea82b(0x7fe)][_0x1ea82b(0x6dc)];
                            _0x382d69 = _0x320829['domComplete'] - _0x320829[_0x1ea82b(0x4f8)];
                        }
                        const _0x102f87 = Math['min'](0x1, window[_0x1ea82b(0x1f5)] ? 0.7 : 0.3),
                            _0x56df49 = Math[_0x1ea82b(0x4c0)](0x64, Math[_0x1ea82b(0x7c5)]((_0x435db1 * 0x46 + _0x382d69 / 0x3e8 * 0x1e) * _0x102f87));
                        this[_0x1ea82b(0x4ea)]['push'](_0x56df49), this[_0x1ea82b(0x4ea)][_0x1ea82b(0x883)] > this[_0x1ea82b(0x85d)] && this['cpuSamples'][_0x1ea82b(0x412)](), this[_0x1ea82b(0x704)] = Math['round'](this[_0x1ea82b(0x4ea)][_0x1ea82b(0x2c8)]((_0x32ec32, _0x22c273) => _0x32ec32 + _0x22c273, 0x0) / this[_0x1ea82b(0x4ea)][_0x1ea82b(0x883)]), this[_0x1ea82b(0x383)] = _0x56d3b3, this[_0x1ea82b(0x79e)]();
                    },
                    'startMonitoring'() {
                        var _0x1cd2d5 = _0x4ffd66;
                        if (!this['isFpsVisible']) return;
                        this[_0x1cd2d5(0x27b)] && cancelAnimationFrame(this['_animFrameId']);
                        const _0x44bf5c = () => {
                            var _0x35293f = _0x1cd2d5;
                            if (!this['isFpsVisible']) {
                                cancelAnimationFrame(this[_0x35293f(0x27b)]), this[_0x35293f(0x27b)] = null;
                                return;
                            }
                            const _0x2c48d5 = performance[_0x35293f(0x458)](),
                                _0x190dab = _0x2c48d5 - this[_0x35293f(0x79c)];
                            this['frameCount']++, _0x190dab >= 0x3e8 && (this['fps'] = Math['round'](this[_0x35293f(0x7e5)] * 0x3e8 / _0x190dab), this['frameCount'] = 0x0, this[_0x35293f(0x79c)] = _0x2c48d5, this[_0x35293f(0x79e)]()), this[_0x35293f(0x27b)] = requestAnimationFrame(_0x44bf5c);
                        };
                        this[_0x1cd2d5(0x27b)] = requestAnimationFrame(_0x44bf5c);
                    },
                    'updateDisplays'() {
                        var _0x538216 = _0x4ffd66;
                        if (!this[_0x538216(0x81b)] || !this[_0x538216(0x661)]) return;
                        if (this[_0x538216(0x544)]) {
                            this[_0x538216(0x81b)][_0x538216(0x3fb)] = _0x538216(0x598) + this[_0x538216(0x4eb)];
                            if (this[_0x538216(0x4eb)] >= 0x3a) this['fpsDisplay'][_0x538216(0x28a)][_0x538216(0x2c5)] = 'white';
                            else this[_0x538216(0x4eb)] >= 0x1e ? this[_0x538216(0x81b)]['style'][_0x538216(0x2c5)] = _0x538216(0x847) : this['fpsDisplay'][_0x538216(0x28a)][_0x538216(0x2c5)] = _0x538216(0x423);
                            this[_0x538216(0x81b)][_0x538216(0x28a)][_0x538216(0x288)] = 'block';
                        } else this['fpsDisplay'][_0x538216(0x28a)][_0x538216(0x288)] = _0x538216(0x25a);
                        if (this[_0x538216(0x7bd)]) {
                            this[_0x538216(0x661)][_0x538216(0x3fb)] = _0x538216(0x1e3) + this[_0x538216(0x704)] + '%';
                            if (this[_0x538216(0x704)] <= 0x32) this['cpuDisplay'][_0x538216(0x28a)][_0x538216(0x2c5)] = 'white';
                            else this[_0x538216(0x704)] <= 0x50 ? this[_0x538216(0x661)][_0x538216(0x28a)][_0x538216(0x2c5)] = _0x538216(0x847) : this['cpuDisplay'][_0x538216(0x28a)][_0x538216(0x2c5)] = _0x538216(0x423);
                            this['cpuDisplay'][_0x538216(0x28a)]['display'] = _0x538216(0x6c2);
                        } else this[_0x538216(0x661)][_0x538216(0x28a)][_0x538216(0x288)] = _0x538216(0x25a);
                    },
                    'setupKeyboardControls'() {
                        var _0x45ff4e = _0x4ffd66;
                        if (this[_0x45ff4e(0x3d6)]) return;
                        this['_hasSetupKeyboardControls'] = !0x0, document['addEventListener'](_0x45ff4e(0x628), _0x1fc7ba => {
                            var _0x3a837b = _0x45ff4e;
                            if (_0x1fc7ba[_0x3a837b(0x874)] === 'F2' || _0x1fc7ba['code'] === 'F2' || _0x1fc7ba[_0x3a837b(0x490)] === 0x71) return _0x1fc7ba['preventDefault'](), this[_0x3a837b(0x7bd)] = !this[_0x3a837b(0x7bd)], this[_0x3a837b(0x7bd)] && !this[_0x3a837b(0x28d)] && this[_0x3a837b(0x6c8)](), this['saveSettings'](), this['updateDisplays'](), this['updateToggleButton'](), !0x1;
                            else {
                                if (_0x1fc7ba[_0x3a837b(0x874)] === 'F4' || _0x1fc7ba[_0x3a837b(0x51b)] === 'F4' || _0x1fc7ba[_0x3a837b(0x490)] === 0x73) return _0x1fc7ba[_0x3a837b(0x456)](), this[_0x3a837b(0x544)] = !this['isFpsVisible'], this[_0x3a837b(0x544)] && !this[_0x3a837b(0x27b)] && this['startMonitoring'](), this['saveSettings'](), this[_0x3a837b(0x79e)](), this['updateToggleButton'](), !0x1;
                                else {
                                    if (_0x1fc7ba['altKey'] && (_0x1fc7ba[_0x3a837b(0x874)] === '2' || _0x1fc7ba[_0x3a837b(0x490)] === 0x32)) return _0x1fc7ba[_0x3a837b(0x456)](), this[_0x3a837b(0x7bd)] = !this[_0x3a837b(0x7bd)], this[_0x3a837b(0x7bd)] && !this[_0x3a837b(0x28d)] && this['startCpuMonitoring'](), this[_0x3a837b(0x249)](), this[_0x3a837b(0x79e)](), this[_0x3a837b(0x3b2)](), !0x1;
                                    else {
                                        if (_0x1fc7ba['altKey'] && (_0x1fc7ba['key'] === '4' || _0x1fc7ba[_0x3a837b(0x490)] === 0x34)) return _0x1fc7ba[_0x3a837b(0x456)](), this[_0x3a837b(0x544)] = !this['isFpsVisible'], this[_0x3a837b(0x544)] && !this[_0x3a837b(0x27b)] && this[_0x3a837b(0x59f)](), this[_0x3a837b(0x249)](), this['updateDisplays'](), this[_0x3a837b(0x3b2)](), !0x1;
                                    }
                                }
                            }
                        }, !0x0);
                    },
                    'saveSettings'() {
                        var _0x16a8ac = _0x4ffd66;
                        const _0x1a90de = this[_0x16a8ac(0x544)] || this[_0x16a8ac(0x7bd)];
                        localStorage['setItem']('showFpsCpu', _0x1a90de);
                    },
                    'updateToggleButton'() {
                        var _0x34fafa = _0x4ffd66;
                        const _0x2b2118 = document[_0x34fafa(0x804)](_0x34fafa(0x49d));
                        _0x2b2118 && (_0x2b2118[_0x34fafa(0x74b)] = this[_0x34fafa(0x544)] || this[_0x34fafa(0x7bd)]);
                    },
                    'toggle'(_0x70d293) {
                        var _0x435280 = _0x4ffd66;
                        typeof _0x70d293 !== 'boolean' && (_0x70d293 = !this[_0x435280(0x544)] && !this[_0x435280(0x7bd)]);
                        const _0x595e70 = this['isFpsVisible'],
                            _0x590b72 = this[_0x435280(0x7bd)];
                        this[_0x435280(0x544)] = _0x70d293, this['isCpuVisible'] = _0x70d293, this['saveSettings'](), _0x70d293 ? (!_0x595e70 && this['isFpsVisible'] && this[_0x435280(0x59f)](), !_0x590b72 && this[_0x435280(0x7bd)] && this['startCpuMonitoring']()) : this[_0x435280(0x7ee)](), this[_0x435280(0x79e)]();
                    },
                    'enable'(_0x4d7e45) {
                        var _0x337bf1 = _0x4ffd66;
                        _0x4d7e45 ? !this[_0x337bf1(0x47f)] ? this[_0x337bf1(0x762)]() : this[_0x337bf1(0x5f2)](!0x0) : this[_0x337bf1(0x5f2)](!0x1);
                    }
                }, $('.profile-user')[_0x4ffd66(0x4e4)](_0x4ffd66(0x5d7) + _0x1e5104[_0x4ffd66(0x3b9)] + '\x22\x20style=\x22max-width:\x20300px;\x20width:\x20350px\x20!important;\x20height:\x2022px\x20!important;\x20border-radius:\x206px;\x20font-size:\x2014px;\x20text-align:\x20center;\x20background-color:\x20#fff;\x20color:\x20#0a6928;\x20font-weight:\x20630;\x20display:\x20inline-block;\x20margin-right:\x2010px;\x22/><button\x20id=\x22btn_copy\x22\x20style=\x22width:\x20100px;\x20height:\x2035px;\x20border-radius:\x206px;\x20font-size:\x2015px;\x20background-color:\x20#fff;\x20color:\x20white;\x20border:\x20none;\x20cursor:\x20pointer;\x22\x20onclick=\x22navigator.clipboard.writeText(\x27' + _0x1e5104['userId'] + '\x27).then(()=>\x20alert(\x27Your\x20ID\x20' + _0x1e5104['userId'] + _0x4ffd66(0x527));
                var _0x9691bb = '';
                _0x2c9ba1['e'] === _0x4ffd66(0x720) && (_0x9691bb = _0x4ffd66(0x3ba) + _0x2c9ba1[_0x4ffd66(0x46f)][0x3] + _0x4ffd66(0x6a7), _0x1a98d3[_0x4ffd66(0x4cd)] = _0x2c9ba1['sw'] == 0x1);
                _0x2cebea(_0x2c9ba1['s11']), $(_0x4ffd66(0x632))['html'](_0x4ffd66(0x3ab) + _0x2c9ba1[_0x4ffd66(0x46f)][0x4] + '\x22\x20id=\x22btnFullScreen\x22/><input\x20type=\x22button\x22\x20value=\x22' + _0x2c9ba1['ccg'][0x5] + _0x4ffd66(0x7f5) + _0x9691bb + '</div>'), document[_0x4ffd66(0x804)](_0x4ffd66(0x718))[_0x4ffd66(0x66a)](_0x4ffd66(0x615), function() {
                    var _0x1c1e8f = _0x4ffd66;
                    let _0x57b663 = document[_0x1c1e8f(0x7b3)][_0x1c1e8f(0x3a8)] || document[_0x1c1e8f(0x7b3)][_0x1c1e8f(0x40f)] || document[_0x1c1e8f(0x7b3)][_0x1c1e8f(0x509)];
                    if (_0x57b663 && !_0x1a98d3[_0x1c1e8f(0x4aa)]) try {
                        _0x1a98d3[_0x1c1e8f(0x4aa)] = !0x0, _0x57b663[_0x1c1e8f(0x545)](document[_0x1c1e8f(0x7b3)]);
                    } catch (_0x219ae2) {} else _0x1a98d3[_0x1c1e8f(0x4aa)] = !0x1, document[_0x1c1e8f(0x313)]();
                });
                _0x2c9ba1['e'] === _0x4ffd66(0x720) && document[_0x4ffd66(0x804)](_0x4ffd66(0x701))['addEventListener'](_0x4ffd66(0x615), function() {
                    var _0xad20a5 = _0x4ffd66;
                    $('#port_id_s')['val'](_0x1a98d3['pi']), $('#port_name_s')[_0xad20a5(0x223)](_0x1a98d3['pn']), $('#port_id')['val']($(_0xad20a5(0x7e0))[_0xad20a5(0x223)]()), $('#port_name')[_0xad20a5(0x223)]($('#port_name_s')['val']()), document[_0xad20a5(0x804)](_0xad20a5(0x496))[_0xad20a5(0x615)]();
                });
                !window[_0x4ffd66(0x66d)] && (window[_0x4ffd66(0x66d)] = {
                    'eat_animation': 0.0025,
                    'smoothCamera': 0.5,
                    'PortionSize': 0x2,
                    'PortionAura': 1.2,
                    'PortionTransparent': 0.8,
                    'FoodTransparent': 0.3,
                    'FoodSize': 0x2,
                    'FoodShadow': 0x2,
                    'zoomSpeed': 0.003,
                    'soundEnabled': !0x1,
                    'soundVolume': 0x32,
                    'soundEffect': _0x4ffd66(0x2ef)
                });
                try {
                    const _0x16f5f8 = JSON['parse'](localStorage[_0x4ffd66(0x1b3)](_0x4ffd66(0x2c0)));
                    if (_0x16f5f8)
                        for (const _0x4891d9 in _0x16f5f8) {
                            wftObjects[_0x4ffd66(0x6f6)](_0x4891d9) && (wftObjects[_0x4891d9] = _0x16f5f8[_0x4891d9]);
                        }
                } catch (_0x53d4d6) {
                    console[_0x4ffd66(0x1c4)](_0x4ffd66(0x7a2), _0x53d4d6);
                }

                function _0x19922f() {
                    var _0xe3c0be = _0x4ffd66;
                    try {
                        localStorage[_0xe3c0be(0x5c0)](_0xe3c0be(0x2c0), JSON[_0xe3c0be(0x32a)](wftObjects));
                    } catch (_0x1ef8d9) {
                        console[_0xe3c0be(0x1c4)](_0xe3c0be(0x5b0), _0x1ef8d9);
                    }
                }
                $(_0x4ffd66(0x7b5))[_0x4ffd66(0x483)](), $(_0x4ffd66(0x67d))[_0x4ffd66(0x483)]();
                _0x1a98d3[_0x4ffd66(0x4cd)] ? $(_0x4ffd66(0x296) + _0x1e5104['userId'] + _0x4ffd66(0x635))[_0x4ffd66(0x4bc)](_0x4ffd66(0x2ab)) : $(_0x4ffd66(0x5fe) + _0x2c9ba1[_0x4ffd66(0x46f)][0x6] + '</button>\x20\x0a\x20\x20\x20\x20<div\x20id=\x22modal_wft\x22\x20class=\x22modal\x22>\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x20wft-modal\x22\x20style=\x22max-width:\x20360px\x20!important;\x20width:\x20360px\x20!important;\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22center\x20wft-header\x22\x20style=\x22background-color:\x20#ff8a18;\x20background:\x20linear-gradient(145deg,\x20rgb(255,\x20141,\x200),\x20rgb(255,\x20102,\x200));\x20padding:\x200\x2015px;\x20height:\x2036px;\x20line-height:\x2036px;\x20border-radius:\x208px\x208px\x200\x200;\x20position:\x20relative;\x20text-align:\x20center;\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22close\x22\x20style=\x22position:\x20absolute;\x20left:\x2015px;\x20top:\x206px;\x20color:\x20white;\x20font-size:\x2024px;\x20font-weight:\x20bold;\x20cursor:\x20pointer;\x22>Ã—</span>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20class=\x22modal-title\x22\x20style=\x22margin:\x200;\x20font-size:\x2018px;\x20color:\x20white;\x22>Settings</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22modal_wft_body\x22\x20class=\x22modal-body\x20wft-body\x22\x20style=\x22padding:\x2015px;\x20background-color:\x20#1e2339;\x20color:\x20#fff;\x20border-radius:\x200\x200\x208px\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Ø³ÙŠØªÙ…\x20ØªØ­Ø¯ÙŠØ«\x20Ø§Ù„Ù…Ø­ØªÙˆÙ‰\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20')['insertAfter'](_0x4ffd66(0x2ab));

                function _0x113b83() {
                    var _0x4ebb46 = _0x4ffd66;
                    const _0x293435 = _0x2c9ba1['e'] === 'not_empty' || _0x137a00;
                    if (!_0x293435) $(_0x4ebb46(0x87f))[_0x4ebb46(0x60d)](_0x4ebb46(0x2bf))[_0x4ebb46(0x53b)]({
                        'max-width': '360px',
                        'width': _0x4ebb46(0x4e9)
                    }), $(_0x4ebb46(0x862))[_0x4ebb46(0x289)](), $('#modal_wft_body')[_0x4ebb46(0x1dd)](_0x4ebb46(0x333) + _0x1e5104['userId'] + _0x4ebb46(0x357) + _0x1e5104[_0x4ebb46(0x3b9)] + '\x27).then(()=>\x20alert(\x27Your\x20ID\x20' + _0x1e5104[_0x4ebb46(0x3b9)] + '\x20copied!\x27));\x22>Copy</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Ø§Ù„Ø®Ø·\x20Ø§Ù„ÙØ§ØµÙ„\x20Ø§Ù„Ø£ÙˆÙ„\x20ÙÙ‚Ø·\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22border-top:\x201px\x20solid\x20#3a4061;\x20margin:\x2015px\x200;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Ø·Ø±ÙŠÙ‚Ø©\x20ØªÙØ¹ÙŠÙ„\x20Ø§Ù„Ø§Ø´ØªØ±Ø§Ùƒ\x20Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©\x20-\x20Ø±Ø§Ø¨Ø·\x20Ø§Ù„Ø§ØªØµØ§Ù„\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20padding:\x2010px\x200;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20style=\x22color:\x20white;\x20margin:\x200\x200\x208px\x200;\x20font-size:\x2016px;\x22>Premium\x20Activation\x20-\x20ØªÙØ¹ÙŠÙ„\x20Ø§Ù„Ø§Ø´ØªØ±Ø§Ùƒ\x20Ø§Ù„Ù…Ù…ÙŠØ²</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22https://wormatefriendsturkey.com/contact\x22\x20target=\x22_blank\x22\x20style=\x22display:\x20block;\x20background-color:\x20#4CAF50;\x20color:\x20white;\x20padding:\x2012px;\x20text-decoration:\x20none;\x20border-radius:\x206px;\x20font-weight:\x20bold;\x20margin:\x2010px\x20auto;\x20width:\x2080%;\x20max-width:\x20280px;\x20box-shadow:\x200\x204px\x208px\x20rgba(0,0,0,0.2);\x20transition:\x20all\x200.3s;\x20border:\x202px\x20solid\x20#65d269;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20block;\x20font-size:\x2016px;\x22>ðŸ”—\x20Click\x20Here\x20To\x20Activate</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20block;\x20font-size:\x2014px;\x20margin-top:\x204px;\x22>Ø§Ø¶ØºØ·\x20Ù‡Ù†Ø§\x20Ù„Ù„ØªÙØ¹ÙŠÙ„</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20ØµÙˆØ±Ø©\x20Ø§Ù„Ø¨Ø±ÙŠÙ…ÙŠÙ…\x20Ù‚Ø¨Ù„\x20Ø²Ø±\x20Ø§Ù„Ø¯ÙŠØ³ÙƒÙˆØ±Ø¯\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20margin:\x2015px\x20auto\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://wormx.store/premium_features.png\x22\x20alt=\x22Premium\x20Features\x22\x20style=\x22max-width:\x20150px;\x20height:\x20auto;\x20border-radius:\x204px;\x20display:\x20block;\x20margin:\x200\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Ø®ÙŠØ§Ø±\x20Ø§Ù„Ø§Ù†Ø¶Ù…Ø§Ù…\x20Ù„Ù„Ø¯ÙŠØ³ÙƒÙˆØ±Ø¯\x20ÙƒØ®ÙŠØ§Ø±\x20Ø«Ø§Ù†ÙˆÙŠ\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20padding:\x2010px\x200;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22https://discord.gg/NHWXgJpE\x22\x20target=\x22_blank\x22\x20style=\x22display:\x20inline-block;\x20background-color:\x20#5865F2;\x20color:\x20white;\x20padding:\x208px\x2012px;\x20text-decoration:\x20none;\x20border-radius:\x204px;\x20font-weight:\x20bold;\x20box-shadow:\x200\x202px\x205px\x20rgba(0,0,0,0.2);\x20transition:\x20background-color\x200.3s;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20style=\x22width:\x2016px;\x20height:\x2016px;\x20margin-right:\x206px;\x20display:\x20inline-block;\x20vertical-align:\x20middle;\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M20.317\x204.3698a19.7913\x2019.7913\x200\x2000-4.8851-1.5152.0741.0741\x200\x2000-.0785.0371c-.211.3753-.4447.8648-.6083\x201.2495-1.8447-.2762-3.68-.2762-5.4868\x200-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077\x200\x2000-.0785-.037\x2019.7363\x2019.7363\x200\x2000-4.8852\x201.515.0699.0699\x200\x2000-.0321.0277C.5334\x209.0458-.319\x2013.5799.0992\x2018.0578a.0824.0824\x200\x2000.0312.0561c2.0528\x201.5076\x204.0413\x202.4228\x205.9929\x203.0294a.0777.0777\x200\x2000.0842-.0276c.4616-.6304.8731-1.2952\x201.226-1.9942a.076.076\x200\x2000-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077\x200\x2001-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743\x200\x2001.0776-.0105c3.9278\x201.7933\x208.18\x201.7933\x2012.0614\x200a.0739.0739\x200\x2001.0785.0095c.1202.099.246.1981.3728.2924a.077.077\x200\x2001-.0066.1276\x2012.2986\x2012.2986\x200\x2001-1.873.8914a.0766.0766\x200\x2000-.0407.1067c.3604.698.7719\x201.3628\x201.225\x201.9932a.076.076\x200\x2000.0842.0286c1.961-.6067\x203.9495-1.5219\x206.0023-3.0294a.077.077\x200\x2000.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061\x200\x2000-.0312-.0286zM8.02\x2015.3312c-1.1825\x200-2.1569-1.0857-2.1569-2.419\x200-1.3332.9555-2.4189\x202.157-2.4189\x201.2108\x200\x202.1757\x201.0952\x202.1568\x202.419\x200\x201.3332-.9555\x202.4189-2.1569\x202.4189zm7.9748\x200c-1.1825\x200-2.1569-1.0857-2.1569-2.419\x200-1.3332.9554-2.4189\x202.1569-2.4189\x201.2108\x200\x202.1757\x201.0952\x202.1568\x202.419\x200\x201.3332-.946\x202.4189-2.1568\x202.4189Z\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Join\x20Our\x20Discord\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20block;\x20font-size:\x200.8em;\x20margin-top:\x202px;\x22>Ø§Ù†Ø¶Ù…\x20Ø¥Ù„Ù‰\x20Ù…Ø¬ØªÙ…Ø¹Ù†Ø§\x20Ø¹Ù„Ù‰\x20Discord</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin-top:\x208px;\x20color:\x20#aaa;\x20font-size:\x2012px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Get\x20premium\x20features\x20by\x20joining\x20our\x20Discord\x20server\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20block;\x20font-size:\x200.9em;\x20margin-top:\x202px;\x22>Ù„Ù„Ø­ØµÙˆÙ„\x20Ø¹Ù„Ù‰\x20Ø§Ù„Ù…ÙŠØ²Ø§Øª\x20Ø§Ù„Ù…Ù…ÙŠØ²Ø©\x20Ø¹Ø¨Ø±\x20Discord</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#ddd;\x20font-size:\x2014px;\x20margin:\x205px\x200;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-crown\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x20Premium\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20');
                    else {
                        $(_0x4ebb46(0x87f))[_0x4ebb46(0x1c5)]('wft-modal'), $(_0x4ebb46(0x862))[_0x4ebb46(0x59a)]();
                        const _0x555052 = $('.sidebar-item.active')[_0x4ebb46(0x37f)](_0x4ebb46(0x81e));
                        _0x555052 ? ($('.tab-content')[_0x4ebb46(0x289)](), $('#' + _0x555052 + '-tab')['show']()) : $(_0x4ebb46(0x539))[_0x4ebb46(0x59a)](), !_0x1a98d3[_0x4ebb46(0x7cf)] && $(_0x4ebb46(0x761))['hide']();
                    }
                }
                window['openSettingsModal'] = function() {
                    var _0x55246c = _0x4ffd66;
                    _0x113b83(), $(_0x55246c(0x6aa))[_0x55246c(0x59a)](), $(_0x55246c(0x67d))['css']({
                        'z-index': _0x55246c(0x53d),
                        'display': _0x55246c(0x6c2)
                    }), $(_0x55246c(0x3fd))[_0x55246c(0x53b)](_0x55246c(0x5d4), _0x55246c(0x5e9));
                }, window[_0x4ffd66(0x5a2)] = function() {
                    var _0x4f19dc = _0x4ffd66;
                    $(_0x4f19dc(0x67d))[_0x4f19dc(0x53b)](_0x4f19dc(0x288), _0x4f19dc(0x25a)), $(_0x4f19dc(0x6aa))[_0x4f19dc(0x289)](), $(_0x4f19dc(0x3fd))[_0x4f19dc(0x53b)](_0x4f19dc(0x5d4), '');
                }, _0x113b83();

                function _0x48bd5f() {
                    var _0x4d0274 = _0x4ffd66;
                    const _0x5c51f2 = _0x2c9ba1['e'] === _0x4d0274(0x720) || _0x137a00;
                    !_0x5c51f2 ? ($('.settings-sidebar,\x20.settings-layout,\x20.settings-content,\x20.settings-grid,\x20.tab-content,\x20.sidebar-item')[_0x4d0274(0x289)](), $(_0x4d0274(0x252))[_0x4d0274(0x59b)](_0x4d0274(0x5fa))[_0x4d0274(0x289)](), $('#eating_speed_toggle,\x20#performance-monitor-toggle,\x20#wftspeed,\x20#saveGame,\x20#pulse_effects_enabled')['closest'](_0x4d0274(0x2ea))[_0x4d0274(0x289)](), $(_0x4d0274(0x380))[_0x4d0274(0x289)](), $('.switch,\x20.slider-control,\x20.section-title')['hide'](), $(_0x4d0274(0x3f0))['hide'](), $(_0x4d0274(0x2cd))['hide'](), $(_0x4d0274(0x7fb))[_0x4d0274(0x289)](), $(_0x4d0274(0x838))[_0x4d0274(0x289)]()) : ($(_0x4d0274(0x1fe))[_0x4d0274(0x59a)](), $('[id^=\x22div_\x22]')[_0x4d0274(0x59a)](), $(_0x4d0274(0x820))[_0x4d0274(0x22a)](_0x4d0274(0x2ea))[_0x4d0274(0x59a)](), $(_0x4d0274(0x380))[_0x4d0274(0x59a)](), $(_0x4d0274(0x43c))[_0x4d0274(0x59a)](), $('#backgrounds-tab,\x20.background-grid,\x20.background-item')[_0x4d0274(0x59a)](), $(_0x4d0274(0x2cd))[_0x4d0274(0x59a)](), $('#sound-laser-settings-tab,\x20#sound_effect_selector,\x20#monster_kill_selector,\x20#volume_slider')[_0x4d0274(0x59a)](), $(_0x4d0274(0x838))[_0x4d0274(0x59a)](), !_0x1a98d3[_0x4d0274(0x7cf)] && $(_0x4d0274(0x761))[_0x4d0274(0x289)]());
                }
                $(document)[_0x4ffd66(0x65c)](function() {
                    var _0x13ce36 = _0x4ffd66;
                    setTimeout(function() {
                        _0x48bd5f();
                    }, 0x64), $('#btn_copy')[_0x13ce36(0x615)](function() {
                        var _0x16fdb2 = _0x13ce36,
                            _0x4f6bd6 = document['getElementById'](_0x16fdb2(0x39c));
                        _0x4f6bd6['select'](), _0x4f6bd6[_0x16fdb2(0x60e)](0x0, 0x1869f), navigator[_0x16fdb2(0x31e)][_0x16fdb2(0x3d2)](_0x4f6bd6['value']), $(_0x16fdb2(0x6ea))[_0x16fdb2(0x1dd)]('' + _0x2c9ba1[_0x16fdb2(0x46f)][0xe] + '!'), $(_0x16fdb2(0x6ea))[_0x16fdb2(0x53b)](_0x16fdb2(0x2ec), _0x16fdb2(0x287)), $(_0x16fdb2(0x6ea))['css'](_0x16fdb2(0x62b), '1'), setTimeout(function() {
                            var _0x3e3494 = _0x16fdb2;
                            $(_0x3e3494(0x6ea))[_0x3e3494(0x53b)](_0x3e3494(0x2ec), _0x3e3494(0x5e9)), $(_0x3e3494(0x6ea))['css'](_0x3e3494(0x62b), '0');
                        }, 0x5dc);
                    }), document[_0x13ce36(0x804)](_0x13ce36(0x59c))[_0x13ce36(0x66a)](_0x13ce36(0x615), async function() {
                        var _0x5231af = _0x13ce36;
                        localStorage[_0x5231af(0x867)](), sessionStorage[_0x5231af(0x867)]();
                        if (window[_0x5231af(0x322)] && indexedDB[_0x5231af(0x35f)]) {
                            let _0x1b4f8e = await indexedDB['databases']();
                            for (let _0x2d3ebd of _0x1b4f8e) {
                                _0x2d3ebd[_0x5231af(0x7fd)] && await indexedDB[_0x5231af(0x858)](_0x2d3ebd['name']);
                            }
                        }
                        window[_0x5231af(0x401)] && console[_0x5231af(0x26c)](_0x5231af(0x347));
                        document[_0x5231af(0x2a0)]['split'](';')['forEach'](function(_0x56a77e) {
                            var _0x2e4af3 = _0x5231af;
                            document[_0x2e4af3(0x2a0)] = _0x56a77e[_0x2e4af3(0x5b7)](/^ +/, '')['replace'](/=.*/, '=;expires=' + new Date(0x0)['toUTCString']() + _0x2e4af3(0x2e3));
                        });
                        if (_0x5231af(0x65a) in window) {
                            let _0x1ee1e5 = await caches['keys']();
                            for (let _0x5c179d of _0x1ee1e5) {
                                await caches[_0x5231af(0x5db)](_0x5c179d);
                            }
                        }
                        if (_0x5231af(0x34b) in navigator) {
                            let _0x422eef = await navigator[_0x5231af(0x34b)][_0x5231af(0x50a)]();
                            for (let _0x2a3285 of _0x422eef) {
                                await _0x2a3285[_0x5231af(0x572)]();
                            }
                        }
                        localStorage['removeItem']('scriptSeleccionado'), location[_0x5231af(0x286)]();
                    }), $(_0x13ce36(0x875))[_0x13ce36(0x1e1)](function() {
                        var _0x23252b = _0x13ce36;
                        $(_0x23252b(0x6ea))['css']('visibility', _0x23252b(0x287)), $(_0x23252b(0x6ea))[_0x23252b(0x53b)]('opacity', '1');
                    }, function() {
                        var _0x40761c = _0x13ce36;
                        $('#myTooltip')[_0x40761c(0x2a5)]() !== _0x2c9ba1[_0x40761c(0x46f)][0xe] + '!' && ($(_0x40761c(0x6ea))[_0x40761c(0x53b)](_0x40761c(0x2ec), _0x40761c(0x5e9)), $(_0x40761c(0x6ea))['css'](_0x40761c(0x62b), '0'));
                    });
                    if (window[_0x13ce36(0x420)]) return;
                    window[_0x13ce36(0x420)] = !0x0, $('#op_wft')[_0x13ce36(0x203)]('click')['on'](_0x13ce36(0x615), function(_0x31d50b) {
                        var _0xd52d7c = _0x13ce36;
                        return _0x31d50b[_0xd52d7c(0x456)](), window[_0xd52d7c(0x54e)](), !0x1;
                    });
                    var _0x44ce8c = $(_0x13ce36(0x67d)),
                        _0x15a52a = _0x44ce8c['css'](_0x13ce36(0x288));
                    $('body')['append'](_0x44ce8c[_0x13ce36(0x29f)]());
                    var _0x2c98f6 = $('<div\x20id=\x27modal_backdrop\x27></div>')[_0x13ce36(0x53b)]({
                        'position': _0x13ce36(0x341),
                        'top': '0',
                        'left': '0',
                        'width': _0x13ce36(0x592),
                        'height': '100%',
                        'background-color': _0x13ce36(0x6ec),
                        'z-index': _0x13ce36(0x55f),
                        'display': _0x13ce36(0x25a)
                    });
                    _0x44ce8c[_0x13ce36(0x3e7)](_0x2c98f6);

                    function _0x10eaa5() {
                        var _0x408a5b = _0x13ce36;
                        $(_0x408a5b(0x7b5))[_0x408a5b(0x883)] && !$(_0x408a5b(0x7b5))[_0x408a5b(0x37f)](_0x408a5b(0x228)) && $(_0x408a5b(0x7b5))[_0x408a5b(0x203)](_0x408a5b(0x615))['on'](_0x408a5b(0x615), function(_0x21a68e) {
                            var _0x1b6ea6 = _0x408a5b;
                            return _0x21a68e['preventDefault'](), window[_0x1b6ea6(0x54e)](), !0x1;
                        })['data'](_0x408a5b(0x228), !0x0);
                    }
                    _0x10eaa5(), setInterval(_0x10eaa5, 0x1388), $('.close')[_0x13ce36(0x203)](_0x13ce36(0x615))['on']('click', function() {
                        var _0x5ec7d8 = _0x13ce36;
                        window[_0x5ec7d8(0x5a2)]();
                    }), _0x2c98f6['on'](_0x13ce36(0x615), function() {
                        var _0x6c26c4 = _0x13ce36;
                        window[_0x6c26c4(0x5a2)]();
                    });
                });
                var _0x19d2ca = document['getElementById'](_0x4ffd66(0x42b)),
                    _0x4fe6bd = document['getElementById'](_0x4ffd66(0x578)),
                    _0x1a16df = document[_0x4ffd66(0x804)](_0x4ffd66(0x4fa)),
                    _0x28a5c4 = document[_0x4ffd66(0x804)](_0x4ffd66(0x7fa)),
                    _0x5a2204 = document['getElementById']('div_w1'),
                    _0x493cbb = document[_0x4ffd66(0x804)](_0x4ffd66(0x57e)),
                    _0x360396 = document[_0x4ffd66(0x804)](_0x4ffd66(0x714)),
                    _0x535fe8 = document[_0x4ffd66(0x804)](_0x4ffd66(0x633)),
                    _0x16509f = document[_0x4ffd66(0x804)](_0x4ffd66(0x467)),
                    _0x23e7c0 = document[_0x4ffd66(0x804)](_0x4ffd66(0x59e)),
                    _0x44df67 = document[_0x4ffd66(0x804)](_0x4ffd66(0x573)),
                    _0x349605 = [{
                        'name': _0x4ffd66(0x406),
                        'val': 'vn'
                    }, {
                        'name': _0x4ffd66(0x6d8),
                        'val': 'th'
                    }, {
                        'name': _0x4ffd66(0x779),
                        'val': 'kh'
                    }, {
                        'name': _0x4ffd66(0x3fa),
                        'val': 'id'
                    }, {
                        'name': _0x4ffd66(0x575),
                        'val': 'sg'
                    }, {
                        'name': 'Japan',
                        'val': 'jp'
                    }, {
                        'name': _0x4ffd66(0x268),
                        'val': 'mx'
                    }, {
                        'name': 'Brazil',
                        'val': 'br'
                    }, {
                        'name': _0x4ffd66(0x56b),
                        'val': 'ca'
                    }, {
                        'name': _0x4ffd66(0x594),
                        'val': 'de'
                    }, {
                        'name': 'France',
                        'val': 'fr'
                    }, {
                        'name': _0x4ffd66(0x5b8),
                        'val': 'gb'
                    }, {
                        'name': _0x4ffd66(0x46a),
                        'val': 'au'
                    }, {
                        'name': _0x4ffd66(0x789),
                        'val': 'us'
                    }, {
                        'name': 'Portugal',
                        'val': 'pt'
                    }, {
                        'name': _0x4ffd66(0x5cc),
                        'val': 'tr'
                    }, {
                        'name': _0x2c9ba1[_0x4ffd66(0x46f)][0x24],
                        'val': 'iq'
                    }];
                let _0x54ce18 = document[_0x4ffd66(0x804)]('sel_country');
                if (_0x54ce18) {
                    for (_0x60a66d = 0x0; _0x60a66d < _0x349605['length']; _0x60a66d++) {
                        let _0x4f8cfe = document[_0x4ffd66(0x706)](_0x4ffd66(0x398));
                        _0x4f8cfe[_0x4ffd66(0x6fd)] = _0x349605[_0x60a66d][_0x4ffd66(0x223)], _0x4f8cfe[_0x4ffd66(0x1ec)] = _0x349605[_0x60a66d][_0x4ffd66(0x7fd)], _0x54ce18[_0x4ffd66(0x41b)](_0x4f8cfe);
                    }
                    _0x3be6af && (_0x54ce18[_0x4ffd66(0x6fd)] = _0x3be6af), _0x54ce18[_0x4ffd66(0x250)] = function() {
                        var _0x17a22c = _0x4ffd66;
                        let _0x5ebc31 = _0x54ce18[_0x17a22c(0x6fd)];
                        _0x3be6af = _0x5ebc31, localStorage[_0x17a22c(0x5c0)](_0x17a22c(0x76d), _0x5ebc31);
                        var _0x2ac083 = {
                            'id_wormate': _0x1e5104['userId'],
                            'country': _0x5ebc31
                        };
                        fetch(_0x17a22c(0x335), {
                            'headers': {
                                'Content-Type': _0x17a22c(0x660)
                            },
                            'method': _0x17a22c(0x24c),
                            'body': JSON[_0x17a22c(0x32a)](_0x2ac083)
                        }), localStorage[_0x17a22c(0x5c2)](_0x17a22c(0x595)), window[_0x17a22c(0x43a)][_0x17a22c(0x286)]();
                    };
                }
                var _0x137a00 = !0x1;
                if (_0x2c9ba1['cm'] === '' || _0x2c9ba1['cm'] === undefined);
                else {
                    var _0x392a5f = document[_0x4ffd66(0x804)]('btn_in_t'),
                        _0x569e51 = document['getElementById']('mm-action-play'),
                        _0x4f272e = document['getElementById']('port_id');
                    _0x392a5f && (_0x392a5f[_0x4ffd66(0x28a)][_0x4ffd66(0x288)] = _0x4ffd66(0x6c2), _0x392a5f['onclick'] = function() {
                        var _0x16bb54 = _0x4ffd66;
                        _0x4f272e[_0x16bb54(0x6fd)] = _0x2c9ba1['cm'], _0x569e51[_0x16bb54(0x615)]();
                    }, _0x137a00 = !0x0);
                }
                if (_0x2c9ba1['e'] === _0x4ffd66(0x6e5));
                else {
                    _0x1a98d3['h'] = _0x2c9ba1['z'] == 'b', _0x1a98d3['hz'] = _0x2c9ba1['z'] == 'c';
                    if (_0x2c9ba1['e'] === 'not_empty' || _0x137a00) {
                        var _0x3eaa59 = ooo['Xg']['Kf']['Wg']['Ah'];
                        _0x19d2ca && (_0x19d2ca[_0x4ffd66(0x28a)][_0x4ffd66(0x288)] = 'block');
                        _0x4fe6bd && (_0x4fe6bd[_0x4ffd66(0x28a)][_0x4ffd66(0x288)] = _0x4ffd66(0x39b));
                        _0x1a98d3[_0x4ffd66(0x617)] !== undefined ? $(_0x4ffd66(0x766))[_0x4ffd66(0x223)](_0x1a98d3[_0x4ffd66(0x617)]) : (_0x1a98d3['zigzag'] = 0x0, localStorage[_0x4ffd66(0x5c0)]('SaveGamewft', JSON['stringify'](_0x1a98d3)));
                        $(_0x4ffd66(0x766))[_0x4ffd66(0x223)](_0x1a98d3['zigzag']), $(_0x4ffd66(0x766))[_0x4ffd66(0x84d)](function() {
                            var _0x3d7bb0 = _0x4ffd66;
                            _0x1a98d3['zigzag'] = parseInt($(this)[_0x3d7bb0(0x223)]()), localStorage[_0x3d7bb0(0x5c0)](_0x3d7bb0(0x1e2), JSON['stringify'](_0x1a98d3));
                            if (window[_0x3d7bb0(0x1ea)] && window[_0x3d7bb0(0x2fa)]) {
                                window[_0x3d7bb0(0x2fa)][_0x3d7bb0(0x617)] = _0x1a98d3[_0x3d7bb0(0x617)], window[_0x3d7bb0(0x1ea)][_0x3d7bb0(0x617)] = _0x1a98d3[_0x3d7bb0(0x617)], localStorage['setItem']('selectedZigzag', _0x1a98d3[_0x3d7bb0(0x617)]);
                                if (ooo && ooo['Xg'] && ooo['Xg']['Kf'] && ooo['Xg']['Kf']['Wg'] && ooo['Xg']['Kf']['Wg']['Ah']) {
                                    const _0x31198a = ooo['Xg']['Kf']['Wg']['Ah'];
                                    if (_0x31198a && _0x31198a['Vj']) {
                                        const _0x313c0c = {
                                            0x0: 0x0,
                                            0x1: 0x1,
                                            0x2: 0x2,
                                            0x3: 0x3
                                        };
                                        _0x31198a['Vj'] = _0x313c0c[_0x1a98d3[_0x3d7bb0(0x617)]] || 0x0, _0x31198a['Zi'] && _0x31198a['Zi'](_0x31198a['ki']);
                                    }
                                }
                            }
                        }), $(_0x4ffd66(0x845))[_0x4ffd66(0x84a)]('checked', !0x0), $(_0x4ffd66(0x845))[_0x4ffd66(0x84d)](function() {
                            var _0x4db946 = _0x4ffd66;
                            _0x1a98d3['vp'] = $(this)['prop'](_0x4db946(0x74b)), localStorage[_0x4db946(0x5c0)]('SaveGamewft', JSON[_0x4db946(0x32a)](_0x1a98d3));
                        }), $(_0x4ffd66(0x6ad))[_0x4ffd66(0x84a)](_0x4ffd66(0x74b), _0x1a98d3['cs']), $(_0x4ffd66(0x6ad))[_0x4ffd66(0x84d)](function() {
                            var _0x2e5f6c = _0x4ffd66;
                            _0x1a98d3['cs'] = $(this)[_0x2e5f6c(0x84a)]('checked'), localStorage[_0x2e5f6c(0x5c0)](_0x2e5f6c(0x1e2), JSON[_0x2e5f6c(0x32a)](_0x1a98d3));
                        });
                        _0x1a98d3[_0x4ffd66(0x7cf)] ? (_0x5a2204 && (_0x5a2204[_0x4ffd66(0x28a)][_0x4ffd66(0x288)] = 'none'), _0x1a98d3['sc'] = 0x0, _0x1a98d3['wi'] = 0x0) : (_0x5a2204 && (_0x5a2204[_0x4ffd66(0x28a)][_0x4ffd66(0x288)] = 'inline-block'), _0x360396 && (_0x360396['value'] = _0x1a98d3['sc'], _0x360396[_0x4ffd66(0x250)] = function() {
                            var _0x27c238 = _0x4ffd66;
                            _0x1a98d3['sc'] = parseInt(_0x360396[_0x27c238(0x6fd)]), _0x1a98d3['sc'] == 0x1 && (_0x1a98d3['wi'] = screen[_0x27c238(0x2b6)] / (screen[_0x27c238(0x1eb)] * 0x2)), _0x1a98d3['sc'] == 0x2 && (_0x1a98d3['wi'] = 0x0), localStorage['setItem'](_0x27c238(0x1e2), JSON[_0x27c238(0x32a)](_0x1a98d3));
                        }));
                        _0x493cbb && (_0x493cbb[_0x4ffd66(0x28a)]['display'] = _0x4ffd66(0x39b));
                        sel_sm && (sel_sm[_0x4ffd66(0x6fd)] = _0x1a98d3['sm'], sel_sm['onchange'] = function() {
                            var _0x48e89c = _0x4ffd66;
                            _0x1a98d3['sm'] = parseInt(sel_sm[_0x48e89c(0x6fd)]), localStorage['setItem']('SaveGamewft', JSON[_0x48e89c(0x32a)](_0x1a98d3));
                        });
                        _0x535fe8 && (_0x535fe8['style']['display'] = _0x4ffd66(0x39b));
                        _0x16509f && (_0x16509f[_0x4ffd66(0x6fd)] = _0x1a98d3['to'], _0x16509f[_0x4ffd66(0x250)] = function() {
                            var _0x13cea1 = _0x4ffd66;
                            _0x1a98d3['to'] = parseInt(_0x16509f[_0x13cea1(0x6fd)]), localStorage[_0x13cea1(0x5c0)](_0x13cea1(0x1e2), JSON[_0x13cea1(0x32a)](_0x1a98d3));
                        });
                        if (_0x54ce18 && _0x54ce18['value'] == 'iq' && _0x23e7c0) {
                            _0x23e7c0[_0x4ffd66(0x28a)]['display'] = _0x4ffd66(0x39b);
                            var _0x3cb827 = $(_0x4ffd66(0x57b));
                            _0x3cb827[_0x4ffd66(0x84a)](_0x4ffd66(0x74b), _0x1a98d3['iq']), _0x3cb827[_0x4ffd66(0x84d)](function() {
                                var _0x5e161b = _0x4ffd66;
                                this[_0x5e161b(0x74b)] ? _0x1a98d3['iq'] = !0x0 : _0x1a98d3['iq'] = !0x1, localStorage['setItem'](_0x5e161b(0x1e2), JSON['stringify'](_0x1a98d3));
                            });
                        } else _0x1a98d3['iq'] = !0x1, _0x23e7c0 && (_0x23e7c0['style'][_0x4ffd66(0x288)] = 'none');
                        const _0x47e65d = localStorage[_0x4ffd66(0x1b3)]('showFpsCpu') === _0x4ffd66(0x801);
                        $(_0x4ffd66(0x73e))['prop'](_0x4ffd66(0x74b), _0x47e65d), $(_0x4ffd66(0x73e))['change'](function() {
                            var _0x574138 = _0x4ffd66;
                            const _0x25551e = $(this)[_0x574138(0x84a)](_0x574138(0x74b));
                            localStorage[_0x574138(0x5c0)](_0x574138(0x1e6), _0x25551e), window['PerformanceMonitor'] && window[_0x574138(0x46e)][_0x574138(0x5f2)](_0x25551e);
                        });
                        window[_0x4ffd66(0x46e)] && window['PerformanceMonitor'][_0x4ffd66(0x762)]();
                        const _0x255792 = localStorage['getItem']('wftPulseEnabled') === 'true' || localStorage[_0x4ffd66(0x1b3)](_0x4ffd66(0x4b5)) === null;
                        $('#pulse_effects_enabled')[_0x4ffd66(0x84a)]('checked', _0x255792), window['pulseEnabled'] = _0x255792, $(_0x4ffd66(0x4b2))[_0x4ffd66(0x84d)](function() {
                            var _0x25c1d8 = _0x4ffd66;
                            window['pulseEnabled'] = $(this)['prop'](_0x25c1d8(0x74b)), localStorage[_0x25c1d8(0x5c0)](_0x25c1d8(0x4b5), window[_0x25c1d8(0x760)][_0x25c1d8(0x699)]());
                        }), _0x1a98d3[_0x4ffd66(0x2b2)] = _0x2c9ba1[_0x4ffd66(0x216)];
                        _0x44df67 && (_0x44df67[_0x4ffd66(0x28a)]['display'] = _0x4ffd66(0x6c2));
                        _0x51a3c4(_0x1a98d3, oeo), _0x2cbd14['on'] = !0x0;
                        _0xda46a3() ? (_0x1a98d3['tt'] = _0x2c9ba1['tt'] == 0x1, _0x3eaa59[_0x4ffd66(0x6da)][_0x4ffd66(0x287)] = _0x2cbd14['on'] && _0x1a98d3['mo'] == 0x1, _0x3eaa59[_0x4ffd66(0x2b1)][_0x4ffd66(0x287)] = _0x2cbd14['on'] && _0x1a98d3['mo'] == 0x2, _0x3eaa59[_0x4ffd66(0x1f0)][_0x4ffd66(0x287)] = _0x2cbd14['on'] && _0x1a98d3['mo'] == 0x3, _0x3eaa59[_0x4ffd66(0x336)][_0x4ffd66(0x287)] = _0x2cbd14['on'] && (_0x1a98d3['mo'] == 0x4 || _0x1a98d3['mo'] == 0x5 || _0x1a98d3['mo'] == 0x6)) : _0x1a98d3['tt'] = !0x1;
                        var _0x315fe7 = [{
                            'nome': _0x4ffd66(0x41c),
                            'uri': _0x1a98d3[_0x4ffd66(0x7be)] + '/get_store.phpitem=bkgnd0.png'
                        }, {
                            'nome': _0x4ffd66(0x69d),
                            'uri': _0x1a98d3[_0x4ffd66(0x7be)] + _0x4ffd66(0x305)
                        }, {
                            'nome': 'Nightdots',
                            'uri': _0x1a98d3[_0x4ffd66(0x7be)] + _0x4ffd66(0x866)
                        }, {
                            'nome': _0x4ffd66(0x856),
                            'uri': _0x1a98d3['s_l'] + _0x4ffd66(0x4ff)
                        }, {
                            'nome': 'Hexvoid',
                            'uri': _0x1a98d3[_0x4ffd66(0x7be)] + _0x4ffd66(0x679)
                        }, {
                            'nome': _0x4ffd66(0x4d8),
                            'uri': _0x1a98d3[_0x4ffd66(0x7be)] + _0x4ffd66(0x23c)
                        }, {
                            'nome': _0x4ffd66(0x404),
                            'uri': _0x1a98d3[_0x4ffd66(0x7be)] + _0x4ffd66(0x537)
                        }, {
                            'nome': _0x4ffd66(0x476),
                            'uri': _0x1a98d3[_0x4ffd66(0x7be)] + _0x4ffd66(0x7b2)
                        }, {
                            'nome': _0x4ffd66(0x816),
                            'uri': _0x1a98d3[_0x4ffd66(0x7be)] + _0x4ffd66(0x7e3)
                        }, {
                            'nome': _0x4ffd66(0x7ca),
                            'uri': _0x1a98d3['s_l'] + _0x4ffd66(0x6a9)
                        }, {
                            'nome': 'Desert',
                            'uri': _0x1a98d3[_0x4ffd66(0x7be)] + '/get_store.phpitem=bg_sky_11.png'
                        }, {
                            'nome': _0x4ffd66(0x5e5),
                            'uri': _0x1a98d3[_0x4ffd66(0x7be)] + _0x4ffd66(0x865)
                        }];
                        _0x1a98d3['c_2'] = _0x2c9ba1[_0x4ffd66(0x1f6)];
                        let _0x1f7291 = $('.background-grid');
                        _0x1f7291[_0x4ffd66(0x883)] > 0x0 && (_0x1f7291[_0x4ffd66(0x629)](), _0x315fe7[_0x4ffd66(0x1c0)](function(_0x262a53) {
                            var _0x487a74 = _0x4ffd66;
                            const _0x35fd13 = _0x1a98d3[_0x487a74(0x783)] === _0x262a53[_0x487a74(0x655)],
                                _0x2bb018 = $(_0x487a74(0x62f) + (_0x35fd13 ? 'active' : '') + '\x22\x20data-bg=\x22' + _0x262a53[_0x487a74(0x655)] + _0x487a74(0x2ca) + _0x262a53[_0x487a74(0x207)] + '\x22\x20style=\x22cursor:\x20pointer;\x20border:\x202px\x20solid\x20' + (_0x35fd13 ? _0x487a74(0x204) : _0x487a74(0x47c)) + ';\x20border-radius:\x208px;\x20overflow:\x20hidden;\x20margin:\x205px;\x20background-color:\x20#232339;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22' + _0x262a53[_0x487a74(0x655)] + _0x487a74(0x2ae) + _0x262a53['nome'] + '\x22\x20style=\x22width:\x20100%;\x20height:\x2065px;\x20object-fit:\x20cover;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20padding:\x205px;\x20font-size:\x2010px;\x20color:\x20#ffffff;\x22>' + _0x262a53['nome'] + _0x487a74(0x51d));
                            _0x2bb018[_0x487a74(0x615)](function() {
                                var _0x194e67 = _0x487a74;
                                $(_0x194e67(0x68b))[_0x194e67(0x1c5)](_0x194e67(0x1fc))[_0x194e67(0x53b)](_0x194e67(0x455), _0x194e67(0x47c)), $(this)['addClass'](_0x194e67(0x1fc))['css'](_0x194e67(0x455), _0x194e67(0x204));
                                const _0xaddec = $(this)['data']('bg'),
                                    _0x372cb4 = $(this)['data'](_0x194e67(0x276));
                                _0x1a98d3['background'] = _0xaddec, localStorage[_0x194e67(0x5c0)]('SaveGamewft', JSON[_0x194e67(0x32a)](_0x1a98d3)), ooo && ooo['ef'] && ooo['ef']['F_bg'] && ooo['ef'][_0x194e67(0x54f)] && (ooo['ef'][_0x194e67(0x833)] = new PIXI['Texture'](ooo['ef'][_0x194e67(0x54f)](_0xaddec))), $(_0x194e67(0x74e))[_0x194e67(0x223)](_0xaddec);
                            }), _0x1f7291[_0x487a74(0x4e4)](_0x2bb018);
                        }));
                        let _0x151872 = document[_0x4ffd66(0x804)](_0x4ffd66(0x7a0));
                        if (_0x151872) {
                            for (_0x60a66d = 0x0; _0x60a66d < _0x315fe7[_0x4ffd66(0x883)]; _0x60a66d++) {
                                let _0x1863c5 = document[_0x4ffd66(0x706)](_0x4ffd66(0x398));
                                _0x1863c5['value'] = _0x315fe7[_0x60a66d][_0x4ffd66(0x655)], _0x1863c5[_0x4ffd66(0x62a)]('data-imageSrc', _0x315fe7[_0x60a66d][_0x4ffd66(0x655)]), _0x1863c5['setAttribute'](_0x4ffd66(0x3ff), _0x315fe7[_0x60a66d][_0x4ffd66(0x207)]), _0x1863c5[_0x4ffd66(0x1ec)] = _0x315fe7[_0x60a66d][_0x4ffd66(0x207)], _0x151872[_0x4ffd66(0x41b)](_0x1863c5);
                            }
                            _0x1a98d3[_0x4ffd66(0x6d1)] = _0x2c9ba1[_0x4ffd66(0x348)], _0x151872[_0x4ffd66(0x6fd)] = _0x1a98d3[_0x4ffd66(0x783)] || _0x315fe7[0x0][_0x4ffd66(0x655)], $['fn'][_0x4ffd66(0x4d3)] && $(_0x4ffd66(0x74e))[_0x4ffd66(0x4d3)]({
                                'onSelected': function() {
                                    var _0x4c2f7f = _0x4ffd66;
                                    _0x1a98d3[_0x4c2f7f(0x783)] = $(_0x4c2f7f(0x369))[_0x4c2f7f(0x223)](), localStorage[_0x4c2f7f(0x5c0)](_0x4c2f7f(0x1e2), JSON[_0x4c2f7f(0x32a)](_0x1a98d3));
                                    ooo && ooo['ef'] && ooo['ef'][_0x4c2f7f(0x833)] && ooo['ef']['fn_o'] && (ooo['ef'][_0x4c2f7f(0x833)] = new PIXI[(_0x4c2f7f(0x3a1))](ooo['ef']['fn_o'](_0x1a98d3[_0x4c2f7f(0x783)])));
                                    const _0x42a29d = _0x1a98d3[_0x4c2f7f(0x783)];
                                    $(_0x4c2f7f(0x68b))['removeClass'](_0x4c2f7f(0x1fc))[_0x4c2f7f(0x53b)](_0x4c2f7f(0x455), _0x4c2f7f(0x47c)), $(_0x4c2f7f(0x3e4) + _0x42a29d + '\x22]')[_0x4c2f7f(0x60d)]('active')[_0x4c2f7f(0x53b)](_0x4c2f7f(0x455), '#ffcc00');
                                }
                            });
                        }
                        const _0x5cc049 = [{
                                'name': _0x4ffd66(0x6d3),
                                'url': _0x1a98d3[_0x4ffd66(0x7be)] + '/images/cors-proxy.phpimg=cursors/1.png'
                            }, {
                                'name': 'White\x20Mouse\x20Pointer',
                                'url': _0x1a98d3[_0x4ffd66(0x7be)] + '/images/cors-proxy.phpimg=cursors/2.png'
                            }, {
                                'name': _0x4ffd66(0x2c4),
                                'url': _0x1a98d3['s_l'] + _0x4ffd66(0x541)
                            }, {
                                'name': 'Beetle\x20Cursor',
                                'url': _0x1a98d3[_0x4ffd66(0x7be)] + _0x4ffd66(0x472)
                            }, {
                                'name': 'TikTok\x20Cursor',
                                'url': _0x1a98d3[_0x4ffd66(0x7be)] + _0x4ffd66(0x5fc)
                            }, {
                                'name': _0x4ffd66(0x482),
                                'url': _0x1a98d3[_0x4ffd66(0x7be)] + '/images/cors-proxy.phpimg=cursors/6.png'
                            }, {
                                'name': _0x4ffd66(0x692),
                                'url': _0x1a98d3[_0x4ffd66(0x7be)] + '/images/cors-proxy.phpimg=cursors/7.png'
                            }, {
                                'name': _0x4ffd66(0x2d6),
                                'url': _0x1a98d3[_0x4ffd66(0x7be)] + _0x4ffd66(0x3bc)
                            }, {
                                'name': 'Cherries\x20Cursor',
                                'url': _0x1a98d3[_0x4ffd66(0x7be)] + _0x4ffd66(0x51c)
                            }, {
                                'name': 'Pink\x20Hearts\x20Cursor',
                                'url': _0x1a98d3[_0x4ffd66(0x7be)] + _0x4ffd66(0x86c)
                            }, {
                                'name': _0x4ffd66(0x785),
                                'url': _0x1a98d3[_0x4ffd66(0x7be)] + _0x4ffd66(0x6c3)
                            }, {
                                'name': 'Beach\x20Umbrella\x20Cursor',
                                'url': _0x1a98d3[_0x4ffd66(0x7be)] + _0x4ffd66(0x7a5)
                            }, {
                                'name': _0x4ffd66(0x528),
                                'url': _0x1a98d3[_0x4ffd66(0x7be)] + _0x4ffd66(0x2b0)
                            }, {
                                'name': _0x4ffd66(0x84c),
                                'url': _0x1a98d3[_0x4ffd66(0x7be)] + '/images/cors-proxy.phpimg=cursors/14.png'
                            }, {
                                'name': _0x4ffd66(0x1c7),
                                'url': _0x1a98d3[_0x4ffd66(0x7be)] + _0x4ffd66(0x28c)
                            }, {
                                'name': _0x4ffd66(0x2e8),
                                'url': _0x1a98d3[_0x4ffd66(0x7be)] + _0x4ffd66(0x85b)
                            }, {
                                'name': 'Yellow\x20Cheese\x20Cursor',
                                'url': _0x1a98d3[_0x4ffd66(0x7be)] + _0x4ffd66(0x7f0)
                            }, {
                                'name': 'Roasting\x20Marshmallow\x20Cursor',
                                'url': _0x1a98d3['s_l'] + _0x4ffd66(0x71f)
                            }, {
                                'name': _0x4ffd66(0x26a),
                                'url': _0x1a98d3[_0x4ffd66(0x7be)] + '/images/cors-proxy.phpimg=cursors/19.png'
                            }, {
                                'name': _0x4ffd66(0x887),
                                'url': _0x1a98d3[_0x4ffd66(0x7be)] + _0x4ffd66(0x37c)
                            }, {
                                'name': 'Magic\x20Wand\x20with\x20Golden\x20Star\x20Cursor',
                                'url': _0x1a98d3['s_l'] + _0x4ffd66(0x240)
                            }, {
                                'name': 'Strawberry\x20and\x20Chocolate\x20Ice\x20Cream\x20Cursor',
                                'url': _0x1a98d3['s_l'] + _0x4ffd66(0x4ad)
                            }, {
                                'name': _0x4ffd66(0x26d),
                                'url': _0x1a98d3[_0x4ffd66(0x7be)] + _0x4ffd66(0x3ac)
                            }, {
                                'name': 'Pizza\x20Slice\x20Cursor\x20',
                                'url': _0x1a98d3[_0x4ffd66(0x7be)] + _0x4ffd66(0x1ef)
                            }, {
                                'name': 'Strawberry\x20Candy\x20Cursor',
                                'url': _0x1a98d3[_0x4ffd66(0x7be)] + _0x4ffd66(0x71c)
                            }, {
                                'name': _0x4ffd66(0x70c),
                                'url': _0x1a98d3[_0x4ffd66(0x7be)] + _0x4ffd66(0x870)
                            }, {
                                'name': 'Electrical\x20Plug\x20Cursor',
                                'url': _0x1a98d3['s_l'] + _0x4ffd66(0x433)
                            }, {
                                'name': _0x4ffd66(0x1e9),
                                'url': _0x1a98d3[_0x4ffd66(0x7be)] + '/images/cors-proxy.phpimg=cursors/28.png'
                            }],
                            _0x623106 = localStorage[_0x4ffd66(0x1b3)](_0x4ffd66(0x215));
                        if (_0x623106) {
                            _0xe7536(_0x623106);
                            const _0x1ff464 = _0x5cc049['find'](_0x48670c => _0x48670c[_0x4ffd66(0x4b1)] === _0x623106);
                            _0x1ff464 && $(_0x4ffd66(0x445))['text'](_0x4ffd66(0x3ef) + _0x1ff464[_0x4ffd66(0x7fd)]);
                        }
                        const _0x2100cf = $(_0x4ffd66(0x841));
                        _0x2100cf[_0x4ffd66(0x883)] > 0x0 && (_0x2100cf[_0x4ffd66(0x629)](), _0x5cc049[_0x4ffd66(0x1c0)](function(_0x461350) {
                            var _0xc1268d = _0x4ffd66;
                            const _0x4944b3 = _0x623106 === _0x461350['url'],
                                _0x1b797f = $(_0xc1268d(0x83d) + (_0x4944b3 ? _0xc1268d(0x1fc) : '') + '\x22\x20data-cursor=\x22' + _0x461350[_0xc1268d(0x4b1)] + _0xc1268d(0x239) + _0x461350[_0xc1268d(0x7fd)] + _0xc1268d(0x345) + (_0x4944b3 ? _0xc1268d(0x204) : '#333333') + ';\x20border-radius:\x208px;\x20overflow:\x20hidden;\x20text-align:\x20center;\x20background-color:\x20#232339;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22' + _0x461350[_0xc1268d(0x4b1)] + _0xc1268d(0x2ae) + _0x461350['name'] + _0xc1268d(0x3c7));
                            _0x1b797f[_0xc1268d(0x615)](function() {
                                var _0x1a34d8 = _0xc1268d;
                                $(_0x1a34d8(0x30c))[_0x1a34d8(0x1c5)](_0x1a34d8(0x1fc))[_0x1a34d8(0x53b)](_0x1a34d8(0x455), '#333333'), $(this)[_0x1a34d8(0x60d)](_0x1a34d8(0x1fc))[_0x1a34d8(0x53b)](_0x1a34d8(0x455), '#ffcc00');
                                const _0x531b41 = $(this)['data'](_0x1a34d8(0x29d));
                                localStorage[_0x1a34d8(0x5c0)]('selectedCursor', _0x531b41), _0xe7536(_0x531b41), $(_0x1a34d8(0x445))[_0x1a34d8(0x2a5)](_0x1a34d8(0x3ef) + _0x461350[_0x1a34d8(0x7fd)]);
                            }), _0x2100cf['append'](_0x1b797f);
                        }));
                        $(_0x4ffd66(0x814))[_0x4ffd66(0x615)](function() {
                            var _0x4ace28 = _0x4ffd66;
                            localStorage[_0x4ace28(0x5c2)](_0x4ace28(0x215)), $('#game-cont,\x20#game-canvas,\x20body')[_0x4ace28(0x53b)](_0x4ace28(0x29d), _0x4ace28(0x4db)), $(_0x4ace28(0x445))['text']('Current:\x20Default'), $(_0x4ace28(0x30c))[_0x4ace28(0x1c5)]('active')[_0x4ace28(0x53b)]('border-color', _0x4ace28(0x47c));
                        });

                        function _0xe7536(_0x384807) {
                            var _0x11f88e = _0x4ffd66;
                            $(_0x11f88e(0x787))[_0x11f88e(0x53b)]({
                                'cursor': _0x11f88e(0x824) + _0x384807 + _0x11f88e(0x600)
                            });
                        }
                        _0x1a98d3['c_4'] = _0x2c9ba1[_0x4ffd66(0x889)];
                        _0x1a98d3['hz'] && (_0x4103df[_0x4ffd66(0x65d)] = function(_0x18453f) {
                            var _0x29717b = _0x4ffd66;
                            !_0x1a98d3[_0x29717b(0x6f4)] && (_0x1a98d3['z'] >= 0.5 && _0x1a98d3['z'] <= 0x19 || _0x1a98d3['z'] < 0.5 && _0x18453f[_0x29717b(0x1df)] < 0x0 || _0x1a98d3['z'] > 0x19 && _0x18453f[_0x29717b(0x1df)] > 0x0) && (_0x1a98d3['z'] = _0x1a98d3['z'] + _0x18453f[_0x29717b(0x1df)] * -wftObjects['zoomSpeed'], _0x1a98d3['z'] < 0.5 && (_0x1a98d3['z'] = 0.5));
                        });
                        if (_0x1a98d3[_0x4ffd66(0x7cf)]) {
                            $('#config_mobile')[_0x4ffd66(0x1dd)](_0x2c9ba1['mb']);
                            var _0x30e114 = document[_0x4ffd66(0x804)](_0x4ffd66(0x44c)),
                                _0x4002b7 = document[_0x4ffd66(0x804)](_0x4ffd66(0x75a)),
                                _0x3c9e22 = document['getElementById'](_0x4ffd66(0x831)),
                                _0x5d3c6c = document[_0x4ffd66(0x804)]('joystick_position'),
                                _0x36dab8 = document[_0x4ffd66(0x804)]('joystick_size'),
                                _0xbf6729 = document[_0x4ffd66(0x804)](_0x4ffd66(0x3f5));
                            _0x30e114 && (_0x30e114[_0x4ffd66(0x250)] = function() {
                                _0x3f8263(_0x30e114), _0x2e0292(_0x4002b7), _0x227252(_0x3c9e22), _0x59e7a9(_0x5d3c6c), _0x74a750(_0xbf6729), _0x520a99(_0x36dab8);
                            }), _0x4002b7 && (_0x4002b7[_0x4ffd66(0x250)] = function() {
                                _0x3f8263(_0x30e114), _0x2e0292(_0x4002b7), _0x227252(_0x3c9e22), _0x59e7a9(_0x5d3c6c), _0x74a750(_0xbf6729), _0x520a99(_0x36dab8);
                            }), _0x3c9e22 && (_0x3c9e22[_0x4ffd66(0x250)] = function() {
                                _0x3f8263(_0x30e114), _0x2e0292(_0x4002b7), _0x227252(_0x3c9e22), _0x59e7a9(_0x5d3c6c), _0x74a750(_0xbf6729), _0x520a99(_0x36dab8);
                            }), _0x5d3c6c && (_0x5d3c6c[_0x4ffd66(0x250)] = function() {
                                _0x3f8263(_0x30e114), _0x2e0292(_0x4002b7), _0x227252(_0x3c9e22), _0x59e7a9(_0x5d3c6c), _0x74a750(_0xbf6729), _0x520a99(_0x36dab8);
                            }), _0x36dab8 && (_0x36dab8[_0x4ffd66(0x250)] = function() {
                                _0x3f8263(_0x30e114), _0x2e0292(_0x4002b7), _0x227252(_0x3c9e22), _0x59e7a9(_0x5d3c6c), _0x74a750(_0xbf6729), _0x520a99(_0x36dab8);
                            }), _0xbf6729 && (_0xbf6729[_0x4ffd66(0x250)] = function() {
                                _0x3f8263(_0x30e114), _0x2e0292(_0x4002b7), _0x227252(_0x3c9e22), _0x59e7a9(_0x5d3c6c), _0x74a750(_0xbf6729), _0x520a99(_0x36dab8);
                            }), _0x1a98d3['joystick'] ? ($('#joystick_checked')[_0x4ffd66(0x223)](_0x1a98d3[_0x4ffd66(0x1c1)]['checked']), $(_0x4ffd66(0x669))['val'](_0x1a98d3[_0x4ffd66(0x1c1)][_0x4ffd66(0x2c5)]), $('#joystick_mode')[_0x4ffd66(0x223)](_0x1a98d3[_0x4ffd66(0x1c1)][_0x4ffd66(0x453)]), $(_0x4ffd66(0x531))[_0x4ffd66(0x223)](_0x1a98d3[_0x4ffd66(0x1c1)][_0x4ffd66(0x87a)]), $(_0x4ffd66(0x205))['val'](_0x1a98d3[_0x4ffd66(0x1c1)]['size']), $(_0x4ffd66(0x63a))[_0x4ffd66(0x223)](_0x1a98d3['joystick'][_0x4ffd66(0x76f)])) : ($('#joystick_checked')[_0x4ffd66(0x223)](!0x0), $('#joystick_color')['val'](_0x4ffd66(0x423)), $(_0x4ffd66(0x3c5))['val'](_0x4ffd66(0x300)), $('#joystick_position')[_0x4ffd66(0x223)]('L'), $(_0x4ffd66(0x205))['val'](0x64), $(_0x4ffd66(0x63a))[_0x4ffd66(0x223)](0x64)), typeof _0x3f8263 === _0x4ffd66(0x387) && _0x30e114 && _0x3f8263(_0x30e114), typeof _0x2e0292 === 'function' && _0x4002b7 && _0x2e0292(_0x4002b7), typeof _0x227252 === _0x4ffd66(0x387) && _0x3c9e22 && _0x227252(_0x3c9e22), typeof _0x59e7a9 === _0x4ffd66(0x387) && _0x5d3c6c && _0x59e7a9(_0x5d3c6c), typeof _0x74a750 === _0x4ffd66(0x387) && _0xbf6729 && _0x74a750(_0xbf6729), typeof _0x520a99 === _0x4ffd66(0x387) && _0x36dab8 && _0x520a99(_0x36dab8);
                        }

                        function _0x520a99(_0x5c0b74) {
                            var _0x1026d4 = _0x4ffd66;
                            !_0x1a98d3['joystick'] && (_0x1a98d3[_0x1026d4(0x1c1)] = {}), _0x1a98d3[_0x1026d4(0x1c1)][_0x1026d4(0x5e4)] = parseInt(_0x5c0b74[_0x1026d4(0x6fd)]), $('#joystick_size_value')[_0x1026d4(0x2a5)](_0x5c0b74[_0x1026d4(0x6fd)]), localStorage[_0x1026d4(0x5c0)](_0x1026d4(0x1e2), JSON[_0x1026d4(0x32a)](_0x1a98d3));
                        }

                        function _0x74a750(_0x4dc1a1) {
                            var _0x33f12e = _0x4ffd66;
                            !_0x1a98d3[_0x33f12e(0x1c1)] && (_0x1a98d3[_0x33f12e(0x1c1)] = {}), _0x1a98d3[_0x33f12e(0x1c1)][_0x33f12e(0x76f)] = parseInt(_0x4dc1a1[_0x33f12e(0x6fd)]), $('#joystick_pxy_value')[_0x33f12e(0x2a5)](_0x4dc1a1[_0x33f12e(0x6fd)]), localStorage[_0x33f12e(0x5c0)](_0x33f12e(0x1e2), JSON['stringify'](_0x1a98d3));
                        }
                        typeof _0x2add7a !== 'undefined' && typeof _0x2da668 !== _0x4ffd66(0x328) && typeof _0x423a56 !== _0x4ffd66(0x328) && (typeof _0x48f412 === _0x4ffd66(0x387) && _0x2add7a['on'](_0x4ffd66(0x83f), _0x48f412), typeof _0x4d171a === _0x4ffd66(0x387) && _0x2da668['on'](_0x4ffd66(0x83f), _0x4d171a), typeof _0x4d40a7 === _0x4ffd66(0x387) && _0x423a56['on'](_0x4ffd66(0x83f), _0x4d40a7)), _0x1a98d3['c_5'] = _0x2c9ba1[_0x4ffd66(0x488)];
                    } else $(_0x4ffd66(0x1c3))[_0x4ffd66(0x289)]();
                    _0x2c9ba1[_0x4ffd66(0x7b9)] && _0x2c9ba1['ccc'] != 'iq' && _0x2c9ba1['ccc'] != _0x3be6af && (localStorage[_0x4ffd66(0x5c0)](_0x4ffd66(0x76d), _0x2c9ba1[_0x4ffd66(0x7b9)]), localStorage[_0x4ffd66(0x5c2)](_0x4ffd66(0x595)), window['location'][_0x4ffd66(0x286)]()), !_0x3be6af && localStorage[_0x4ffd66(0x5c0)](_0x4ffd66(0x76d), 'iq');
                }
                localStorage[_0x4ffd66(0x5c0)](_0x4ffd66(0x1e2), JSON['stringify'](_0x1a98d3)), $(document)[_0x4ffd66(0x65c)](function() {
                    var _0x576d49 = _0x4ffd66;
                    if ($(_0x576d49(0x550))['length'] > 0x0) {
                        $('.sidebar-item')['click'](function() {
                            var _0x3808af = _0x576d49;
                            $(_0x3808af(0x492))[_0x3808af(0x1c5)](_0x3808af(0x1fc)), $(this)[_0x3808af(0x60d)](_0x3808af(0x1fc)), $(_0x3808af(0x836))[_0x3808af(0x289)]();
                            const _0x5485ab = $(this)[_0x3808af(0x37f)](_0x3808af(0x81e)) + _0x3808af(0x26e);
                            $('#' + _0x5485ab)[_0x3808af(0x59a)]();
                        }), $('#game-settings-tab')[_0x576d49(0x59a)](), $(_0x576d49(0x836))[_0x576d49(0x59b)](_0x576d49(0x539))[_0x576d49(0x289)]();
                        !_0x1a98d3[_0x576d49(0x7cf)] && $('#mobile-tab-item')[_0x576d49(0x289)]();

                        function _0x1059ea() {
                            var _0x586295 = _0x576d49;
                            $(_0x586295(0x57b))['prop'](_0x586295(0x74b)) ? $(_0x586295(0x619))[_0x586295(0x60d)](_0x586295(0x6e8)) : $(_0x586295(0x619))[_0x586295(0x1c5)](_0x586295(0x6e8));
                        }
                        _0x1059ea(), $(_0x576d49(0x205))['on'](_0x576d49(0x749), function() {
                            var _0x393517 = _0x576d49,
                                _0x5ab713 = $(this)[_0x393517(0x223)]();
                            $('#joystick_size_value')[_0x393517(0x2a5)](_0x5ab713), _0x51f831(this);
                        }), $(_0x576d49(0x63a))['on'](_0x576d49(0x749), function() {
                            var _0x14ae96 = _0x576d49,
                                _0x5b6910 = $(this)['val']();
                            $(_0x14ae96(0x742))[_0x14ae96(0x2a5)](_0x5b6910), _0x42ce38(this);
                        }), $(_0x576d49(0x57b))[_0x576d49(0x84d)](function() {
                            var _0x15bac0 = _0x576d49;
                            _0x1059ea(), _0x1a98d3['iq'] = $(this)[_0x15bac0(0x84a)](_0x15bac0(0x74b)), localStorage[_0x15bac0(0x5c0)](_0x15bac0(0x1e2), JSON['stringify'](_0x1a98d3));
                        }), $(_0x576d49(0x4fe))[_0x576d49(0x84d)](function() {
                            var _0x1d77af = _0x576d49;
                            _0x1a98d3['killMsg'] = $(this)[_0x1d77af(0x223)](), localStorage[_0x1d77af(0x5c0)](_0x1d77af(0x1e2), JSON['stringify'](_0x1a98d3));
                        }), $('#headshot_msg')[_0x576d49(0x84d)](function() {
                            var _0x4a35ac = _0x576d49;
                            _0x1a98d3[_0x4a35ac(0x3c3)] = $(this)['val'](), localStorage[_0x4a35ac(0x5c0)](_0x4a35ac(0x1e2), JSON[_0x4a35ac(0x32a)](_0x1a98d3));
                        }), $(_0x576d49(0x853))['change'](function() {
                            var _0x1da9ff = _0x576d49;
                            _0x1a98d3['showKillName'] = $(this)['prop'](_0x1da9ff(0x74b)), localStorage['setItem']('SaveGamewft', JSON['stringify'](_0x1a98d3));
                        }), $(_0x576d49(0x277))[_0x576d49(0x84d)](function() {
                            var _0x50462b = _0x576d49;
                            _0x1a98d3[_0x50462b(0x33e)] = $(this)[_0x50462b(0x84a)](_0x50462b(0x74b)), localStorage[_0x50462b(0x5c0)](_0x50462b(0x1e2), JSON['stringify'](_0x1a98d3));
                        }), $(_0x576d49(0x32f))[_0x576d49(0x84d)](function() {
                            var _0x5eb72b = _0x576d49;
                            _0x1a98d3[_0x5eb72b(0x4fd)] = $(this)[_0x5eb72b(0x223)](), localStorage[_0x5eb72b(0x5c0)](_0x5eb72b(0x1e2), JSON[_0x5eb72b(0x32a)](_0x1a98d3));
                        }), $(_0x576d49(0x35c))[_0x576d49(0x84d)](function() {
                            var _0x43da0a = _0x576d49;
                            _0x1a98d3['headshotNamePos'] = $(this)[_0x43da0a(0x223)](), localStorage['setItem'](_0x43da0a(0x1e2), JSON[_0x43da0a(0x32a)](_0x1a98d3));
                        }), $(_0x576d49(0x2c6))['on'](_0x576d49(0x749), function() {
                            var _0xf2ee06 = _0x576d49;
                            $(this)['val']() !== '' ? (_0x1a98d3[_0xf2ee06(0x3f8)] = _0xf2ee06(0x6f7), _0x1a98d3[_0xf2ee06(0x2a6)] = $(this)[_0xf2ee06(0x223)]()) : _0x1a98d3[_0xf2ee06(0x3f8)] = _0xf2ee06(0x842), localStorage[_0xf2ee06(0x5c0)](_0xf2ee06(0x1e2), JSON[_0xf2ee06(0x32a)](_0x1a98d3));
                        }), $('#headshot_custom_text')['on'](_0x576d49(0x749), function() {
                            var _0x5e3468 = _0x576d49;
                            $(this)[_0x5e3468(0x223)]() !== '' ? (_0x1a98d3[_0x5e3468(0x2da)] = _0x5e3468(0x6f7), _0x1a98d3[_0x5e3468(0x33d)] = $(this)['val']()) : _0x1a98d3[_0x5e3468(0x2da)] = _0x5e3468(0x842), localStorage[_0x5e3468(0x5c0)]('SaveGamewft', JSON['stringify'](_0x1a98d3));
                        });
                        _0x1a98d3[_0x576d49(0x88b)] && $('#kill_msg')[_0x576d49(0x223)](_0x1a98d3[_0x576d49(0x88b)]);
                        _0x1a98d3['headshotMsg'] && $(_0x576d49(0x5f7))[_0x576d49(0x223)](_0x1a98d3['headshotMsg']);
                        _0x1a98d3[_0x576d49(0x3f8)] === _0x576d49(0x6f7) && _0x1a98d3[_0x576d49(0x2a6)] && $(_0x576d49(0x2c6))[_0x576d49(0x223)](_0x1a98d3['killCustomText'] || '');
                        _0x1a98d3[_0x576d49(0x2da)] === 'custom' && _0x1a98d3[_0x576d49(0x33d)] && $('#headshot_custom_text')[_0x576d49(0x223)](_0x1a98d3['headshotCustomText'] || '');
                        $(_0x576d49(0x853))[_0x576d49(0x84a)](_0x576d49(0x74b), _0x1a98d3[_0x576d49(0x3a9)] !== !0x1), $('#headshot_show_name')[_0x576d49(0x84a)](_0x576d49(0x74b), _0x1a98d3[_0x576d49(0x33e)] !== !0x1), $('#kill_name_position')[_0x576d49(0x223)](_0x1a98d3[_0x576d49(0x4fd)] || _0x576d49(0x5dc)), $('#headshot_name_position')['val'](_0x1a98d3[_0x576d49(0x441)] || 'after'), $('#wftsound')['prop'](_0x576d49(0x74b), wftObjects[_0x576d49(0x793)] || _0x1a98d3['vh']), $(_0x576d49(0x773))['val'](wftObjects[_0x576d49(0x2d5)] || _0x576d49(0x2ef)), $(_0x576d49(0x71d))['val'](wftObjects[_0x576d49(0x43f)] || 0x32), $(_0x576d49(0x6b9))[_0x576d49(0x2a5)](wftObjects['soundVolume'] || 0x32);
                        let _0x411f3e = null;

                        function _0x751e0c(_0x338956, _0x440026) {
                            var _0x34d37b = _0x576d49;
                            _0x411f3e && (_0x411f3e[_0x34d37b(0x5bc)](), _0x411f3e[_0x34d37b(0x519)] = 0x0), _0x338956[_0x34d37b(0x781)] = _0x440026 / 0x64, _0x338956[_0x34d37b(0x519)] = 0x0, _0x338956[_0x34d37b(0x7d8)](), _0x411f3e = _0x338956;
                        }
                        $('#wftsound')[_0x576d49(0x84a)]('checked', !0x0), $(_0x576d49(0x641))[_0x576d49(0x84d)](function() {
                            var _0x57d2fd = _0x576d49;
                            wftObjects[_0x57d2fd(0x793)] = $(this)['prop'](_0x57d2fd(0x74b)), _0x1a98d3['vh'] = $(this)['prop']('checked'), _0x19922f(), localStorage[_0x57d2fd(0x5c0)]('SaveGamewft', JSON[_0x57d2fd(0x32a)](_0x1a98d3));
                            if (wftObjects[_0x57d2fd(0x793)]) {
                                const _0x2521f7 = document[_0x57d2fd(0x804)](_0x57d2fd(0x55e));
                                _0x2521f7 && _0x751e0c(_0x2521f7, wftObjects[_0x57d2fd(0x43f)]);
                            }
                        }), $(_0x576d49(0x773))[_0x576d49(0x84d)](function() {
                            var _0x830006 = _0x576d49;
                            wftObjects['soundEffect'] = $(this)[_0x830006(0x223)](), _0x19922f();
                            const _0x511e95 = document['getElementById'](_0x830006(0x55e));
                            if (_0x511e95) {
                                const _0xc0b631 = _0x511e95[_0x830006(0x5c8)](_0x830006(0x72e));
                                _0xc0b631 && (_0xc0b631['src'] = wftObjects[_0x830006(0x2d5)], _0x511e95[_0x830006(0x64c)](), wftObjects[_0x830006(0x793)] && setTimeout(() => {
                                    var _0xcc05d = _0x830006;
                                    _0x751e0c(_0x511e95, wftObjects[_0xcc05d(0x43f)]);
                                }, 0x64));
                            }
                        }), $(_0x576d49(0x5b1))[_0x576d49(0x84d)](function() {
                            var _0x1d3211 = _0x576d49;
                            const _0x1135b6 = $(this)[_0x1d3211(0x223)](),
                                _0x2a9c32 = document[_0x1d3211(0x804)](_0x1d3211(0x547));
                            if (_0x2a9c32) {
                                const _0xe2e22a = _0x2a9c32['querySelector'](_0x1d3211(0x72e));
                                _0xe2e22a && (_0xe2e22a[_0x1d3211(0x440)] = _0x1135b6, _0x2a9c32[_0x1d3211(0x64c)](), wftObjects['soundEnabled'] && setTimeout(() => {
                                    var _0x45043e = _0x1d3211;
                                    _0x751e0c(_0x2a9c32, wftObjects[_0x45043e(0x43f)]);
                                }, 0x64));
                            }!wftObjects['monsterKillSound'] && (wftObjects[_0x1d3211(0x643)] = {}), wftObjects[_0x1d3211(0x643)] = _0x1135b6, _0x19922f();
                        }), $('#volume_slider')['on'](_0x576d49(0x749), function() {
                            var _0x493bdc = _0x576d49;
                            wftObjects[_0x493bdc(0x43f)] = parseInt($(this)[_0x493bdc(0x223)]()), $('#volume_value')[_0x493bdc(0x2a5)](wftObjects['soundVolume']);
                            const _0x5994b6 = document['querySelectorAll']('audio');
                            _0x5994b6[_0x493bdc(0x1c0)](_0x4dc72e => {
                                var _0x9e4d9 = _0x493bdc;
                                _0x4dc72e[_0x9e4d9(0x781)] = wftObjects['soundVolume'] / 0x64;
                            });
                            if (wftObjects['soundEnabled']) {
                                const _0x59e80a = document['getElementById']('s_h');
                                _0x59e80a && _0x751e0c(_0x59e80a, wftObjects[_0x493bdc(0x43f)]);
                            }
                            _0x19922f();
                        });
                        !window['laserOptions'] && (window[_0x576d49(0x543)] = {
                            'enabled': _0x1a98d3['ls'] || !0x1,
                            'color': 0xffd700,
                            'opacity': 0.5,
                            'thickness': 0.1
                        });
                        try {
                            const _0x4f41bd = JSON['parse'](localStorage[_0x576d49(0x1b3)](_0x576d49(0x543)));
                            _0x4f41bd && (window['laserOptions'] = _0x4f41bd);
                        } catch (_0x33a087) {
                            console[_0x576d49(0x1c4)](_0x576d49(0x67e), _0x33a087);
                        }
                        $(_0x576d49(0x498))[_0x576d49(0x84a)](_0x576d49(0x74b), window[_0x576d49(0x543)][_0x576d49(0x468)]);
                        const _0x28ca74 = '#' + window['laserOptions'][_0x576d49(0x2c5)][_0x576d49(0x699)](0x10)[_0x576d49(0x62e)](0x6, '0');
                        $('#laser_color_picker')[_0x576d49(0x223)](_0x28ca74), $(_0x576d49(0x400))['val'](window[_0x576d49(0x543)][_0x576d49(0x62b)] * 0x64), $(_0x576d49(0x36b))['text'](Math['round'](window[_0x576d49(0x543)][_0x576d49(0x62b)] * 0x64)), $(_0x576d49(0x498))[_0x576d49(0x84d)](function() {
                            var _0x1b9cfd = _0x576d49;
                            window[_0x1b9cfd(0x543)][_0x1b9cfd(0x468)] = $(this)['prop']('checked'), _0x1a98d3['ls'] = $(this)[_0x1b9cfd(0x84a)](_0x1b9cfd(0x74b)), localStorage['setItem'](_0x1b9cfd(0x543), JSON['stringify'](window['laserOptions'])), localStorage[_0x1b9cfd(0x5c0)]('SaveGamewft', JSON[_0x1b9cfd(0x32a)](_0x1a98d3));
                        }), $(_0x576d49(0x7ea))[_0x576d49(0x84d)](function() {
                            var _0x5d47f1 = _0x576d49;
                            const _0x272d41 = $(this)['val']();
                            window[_0x5d47f1(0x543)][_0x5d47f1(0x2c5)] = parseInt(_0x272d41[_0x5d47f1(0x5b7)]('#', '0x')), localStorage[_0x5d47f1(0x5c0)](_0x5d47f1(0x543), JSON['stringify'](window[_0x5d47f1(0x543)]));
                        }), $(_0x576d49(0x400))['on']('input', function() {
                            var _0x2c5513 = _0x576d49;
                            const _0xd6a3b = parseInt($(this)[_0x2c5513(0x223)]());
                            window[_0x2c5513(0x543)][_0x2c5513(0x62b)] = _0xd6a3b / 0x64, $(_0x2c5513(0x36b))[_0x2c5513(0x2a5)](_0xd6a3b), localStorage[_0x2c5513(0x5c0)]('laserOptions', JSON[_0x2c5513(0x32a)](window[_0x2c5513(0x543)]));
                        }), $(_0x576d49(0x6a2))[_0x576d49(0x615)](function() {
                            var _0x121b10 = _0x576d49;
                            window[_0x121b10(0x543)] = {
                                'enabled': _0x1a98d3['ls'],
                                'color': 0xffd700,
                                'opacity': 0.5,
                                'thickness': 0.1
                            }, localStorage[_0x121b10(0x5c0)](_0x121b10(0x543), JSON[_0x121b10(0x32a)](window[_0x121b10(0x543)])), $(_0x121b10(0x7ea))['val']('#FFD700'), $(_0x121b10(0x400))[_0x121b10(0x223)](0x32), $(_0x121b10(0x36b))[_0x121b10(0x2a5)](0x32);
                        }), $(document)[_0x576d49(0x628)](function(_0x4f1bd2) {
                            var _0x357ccc = _0x576d49;
                            _0x4f1bd2[_0x357ccc(0x750)] === 0x4c && $(_0x357ccc(0x498))[_0x357ccc(0x84a)](_0x357ccc(0x74b), !$(_0x357ccc(0x498))[_0x357ccc(0x84a)](_0x357ccc(0x74b)))[_0x357ccc(0x5a5)](_0x357ccc(0x84d));
                            if (_0x4f1bd2['which'] === 0x4f) {
                                let _0x1e336c = parseInt($('#laser_opacity_slider')[_0x357ccc(0x223)]());
                                _0x1e336c < 0x64 && $(_0x357ccc(0x400))[_0x357ccc(0x223)](_0x1e336c + 0xa)[_0x357ccc(0x5a5)](_0x357ccc(0x749));
                            }
                            if (_0x4f1bd2[_0x357ccc(0x750)] === 0x50) {
                                let _0x135cf5 = parseInt($(_0x357ccc(0x400))['val']());
                                _0x135cf5 > 0xa && $('#laser_opacity_slider')[_0x357ccc(0x223)](_0x135cf5 - 0xa)[_0x357ccc(0x5a5)](_0x357ccc(0x749));
                            }
                        }), $(_0x576d49(0x291))[_0x576d49(0x84a)](_0x576d49(0x74b), wftObjects[_0x576d49(0x1e5)] >= 0x1), $(_0x576d49(0x7d2))[_0x576d49(0x223)](wftObjects[_0x576d49(0x86f)]), $(_0x576d49(0x295))[_0x576d49(0x2a5)](wftObjects[_0x576d49(0x86f)]), $('#zoom_speed_slider')['val'](wftObjects[_0x576d49(0x53c)]), $(_0x576d49(0x49f))[_0x576d49(0x2a5)](wftObjects[_0x576d49(0x53c)]), $('#portion_size_slider')['val'](wftObjects['PortionSize']), $(_0x576d49(0x659))[_0x576d49(0x2a5)](wftObjects[_0x576d49(0x3ea)]), $(_0x576d49(0x737))['val'](wftObjects[_0x576d49(0x843)]), $('#portion_aura_value')[_0x576d49(0x2a5)](wftObjects[_0x576d49(0x843)]), $('#food_size_slider')[_0x576d49(0x223)](wftObjects[_0x576d49(0x54c)]), $(_0x576d49(0x314))['text'](wftObjects[_0x576d49(0x54c)]), $(_0x576d49(0x4e6))[_0x576d49(0x223)](wftObjects[_0x576d49(0x68e)]), $(_0x576d49(0x45d))[_0x576d49(0x2a5)](wftObjects['FoodShadow']), $(_0x576d49(0x291))[_0x576d49(0x84d)](function() {
                            var _0x5069ec = _0x576d49;
                            wftObjects[_0x5069ec(0x1e5)] = $(this)[_0x5069ec(0x84a)](_0x5069ec(0x74b)) ? 0x1 : 0.0025, _0x19922f();
                        }), $('#spin_fast_slider')['on'](_0x576d49(0x749), function() {
                            var _0x37ecee = _0x576d49;
                            const _0xeb5c2a = parseFloat($(this)['val']());
                            wftObjects[_0x37ecee(0x86f)] = _0xeb5c2a, $('#spin_fast_value')[_0x37ecee(0x2a5)](_0xeb5c2a), _0x19922f();
                        }), $(_0x576d49(0x53e))['on'](_0x576d49(0x749), function() {
                            var _0x469582 = _0x576d49;
                            const _0x52e55e = parseFloat($(this)['val']());
                            wftObjects[_0x469582(0x53c)] = _0x52e55e, $('#zoom_speed_value')[_0x469582(0x2a5)](_0x52e55e), _0x19922f();
                        }), $(_0x576d49(0x3bf))['on']('input', function() {
                            var _0x542f05 = _0x576d49;
                            const _0xad1b33 = parseFloat($(this)['val']());
                            wftObjects[_0x542f05(0x3ea)] = _0xad1b33, $('#portion_size_value')[_0x542f05(0x2a5)](_0xad1b33), _0x19922f();
                        }), $(_0x576d49(0x737))['on'](_0x576d49(0x749), function() {
                            var _0x35b694 = _0x576d49;
                            const _0x40ceff = parseFloat($(this)['val']());
                            wftObjects[_0x35b694(0x843)] = _0x40ceff, $(_0x35b694(0x741))[_0x35b694(0x2a5)](_0x40ceff), _0x19922f();
                        }), $('#food_size_slider')['on'](_0x576d49(0x749), function() {
                            var _0x147430 = _0x576d49;
                            const _0x3e8dd5 = parseFloat($(this)[_0x147430(0x223)]());
                            wftObjects[_0x147430(0x54c)] = _0x3e8dd5, $(_0x147430(0x314))[_0x147430(0x2a5)](_0x3e8dd5), _0x19922f();
                        }), $(_0x576d49(0x4e6))['on'](_0x576d49(0x749), function() {
                            var _0x44bc2a = _0x576d49;
                            const _0x445372 = parseFloat($(this)[_0x44bc2a(0x223)]());
                            wftObjects['FoodShadow'] = _0x445372, $(_0x44bc2a(0x45d))[_0x44bc2a(0x2a5)](_0x445372), _0x19922f();
                        }), $(_0x576d49(0x5a4))[_0x576d49(0x615)](function() {
                            var _0x544c03 = _0x576d49;
                            const _0x4add47 = $(this)[_0x544c03(0x37f)](_0x544c03(0x42f)),
                                _0x305b90 = $(this)[_0x544c03(0x37f)]('default');
                            if (_0x4add47 && _0x305b90 !== undefined) switch (_0x4add47) {
                                case _0x544c03(0x6fc):
                                    $('#spin_fast_slider')['val'](_0x305b90)[_0x544c03(0x5a5)](_0x544c03(0x749));
                                    break;
                                case _0x544c03(0x308):
                                    $(_0x544c03(0x3bf))[_0x544c03(0x223)](_0x305b90)[_0x544c03(0x5a5)](_0x544c03(0x749));
                                    break;
                                case _0x544c03(0x3c0):
                                    $(_0x544c03(0x737))[_0x544c03(0x223)](_0x305b90)['trigger'](_0x544c03(0x749));
                                    break;
                                case 'food_size':
                                    $(_0x544c03(0x85c))[_0x544c03(0x223)](_0x305b90)[_0x544c03(0x5a5)](_0x544c03(0x749));
                                    break;
                                case _0x544c03(0x6e0):
                                    $(_0x544c03(0x4e6))[_0x544c03(0x223)](_0x305b90)[_0x544c03(0x5a5)](_0x544c03(0x749));
                                    break;
                                case _0x544c03(0x7db):
                                    $(_0x544c03(0x53e))[_0x544c03(0x223)](_0x305b90)[_0x544c03(0x5a5)](_0x544c03(0x749));
                                    break;
                            }
                        });

                        function _0x41c510() {
                            const _0x2909b2 = setInterval(() => {
                                var _0x4068be = _0x563d;
                                if (window[_0x4068be(0x651)] && window[_0x4068be(0x651)][_0x4068be(0x869)] && window[_0x4068be(0x612)] && window[_0x4068be(0x612)][_0x4068be(0x869)] && window[_0x4068be(0x2f0)] && window[_0x4068be(0x2f0)][_0x4068be(0x869)]) {
                                    clearInterval(_0x2909b2);
                                    const _0x14f6ab = window[_0x4068be(0x651)][_0x4068be(0x869)]['Qj'];
                                    window[_0x4068be(0x651)][_0x4068be(0x869)]['Qj'] = function(_0x2979ca, _0x4cb403, _0x11a9bb) {
                                        var _0x544ff8 = _0x4068be;
                                        this['Hj'] = window['decoder']['ga'](this['Hj'], this['Fj'], _0x4cb403, window[_0x544ff8(0x66d)][_0x544ff8(0x1e5)]), this['Ij'] = window[_0x544ff8(0x5bd)]['ga'](this['Ij'], this['Gj'], _0x4cb403, 0.0025), this['Nj']['Bg'](this, _0x2979ca, _0x4cb403, _0x11a9bb);
                                    };
                                    const _0x45906a = window['config'][_0x4068be(0x869)]['Bg'];
                                    window[_0x4068be(0x612)]['prototype']['Bg'] = function(_0x51bfb4, _0x5cc8e, _0x5dbeea, _0x2d6a4a) {
                                        var _0x3e17b7 = _0x4068be;
                                        if (!_0x2d6a4a(_0x51bfb4['Hj'], _0x51bfb4['Ij'])) {
                                            this['Wh']['Cd']();
                                            return;
                                        }
                                        var _0x13fd5c = _0x51bfb4['Kj'] * (0x1 + window['decoder']['pa'](_0x51bfb4['Mj'] + _0x5cc8e / 0xc8) * 0.3);
                                        _0x51bfb4['Ej'] ? this['Wh']['Ad'](_0x51bfb4['Hj'], _0x51bfb4['Ij'], window[_0x3e17b7(0x66d)][_0x3e17b7(0x3ea)] * _0x51bfb4['Jj'], _0x51bfb4['Lj'] * 0x1, window['wftObjects'][_0x3e17b7(0x843)] * _0x13fd5c, window[_0x3e17b7(0x66d)][_0x3e17b7(0x75b)] * _0x51bfb4['Lj']) : this['Wh']['Ad'](_0x51bfb4['Hj'], _0x51bfb4['Ij'], window[_0x3e17b7(0x66d)][_0x3e17b7(0x54c)] * _0x51bfb4['Jj'], _0x51bfb4['Lj'] * 0x1, window[_0x3e17b7(0x66d)][_0x3e17b7(0x68e)] * _0x13fd5c, window[_0x3e17b7(0x66d)][_0x3e17b7(0x56a)] * _0x51bfb4['Lj']);
                                    };
                                    const _0x62abe9 = window[_0x4068be(0x2f0)][_0x4068be(0x869)]['ug'];
                                    window[_0x4068be(0x2f0)][_0x4068be(0x869)]['ug'] = function(_0x29cb8e, _0xd8bf5e) {
                                        var _0x41d147 = _0x4068be;
                                        const _0x93ed9 = _0x62abe9['apply'](this, arguments);
                                        if (this['Fh'] && typeof this['Fh']['x'] !== _0x41d147(0x328) && window[_0x41d147(0x2de)] && window[_0x41d147(0x2de)]['Mh']) {
                                            const _0x35950a = window[_0x41d147(0x2de)]['Mh']['Oh']();
                                            _0x35950a && typeof _0x35950a['_a'] !== 'undefined' && (this['Fh']['x'] = window['decoder']['ja'](this['Fh']['x'], _0x35950a['_a'], _0xd8bf5e, window[_0x41d147(0x66d)][_0x41d147(0x86f)], 33.333));
                                        }
                                        return _0x93ed9;
                                    }, !window[_0x4068be(0x34e)] && (window['showHeadshotMessage'] = function(_0x5b51e1, _0x2b40d6) {
                                        var _0x570bbe = _0x4068be;
                                        if (!document[_0x570bbe(0x804)](_0x570bbe(0x415))) {
                                            const _0x4099ae = document[_0x570bbe(0x706)]('div');
                                            _0x4099ae['id'] = 'headshot-message', _0x4099ae['style']['position'] = _0x570bbe(0x341), _0x4099ae['style']['top'] = _0x570bbe(0x6ed), _0x4099ae['style']['left'] = '50%', _0x4099ae[_0x570bbe(0x28a)]['transform'] = _0x570bbe(0x427), _0x4099ae[_0x570bbe(0x28a)][_0x570bbe(0x2c5)] = _0x2b40d6 ? '#ff2222' : _0x570bbe(0x204), _0x4099ae[_0x570bbe(0x28a)][_0x570bbe(0x3ae)] = _0x570bbe(0x283), _0x4099ae[_0x570bbe(0x28a)][_0x570bbe(0x362)] = 'bold', _0x4099ae['style'][_0x570bbe(0x765)] = _0x570bbe(0x767), _0x4099ae[_0x570bbe(0x28a)][_0x570bbe(0x4e3)] = _0x570bbe(0x53d), _0x4099ae[_0x570bbe(0x28a)][_0x570bbe(0x62b)] = '0', _0x4099ae['style'][_0x570bbe(0x449)] = _0x570bbe(0x654), document[_0x570bbe(0x3fd)][_0x570bbe(0x41b)](_0x4099ae);
                                        }
                                        const _0x12a3af = _0x2b40d6 ? _0x1a98d3[_0x570bbe(0x2da)] : _0x1a98d3['killMsgType'],
                                            _0x2c0d36 = document[_0x570bbe(0x804)]('headshot-message');
                                        let _0xf690b0 = '',
                                            _0x289eea = _0x2b40d6 ? _0x1a98d3[_0x570bbe(0x33e)] : _0x1a98d3[_0x570bbe(0x3a9)],
                                            _0x717c1e = _0x2b40d6 ? _0x1a98d3['headshotNamePos'] : _0x1a98d3[_0x570bbe(0x4fd)];
                                        _0x12a3af === _0x570bbe(0x6f7) ? _0xf690b0 = _0x2b40d6 ? _0x1a98d3[_0x570bbe(0x33d)] : _0x1a98d3['killCustomText'] : _0xf690b0 = _0x2b40d6 ? _0x1a98d3[_0x570bbe(0x3c3)] : _0x1a98d3[_0x570bbe(0x88b)];
                                        _0x289eea && _0x5b51e1 && (_0x717c1e === _0x570bbe(0x3e7) ? _0xf690b0 = _0x5b51e1 + '\x20' + _0xf690b0 : _0xf690b0 = _0xf690b0 + '\x20' + _0x5b51e1);
                                        _0x2c0d36[_0x570bbe(0x3fb)] = _0xf690b0, _0x2c0d36['style'][_0x570bbe(0x2c5)] = _0x2b40d6 ? _0x570bbe(0x32b) : '#ffcc00', _0x2c0d36[_0x570bbe(0x28a)]['opacity'] = '1';
                                        if (_0x2b40d6 && wftObjects['soundEnabled']) {
                                            const _0xf5f435 = document[_0x570bbe(0x804)](_0x570bbe(0x55e));
                                            _0xf5f435 && (_0xf5f435[_0x570bbe(0x781)] = wftObjects[_0x570bbe(0x43f)] / 0x64, _0xf5f435[_0x570bbe(0x519)] = 0x0, _0xf5f435['play']());
                                        }
                                        setTimeout(function() {
                                            _0x2c0d36['style']['opacity'] = '0';
                                        }, 0x7d0);
                                    }), console[_0x4068be(0x1be)](_0x4068be(0x708));
                                }
                            }, 0x3e8);
                        }
                        setTimeout(_0x41c510, 0x3e8), window[_0x576d49(0x56f)] = function() {
                            var _0x2616a7 = _0x576d49;
                            if (wftObjects[_0x2616a7(0x793)]) {
                                const _0x23dea4 = document[_0x2616a7(0x804)](_0x2616a7(0x55e));
                                _0x23dea4 && (_0x23dea4[_0x2616a7(0x781)] = wftObjects['soundVolume'] / 0x64, _0x23dea4[_0x2616a7(0x519)] = 0x0, _0x23dea4['play']());
                            }
                        }, $(_0x576d49(0x64a))[_0x576d49(0x615)](function() {
                            var _0x5ef552 = _0x576d49;
                            localStorage[_0x5ef552(0x5c2)](_0x5ef552(0x557)), localStorage[_0x5ef552(0x5c2)](_0x5ef552(0x45e)), window['location'][_0x5ef552(0x286)]();
                        }), $(_0x576d49(0x43e))['change'](function(_0x1d6f58) {
                            var _0x2812c1 = _0x576d49;
                            const _0x4dd5e1 = _0x1d6f58[_0x2812c1(0x24d)][_0x2812c1(0x729)][0x0];
                            if (_0x4dd5e1) {
                                const _0x1f9b52 = new FileReader();
                                _0x1f9b52[_0x2812c1(0x540)] = function(_0x568ee0) {
                                    var _0x2fd71d = _0x2812c1;
                                    try {
                                        const _0x1e6ce5 = _0x568ee0[_0x2fd71d(0x24d)]['result'];
                                        JSON[_0x2fd71d(0x78e)](_0x1e6ce5), _0x1e6ce5[_0x2fd71d(0x5be)]('\x22wear\x22:') !== -0x1 ? localStorage[_0x2fd71d(0x5c0)](_0x2fd71d(0x557), _0x1e6ce5) : localStorage[_0x2fd71d(0x5c0)](_0x2fd71d(0x45e), _0x1e6ce5), window[_0x2fd71d(0x43a)][_0x2fd71d(0x286)]();
                                    } catch (_0x3843fb) {
                                        console[_0x2fd71d(0x1c4)](_0x2fd71d(0x24f), _0x3843fb);
                                    }
                                }, _0x1f9b52[_0x2812c1(0x507)](_0x4dd5e1);
                            }
                        });
                    }
                    window[_0x576d49(0x46e)] && setTimeout(function() {
                        var _0x5d6e79 = _0x576d49;
                        window['PerformanceMonitor'][_0x5d6e79(0x762)]();
                    }, 0x1f4), setTimeout(() => {
                        var _0x59f5f2 = _0x576d49;
                        window[_0x59f5f2(0x525)] && typeof window[_0x59f5f2(0x525)][_0x59f5f2(0x762)] === _0x59f5f2(0x387) && window[_0x59f5f2(0x525)]['init']();
                    }, 0x3e8), $(_0x576d49(0x363))['on'](_0x576d49(0x615), function() {
                        var _0xfc4895 = _0x576d49;
                        window['sectorSystem'] && typeof window[_0xfc4895(0x525)][_0xfc4895(0x454)] === _0xfc4895(0x387) && setTimeout(() => window['sectorSystem'][_0xfc4895(0x454)](), 0x64);
                    });
                });
            };
        Ysw = async function(_0x244174) {
            var _0x3ea7a9 = _0x2b6b48,
                _0x561cc1 = await _0x244174;
            try {
                _0x1a98d3['gg'] = [], _0x1a98d3['sg'] = [];
                var _0x566478 = 0x0;
                if (_0x308d60 && (_0x308d60 = JSON[_0x3ea7a9(0x78e)](_0x308d60))['wear']) {
                    for (var _0x5b7c19 in _0x308d60[_0x3ea7a9(0x709)][_0x3ea7a9(0x1d3)]) {
                        _0x308d60[_0x3ea7a9(0x709)]['textureDict'][_0x5b7c19][_0x3ea7a9(0x7d1)]['search'](_0x3ea7a9(0x88e)) == -0x1 && (_0x308d60['wear']['textureDict'][_0x5b7c19][_0x3ea7a9(0x7d1)] = _0x3ea7a9(0x88e) + _0x308d60[_0x3ea7a9(0x709)]['textureDict'][_0x5b7c19][_0x3ea7a9(0x7d1)][_0x3ea7a9(0x72a)](_0x308d60['wear']['textureDict'][_0x5b7c19]['file'][_0x3ea7a9(0x883)] - _0x1a98d3[_0x3ea7a9(0x324)], _0x1a98d3['c_v']) + _0x308d60['wear']['textureDict'][_0x5b7c19][_0x3ea7a9(0x7d1)][_0x3ea7a9(0x72a)](0x0, _0x308d60[_0x3ea7a9(0x709)][_0x3ea7a9(0x1d3)][_0x5b7c19][_0x3ea7a9(0x7d1)]['length'] - _0x1a98d3[_0x3ea7a9(0x324)])), _0x561cc1[_0x3ea7a9(0x1d3)][_0x5b7c19] = _0x308d60[_0x3ea7a9(0x709)][_0x3ea7a9(0x1d3)][_0x5b7c19];
                    };
                    for (let _0x3217ba in _0x308d60['wear'][_0x3ea7a9(0x6b8)]) {
                        _0x561cc1['regionDict'][_0x3217ba] = _0x308d60[_0x3ea7a9(0x709)][_0x3ea7a9(0x6b8)][_0x3217ba], _0x561cc1[(_0x5b7c19 = _0x561cc1['regionDict'][_0x3217ba])[_0x3ea7a9(0x2e9)]][_0x5b7c19['id']] = _0x5b7c19[_0x3ea7a9(0x48e)], _0x561cc1[_0x5b7c19[_0x3ea7a9(0x4a5)]][_0x3ea7a9(0x31a)]([_0x5b7c19['id']]);
                    }
                };
                if (_0x18b6dd) {
                    if ((_0x18b6dd = JSON[_0x3ea7a9(0x78e)](_0x18b6dd))[_0x3ea7a9(0x532)]) {
                        var _0x3c0930 = 0x0,
                            _0x43e3af = !0x1,
                            _0x16cc0b = 0x0;
                        for (var _0x30e169 in _0x18b6dd[_0x3ea7a9(0x532)]['0']) {
                            for (var _0x57ec93 = _0x18b6dd[_0x3ea7a9(0x532)]['1'][_0x30e169]['split']('|'), _0x424211 = 0x0; _0x424211 < _0x57ec93['length']; _0x424211++) {
                                _0x561cc1['textureDict']['t_wft_' + (_0x1a98d3['g'] / 0x9 * 0x3e8 + _0x16cc0b)] = {
                                    'custom': !0x0,
                                    'file': 'data:image/png;base64,' + _0x57ec93[_0x424211][_0x3ea7a9(0x72a)](_0x57ec93[_0x424211]['length'] - _0x1a98d3[_0x3ea7a9(0x324)], _0x1a98d3[_0x3ea7a9(0x324)]) + _0x57ec93[_0x424211]['substr'](0x0, _0x57ec93[_0x424211][_0x3ea7a9(0x883)] - _0x1a98d3[_0x3ea7a9(0x324)])
                                }, _0x16cc0b++;
                            };
                            var _0x10eded = _0x18b6dd[_0x3ea7a9(0x532)]['2'][_0x30e169],
                                _0x543e26 = 0x0,
                                _0x150cc9 = _0x3ea7a9(0x66f),
                                _0x30f11d = _0x3ea7a9(0x4f3),
                                _0x2064eb = 0x0;
                            for (var _0x5b7c19 in _0x10eded) {
                                _0x2064eb++;
                            };
                            for (var _0x5b7c19 in _0x10eded) {
                                if (_0x543e26 == 0x0) {
                                    var _0x45c1a2 = {
                                        'id': _0x1a98d3['g'] * 0x64 + _0x3c0930,
                                        'base': [],
                                        'guest': !0x1,
                                        'g': !0x1,
                                        'price': 0x0,
                                        'priceBefore': 0x0,
                                        'nonbuyable': !0x1,
                                        'prime': 'c_white',
                                        'glow': _0x10eded[_0x5b7c19]
                                    };
                                    for (var _0x424211 = 0x0; _0x424211 < _0x10eded[_0x5b7c19][_0x3ea7a9(0x883)]; _0x424211++) {
                                        _0x45c1a2[_0x3ea7a9(0x740)][_0x3ea7a9(0x31a)](_0x3ea7a9(0x811) + (_0x1a98d3['g'] / 0x9 * 0x3e8 + _0x566478) + '_' + (_0x10eded[_0x5b7c19][_0x3ea7a9(0x883)] - _0x424211));
                                    };
                                    _0x561cc1[_0x3ea7a9(0x2c9)]['push'](_0x45c1a2);
                                    var _0x20a65b = _0x1a98d3['sg'][_0x3ea7a9(0x5be)](_0x45c1a2['id']);
                                    _0x20a65b == -0x1 && (_0x1a98d3['sg'][_0x3ea7a9(0x31a)](_0x45c1a2['id']), _0x1a98d3['gg']['push']({
                                        's': _0x1a98d3['g'] / 0x9 * 0x3e8 + _0x566478,
                                        'e': _0x1a98d3['g'] / 0x9 * 0x3e8 + _0x566478 + _0x2064eb - 0x1,
                                        't': parseInt(_0x18b6dd['csg']['0'][_0x30e169][_0x3ea7a9(0x72a)](0x0, 0x1)) * 0x64,
                                        'r': _0x18b6dd[_0x3ea7a9(0x532)]['0'][_0x30e169][_0x3ea7a9(0x72a)](0x1, 0x1) == '1'
                                    }));
                                    if (_0x43e3af)
                                        for (var _0x41f324 in _0x561cc1[_0x3ea7a9(0x5f3)]) {
                                            _0x561cc1[_0x3ea7a9(0x5f3)][_0x41f324]['id'] == _0x30f11d && _0x561cc1[_0x3ea7a9(0x5f3)][_0x41f324][_0x3ea7a9(0x2e9)]['push'](_0x45c1a2['id']);
                                        } else _0x561cc1[_0x3ea7a9(0x5f3)][_0x3ea7a9(0x31a)]({
                                            'isCustom': !0x0,
                                            'id': _0x30f11d,
                                            'img': _0x150cc9,
                                            'name': {
                                                'de': _0x30f11d,
                                                'en': _0x30f11d,
                                                'es': _0x30f11d,
                                                'fr': _0x30f11d,
                                                'uk': _0x30f11d
                                            },
                                            'list': [_0x45c1a2['id']]
                                        }), _0x43e3af = !0x0;;
                                    _0x3c0930++;
                                };
                                var _0x45c1a2 = {
                                    'id': _0x1a98d3['g'] / 0x9 * 0x3e8 + _0x566478,
                                    'base': [],
                                    'guest': !0x1,
                                    'g': !0x0,
                                    'price': 0x0,
                                    'priceBefore': 0x0,
                                    'nonbuyable': !0x1,
                                    'prime': _0x3ea7a9(0x48c),
                                    'glow': _0x10eded[_0x5b7c19]
                                };
                                for (var _0x424211 = 0x0; _0x424211 < _0x10eded[_0x5b7c19]['length']; _0x424211++) {
                                    _0x45c1a2[_0x3ea7a9(0x740)][_0x3ea7a9(0x31a)](_0x3ea7a9(0x811) + _0x45c1a2['id'] + '_' + (_0x10eded[_0x5b7c19][_0x3ea7a9(0x883)] - _0x424211)), _0x561cc1[_0x3ea7a9(0x6b8)][_0x3ea7a9(0x811) + _0x45c1a2['id'] + '_' + (_0x424211 + 0x1)] = {
                                        'texture': _0x3ea7a9(0x51e) + _0x45c1a2['id'],
                                        'h': 0x60,
                                        'w': 0x60,
                                        'x': (_0x424211 || 0x0) * 0x63,
                                        'y': 0x0
                                    };
                                };
                                _0x561cc1['skinArrayDict'][_0x3ea7a9(0x31a)](_0x45c1a2), _0x543e26++, _0x566478++;
                            }
                        }
                    } else {
                        var _0x35c1c6 = [],
                            _0x150cc9 = _0x3ea7a9(0x55b);
                        for (let _0xa671c9 in _0x18b6dd) {
                            if (_0xa671c9 != 'img') {
                                _0x18b6dd[_0xa671c9][_0x3ea7a9(0x1d3)][_0xa671c9][_0x3ea7a9(0x7d1)]['search'](_0x3ea7a9(0x88e)) == -0x1 && (_0x18b6dd[_0xa671c9][_0x3ea7a9(0x1d3)][_0xa671c9]['file'] = _0x3ea7a9(0x88e) + _0x18b6dd[_0xa671c9][_0x3ea7a9(0x1d3)][_0xa671c9][_0x3ea7a9(0x7d1)][_0x3ea7a9(0x72a)](_0x18b6dd[_0xa671c9]['textureDict'][_0xa671c9][_0x3ea7a9(0x7d1)][_0x3ea7a9(0x883)] - _0x1a98d3[_0x3ea7a9(0x324)], _0x1a98d3[_0x3ea7a9(0x324)]) + _0x18b6dd[_0xa671c9][_0x3ea7a9(0x1d3)][_0xa671c9][_0x3ea7a9(0x7d1)][_0x3ea7a9(0x72a)](0x0, _0x18b6dd[_0xa671c9][_0x3ea7a9(0x1d3)][_0xa671c9][_0x3ea7a9(0x7d1)][_0x3ea7a9(0x883)] - _0x1a98d3[_0x3ea7a9(0x324)]));
                                _0x561cc1['textureDict'][_0xa671c9] = _0x18b6dd[_0xa671c9]['textureDict'][_0xa671c9];
                                for (let _0x493ffd in _0x18b6dd[_0xa671c9][_0x3ea7a9(0x6b8)]) {
                                    _0x561cc1[_0x3ea7a9(0x6b8)][_0x493ffd] = _0x18b6dd[_0xa671c9][_0x3ea7a9(0x6b8)][_0x493ffd];
                                };
                                _0x561cc1['skinArrayDict'][_0x3ea7a9(0x31a)](_0x18b6dd[_0xa671c9][_0x3ea7a9(0x87b)]), _0x35c1c6[_0x3ea7a9(0x31a)](_0x18b6dd[_0xa671c9][_0x3ea7a9(0x87b)]['id']);
                            } else _0x18b6dd[_0xa671c9] != _0x3ea7a9(0x7aa) && (_0x150cc9 = _0x18b6dd[_0xa671c9]);
                        };
                        _0x561cc1[_0x3ea7a9(0x5f3)][_0x3ea7a9(0x31a)]({
                            'isCustom': !0x0,
                            'id': _0x3ea7a9(0x7aa),
                            'img': _0x150cc9,
                            'name': {
                                'de': _0x3ea7a9(0x808),
                                'en': _0x3ea7a9(0x808),
                                'es': _0x3ea7a9(0x808),
                                'fr': _0x3ea7a9(0x808),
                                'uk': _0x3ea7a9(0x808)
                            },
                            'list': _0x35c1c6
                        });
                    }
                };
                if (Array[_0x3ea7a9(0x542)](_0x1a98d3['dg']) && _0x1a98d3['dg'][_0x3ea7a9(0x883)] > 0x0)
                    for (var _0x5b7c19 in _0x1a98d3['dg']) {
                        var _0x1f35b4 = _0x1a98d3['dg'][_0x5b7c19][_0x3ea7a9(0x3de)]('|'),
                            _0x30d875 = {
                                'g': _0x1f35b4['0']
                            };
                        await fetch(_0x3ea7a9(0x38f), {
                            'headers': {
                                'Content-Type': _0x3ea7a9(0x660)
                            },
                            'method': _0x3ea7a9(0x24c),
                            'body': JSON[_0x3ea7a9(0x32a)](_0x30d875)
                        })['then'](async function(_0x75a66b) {
                            var _0x5d144d = _0x3ea7a9;
                            _0x75a66b = await _0x75a66b[_0x5d144d(0x794)](), _0x561cc1[_0x5d144d(0x1d3)]['t_wft_' + _0x1f35b4['0'] + '_skin_g'] = {
                                'custom': !0x0,
                                'relativePath': _0x75a66b[_0x5d144d(0x532)]['1']['0']
                            };
                            var _0x34dcdf = _0x75a66b[_0x5d144d(0x532)]['2']['0'],
                                _0x432973 = 0x0;
                            for (var _0x3dcbb3 in _0x34dcdf) {
                                _0x432973++;
                            };
                            _0x1a98d3['sg']['push'](parseInt(_0x1f35b4['1'])), _0x1a98d3['gg'][_0x5d144d(0x31a)]({
                                's': _0x1a98d3['g'] / 0x9 * 0x3e8 + _0x566478,
                                'e': _0x1a98d3['g'] / 0x9 * 0x3e8 + _0x566478 + _0x432973 - 0x1,
                                't': parseInt(_0x75a66b[_0x5d144d(0x532)]['0']['0']['substr'](0x0, 0x1)) * 0x64,
                                'r': _0x75a66b['csg']['0']['0'][_0x5d144d(0x72a)](0x1, 0x1) == '1'
                            });
                            var _0x430abb = 0x0;
                            for (var _0x3dcbb3 in _0x34dcdf) {
                                var _0x380896 = {
                                    'id': _0x1a98d3['g'] / 0x9 * 0x3e8 + _0x566478,
                                    'base': [],
                                    'guest': !0x1,
                                    'g': !0x0,
                                    'price': 0x0,
                                    'priceBefore': 0x0,
                                    'nonbuyable': !0x1,
                                    'prime': _0x5d144d(0x48c),
                                    'glow': _0x34dcdf[_0x3dcbb3]
                                };
                                for (var _0x24df61 = 0x0; _0x24df61 < _0x34dcdf[_0x3dcbb3][_0x5d144d(0x883)]; _0x24df61++) {
                                    _0x380896[_0x5d144d(0x740)]['push'](_0x5d144d(0x811) + _0x380896['id'] + '_' + (_0x34dcdf[_0x3dcbb3][_0x5d144d(0x883)] - _0x24df61)), _0x561cc1[_0x5d144d(0x6b8)]['s_wft_' + _0x380896['id'] + '_' + (_0x24df61 + 0x1)] = {
                                        'texture': _0x5d144d(0x51e) + _0x1f35b4['0'] + _0x5d144d(0x405),
                                        'h': 0x60,
                                        'w': 0x60,
                                        'x': (_0x24df61 || 0x0) * 0x63,
                                        'y': (_0x430abb || 0x0) * 0x63
                                    };
                                };
                                _0x561cc1[_0x5d144d(0x2c9)][_0x5d144d(0x31a)](_0x380896), _0x566478++, _0x430abb++;
                            }
                        })['catch'](function(_0x529eab) {});
                    }
            } catch (_0x3eb002) {
                localStorage[_0x3ea7a9(0x5c2)]('custom_wear'), localStorage[_0x3ea7a9(0x5c2)](_0x3ea7a9(0x45e)), window[_0x3ea7a9(0x43a)]['reload']();
            };
            return _0x561cc1;
        };
        var _0x1ba331 = !0x1;
        _0x1ba331 && (_0x1ba331 = !0x1, s_h[_0x2b6b48(0x5bc)]()),
            function(_0x4d08d5) {
                var _0x464948 = _0x2b6b48;
                _0x4d08d5['fn']['wftsle'] = function(_0x408544) {
                    var _0x866d4e = _0x563d;
                    if (_0x576c7e[_0x408544]) return _0x576c7e[_0x408544][_0x866d4e(0x3a4)](this, Array['prototype'][_0x866d4e(0x3c1)]['call'](arguments, 0x1));
                    else {
                        if (typeof _0x408544 != 'object' && _0x408544) {
                            _0x4d08d5[_0x866d4e(0x1c4)](_0x866d4e(0x1e7) + _0x408544 + _0x866d4e(0x6f3));
                            return;
                        } else return _0x576c7e['init'][_0x866d4e(0x3a4)](this, arguments);
                    }
                };
                var _0x576c7e = {},
                    _0x2368ba = {
                        'data': [],
                        'keepJSONItemsOnTop': !0x1,
                        'width': 0x64,
                        'height': null,
                        'background': _0x464948(0x7a6),
                        'selectText': '',
                        'defaultSelectedIndex': null,
                        'truncateDescription': !0x0,
                        'imagePosition': _0x464948(0x319),
                        'showSelectedHTML': !0x0,
                        'clickOffToClose': !0x0,
                        'embedCSS': !0x0,
                        'onSelected': function() {}
                    };

                function _0x2cf203(_0x169be3, _0x16a5b3) {
                    var _0x1e7205 = _0x464948,
                        _0x46dbed, _0x3aeab7, _0x53fadd, _0x36eba7, _0x94e0d5 = _0x169be3[_0x1e7205(0x37f)]('ddslick'),
                        _0x1d51c5 = _0x169be3[_0x1e7205(0x3be)](_0x1e7205(0x630)),
                        _0x37978e = _0x1d51c5[_0x1e7205(0x6e2)](_0x1e7205(0x556));
                    _0x169be3[_0x1e7205(0x3be)](_0x1e7205(0x711)), _0x1d51c5[_0x1e7205(0x6e2)](_0x1e7205(0x31d));
                    var _0x11ea0c = _0x169be3[_0x1e7205(0x3be)]('.dd-option')['eq'](_0x16a5b3),
                        _0x196506 = _0x11ea0c[_0x1e7205(0x22a)]('li'),
                        _0x4de2cf = _0x94e0d5[_0x1e7205(0x35a)],
                        _0x45b2a5 = _0x94e0d5['settings'][_0x1e7205(0x37f)][_0x16a5b3];
                    _0x169be3['find'](_0x1e7205(0x5e6))['removeClass']('dd-option-selected'), _0x11ea0c['addClass']('dd-option-selected'), _0x94e0d5['selectedIndex'] = _0x16a5b3, _0x94e0d5[_0x1e7205(0x1ca)] = _0x196506, _0x94e0d5['selectedData'] = _0x45b2a5, _0x4de2cf['showSelectedHTML'] ? _0x1d51c5[_0x1e7205(0x1dd)]((_0x45b2a5[_0x1e7205(0x2d4)] ? _0x1e7205(0x30a) + (_0x4de2cf[_0x1e7205(0x21b)] == _0x1e7205(0x743) ? '\x20dd-image-right' : '') + '\x22\x20src=\x22' + _0x45b2a5['imageSrc'] + '\x22\x20/>' : '') + (_0x45b2a5[_0x1e7205(0x1ff)] ? _0x1e7205(0x373) + (_0x4de2cf['truncateDescription'] ? _0x1e7205(0x88c) : '') + _0x1e7205(0x7d3) + _0x45b2a5['description'] + '</small>' : '')) : _0x1d51c5[_0x1e7205(0x1dd)](_0x45b2a5['text']), _0x37978e['val'](_0x45b2a5[_0x1e7205(0x6fd)]), _0x94e0d5['original'][_0x1e7205(0x223)](_0x45b2a5['value']), _0x169be3[_0x1e7205(0x37f)](_0x1e7205(0x1b9), _0x94e0d5), _0x27ab07(_0x169be3), _0x3aeab7 = (_0x46dbed = _0x169be3)[_0x1e7205(0x3be)](_0x1e7205(0x810))[_0x1e7205(0x53b)](_0x1e7205(0x2b6)), _0x53fadd = _0x46dbed[_0x1e7205(0x3be)](_0x1e7205(0x2d1)), _0x36eba7 = _0x46dbed[_0x1e7205(0x3be)](_0x1e7205(0x284)), _0x53fadd['length'] <= 0x0 && _0x36eba7[_0x1e7205(0x883)] > 0x0 && _0x46dbed[_0x1e7205(0x3be)](_0x1e7205(0x561))[_0x1e7205(0x53b)](_0x1e7205(0x4e7), _0x3aeab7), typeof _0x4de2cf[_0x1e7205(0x2d3)] == _0x1e7205(0x387) && _0x4de2cf['onSelected']['call'](this, _0x94e0d5);
                }

                function _0x420eb5(_0x32b7f9) {
                    var _0x2896d7 = _0x464948,
                        _0x21d651 = _0x32b7f9[_0x2896d7(0x3be)](_0x2896d7(0x810)),
                        _0x1d60cf = _0x21d651['siblings'](_0x2896d7(0x711)),
                        _0x27d5bd = _0x21d651[_0x2896d7(0x3be)](_0x2896d7(0x31d)),
                        _0x16ea9b = _0x1d60cf['is'](':visible');
                    _0x4d08d5(_0x2896d7(0x265))[_0x2896d7(0x59b)](_0x1d60cf)[_0x2896d7(0x3f7)](0x32), _0x4d08d5(_0x2896d7(0x31d))[_0x2896d7(0x1c5)]('dd-pointer-up'), _0x16ea9b ? (_0x1d60cf[_0x2896d7(0x3f7)](_0x2896d7(0x200)), _0x27d5bd[_0x2896d7(0x1c5)](_0x2896d7(0x3cf))) : (_0x1d60cf['slideDown'](_0x2896d7(0x200)), _0x27d5bd['addClass']('dd-pointer-up')),
                        function _0x5a0abc(_0x3a771a) {
                            var _0x36d4de = _0x2896d7;
                            _0x3a771a['find']('.dd-option')[_0x36d4de(0x399)](function() {
                                var _0x3a7f4d = _0x36d4de,
                                    _0x1b0fd0 = _0x4d08d5(this),
                                    _0x4dc7cd = _0x1b0fd0[_0x3a7f4d(0x53b)](_0x3a7f4d(0x2b6)),
                                    _0x5f14e3 = _0x1b0fd0['find']('.dd-option-description'),
                                    _0x397cee = _0x3a771a[_0x3a7f4d(0x3be)](_0x3a7f4d(0x3cb));
                                _0x5f14e3[_0x3a7f4d(0x883)] <= 0x0 && _0x397cee[_0x3a7f4d(0x883)] > 0x0 && _0x1b0fd0['find'](_0x3a7f4d(0x57c))[_0x3a7f4d(0x53b)]('lineHeight', _0x4dc7cd);
                            });
                        }(_0x32b7f9);
                }

                function _0x27ab07(_0x2ca83b) {
                    var _0x13ee23 = _0x464948;
                    _0x2ca83b['find'](_0x13ee23(0x711))[_0x13ee23(0x3f7)](0x32), _0x2ca83b[_0x13ee23(0x3be)](_0x13ee23(0x31d))[_0x13ee23(0x1c5)]('dd-pointer-up')[_0x13ee23(0x1c5)](_0x13ee23(0x3cf));
                }
                _0x576c7e[_0x464948(0x762)] = function(_0x2f8d26) {
                    var _0x214e1e = _0x464948,
                        _0x2f8d26 = _0x4d08d5[_0x214e1e(0x21f)]({}, _0x2368ba, _0x2f8d26);
                    return _0x4d08d5(_0x214e1e(0x407))[_0x214e1e(0x883)] <= 0x0 && _0x2f8d26[_0x214e1e(0x209)] && _0x4d08d5(_0x214e1e(0x3dd))[_0x214e1e(0x6c4)](_0x214e1e(0x563)), this[_0x214e1e(0x399)](function() {
                        var _0x5af580 = _0x214e1e,
                            _0xddcfd3 = _0x4d08d5(this);
                        if (!_0xddcfd3[_0x5af580(0x37f)](_0x5af580(0x1b9))) {
                            var _0x40f676 = [];
                            _0x2f8d26['data'], _0xddcfd3[_0x5af580(0x3be)]('option')[_0x5af580(0x399)](function() {
                                var _0x4cfd06 = _0x5af580,
                                    _0x2494c4 = _0x4d08d5(this),
                                    _0x473da9 = _0x2494c4['data']();
                                _0x40f676['push']({
                                    'text': _0x4d08d5['trim'](_0x2494c4[_0x4cfd06(0x2a5)]()),
                                    'value': _0x2494c4[_0x4cfd06(0x223)](),
                                    'selected': _0x2494c4['is'](_0x4cfd06(0x59d)),
                                    'description': _0x473da9[_0x4cfd06(0x1ff)],
                                    'imageSrc': _0x473da9[_0x4cfd06(0x57f)]
                                });
                            });
                            _0x2f8d26[_0x5af580(0x264)] ? _0x4d08d5[_0x5af580(0x731)](_0x2f8d26[_0x5af580(0x37f)], _0x40f676) : _0x2f8d26[_0x5af580(0x37f)] = _0x4d08d5[_0x5af580(0x731)](_0x40f676, _0x2f8d26[_0x5af580(0x37f)]);
                            var _0xfb1948 = _0xddcfd3,
                                _0x9bad5f = _0x4d08d5(_0x5af580(0x4b6) + _0xddcfd3['attr']('id') + _0x5af580(0x549));
                            _0xddcfd3[_0x5af580(0x439)](_0x9bad5f), (_0xddcfd3 = _0x9bad5f)[_0x5af580(0x60d)](_0x5af580(0x231))[_0x5af580(0x4e4)](_0x5af580(0x5bb))['append']('<ul\x20class=\x22dd-options\x22></ul>');
                            var _0x40f676 = _0xddcfd3[_0x5af580(0x3be)](_0x5af580(0x810)),
                                _0x211205 = _0xddcfd3[_0x5af580(0x3be)]('.dd-options');
                            _0x211205[_0x5af580(0x53b)]({
                                'width': _0x2f8d26[_0x5af580(0x1eb)]
                            }), _0x40f676['css']({
                                'width': _0x2f8d26[_0x5af580(0x1eb)],
                                'background': _0x2f8d26[_0x5af580(0x783)]
                            }), _0xddcfd3[_0x5af580(0x53b)]({
                                'width': _0x2f8d26[_0x5af580(0x1eb)]
                            });
                            _0x2f8d26[_0x5af580(0x2b6)] != null && _0x211205[_0x5af580(0x53b)]({
                                'height': _0x2f8d26[_0x5af580(0x2b6)],
                                'overflow': _0x5af580(0x5e7)
                            });
                            _0x4d08d5['each'](_0x2f8d26[_0x5af580(0x37f)], function(_0xbf836, _0x9daa8f) {
                                var _0x4d0d3d = _0x5af580;
                                _0x9daa8f[_0x4d0d3d(0x1b4)] && (_0x2f8d26[_0x4d0d3d(0x237)] = _0xbf836), _0x211205[_0x4d0d3d(0x4e4)](_0x4d0d3d(0x4df) + (_0x9daa8f[_0x4d0d3d(0x6fd)] ? _0x4d0d3d(0x610) + _0x9daa8f[_0x4d0d3d(0x6fd)] + '\x22\x20/>' : '') + (_0x9daa8f[_0x4d0d3d(0x2d4)] ? '\x20<img\x20class=\x22dd-option-image' + (_0x2f8d26[_0x4d0d3d(0x21b)] == _0x4d0d3d(0x743) ? _0x4d0d3d(0x52c) : '') + _0x4d0d3d(0x3d1) + _0x9daa8f['imageSrc'] + _0x4d0d3d(0x637) : '') + '</a></li>');
                            });
                            var _0x3d1045 = {
                                'settings': _0x2f8d26,
                                'original': _0xfb1948,
                                'selectedIndex': -0x1,
                                'selectedItem': null,
                                'selectedData': null
                            };
                            _0xddcfd3[_0x5af580(0x37f)]('ddslick', _0x3d1045), _0x2f8d26[_0x5af580(0x4ca)][_0x5af580(0x883)] > 0x0 && _0x2f8d26[_0x5af580(0x237)] == null ? _0xddcfd3['find'](_0x5af580(0x630))[_0x5af580(0x1dd)](_0x2f8d26[_0x5af580(0x4ca)]) : _0x2cf203(_0xddcfd3, _0x2f8d26['defaultSelectedIndex'] != null && _0x2f8d26['defaultSelectedIndex'] >= 0x0 && _0x2f8d26[_0x5af580(0x237)] < _0x2f8d26['data']['length'] ? _0x2f8d26[_0x5af580(0x237)] : 0x0), _0xddcfd3['find'](_0x5af580(0x810))['on']('click.ddslick', function() {
                                _0x420eb5(_0xddcfd3);
                            }), _0xddcfd3[_0x5af580(0x3be)](_0x5af580(0x5e6))['on'](_0x5af580(0x56d), function() {
                                var _0x224ebd = _0x5af580;
                                _0x2cf203(_0xddcfd3, _0x4d08d5(this)[_0x224ebd(0x22a)]('li')['index']());
                            }), _0x2f8d26['clickOffToClose'] && (_0x211205[_0x5af580(0x60d)](_0x5af580(0x386)), _0xddcfd3['on']('click.ddslick', function(_0x3df48b) {
                                var _0x124d21 = _0x5af580;
                                _0x3df48b[_0x124d21(0x374)]();
                            }), _0x4d08d5(_0x5af580(0x3fd))['on'](_0x5af580(0x615), function() {
                                var _0x5dbf63 = _0x5af580;
                                _0x4d08d5('.dd-click-off-close')[_0x5dbf63(0x3f7)](0x32)[_0x5dbf63(0x6e2)]('.dd-select')[_0x5dbf63(0x3be)](_0x5dbf63(0x31d))[_0x5dbf63(0x1c5)](_0x5dbf63(0x3cf));
                            }));
                        }
                    });
                }, _0x576c7e[_0x464948(0x739)] = function(_0x11bbf4) {
                    var _0x3e11cf = _0x464948;
                    return this[_0x3e11cf(0x399)](function() {
                        var _0x4d9b50 = _0x3e11cf;
                        _0x11bbf4['index'] !== undefined && _0x2cf203(_0x4d08d5(this), _0x11bbf4[_0x4d9b50(0x7ab)]);
                    });
                }, _0x576c7e[_0x464948(0x511)] = function() {
                    var _0x5e855f = _0x464948;
                    return this[_0x5e855f(0x399)](function() {
                        var _0x562c4e = _0x5e855f,
                            _0x10b33f = _0x4d08d5(this);
                        _0x10b33f[_0x562c4e(0x37f)](_0x562c4e(0x1b9)) && _0x420eb5(_0x10b33f);
                    });
                }, _0x576c7e[_0x464948(0x38d)] = function() {
                    return this['each'](function() {
                        var _0x21bdcc = _0x563d,
                            _0x488339 = _0x4d08d5(this);
                        _0x488339[_0x21bdcc(0x37f)](_0x21bdcc(0x1b9)) && _0x27ab07(_0x488339);
                    });
                }, _0x576c7e[_0x464948(0x238)] = function() {
                    return this['each'](function() {
                        var _0x474cf3 = _0x563d,
                            _0x16c008 = _0x4d08d5(this),
                            _0x59daa6 = _0x16c008['data'](_0x474cf3(0x1b9));
                        if (_0x59daa6) {
                            var _0xb9607 = _0x59daa6['original'];
                            _0x16c008[_0x474cf3(0x2a4)](_0x474cf3(0x1b9))[_0x474cf3(0x771)](_0x474cf3(0x608))[_0x474cf3(0x439)](_0xb9607);
                        }
                    });
                };
            }(jQuery), _0xda46a3() && _0x239c2a['ba'](_0x1a98d3[_0x2b6b48(0x7be)] + '/js/nipplejs.min.js', 'mobileconfig', function() {}), ooo['pCc'] = function() {
                var _0x26db99 = _0x2b6b48,
                    _0x4eccbc = {},
                    _0x308856 = {
                        'country': 'iq'
                    };
                _0x3be6af && _0x3be6af != 'iq' && (_0x308856[_0x26db99(0x4d9)] = _0x3be6af), $[_0x26db99(0x5d3)](_0x1a98d3[_0x26db99(0x7be)] + _0x26db99(0x3a7), function(_0x387695) {
                    var _0x6f96e4 = _0x26db99;
                    _0x4eccbc = _0x387695, fetch(_0x6f96e4(0x859), {
                        'headers': {
                            'Content-Type': _0x6f96e4(0x660)
                        },
                        'method': _0x6f96e4(0x24c),
                        'body': JSON[_0x6f96e4(0x32a)](_0x308856)
                    })[_0x6f96e4(0x384)](async function(_0x305ae3) {
                        var _0x1e41d8 = _0x6f96e4;
                        for (let _0x16883b in (_0x305ae3 = await _0x305ae3[_0x1e41d8(0x794)]())['textureDict']) {
                            for (let _0x17d664 in _0x305ae3[_0x1e41d8(0x1d3)][_0x16883b]) {
                                _0x17d664 === _0x1e41d8(0x7d1) && (_0x305ae3[_0x1e41d8(0x1d3)][_0x16883b][_0x17d664] = 'data:image/png;base64,' + _0x305ae3[_0x1e41d8(0x1d3)][_0x16883b][_0x17d664][_0x1e41d8(0x72a)](_0x305ae3['textureDict'][_0x16883b][_0x17d664]['length'] - _0x1a98d3[_0x1e41d8(0x324)], _0x1a98d3[_0x1e41d8(0x324)]) + _0x305ae3[_0x1e41d8(0x1d3)][_0x16883b][_0x17d664][_0x1e41d8(0x72a)](0x0, _0x305ae3[_0x1e41d8(0x1d3)][_0x16883b][_0x17d664][_0x1e41d8(0x883)] - _0x1a98d3['c_v']));
                            }
                        };
                        for (let _0x510953 in _0x305ae3) {
                            _0x510953 !== _0x1e41d8(0x40b) && (Array[_0x1e41d8(0x542)](_0x305ae3[_0x510953]) ? _0x387695[_0x510953] = _0x387695[_0x510953][_0x1e41d8(0x431)](_0x305ae3[_0x510953]) : _0x387695[_0x510953] = {
                                ..._0x387695[_0x510953],
                                ..._0x305ae3[_0x510953]
                            });
                        }
                    })[_0x6f96e4(0x68d)](function(_0x18fd7b) {});
                });
            }, ooo['pDc'] = function(_0x2b5a85) {
                var _0x1ec4a7 = _0x2b6b48,
                    _0x9fbffc = {};
                (function(_0x138c67, _0x1a229f) {
                    var _0x4fb03b = _0x563d;
                    for (var _0x513d30 in _0x138c67) {
                        _0x138c67[_0x4fb03b(0x6f6)](_0x513d30) && _0x1a229f(_0x513d30, _0x138c67[_0x513d30]);
                    }
                }(_0x2b5a85[_0x1ec4a7(0x1d3)], function(_0x49cd37, _0x1fd826) {
                    var _0x3e8d86 = _0x1ec4a7;
                    let _0x5b33a3 = _0x1a98d3[_0x3e8d86(0x7be)] + _0x1fd826[_0x3e8d86(0x3b7)];
                    !_0x1fd826[_0x3e8d86(0x6f7)] && (_0x5b33a3 = _0x1a98d3[_0x3e8d86(0x7be)] + _0x1fd826[_0x3e8d86(0x3b7)]);
                    try {
                        _0x9fbffc[_0x49cd37] = new PIXI['Texture'](_0x5b33a3);
                    } catch (_0x328a6c) {}
                }));
            };
    });
}()), (function() {
    var _0x15d0dd = _0x1543e5;
    let _0x57ec7e = !0x1,
        _0x306c9e = !0x1,
        _0x167746 = 0x0;

    function _0x177616() {
        var _0xfee657 = _0x563d;
        if (window['ooo'] && window[_0xfee657(0x2de)]['Mh'] && typeof window[_0xfee657(0x2de)]['Mh']['Dq'] === _0xfee657(0x387)) return !0x0;
        return !0x1;
    }

    function _0x31a813() {
        var _0x2960ac = _0x563d;
        const _0x11940f = Date[_0x2960ac(0x458)]();
        if (_0x306c9e || _0x11940f - _0x167746 < 0x3e8) return;
        _0x306c9e = !0x0, _0x167746 = _0x11940f;
        try {
            typeof window[_0x2960ac(0x84b)] !== _0x2960ac(0x328) && (window[_0x2960ac(0x84b)][_0x2960ac(0x22f)] = !0x0), typeof window[_0x2960ac(0x2de)]['Mh']['gr'] === _0x2960ac(0x387) && window['ooo']['Mh']['gr'](), setTimeout(function() {
                var _0x12427b = _0x2960ac;
                try {
                    const _0x5a9844 = document['getElementById']('port_id_s') ? document['getElementById'](_0x12427b(0x5aa))[_0x12427b(0x6fd)] || '' : '',
                        _0x125b36 = document['getElementById'](_0x12427b(0x1fa)) ? document[_0x12427b(0x804)](_0x12427b(0x1fa))[_0x12427b(0x6fd)] || _0x12427b(0x763) : _0x12427b(0x763);
                    window[_0x12427b(0x2de)]['Mh']['Dq'](_0x5a9844, _0x125b36), setTimeout(function() {
                        _0x306c9e = !0x1;
                    }, 0x3e8);
                } catch (_0x4af784) {
                    _0x306c9e = !0x1;
                }
            }, 0x12c);
        } catch (_0xde0594) {
            _0x306c9e = !0x1;
        }
    }

    function _0x207ffc() {
        var _0x24acf9 = _0x563d;
        _0x57ec7e = !_0x57ec7e, typeof window[_0x24acf9(0x84b)] !== 'undefined' && (window[_0x24acf9(0x84b)][_0x24acf9(0x22f)] = _0x57ec7e);
    }
    document[_0x15d0dd(0x66a)](_0x15d0dd(0x628), function(_0x1cbc28) {
        var _0x296a9b = _0x15d0dd;
        (_0x1cbc28[_0x296a9b(0x874)] === 'F8' || _0x1cbc28[_0x296a9b(0x490)] === 0x77) && _0x207ffc();
        if (_0x57ec7e && (_0x1cbc28[_0x296a9b(0x874)][_0x296a9b(0x7f6)]() === 'r' || _0x1cbc28[_0x296a9b(0x490)] === 0x52)) {
            if (_0x177616()) _0x1cbc28['preventDefault'](), _0x1cbc28[_0x296a9b(0x374)](), _0x31a813();
            else {}
        }
        if (_0x1cbc28['key'][_0x296a9b(0x7f6)]() === '3' || _0x1cbc28[_0x296a9b(0x490)] === 0x33) {
            const _0x2414e9 = document[_0x296a9b(0x804)](_0x296a9b(0x5ba));
            if (_0x2414e9 && !_0x2414e9['disabled']) {
                let _0x50e902 = parseInt(_0x2414e9[_0x296a9b(0x6fd)]) || 0x0;
                _0x50e902 = (_0x50e902 + 0x1) % 0x4, _0x2414e9[_0x296a9b(0x6fd)] = _0x50e902;
                const _0x2d432f = new Event(_0x296a9b(0x84d), {
                    'bubbles': !![]
                });
                _0x2414e9['dispatchEvent'](_0x2d432f);
                if (typeof vO14 !== _0x296a9b(0x328)) {
                    vO14[_0x296a9b(0x617)] = _0x50e902, localStorage['setItem'](_0x296a9b(0x1e2), JSON[_0x296a9b(0x32a)](vO14)), localStorage['setItem'](_0x296a9b(0x23f), _0x50e902);
                    if (window[_0x296a9b(0x1ea)] && window[_0x296a9b(0x2fa)]) {
                        window[_0x296a9b(0x2fa)][_0x296a9b(0x617)] = _0x50e902, window[_0x296a9b(0x1ea)][_0x296a9b(0x617)] = _0x50e902;
                        if (ooo && ooo['Xg'] && ooo['Xg']['Kf'] && ooo['Xg']['Kf']['Wg'] && ooo['Xg']['Kf']['Wg']['Ah']) {
                            const _0xc5e8c4 = ooo['Xg']['Kf']['Wg']['Ah'];
                            if (_0xc5e8c4 && _0xc5e8c4['Vj']) {
                                const _0x47b225 = {
                                    0x0: 0x0,
                                    0x1: 0x1,
                                    0x2: 0x2,
                                    0x3: 0x3
                                };
                                _0xc5e8c4['Vj'] = _0x47b225[_0x50e902] || 0x0, _0xc5e8c4['Zi'] && _0xc5e8c4['Zi'](_0xc5e8c4['ki']);
                            }
                        }
                    }
                }
                _0x1cbc28[_0x296a9b(0x456)](), _0x1cbc28[_0x296a9b(0x374)]();
            }
        }
    }, !0x0);
    if (!_0x177616()) {
        const _0x4f92ed = setInterval(function() {
            _0x177616() && clearInterval(_0x4f92ed);
        }, 0x3e8);
    } else {}
}()), console[_0x1543e5(0x1be)](_0x1543e5(0x622));
