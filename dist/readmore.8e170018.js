// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts/readmore.js":[function(require,module,exports) {
var openBoxButtons = document.querySelectorAll('[data-box-target]');
var closeBoxButtons = document.querySelectorAll('[data-close-button]');
var overlay = document.getElementById('overlay');
var members = {
  tao: {
    name: "Tao Jin",
    info: "Studied medicin during 1990-1995 and received master degree in Anatomy at Suzhou Medical College, Suzhou, China in 2000. Defended thesis at Dept. of Rheumatology and Inflammation Research, University of Gothenburg in 2005. Thereafter worked with Prof. Andrej Tarkowski as postdoc fellow and became associate professor in 2008. Currently works as consultant rheumatologist with 50% research time in Sahlgrenska University Hospital."
  },
  majd: {
    name: "Majd Mohammad",
    info: "Majd graduated and obtained his MSc degree as a pharmacist in 2015 from the University of Gothenburg, Sweden. The following year he was working as the Deputy manager of Quality and Regulatory affairs and as a product specialist in a pharmaceutical company. He started as a PhD student at the group during the summer of 2016. He got his PhD degree in Medical Science in September 2020. During his PhD studies, he was mainly focusing on investigating the role of lipoproteins in Staphylococcus aureus infections in murine models, more specifically in septic arthritis and skin infections. He is currently working as a postdoctoral fellow."
  },
  pradeep: {
    name: "Pradeep Kumar Kopparapu",
    info: "Pradeep Kumar Kopparapu has done his Bachelor's of technology in Biotechnology at SRM University, India. Later he moved to Sweden and completed a dual master's one in molecular biology and another in medical biology from Lund University, Sweden. In 2014, he joined the Meena Kanduri group at the University of Gothenburg to pursue PhD studies in the area of epigenetic regulation in B-cell leukemia. He is now working with Tao Jin's group as a postdoctoral researcher in the field of epigenetic mechanisms with septic arthritis and sepsis."
  },
  zhicheng: {
    name: "Zhicheng Hu",
    info: "Zhicheng joined Tao’s lab as an exchange student in 2017, during which he gained experience in investigating the development of sepsis and septic arthritis in murine models in the lab. He obtained his degree of Master of Medicine in Clinical Laboratory Diagnostics (2020) in Guizhou Medical University, China. He was enrolled as a PhD student in Tao’s lab during the winter of 2020, where he will continue to understand the function of Phenol Soluble Modulins of Staphylococcusaureus-induced infections."
  },
  meghshree: {
    name: "Meghshree Deshmukh",
    info: "Meghshree Deshmukh has obtained her Bachelors (2008) and Masters (2010) from the University of Mumbai, India. She has been involved in Research for past 8 years before being a part of our team. She has gained experience in microbiology, molecular biology, Immunology and histology techniques. She has joined our lab recently and will be part of studies involving animal models (mice) for finding new markers for diagnosis as well as new strategies for treatment of septic arthritis."
  },
  michelle: {
    name: "Michelle Schultz",
    info: "Michelle is a research intern in the group and is currently studying the Programme in Medicine at the University of Gothenburg. She joined the group during a summer internship in 2020."
  },
  balsam: {
    name: "Balsam Hanna",
    info: "Balsam graduated as examinated physician (MD) from medical school, University of Mosul, Irak in 1993 and swedish MD at Karolinska University Hospital in 1999. She is consultant in rheumatology clinic, Sahlgrenska University Hospital since 2009. She started as a PhD student at the group in april-2019. Her PhD project is mainly focusing on investigating the cardiac involvement and osteoporosis in patients with idiopathic inflammatory myopathies."
  },
  anders: {
    name: "Anders Jarneborn",
    info: ""
  }
};
openBoxButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    var box = document.querySelector(button.dataset.boxTarget);
    var member = button.id;
    var title = document.getElementById("title");
    var info = document.getElementById("box-body");
    title.innerText = members[member].name;
    info.innerText = members[member].info;
    openBox(box);
  });
});
closeBoxButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    var box = button.closest('.box');
    closeBox(box);
  });
});

function openBox(box) {
  if (box == null) {
    return;
  }

  box.classList.add('active');
  overlay.classList.add('active');
}

function closeBox(box) {
  if (box == null) {
    return;
  }

  box.classList.remove('active');
  overlay.classList.remove('active');
}
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "23180" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/readmore.js"], null)
//# sourceMappingURL=/readmore.8e170018.js.map