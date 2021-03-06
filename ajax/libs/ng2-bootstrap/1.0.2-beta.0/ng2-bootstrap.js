System.registerDynamic("ng2-bootstrap/components/accordion/accordion.component", ["angular2/core"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var Accordion = (function() {
    function Accordion() {
      this.addClass = true;
      this.groups = [];
    }
    Accordion.prototype.closeOtherPanels = function(openGroup) {
      if (!this.closeOthers) {
        return;
      }
      this.groups.forEach(function(group) {
        if (group !== openGroup) {
          group.isOpen = false;
        }
      });
    };
    Accordion.prototype.addGroup = function(group) {
      this.groups.push(group);
    };
    Accordion.prototype.removeGroup = function(group) {
      var index = this.groups.indexOf(group);
      if (index !== -1) {
        this.groups.splice(index, 1);
      }
    };
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Accordion.prototype, "closeOthers", void 0);
    __decorate([core_1.HostBinding('class.panel-group'), __metadata('design:type', Object)], Accordion.prototype, "addClass", void 0);
    Accordion = __decorate([core_1.Component({
      selector: 'accordion',
      template: "<ng-content></ng-content>"
    }), __metadata('design:paramtypes', [])], Accordion);
    return Accordion;
  })();
  exports.Accordion = Accordion;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/accordion/accordion-group.component", ["angular2/core", "angular2/common", "../collapse", "./accordion.component"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('angular2/core');
  var common_1 = $__require('angular2/common');
  var collapse_1 = $__require('../collapse');
  var accordion_component_1 = $__require('./accordion.component');
  var AccordionPanel = (function() {
    function AccordionPanel(accordion) {
      this.accordion = accordion;
    }
    Object.defineProperty(AccordionPanel.prototype, "isOpen", {
      get: function() {
        return this._isOpen;
      },
      set: function(value) {
        this._isOpen = value;
        if (value) {
          this.accordion.closeOtherPanels(this);
        }
      },
      enumerable: true,
      configurable: true
    });
    AccordionPanel.prototype.ngOnInit = function() {
      this.panelClass = this.panelClass || 'panel-default';
      this.accordion.addGroup(this);
    };
    AccordionPanel.prototype.ngOnDestroy = function() {
      this.accordion.removeGroup(this);
    };
    AccordionPanel.prototype.toggleOpen = function(event) {
      event.preventDefault();
      if (!this.isDisabled) {
        this.isOpen = !this.isOpen;
      }
    };
    __decorate([core_1.Input(), __metadata('design:type', String)], AccordionPanel.prototype, "heading", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], AccordionPanel.prototype, "panelClass", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], AccordionPanel.prototype, "isDisabled", void 0);
    __decorate([core_1.HostBinding('class.panel-open'), core_1.Input(), __metadata('design:type', Boolean)], AccordionPanel.prototype, "isOpen", null);
    AccordionPanel = __decorate([core_1.Component({
      selector: 'accordion-group, accordion-panel',
      directives: [collapse_1.Collapse, common_1.NgClass],
      template: "\n    <div class=\"panel\" [ngClass]=\"panelClass\">\n      <div class=\"panel-heading\" (click)=\"toggleOpen($event)\">\n        <h4 class=\"panel-title\">\n          <a href tabindex=\"0\" class=\"accordion-toggle\">\n            <span *ngIf=\"heading\" [ngClass]=\"{'text-muted': isDisabled}\">{{heading}}</span>\n            <ng-content select=\"[accordion-heading]\"></ng-content>\n          </a>\n        </h4>\n      </div>\n      <div class=\"panel-collapse collapse\" [collapse]=\"!isOpen\">\n        <div class=\"panel-body\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </div>\n  "
    }), __param(0, core_1.Inject(accordion_component_1.Accordion)), __metadata('design:paramtypes', [accordion_component_1.Accordion])], AccordionPanel);
    return AccordionPanel;
  })();
  exports.AccordionPanel = AccordionPanel;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/accordion", ["./accordion/accordion.component", "./accordion/accordion-group.component"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var accordion_component_1 = $__require('./accordion/accordion.component');
  var accordion_group_component_1 = $__require('./accordion/accordion-group.component');
  var accordion_component_2 = $__require('./accordion/accordion.component');
  exports.Accordion = accordion_component_2.Accordion;
  var accordion_group_component_2 = $__require('./accordion/accordion-group.component');
  exports.AccordionPanel = accordion_group_component_2.AccordionPanel;
  exports.ACCORDION_DIRECTIVES = [accordion_component_1.Accordion, accordion_group_component_1.AccordionPanel];
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/alert/alert.component", ["angular2/core", "angular2/common"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var common_1 = $__require('angular2/common');
  var ALERT_TEMPLATE = "\n  <div class=\"alert\" role=\"alert\" [ngClass]=\"classes\" *ngIf=\"!closed\">\n    <button *ngIf=\"dismissible\" type=\"button\" class=\"close\" (click)=\"onClose()\" (touch)=\"onClose()\">\n      <span aria-hidden=\"true\">&times;</span>\n      <span class=\"sr-only\">Close</span>\n    </button>\n    <ng-content></ng-content>\n  </div>\n  ";
  var Alert = (function() {
    function Alert() {
      this.type = 'warning';
      this.close = new core_1.EventEmitter();
      this.classes = [];
    }
    Alert.prototype.ngOnInit = function() {
      var _this = this;
      this.classes[0] = "alert-" + this.type;
      if (this.dismissible) {
        this.classes[1] = 'alert-dismissible';
      } else {
        this.classes.length = 1;
      }
      if (this.dismissOnTimeout) {
        setTimeout(function() {
          return _this.onClose();
        }, this.dismissOnTimeout);
      }
    };
    Alert.prototype.onClose = function() {
      this.closed = true;
      this.close.emit(this);
    };
    __decorate([core_1.Input(), __metadata('design:type', String)], Alert.prototype, "type", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Alert.prototype, "dismissible", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Number)], Alert.prototype, "dismissOnTimeout", void 0);
    __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], Alert.prototype, "close", void 0);
    Alert = __decorate([core_1.Component({
      selector: 'alert',
      directives: [common_1.NgIf, common_1.NgClass],
      template: ALERT_TEMPLATE
    }), __metadata('design:paramtypes', [])], Alert);
    return Alert;
  })();
  exports.Alert = Alert;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/alert", ["./alert/alert.component"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var alert_component_1 = $__require('./alert/alert.component');
  exports.Alert = alert_component_1.Alert;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/buttons/button-checkbox.component", ["angular2/core", "angular2/common"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('angular2/core');
  var common_1 = $__require('angular2/common');
  var ButtonCheckbox = (function() {
    function ButtonCheckbox(cd) {
      this.cd = cd;
      this.state = false;
      this.onChange = function(_) {};
      this.onTouched = function() {};
      cd.valueAccessor = this;
    }
    ButtonCheckbox.prototype.onClick = function() {
      this.toggle(!this.state);
      this.cd.viewToModelUpdate(this.value);
    };
    ButtonCheckbox.prototype.ngOnInit = function() {
      this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckbox.prototype, "trueValue", {
      get: function() {
        return typeof this.btnCheckboxTrue !== 'undefined' ? this.btnCheckboxTrue : true;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ButtonCheckbox.prototype, "falseValue", {
      get: function() {
        return typeof this.btnCheckboxFalse !== 'undefined' ? this.btnCheckboxFalse : false;
      },
      enumerable: true,
      configurable: true
    });
    ButtonCheckbox.prototype.toggle = function(state) {
      this.state = state;
      this.value = this.state ? this.trueValue : this.falseValue;
    };
    ButtonCheckbox.prototype.writeValue = function(value) {
      this.state = this.trueValue === value;
      this.value = value;
    };
    ButtonCheckbox.prototype.registerOnChange = function(fn) {
      this.onChange = fn;
    };
    ButtonCheckbox.prototype.registerOnTouched = function(fn) {
      this.onTouched = fn;
    };
    __decorate([core_1.Input(), __metadata('design:type', Object)], ButtonCheckbox.prototype, "btnCheckboxTrue", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Object)], ButtonCheckbox.prototype, "btnCheckboxFalse", void 0);
    __decorate([core_1.HostBinding('class.active'), __metadata('design:type', Boolean)], ButtonCheckbox.prototype, "state", void 0);
    __decorate([core_1.HostListener('click'), __metadata('design:type', Function), __metadata('design:paramtypes', []), __metadata('design:returntype', void 0)], ButtonCheckbox.prototype, "onClick", null);
    ButtonCheckbox = __decorate([core_1.Directive({selector: '[btnCheckbox][ngModel]'}), __param(0, core_1.Self()), __metadata('design:paramtypes', [common_1.NgModel])], ButtonCheckbox);
    return ButtonCheckbox;
  })();
  exports.ButtonCheckbox = ButtonCheckbox;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/buttons/button-radio.component", ["angular2/core", "angular2/common"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('angular2/core');
  var common_1 = $__require('angular2/common');
  var ButtonRadio = (function() {
    function ButtonRadio(cd, el) {
      this.cd = cd;
      this.el = el;
      this.onChange = function(_) {};
      this.onTouched = function() {};
      cd.valueAccessor = this;
    }
    Object.defineProperty(ButtonRadio.prototype, "isActive", {
      get: function() {
        return this.btnRadio === this.value;
      },
      enumerable: true,
      configurable: true
    });
    ButtonRadio.prototype.onClick = function() {
      if (this.uncheckable && this.btnRadio === this.value) {
        return this.cd.viewToModelUpdate(null);
      }
      this.cd.viewToModelUpdate(this.btnRadio);
    };
    ButtonRadio.prototype.ngOnInit = function() {
      this.uncheckable = typeof this.uncheckable !== 'undefined';
    };
    Object.defineProperty(ButtonRadio.prototype, "value", {
      get: function() {
        return this.cd.viewModel;
      },
      set: function(value) {
        this.cd.viewModel = value;
      },
      enumerable: true,
      configurable: true
    });
    ButtonRadio.prototype.writeValue = function(value) {
      this.value = value;
    };
    ButtonRadio.prototype.registerOnChange = function(fn) {
      this.onChange = fn;
    };
    ButtonRadio.prototype.registerOnTouched = function(fn) {
      this.onTouched = fn;
    };
    __decorate([core_1.Input(), __metadata('design:type', String)], ButtonRadio.prototype, "btnRadio", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], ButtonRadio.prototype, "uncheckable", void 0);
    __decorate([core_1.HostBinding('class.active'), __metadata('design:type', Object)], ButtonRadio.prototype, "isActive", null);
    __decorate([core_1.HostListener('click'), __metadata('design:type', Function), __metadata('design:paramtypes', []), __metadata('design:returntype', void 0)], ButtonRadio.prototype, "onClick", null);
    ButtonRadio = __decorate([core_1.Directive({selector: '[btnRadio][ngModel]'}), __param(0, core_1.Self()), __metadata('design:paramtypes', [common_1.NgModel, core_1.ElementRef])], ButtonRadio);
    return ButtonRadio;
  })();
  exports.ButtonRadio = ButtonRadio;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/buttons", ["./buttons/button-checkbox.component", "./buttons/button-radio.component"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var button_checkbox_component_1 = $__require('./buttons/button-checkbox.component');
  var button_radio_component_1 = $__require('./buttons/button-radio.component');
  var button_checkbox_component_2 = $__require('./buttons/button-checkbox.component');
  exports.ButtonCheckbox = button_checkbox_component_2.ButtonCheckbox;
  var button_radio_component_2 = $__require('./buttons/button-radio.component');
  exports.ButtonRadio = button_radio_component_2.ButtonRadio;
  exports.BUTTON_DIRECTIVES = [button_checkbox_component_1.ButtonCheckbox, button_radio_component_1.ButtonRadio];
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/carousel/slide.component", ["angular2/core", "./carousel.component"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var carousel_component_1 = $__require('./carousel.component');
  var Slide = (function() {
    function Slide(carousel) {
      this.carousel = carousel;
      this.addClass = true;
    }
    Slide.prototype.ngOnInit = function() {
      this.carousel.addSlide(this);
    };
    Slide.prototype.ngOnDestroy = function() {
      this.carousel.removeSlide(this);
    };
    __decorate([core_1.Input(), __metadata('design:type', Number)], Slide.prototype, "index", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Number)], Slide.prototype, "direction", void 0);
    __decorate([core_1.HostBinding('class.active'), core_1.Input(), __metadata('design:type', Boolean)], Slide.prototype, "active", void 0);
    __decorate([core_1.HostBinding('class.item'), core_1.HostBinding('class.carousel-item'), __metadata('design:type', Boolean)], Slide.prototype, "addClass", void 0);
    Slide = __decorate([core_1.Component({
      selector: 'slide',
      template: "\n    <div [class.active]=\"active\" class=\"item text-center\">\n      <ng-content></ng-content>\n    </div>\n  "
    }), __metadata('design:paramtypes', [carousel_component_1.Carousel])], Slide);
    return Slide;
  })();
  exports.Slide = Slide;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/carousel/carousel.component", ["angular2/core", "angular2/common", "../ng2-bootstrap-config"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var common_1 = $__require('angular2/common');
  var ng2_bootstrap_config_1 = $__require('../ng2-bootstrap-config');
  (function(Direction) {
    Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
    Direction[Direction["NEXT"] = 1] = "NEXT";
    Direction[Direction["PREV"] = 2] = "PREV";
  })(exports.Direction || (exports.Direction = {}));
  var Direction = exports.Direction;
  var NAVIGATION = (_a = {}, _a[ng2_bootstrap_config_1.Ng2BootstrapTheme.BS4] = "\n    <a class=\"left carousel-control\" (click)=\"prev()\" [hidden]=\"!slides.length\">\n      <span class=\"icon-prev\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" (click)=\"next()\" [hidden]=\"!slides.length\">\n      <span class=\"icon-next\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  ", _a[ng2_bootstrap_config_1.Ng2BootstrapTheme.BS3] = "\n    <a class=\"left carousel-control\" (click)=\"prev()\" [hidden]=\"!slides.length\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n    <a class=\"right carousel-control\" (click)=\"next()\" [hidden]=\"!slides.length\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n    </a>\n  ", _a);
  var Carousel = (function() {
    function Carousel() {
      this.slides = [];
      this.destroyed = false;
    }
    Object.defineProperty(Carousel.prototype, "interval", {
      get: function() {
        return this._interval;
      },
      set: function(value) {
        this._interval = value;
        this.restartTimer();
      },
      enumerable: true,
      configurable: true
    });
    Carousel.prototype.ngOnDestroy = function() {
      this.destroyed = true;
    };
    Carousel.prototype.select = function(nextSlide, direction) {
      if (direction === void 0) {
        direction = Direction.UNKNOWN;
      }
      var nextIndex = nextSlide.index;
      if (direction === Direction.UNKNOWN) {
        direction = nextIndex > this.getCurrentIndex() ? Direction.NEXT : Direction.PREV;
      }
      if (nextSlide && nextSlide !== this.currentSlide) {
        this.goNext(nextSlide, direction);
      }
    };
    Carousel.prototype.goNext = function(slide, direction) {
      if (this.destroyed) {
        return;
      }
      slide.direction = direction;
      slide.active = true;
      if (this.currentSlide) {
        this.currentSlide.direction = direction;
        this.currentSlide.active = false;
      }
      this.currentSlide = slide;
      this.restartTimer();
    };
    Carousel.prototype.getSlideByIndex = function(index) {
      var len = this.slides.length;
      for (var i = 0; i < len; ++i) {
        if (this.slides[i].index === index) {
          return this.slides[i];
        }
      }
    };
    Carousel.prototype.getCurrentIndex = function() {
      return !this.currentSlide ? 0 : this.currentSlide.index;
    };
    Carousel.prototype.next = function() {
      var newIndex = (this.getCurrentIndex() + 1) % this.slides.length;
      if (newIndex === 0 && this.noWrap) {
        this.pause();
        return;
      }
      return this.select(this.getSlideByIndex(newIndex), Direction.NEXT);
    };
    Carousel.prototype.prev = function() {
      var newIndex = this.getCurrentIndex() - 1 < 0 ? this.slides.length - 1 : this.getCurrentIndex() - 1;
      if (this.noWrap && newIndex === this.slides.length - 1) {
        this.pause();
        return;
      }
      return this.select(this.getSlideByIndex(newIndex), Direction.PREV);
    };
    Carousel.prototype.restartTimer = function() {
      var _this = this;
      this.resetTimer();
      var interval = +this.interval;
      if (!isNaN(interval) && interval > 0) {
        this.currentInterval = setInterval(function() {
          var nInterval = +_this.interval;
          if (_this.isPlaying && !isNaN(_this.interval) && nInterval > 0 && _this.slides.length) {
            _this.next();
          } else {
            _this.pause();
          }
        }, interval);
      }
    };
    Carousel.prototype.resetTimer = function() {
      if (this.currentInterval) {
        clearInterval(this.currentInterval);
        this.currentInterval = null;
      }
    };
    Carousel.prototype.play = function() {
      if (!this.isPlaying) {
        this.isPlaying = true;
        this.restartTimer();
      }
    };
    Carousel.prototype.pause = function() {
      if (!this.noPause) {
        this.isPlaying = false;
        this.resetTimer();
      }
    };
    Carousel.prototype.addSlide = function(slide) {
      slide.index = this.slides.length;
      this.slides.push(slide);
      if (this.slides.length === 1 || slide.active) {
        this.select(this.slides[this.slides.length - 1]);
        if (this.slides.length === 1) {
          this.play();
        }
      } else {
        slide.active = false;
      }
    };
    Carousel.prototype.removeSlide = function(slide) {
      this.slides.splice(slide.index, 1);
      if (this.slides.length === 0) {
        this.currentSlide = null;
        return;
      }
      for (var i = 0; i < this.slides.length; i++) {
        this.slides[i].index = i;
      }
    };
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Carousel.prototype, "noWrap", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Carousel.prototype, "noPause", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Carousel.prototype, "noTransition", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Number)], Carousel.prototype, "interval", null);
    Carousel = __decorate([core_1.Component({
      selector: 'carousel',
      directives: [common_1.NgFor],
      template: "\n    <div (mouseenter)=\"pause()\" (mouseleave)=\"play()\" class=\"carousel slide\">\n      <ol class=\"carousel-indicators\" [hidden]=\"slides.length <= 1\">\n         <li *ngFor=\"#slidez of slides\" [class.active]=\"slidez.active === true\" (click)=\"select(slidez)\"></li>\n      </ol>\n      <div class=\"carousel-inner\"><ng-content></ng-content></div>\n      " + NAVIGATION[ng2_bootstrap_config_1.Ng2BootstrapConfig.theme] + "\n    </div>\n  "
    }), __metadata('design:paramtypes', [])], Carousel);
    return Carousel;
  })();
  exports.Carousel = Carousel;
  var _a;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/carousel", ["./carousel/slide.component", "./carousel/carousel.component"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var slide_component_1 = $__require('./carousel/slide.component');
  var carousel_component_1 = $__require('./carousel/carousel.component');
  var slide_component_2 = $__require('./carousel/slide.component');
  exports.Slide = slide_component_2.Slide;
  var carousel_component_2 = $__require('./carousel/carousel.component');
  exports.Carousel = carousel_component_2.Carousel;
  exports.CAROUSEL_DIRECTIVES = [carousel_component_1.Carousel, slide_component_1.Slide];
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/collapse/collapse.component", ["angular2/core"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var Collapse = (function() {
    function Collapse() {
      this.isExpanded = true;
      this.isCollapsed = false;
      this.isCollapse = true;
      this.isCollapsing = false;
    }
    Object.defineProperty(Collapse.prototype, "collapse", {
      get: function() {
        return this.isExpanded;
      },
      set: function(value) {
        this.isExpanded = value;
        this.toggle();
      },
      enumerable: true,
      configurable: true
    });
    Collapse.prototype.toggle = function() {
      if (this.isExpanded) {
        this.hide();
      } else {
        this.show();
      }
    };
    Collapse.prototype.hide = function() {
      var _this = this;
      this.isCollapse = false;
      this.isCollapsing = true;
      this.isExpanded = false;
      this.isCollapsed = true;
      setTimeout(function() {
        _this.height = '0';
        _this.isCollapse = true;
        _this.isCollapsing = false;
      }, 4);
    };
    Collapse.prototype.show = function() {
      var _this = this;
      this.isCollapse = false;
      this.isCollapsing = true;
      this.isExpanded = true;
      this.isCollapsed = false;
      setTimeout(function() {
        _this.height = 'auto';
        _this.isCollapse = true;
        _this.isCollapsing = false;
      }, 4);
    };
    __decorate([core_1.HostBinding('style.height'), __metadata('design:type', String)], Collapse.prototype, "height", void 0);
    __decorate([core_1.HostBinding('class.in'), core_1.HostBinding('attr.aria-expanded'), __metadata('design:type', Boolean)], Collapse.prototype, "isExpanded", void 0);
    __decorate([core_1.HostBinding('attr.aria-hidden'), __metadata('design:type', Boolean)], Collapse.prototype, "isCollapsed", void 0);
    __decorate([core_1.HostBinding('class.collapse'), __metadata('design:type', Boolean)], Collapse.prototype, "isCollapse", void 0);
    __decorate([core_1.HostBinding('class.collapsing'), __metadata('design:type', Boolean)], Collapse.prototype, "isCollapsing", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean), __metadata('design:paramtypes', [Boolean])], Collapse.prototype, "collapse", null);
    Collapse = __decorate([core_1.Directive({selector: '[collapse]'}), __metadata('design:paramtypes', [])], Collapse);
    return Collapse;
  })();
  exports.Collapse = Collapse;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/collapse", ["./collapse/collapse.component"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var collapse_component_1 = $__require('./collapse/collapse.component');
  exports.Collapse = collapse_component_1.Collapse;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/dropdown/dropdown.service", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports.ALWAYS = 'always';
  exports.DISABLED = 'disabled';
  exports.OUTSIDECLICK = 'outsideClick';
  var DropdownService = (function() {
    function DropdownService() {
      this.closeDropdownBind = this.closeDropdown.bind(this);
      this.keybindFilterBind = this.keybindFilter.bind(this);
    }
    DropdownService.prototype.open = function(dropdownScope) {
      if (!this.openScope) {
        window.document.addEventListener('click', this.closeDropdownBind);
        window.document.addEventListener('keydown', this.keybindFilterBind);
      }
      if (this.openScope && this.openScope !== this.dropdownScope) {
        this.openScope.isOpen = false;
      }
      this.openScope = dropdownScope;
    };
    DropdownService.prototype.close = function(dropdownScope) {
      if (this.openScope !== dropdownScope) {
        return;
      }
      this.openScope = null;
      window.document.removeEventListener('click', this.closeDropdownBind);
      window.document.removeEventListener('keydown', this.keybindFilterBind);
    };
    DropdownService.prototype.closeDropdown = function(event) {
      if (!this.openScope) {
        return;
      }
      if (event && this.openScope.autoClose === exports.DISABLED) {
        return;
      }
      if (event && this.openScope.toggleEl && this.openScope.toggleEl.nativeElement === event.target) {
        return;
      }
      if (event && this.openScope.autoClose === exports.OUTSIDECLICK && this.openScope.menuEl && this.openScope.menuEl.nativeElement === event.target) {
        return;
      }
      this.openScope.isOpen = false;
    };
    DropdownService.prototype.keybindFilter = function(event) {
      if (event.which === 27) {
        this.openScope.focusToggleElement();
        this.closeDropdown(null);
        return;
      }
      if (this.openScope.keyboardNav && this.openScope.isOpen && (event.which === 38 || event.which === 40)) {
        event.preventDefault();
        event.stopPropagation();
        this.openScope.focusDropdownEntry(event.which);
      }
    };
    return DropdownService;
  })();
  exports.DropdownService = DropdownService;
  exports.dropdownService = new DropdownService();
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/dropdown/dropdown.directive", ["angular2/core", "./dropdown.service"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('angular2/core');
  var dropdown_service_1 = $__require('./dropdown.service');
  var Dropdown = (function() {
    function Dropdown(el, dropdownMenuList) {
      this.el = el;
      this.onToggle = new core_1.EventEmitter();
      this.addClass = true;
    }
    Object.defineProperty(Dropdown.prototype, "isOpen", {
      get: function() {
        return this._isOpen;
      },
      set: function(value) {
        this._isOpen = !!value;
        if (this.appendToBody && this.menuEl) {}
        if (this.isOpen) {
          this.focusToggleElement();
          dropdown_service_1.dropdownService.open(this);
        } else {
          dropdown_service_1.dropdownService.close(this);
          this.selectedOption = null;
        }
        this.onToggle.emit(this.isOpen);
      },
      enumerable: true,
      configurable: true
    });
    Dropdown.prototype.ngOnInit = function() {
      this.autoClose = this.autoClose || dropdown_service_1.ALWAYS;
      if (this.isOpen) {}
    };
    Dropdown.prototype.ngOnDestroy = function() {
      if (this.appendToBody && this.menuEl) {
        this.menuEl.nativeElement.remove();
      }
    };
    Object.defineProperty(Dropdown.prototype, "dropDownMenu", {
      set: function(dropdownMenu) {
        this.menuEl = dropdownMenu.el;
        if (this.appendToBody) {
          window.document.body.appendChild(this.menuEl.nativeElement);
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Dropdown.prototype, "dropDownToggle", {
      set: function(dropdownToggle) {
        this.toggleEl = dropdownToggle.el;
      },
      enumerable: true,
      configurable: true
    });
    Dropdown.prototype.toggle = function(open) {
      return this.isOpen = arguments.length ? !!open : !this.isOpen;
    };
    Dropdown.prototype.focusDropdownEntry = function(keyCode) {
      var hostEl = this.menuEl ? this.menuEl.nativeElement : this.el.nativeElement.getElementsByTagName('ul')[0];
      if (!hostEl) {
        return;
      }
      var elems = hostEl.getElementsByTagName('a');
      if (!elems || !elems.length) {
        return;
      }
      switch (keyCode) {
        case (40):
          if (typeof this.selectedOption !== 'number') {
            this.selectedOption = 0;
            break;
          }
          if (this.selectedOption === elems.length - 1) {
            break;
          }
          this.selectedOption++;
          break;
        case (38):
          if (typeof this.selectedOption !== 'number') {
            return;
          }
          if (this.selectedOption === 0) {
            break;
          }
          this.selectedOption--;
          break;
      }
      elems[this.selectedOption].focus();
    };
    Dropdown.prototype.focusToggleElement = function() {
      if (this.toggleEl) {
        this.toggleEl.nativeElement.focus();
      }
    };
    __decorate([core_1.HostBinding('class.open'), core_1.Input(), __metadata('design:type', Boolean)], Dropdown.prototype, "isOpen", null);
    __decorate([core_1.Input(), __metadata('design:type', String)], Dropdown.prototype, "autoClose", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Dropdown.prototype, "keyboardNav", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Dropdown.prototype, "appendToBody", void 0);
    __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], Dropdown.prototype, "onToggle", void 0);
    __decorate([core_1.HostBinding('class.dropdown'), __metadata('design:type', Object)], Dropdown.prototype, "addClass", void 0);
    Dropdown = __decorate([core_1.Directive({selector: '[dropdown]'}), __param(1, core_1.Query('dropdownMenu', {descendants: false})), __metadata('design:paramtypes', [core_1.ElementRef, core_1.QueryList])], Dropdown);
    return Dropdown;
  })();
  exports.Dropdown = Dropdown;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/dropdown/dropdown-toggle.directive", ["angular2/core", "./dropdown.directive"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('angular2/core');
  var dropdown_directive_1 = $__require('./dropdown.directive');
  var DropdownToggle = (function() {
    function DropdownToggle(dropdown, el) {
      this.dropdown = dropdown;
      this.el = el;
      this.disabled = false;
      this.addClass = true;
    }
    DropdownToggle.prototype.ngOnInit = function() {
      this.dropdown.dropDownToggle = this;
    };
    Object.defineProperty(DropdownToggle.prototype, "isOpen", {
      get: function() {
        return this.dropdown.isOpen;
      },
      enumerable: true,
      configurable: true
    });
    DropdownToggle.prototype.toggleDropdown = function(event) {
      event.stopPropagation();
      if (!this.disabled) {
        this.dropdown.toggle();
      }
      return false;
    };
    __decorate([core_1.HostBinding('class.disabled'), core_1.Input(), __metadata('design:type', Boolean)], DropdownToggle.prototype, "disabled", void 0);
    __decorate([core_1.HostBinding('class.dropdown-toggle'), core_1.HostBinding('attr.aria-haspopup'), __metadata('design:type', Object)], DropdownToggle.prototype, "addClass", void 0);
    __decorate([core_1.HostBinding('attr.aria-expanded'), __metadata('design:type', Object)], DropdownToggle.prototype, "isOpen", null);
    __decorate([core_1.HostListener('click', ['$event']), __metadata('design:type', Function), __metadata('design:paramtypes', [MouseEvent]), __metadata('design:returntype', void 0)], DropdownToggle.prototype, "toggleDropdown", null);
    DropdownToggle = __decorate([core_1.Directive({selector: '[dropdownToggle]'}), __param(0, core_1.Host()), __metadata('design:paramtypes', [dropdown_directive_1.Dropdown, core_1.ElementRef])], DropdownToggle);
    return DropdownToggle;
  })();
  exports.DropdownToggle = DropdownToggle;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/dropdown", ["./dropdown/dropdown.directive", "./dropdown/dropdown-toggle.directive"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var dropdown_directive_1 = $__require('./dropdown/dropdown.directive');
  var dropdown_toggle_directive_1 = $__require('./dropdown/dropdown-toggle.directive');
  var dropdown_directive_2 = $__require('./dropdown/dropdown.directive');
  exports.Dropdown = dropdown_directive_2.Dropdown;
  var dropdown_toggle_directive_2 = $__require('./dropdown/dropdown-toggle.directive');
  exports.DropdownToggle = dropdown_toggle_directive_2.DropdownToggle;
  exports.DROPDOWN_DIRECTIVES = [dropdown_directive_1.Dropdown, dropdown_toggle_directive_1.DropdownToggle];
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/pagination/pagination.component", ["angular2/core", "angular2/common"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('angular2/core');
  var common_1 = $__require('angular2/common');
  var paginationConfig = {
    maxSize: void 0,
    itemsPerPage: 10,
    boundaryLinks: false,
    directionLinks: true,
    firstText: 'First',
    previousText: 'Previous',
    nextText: 'Next',
    lastText: 'Last',
    rotate: true
  };
  var PAGINATION_TEMPLATE = "\n  <ul class=\"pagination\" [ngClass]=\"classMap\">\n    <li class=\"pagination-first page-item\"\n        *ngIf=\"boundaryLinks\"\n        [class.disabled]=\"noPrevious()||disabled\">\n      <a class=\"page-link\" href (click)=\"selectPage(1, $event)\">{{getText('first')}}</a>\n    </li>\n\n    <li class=\"pagination-prev page-item\"\n        *ngIf=\"directionLinks\"\n        [class.disabled]=\"noPrevious()||disabled\">\n      <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\">{{getText('previous')}}</a>\n      </li>\n\n    <li *ngFor=\"#pg of pages\"\n        [class.active]=\"pg.active\"\n        [class.disabled]=\"disabled&&!pg.active\"\n        class=\"pagination-page page-item\">\n      <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\">{{pg.text}}</a>\n    </li>\n\n    <li class=\"pagination-next page-item\"\n        *ngIf=\"directionLinks\"\n        [class.disabled]=\"noNext()\">\n      <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\">{{getText('next')}}</a></li>\n\n    <li class=\"pagination-last page-item\"\n        *ngIf=\"boundaryLinks\"\n        [class.disabled]=\"noNext()\">\n      <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\">{{getText('last')}}</a></li>\n  </ul>\n  ";
  var Pagination = (function() {
    function Pagination(cd, renderer, elementRef) {
      this.cd = cd;
      this.renderer = renderer;
      this.elementRef = elementRef;
      this.numPages = new core_1.EventEmitter();
      this.pageChanged = new core_1.EventEmitter();
      this.inited = false;
      this.onChange = function(_) {};
      this.onTouched = function() {};
      cd.valueAccessor = this;
      this.config = this.config || paginationConfig;
    }
    Object.defineProperty(Pagination.prototype, "itemsPerPage", {
      get: function() {
        return this._itemsPerPage;
      },
      set: function(v) {
        this._itemsPerPage = v;
        this.totalPages = this.calculateTotalPages();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Pagination.prototype, "totalItems", {
      get: function() {
        return this._totalItems;
      },
      set: function(v) {
        this._totalItems = v;
        this.totalPages = this.calculateTotalPages();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Pagination.prototype, "totalPages", {
      get: function() {
        return this._totalPages;
      },
      set: function(v) {
        this._totalPages = v;
        this.numPages.emit(v);
        if (this.inited) {
          this.selectPage(this.page);
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Pagination.prototype, "page", {
      get: function() {
        return this._page;
      },
      set: function(value) {
        this._page = (value > this.totalPages) ? this.totalPages : (value || 1);
        this.pageChanged.emit({
          page: this._page,
          itemsPerPage: this.itemsPerPage
        });
      },
      enumerable: true,
      configurable: true
    });
    Pagination.prototype.ngOnInit = function() {
      this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
      this.maxSize = typeof this.maxSize !== 'undefined' ? this.maxSize : paginationConfig.maxSize;
      this.rotate = typeof this.rotate !== 'undefined' ? this.rotate : paginationConfig.rotate;
      this.boundaryLinks = typeof this.boundaryLinks !== 'undefined' ? this.boundaryLinks : paginationConfig.boundaryLinks;
      this.directionLinks = typeof this.directionLinks !== 'undefined' ? this.directionLinks : paginationConfig.directionLinks;
      this.itemsPerPage = typeof this.itemsPerPage !== 'undefined' ? this.itemsPerPage : paginationConfig.itemsPerPage;
      this.totalPages = this.calculateTotalPages();
      this.pages = this.getPages(this.page, this.totalPages);
      this.page = this.cd.value;
      this.inited = true;
    };
    Pagination.prototype.writeValue = function(value) {
      this.page = value;
      this.pages = this.getPages(this.page, this.totalPages);
    };
    Pagination.prototype.selectPage = function(page, event) {
      if (event) {
        event.preventDefault();
      }
      if (!this.disabled) {
        if (event && event.target) {
          var target = event.target;
          target.blur();
        }
        this.writeValue(page);
        this.cd.viewToModelUpdate(this.page);
      }
    };
    Pagination.prototype.getText = function(key) {
      return this[key + 'Text'] || paginationConfig[key + 'Text'];
    };
    Pagination.prototype.noPrevious = function() {
      return this.page === 1;
    };
    Pagination.prototype.noNext = function() {
      return this.page === this.totalPages;
    };
    Pagination.prototype.makePage = function(number, text, isActive) {
      return {
        number: number,
        text: text,
        active: isActive
      };
    };
    Pagination.prototype.getPages = function(currentPage, totalPages) {
      var pages = [];
      var startPage = 1;
      var endPage = totalPages;
      var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
      if (isMaxSized) {
        if (this.rotate) {
          startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
          endPage = startPage + this.maxSize - 1;
          if (endPage > totalPages) {
            endPage = totalPages;
            startPage = endPage - this.maxSize + 1;
          }
        } else {
          startPage = ((Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize) + 1;
          endPage = Math.min(startPage + this.maxSize - 1, totalPages);
        }
      }
      for (var number = startPage; number <= endPage; number++) {
        var page = this.makePage(number, number.toString(), number === currentPage);
        pages.push(page);
      }
      if (isMaxSized && !this.rotate) {
        if (startPage > 1) {
          var previousPageSet = this.makePage(startPage - 1, '...', false);
          pages.unshift(previousPageSet);
        }
        if (endPage < totalPages) {
          var nextPageSet = this.makePage(endPage + 1, '...', false);
          pages.push(nextPageSet);
        }
      }
      return pages;
    };
    Pagination.prototype.calculateTotalPages = function() {
      var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
      return Math.max(totalPages || 0, 1);
    };
    Pagination.prototype.registerOnChange = function(fn) {
      this.onChange = fn;
    };
    Pagination.prototype.registerOnTouched = function(fn) {
      this.onTouched = fn;
    };
    __decorate([core_1.Input(), __metadata('design:type', Number)], Pagination.prototype, "maxSize", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Pagination.prototype, "boundaryLinks", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Pagination.prototype, "directionLinks", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], Pagination.prototype, "firstText", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], Pagination.prototype, "previousText", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], Pagination.prototype, "nextText", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], Pagination.prototype, "lastText", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Pagination.prototype, "rotate", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Pagination.prototype, "disabled", void 0);
    __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], Pagination.prototype, "numPages", void 0);
    __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], Pagination.prototype, "pageChanged", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Object)], Pagination.prototype, "itemsPerPage", null);
    __decorate([core_1.Input(), __metadata('design:type', Number)], Pagination.prototype, "totalItems", null);
    Pagination = __decorate([core_1.Component({
      selector: 'pagination[ngModel]',
      template: PAGINATION_TEMPLATE,
      directives: [common_1.NgFor, common_1.NgIf]
    }), __param(0, core_1.Self()), __metadata('design:paramtypes', [common_1.NgModel, core_1.Renderer, core_1.ElementRef])], Pagination);
    return Pagination;
  })();
  exports.Pagination = Pagination;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/pagination/pager.component", ["angular2/core", "angular2/common", "./pagination.component"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('angular2/core');
  var common_1 = $__require('angular2/common');
  var pagination_component_1 = $__require('./pagination.component');
  var pagerConfig = {
    itemsPerPage: 10,
    previousText: '« Previous',
    nextText: 'Next »',
    align: true
  };
  var PAGER_TEMPLATE = "\n    <ul class=\"pager\">\n      <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\" [ngClass]=\"{'pull-right': align}\">\n        <a href (click)=\"selectPage(page - 1, $event)\">{{getText('previous')}}</a>\n      </li>\n      <li [class.disabled]=\"noNext()\" [class.next]=\"align\" [ngClass]=\"{'pull-right': align}\">\n        <a href (click)=\"selectPage(page + 1, $event)\">{{getText('next')}}</a>\n      </li>\n  </ul>\n";
  var Pager = (function(_super) {
    __extends(Pager, _super);
    function Pager(cd, renderer, elementRef) {
      _super.call(this, cd, renderer, elementRef);
      this.config = pagerConfig;
    }
    Pager = __decorate([core_1.Component({
      selector: 'pager[ngModel]',
      template: PAGER_TEMPLATE,
      directives: [common_1.NgClass],
      inputs: ['align', 'totalItems', 'itemsPerPage', 'previousText', 'nextText']
    }), __param(0, core_1.Self()), __metadata('design:paramtypes', [common_1.NgModel, core_1.Renderer, core_1.ElementRef])], Pager);
    return Pager;
  })(pagination_component_1.Pagination);
  exports.Pager = Pager;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/pagination", ["./pagination/pagination.component", "./pagination/pager.component"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var pagination_component_1 = $__require('./pagination/pagination.component');
  var pager_component_1 = $__require('./pagination/pager.component');
  var pagination_component_2 = $__require('./pagination/pagination.component');
  exports.Pagination = pagination_component_2.Pagination;
  var pager_component_2 = $__require('./pagination/pager.component');
  exports.Pager = pager_component_2.Pager;
  exports.PAGINATION_DIRECTIVES = [pagination_component_1.Pagination, pager_component_1.Pager];
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/progressbar/progress.directive", ["angular2/core"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var progressConfig = {
    animate: true,
    max: 100
  };
  var Progress = (function() {
    function Progress() {
      this.addClass = 'progress';
      this.bars = [];
    }
    Object.defineProperty(Progress.prototype, "max", {
      get: function() {
        return this._max;
      },
      set: function(v) {
        this._max = v;
        this.bars.forEach(function(bar) {
          bar.recalculatePercentage();
        });
      },
      enumerable: true,
      configurable: true
    });
    Progress.prototype.ngOnInit = function() {
      this.animate = this.animate !== false;
      this.max = typeof this.max === 'number' ? this.max : progressConfig.max;
    };
    Progress.prototype.addBar = function(bar) {
      if (!this.animate) {
        bar.transition = 'none';
      }
      this.bars.push(bar);
    };
    Progress.prototype.removeBar = function(bar) {
      this.bars.splice(this.bars.indexOf(bar), 1);
    };
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Progress.prototype, "animate", void 0);
    __decorate([core_1.HostBinding('attr.max'), core_1.Input(), __metadata('design:type', Number)], Progress.prototype, "max", null);
    __decorate([core_1.HostBinding('class'), __metadata('design:type', Object)], Progress.prototype, "addClass", void 0);
    Progress = __decorate([core_1.Directive({selector: 'bs-progress, [progress]'}), __metadata('design:paramtypes', [])], Progress);
    return Progress;
  })();
  exports.Progress = Progress;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/progressbar/bar.component", ["angular2/core", "angular2/common", "./progress.directive"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('angular2/core');
  var common_1 = $__require('angular2/common');
  var progress_directive_1 = $__require('./progress.directive');
  var Bar = (function() {
    function Bar(progress) {
      this.progress = progress;
      this.percent = 0;
    }
    Object.defineProperty(Bar.prototype, "value", {
      get: function() {
        return this._value;
      },
      set: function(v) {
        if (!v && v !== 0) {
          return;
        }
        this._value = v;
        this.recalculatePercentage();
      },
      enumerable: true,
      configurable: true
    });
    Bar.prototype.ngOnInit = function() {
      this.progress.addBar(this);
    };
    Bar.prototype.ngOnDestroy = function() {
      this.progress.removeBar(this);
    };
    Bar.prototype.recalculatePercentage = function() {
      this.percent = +(100 * this.value / this.progress.max).toFixed(2);
      var totalPercentage = this.progress.bars.reduce(function(total, bar) {
        return total + bar.percent;
      }, 0);
      if (totalPercentage > 100) {
        this.percent -= totalPercentage - 100;
      }
    };
    __decorate([core_1.Input(), __metadata('design:type', String)], Bar.prototype, "type", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Number)], Bar.prototype, "value", null);
    Bar = __decorate([core_1.Component({
      selector: 'bar, [bar]',
      directives: [common_1.NgClass, common_1.NgStyle],
      template: "\n  <div class=\"progress-bar\"\n    style=\"min-width: 0;\"\n    role=\"progressbar\"\n    [ngClass]=\"type && 'progress-bar-' + type\"\n    [ngStyle]=\"{width: (percent < 100 ? percent : 100) + '%', transition: transition}\"\n    aria-valuemin=\"0\"\n    [attr.aria-valuenow]=\"value\"\n    [attr.aria-valuetext]=\"percent.toFixed(0) + '%'\"\n    [attr.aria-valuemax]=\"max\"\n    ><ng-content></ng-content></div>\n"
    }), __param(0, core_1.Host()), __metadata('design:paramtypes', [progress_directive_1.Progress])], Bar);
    return Bar;
  })();
  exports.Bar = Bar;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/progressbar/progressbar.component", ["angular2/core", "./progress.directive", "./bar.component"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var progress_directive_1 = $__require('./progress.directive');
  var bar_component_1 = $__require('./bar.component');
  var Progressbar = (function() {
    function Progressbar() {}
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Progressbar.prototype, "animate", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Number)], Progressbar.prototype, "max", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], Progressbar.prototype, "type", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Number)], Progressbar.prototype, "value", void 0);
    Progressbar = __decorate([core_1.Component({
      selector: 'progressbar, [progressbar]',
      directives: [progress_directive_1.Progress, bar_component_1.Bar],
      template: "\n    <div progress [animate]=\"animate\" [max]=\"max\">\n      <bar [type]=\"type\" [value]=\"value\">\n          <ng-content></ng-content>\n      </bar>\n    </div>\n  "
    }), __metadata('design:paramtypes', [])], Progressbar);
    return Progressbar;
  })();
  exports.Progressbar = Progressbar;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/progressbar", ["./progressbar/progress.directive", "./progressbar/bar.component", "./progressbar/progressbar.component"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var progress_directive_1 = $__require('./progressbar/progress.directive');
  var bar_component_1 = $__require('./progressbar/bar.component');
  var progressbar_component_1 = $__require('./progressbar/progressbar.component');
  var progress_directive_2 = $__require('./progressbar/progress.directive');
  exports.Progress = progress_directive_2.Progress;
  var bar_component_2 = $__require('./progressbar/bar.component');
  exports.Bar = bar_component_2.Bar;
  var progressbar_component_2 = $__require('./progressbar/progressbar.component');
  exports.Progressbar = progressbar_component_2.Progressbar;
  exports.PROGRESSBAR_DIRECTIVES = [progress_directive_1.Progress, bar_component_1.Bar, progressbar_component_1.Progressbar];
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/rating/rating.component", ["angular2/core", "angular2/common"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('angular2/core');
  var common_1 = $__require('angular2/common');
  var Rating = (function() {
    function Rating(cd) {
      this.cd = cd;
      this.onHover = new core_1.EventEmitter();
      this.onLeave = new core_1.EventEmitter();
      this.onChange = function(_) {};
      this.onTouched = function() {};
      cd.valueAccessor = this;
    }
    Rating.prototype.onKeydown = function(event) {
      if ([37, 38, 39, 40].indexOf(event.which) === -1) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      var sign = event.which === 38 || event.which === 39 ? 1 : -1;
      this.rate(this.value + sign);
    };
    Rating.prototype.ngOnInit = function() {
      this.max = typeof this.max !== 'undefined' ? this.max : 5;
      this.readonly = this.readonly === true;
      this.stateOn = typeof this.stateOn !== 'undefined' ? this.stateOn : 'glyphicon-star';
      this.stateOff = typeof this.stateOff !== 'undefined' ? this.stateOff : 'glyphicon-star-empty';
      this.titles = typeof this.titles !== 'undefined' && this.titles.length > 0 ? this.titles : ['one', 'two', 'three', 'four', 'five'];
      this.range = this.buildTemplateObjects(this.ratingStates, this.max);
    };
    Rating.prototype.writeValue = function(value) {
      if (value % 1 !== value) {
        this.value = Math.round(value);
        this.preValue = value;
        return;
      }
      this.preValue = value;
      this.value = value;
    };
    Rating.prototype.buildTemplateObjects = function(ratingStates, max) {
      ratingStates = ratingStates || [];
      var count = ratingStates.length || max;
      var result = [];
      for (var i = 0; i < count; i++) {
        result.push(Object.assign({
          index: i,
          stateOn: this.stateOn,
          stateOff: this.stateOff,
          title: this.titles[i] || i + 1
        }, ratingStates[i] || {}));
      }
      return result;
    };
    Rating.prototype.rate = function(value) {
      if (!this.readonly && value >= 0 && value <= this.range.length) {
        this.writeValue(value);
        this.cd.viewToModelUpdate(value);
      }
    };
    Rating.prototype.enter = function(value) {
      if (!this.readonly) {
        this.value = value;
        this.onHover.next(value);
      }
    };
    Rating.prototype.reset = function() {
      this.value = this.preValue;
      this.onLeave.next(this.value);
    };
    Rating.prototype.registerOnChange = function(fn) {
      this.onChange = fn;
    };
    Rating.prototype.registerOnTouched = function(fn) {
      this.onTouched = fn;
    };
    __decorate([core_1.Input(), __metadata('design:type', Number)], Rating.prototype, "max", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], Rating.prototype, "stateOn", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], Rating.prototype, "stateOff", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Rating.prototype, "readonly", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Array)], Rating.prototype, "titles", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Array)], Rating.prototype, "ratingStates", void 0);
    __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], Rating.prototype, "onHover", void 0);
    __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], Rating.prototype, "onLeave", void 0);
    __decorate([core_1.HostListener('keydown', ['$event']), __metadata('design:type', Function), __metadata('design:paramtypes', [KeyboardEvent]), __metadata('design:returntype', void 0)], Rating.prototype, "onKeydown", null);
    Rating = __decorate([core_1.Component({
      selector: 'rating[ngModel]',
      directives: [common_1.NgFor],
      template: "\n    <span (mouseleave)=\"reset()\" (keydown)=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"range.length\" [attr.aria-valuenow]=\"value\">\n      <template ngFor #r [ngForOf]=\"range\" #index=\"index\">\n        <span class=\"sr-only\">({{ index < value ? '*' : ' ' }})</span>\n        <i (mouseenter)=\"enter(index + 1)\" (click)=\"rate(index + 1)\" class=\"glyphicon\" [ngClass]=\"index < value ? r.stateOn : r.stateOff\" [title]=\"r.title\" ></i>\n      </template>\n    </span>\n  "
    }), __param(0, core_1.Self()), __metadata('design:paramtypes', [common_1.NgModel])], Rating);
    return Rating;
  })();
  exports.Rating = Rating;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/rating", ["./rating/rating.component"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var rating_component_1 = $__require('./rating/rating.component');
  exports.Rating = rating_component_1.Rating;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/tabs/tabset.component", ["angular2/core", "angular2/common", "../common"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var common_1 = $__require('angular2/common');
  var common_2 = $__require('../common');
  var Tabset = (function() {
    function Tabset() {
      this.tabs = [];
      this.classMap = {};
    }
    Object.defineProperty(Tabset.prototype, "vertical", {
      get: function() {
        return this._vertical;
      },
      set: function(value) {
        this._vertical = value;
        this.setClassMap();
      },
      enumerable: true,
      configurable: true
    });
    ;
    Object.defineProperty(Tabset.prototype, "justified", {
      get: function() {
        return this._justified;
      },
      set: function(value) {
        this._justified = value;
        this.setClassMap();
      },
      enumerable: true,
      configurable: true
    });
    ;
    Object.defineProperty(Tabset.prototype, "type", {
      get: function() {
        return this._type;
      },
      set: function(value) {
        this._type = value;
        this.setClassMap();
      },
      enumerable: true,
      configurable: true
    });
    ;
    Tabset.prototype.setClassMap = function() {
      this.classMap = (_a = {
        'nav-stacked': this.vertical,
        'nav-justified': this.justified
      }, _a['nav-' + (this.type || 'tabs')] = true, _a);
      var _a;
    };
    Tabset.prototype.ngOnInit = function() {
      this.type = this.type !== 'undefined' ? this.type : 'tabs';
    };
    Tabset.prototype.addTab = function(tab) {
      this.tabs.push(tab);
      tab.active = this.tabs.length === 1 && tab.active !== false;
    };
    Tabset.prototype.removeTab = function(tab) {
      var index = this.tabs.indexOf(tab);
      if (index === -1) {
        return;
      }
      if (tab.active && this.tabs.length > 1) {
        var newActiveIndex = index === this.tabs.length - 1 ? index - 1 : index + 1;
        this.tabs[newActiveIndex].active = true;
      }
      this.tabs.slice(index, 1);
    };
    __decorate([core_1.Input(), __metadata('design:type', Object)], Tabset.prototype, "vertical", null);
    __decorate([core_1.Input(), __metadata('design:type', Object)], Tabset.prototype, "justified", null);
    __decorate([core_1.Input(), __metadata('design:type', Object)], Tabset.prototype, "type", null);
    Tabset = __decorate([core_1.Component({
      selector: 'tabset',
      directives: [common_1.NgClass, common_2.NgTransclude],
      template: "\n    <ul class=\"nav\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\">\n        <li *ngFor=\"#tabz of tabs\" class=\"nav-item\"\n          [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\">\n          <a href class=\"nav-link\"\n            [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\n            (click)=\"tabz.active = true\">\n            <span [ngTransclude]=\"tabz.headingRef\">{{tabz.heading}}</span>\n          </a>\n        </li>\n    </ul>\n    <div class=\"tab-content\">\n      <ng-content></ng-content>\n    </div>\n  "
    }), __metadata('design:paramtypes', [])], Tabset);
    return Tabset;
  })();
  exports.Tabset = Tabset;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/tabs/tab.directive", ["angular2/core", "./tabset.component"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var tabset_component_1 = $__require('./tabset.component');
  var Tab = (function() {
    function Tab(tabset) {
      this.tabset = tabset;
      this.select = new core_1.EventEmitter();
      this.deselect = new core_1.EventEmitter();
      this.addClass = true;
      this.tabset.addTab(this);
    }
    Object.defineProperty(Tab.prototype, "active", {
      get: function() {
        return this._active;
      },
      set: function(active) {
        var _this = this;
        if (this.disabled && active || !active) {
          if (!active) {
            this._active = active;
          }
          this.deselect.emit(this);
          return;
        }
        this._active = active;
        this.select.emit(this);
        this.tabset.tabs.forEach(function(tab) {
          if (tab !== _this) {
            tab.active = false;
          }
        });
      },
      enumerable: true,
      configurable: true
    });
    Tab.prototype.ngOnDestroy = function() {
      this.tabset.removeTab(this);
    };
    __decorate([core_1.Input(), __metadata('design:type', String)], Tab.prototype, "heading", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Tab.prototype, "disabled", void 0);
    __decorate([core_1.HostBinding('class.active'), core_1.Input(), __metadata('design:type', Object)], Tab.prototype, "active", null);
    __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], Tab.prototype, "select", void 0);
    __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], Tab.prototype, "deselect", void 0);
    __decorate([core_1.HostBinding('class.tab-pane'), __metadata('design:type', Object)], Tab.prototype, "addClass", void 0);
    Tab = __decorate([core_1.Directive({selector: 'tab, [tab]'}), __metadata('design:paramtypes', [tabset_component_1.Tabset])], Tab);
    return Tab;
  })();
  exports.Tab = Tab;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/tabs/tab-heading.directive", ["angular2/core", "./tab.directive"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var tab_directive_1 = $__require('./tab.directive');
  var TabHeading = (function() {
    function TabHeading(templateRef, tab) {
      this.templateRef = templateRef;
      tab.headingRef = templateRef;
    }
    TabHeading = __decorate([core_1.Directive({selector: '[tab-heading]'}), __metadata('design:paramtypes', [core_1.TemplateRef, tab_directive_1.Tab])], TabHeading);
    return TabHeading;
  })();
  exports.TabHeading = TabHeading;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/tabs", ["./tabs/tab.directive", "./tabs/tabset.component", "./tabs/tab-heading.directive"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var tab_directive_1 = $__require('./tabs/tab.directive');
  var tabset_component_1 = $__require('./tabs/tabset.component');
  var tab_heading_directive_1 = $__require('./tabs/tab-heading.directive');
  var tab_directive_2 = $__require('./tabs/tab.directive');
  exports.Tab = tab_directive_2.Tab;
  var tabset_component_2 = $__require('./tabs/tabset.component');
  exports.Tabset = tabset_component_2.Tabset;
  var tab_heading_directive_2 = $__require('./tabs/tab-heading.directive');
  exports.TabHeading = tab_heading_directive_2.TabHeading;
  exports.TAB_DIRECTIVES = [tab_directive_1.Tab, tab_heading_directive_1.TabHeading, tabset_component_1.Tabset];
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/timepicker/timepicker.component", ["angular2/core", "angular2/common"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('angular2/core');
  var common_1 = $__require('angular2/common');
  exports.timepickerConfig = {
    hourStep: 1,
    minuteStep: 1,
    showMeridian: true,
    meridians: null,
    readonlyInput: false,
    mousewheel: true,
    arrowkeys: true,
    showSpinners: true,
    min: void 0,
    max: void 0
  };
  function isDefined(value) {
    return typeof value !== 'undefined';
  }
  function def(value, fn, defaultValue) {
    return fn(value) ? value : defaultValue;
  }
  function addMinutes(date, minutes) {
    var dt = new Date(date.getTime() + minutes * 60000);
    var newDate = new Date(date);
    newDate.setHours(dt.getHours(), dt.getMinutes());
    return newDate;
  }
  var Timepicker = (function() {
    function Timepicker(cd) {
      this.cd = cd;
      this.meridians = ['AM', 'PM'];
      this._selected = new Date();
      this.onChange = function(_) {};
      this.onTouched = function() {};
      cd.valueAccessor = this;
    }
    Object.defineProperty(Timepicker.prototype, "showMeridian", {
      get: function() {
        return this._showMeridian;
      },
      set: function(value) {
        this._showMeridian = value;
        if (true) {
          this.updateTemplate();
          return;
        }
        var hours = this.getHoursFromTemplate();
        var minutes = this.getMinutesFromTemplate();
        if (isDefined(hours) && isDefined(minutes)) {
          this.selected.setHours(hours);
          this.refresh();
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Timepicker.prototype, "selected", {
      get: function() {
        return this._selected;
      },
      set: function(v) {
        if (v) {
          this._selected = v;
          this.updateTemplate();
          this.cd.viewToModelUpdate(this.selected);
        }
      },
      enumerable: true,
      configurable: true
    });
    Timepicker.prototype.ngOnInit = function() {
      this.meridians = def(this.meridians, isDefined, exports.timepickerConfig.meridians) || ['AM', 'PM'];
      this.mousewheel = def(this.mousewheel, isDefined, exports.timepickerConfig.mousewheel);
      if (this.mousewheel) {
        this.setupMousewheelEvents();
      }
      this.arrowkeys = def(this.arrowkeys, isDefined, exports.timepickerConfig.arrowkeys);
      if (this.arrowkeys) {
        this.setupArrowkeyEvents();
      }
      this.readonlyInput = def(this.readonlyInput, isDefined, exports.timepickerConfig.readonlyInput);
      this.setupInputEvents();
      this.hourStep = def(this.hourStep, isDefined, exports.timepickerConfig.hourStep);
      this.minuteStep = def(this.minuteStep, isDefined, exports.timepickerConfig.minuteStep);
      this.min = def(this.min, isDefined, exports.timepickerConfig.min);
      this.max = def(this.max, isDefined, exports.timepickerConfig.max);
      this.showMeridian = def(this.showMeridian, isDefined, exports.timepickerConfig.showMeridian);
      this.showSpinners = def(this.showSpinners, isDefined, exports.timepickerConfig.showSpinners);
    };
    Timepicker.prototype.writeValue = function(v) {
      if (v === this.selected) {
        return;
      }
      if (v && v instanceof Date) {
        this.selected = v;
        return;
      }
      this.selected = v ? new Date(v) : null;
    };
    Timepicker.prototype.refresh = function(type) {
      this.updateTemplate();
      this.cd.viewToModelUpdate(this.selected);
    };
    Timepicker.prototype.updateTemplate = function(keyboardChange) {
      var hours = this.selected.getHours();
      var minutes = this.selected.getMinutes();
      if (this.showMeridian) {
        hours = (hours === 0 || hours === 12) ? 12 : hours % 12;
      }
      this.hours = this.pad(hours);
      this.minutes = this.pad(minutes);
      this.meridian = this.selected.getHours() < 12 ? this.meridians[0] : this.meridians[1];
    };
    Timepicker.prototype.getHoursFromTemplate = function() {
      var hours = parseInt(this.hours, 10);
      var valid = this.showMeridian ? (hours > 0 && hours < 13) : (hours >= 0 && hours < 24);
      if (!valid) {
        return undefined;
      }
      if (this.showMeridian) {
        if (hours === 12) {
          hours = 0;
        }
        if (this.meridian === this.meridians[1]) {
          hours = hours + 12;
        }
      }
      return hours;
    };
    Timepicker.prototype.getMinutesFromTemplate = function() {
      var minutes = parseInt(this.minutes, 10);
      return (minutes >= 0 && minutes < 60) ? minutes : undefined;
    };
    Timepicker.prototype.pad = function(value) {
      return (isDefined(value) && value.toString().length < 2) ? '0' + value : value.toString();
    };
    Timepicker.prototype.setupMousewheelEvents = function() {};
    Timepicker.prototype.setupArrowkeyEvents = function() {};
    Timepicker.prototype.setupInputEvents = function() {};
    Timepicker.prototype.updateHours = function() {
      if (this.readonlyInput) {
        return;
      }
      var hours = this.getHoursFromTemplate();
      var minutes = this.getMinutesFromTemplate();
      if (!isDefined(hours) || !isDefined(minutes)) {}
      this.selected.setHours(hours);
      if (this.selected < this.min || this.selected > this.max) {} else {
        this.refresh('h');
      }
    };
    Timepicker.prototype.hoursOnBlur = function(event) {
      if (this.readonlyInput) {
        return;
      }
      if (!this.invalidHours && parseInt(this.hours, 10) < 10) {
        this.hours = this.pad(this.hours);
      }
    };
    Timepicker.prototype.updateMinutes = function() {
      if (this.readonlyInput) {
        return;
      }
      var minutes = this.getMinutesFromTemplate();
      var hours = this.getHoursFromTemplate();
      if (!isDefined(minutes) || !isDefined(hours)) {}
      this.selected.setMinutes(minutes);
      if (this.selected < this.min || this.selected > this.max) {} else {
        this.refresh('m');
      }
    };
    Timepicker.prototype.minutesOnBlur = function(event) {
      if (this.readonlyInput) {
        return;
      }
      if (!this.invalidMinutes && parseInt(this.minutes, 10) < 10) {
        this.minutes = this.pad(this.minutes);
      }
    };
    Timepicker.prototype.noIncrementHours = function() {
      var incrementedSelected = addMinutes(this.selected, this.hourStep * 60);
      return incrementedSelected > this.max || (incrementedSelected < this.selected && incrementedSelected < this.min);
    };
    Timepicker.prototype.noDecrementHours = function() {
      var decrementedSelected = addMinutes(this.selected, -this.hourStep * 60);
      return decrementedSelected < this.min || (decrementedSelected > this.selected && decrementedSelected > this.max);
    };
    Timepicker.prototype.noIncrementMinutes = function() {
      var incrementedSelected = addMinutes(this.selected, this.minuteStep);
      return incrementedSelected > this.max || (incrementedSelected < this.selected && incrementedSelected < this.min);
    };
    Timepicker.prototype.noDecrementMinutes = function() {
      var decrementedSelected = addMinutes(this.selected, -this.minuteStep);
      return decrementedSelected < this.min || (decrementedSelected > this.selected && decrementedSelected > this.max);
    };
    Timepicker.prototype.addMinutesToSelected = function(minutes) {
      this.selected = addMinutes(this.selected, minutes);
      this.refresh();
    };
    Timepicker.prototype.noToggleMeridian = function() {
      if (this.selected.getHours() < 13) {
        return addMinutes(this.selected, 12 * 60) > this.max;
      } else {
        return addMinutes(this.selected, -12 * 60) < this.min;
      }
    };
    Timepicker.prototype.incrementHours = function() {
      if (!this.noIncrementHours()) {
        this.addMinutesToSelected(this.hourStep * 60);
      }
    };
    Timepicker.prototype.decrementHours = function() {
      if (!this.noDecrementHours()) {
        this.addMinutesToSelected(-this.hourStep * 60);
      }
    };
    Timepicker.prototype.incrementMinutes = function() {
      if (!this.noIncrementMinutes()) {
        this.addMinutesToSelected(this.minuteStep);
      }
    };
    Timepicker.prototype.decrementMinutes = function() {
      if (!this.noDecrementMinutes()) {
        this.addMinutesToSelected(-this.minuteStep);
      }
    };
    Timepicker.prototype.toggleMeridian = function() {
      if (!this.noToggleMeridian()) {
        var sign = this.selected.getHours() < 12 ? 1 : -1;
        this.addMinutesToSelected(12 * 60 * sign);
      }
    };
    Timepicker.prototype.registerOnChange = function(fn) {
      this.onChange = fn;
    };
    Timepicker.prototype.registerOnTouched = function(fn) {
      this.onTouched = fn;
    };
    __decorate([core_1.Input(), __metadata('design:type', Number)], Timepicker.prototype, "hourStep", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Number)], Timepicker.prototype, "minuteStep", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Timepicker.prototype, "readonlyInput", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Timepicker.prototype, "mousewheel", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Timepicker.prototype, "arrowkeys", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Timepicker.prototype, "showSpinners", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Date)], Timepicker.prototype, "min", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Date)], Timepicker.prototype, "max", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Array)], Timepicker.prototype, "meridians", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Object)], Timepicker.prototype, "showMeridian", null);
    Timepicker = __decorate([core_1.Component({
      selector: 'timepicker[ngModel]',
      directives: [common_1.NgClass],
      template: "\n    <table>\n      <tbody>\n        <tr class=\"text-center\" [ngClass]=\"{hidden: !showSpinners}\">\n          <td><a (click)=\"incrementHours()\" [ngClass]=\"{disabled: noIncrementHours()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n          <td>&nbsp;</td>\n          <td><a (click)=\"incrementMinutes()\" [ngClass]=\"{disabled: noIncrementMinutes()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n          <td [ngClass]=\"{hidden: !showMeridian}\" [hidden]=\"!showMeridian\"></td>\n        </tr>\n        <tr>\n          <td class=\"form-group\" [ngClass]=\"{'has-error': invalidHours}\">\n            <input style=\"width:50px;\" type=\"text\" [(ngModel)]=\"hours\" (change)=\"updateHours()\" class=\"form-control text-center\" [readonly]=\"readonlyInput\" (blur)=\"hoursOnBlur($event)\" maxlength=\"2\">\n          </td>\n          <td>:</td>\n          <td class=\"form-group\" [ngClass]=\"{'has-error': invalidMinutes}\">\n            <input style=\"width:50px;\" type=\"text\" [(ngModel)]=\"minutes\" (change)=\"updateMinutes()\" class=\"form-control text-center\" [readonly]=\"readonlyInput\" (blur)=\"minutesOnBlur($event)\" maxlength=\"2\">\n          </td>\n          <td [ngClass]=\"{hidden: !showMeridian}\" [hidden]=\"!showMeridian\"><button type=\"button\" [ngClass]=\"{disabled: noToggleMeridian()}\" class=\"btn btn-default text-center\" (click)=\"toggleMeridian()\">{{meridian}}</button></td>\n        </tr>\n        <tr class=\"text-center\" [ngClass]=\"{hidden: !showSpinners}\">\n          <td><a (click)=\"decrementHours()\" [ngClass]=\"{disabled: noDecrementHours()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n          <td>&nbsp;</td>\n          <td><a (click)=\"decrementMinutes()\" [ngClass]=\"{disabled: noDecrementMinutes()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n          <td [ngClass]=\"{hidden: !showMeridian}\" [hidden]=\"!showMeridian\"></td>\n        </tr>\n      </tbody>\n    </table>\n  "
    }), __param(0, core_1.Self()), __metadata('design:paramtypes', [common_1.NgModel])], Timepicker);
    return Timepicker;
  })();
  exports.Timepicker = Timepicker;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/timepicker", ["./timepicker/timepicker.component"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var timepicker_component_1 = $__require('./timepicker/timepicker.component');
  exports.Timepicker = timepicker_component_1.Timepicker;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/tooltip/tooltip.directive", ["angular2/core", "./tooltip-options.class", "./tooltip-container.component"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var tooltip_options_class_1 = $__require('./tooltip-options.class');
  var tooltip_container_component_1 = $__require('./tooltip-container.component');
  var Tooltip = (function() {
    function Tooltip(element, loader) {
      this.element = element;
      this.loader = loader;
      this.placement = 'top';
      this.visible = false;
    }
    Tooltip.prototype.ngOnInit = function() {};
    Tooltip.prototype.show = function() {
      var _this = this;
      if (this.visible) {
        return;
      }
      this.visible = true;
      var options = new tooltip_options_class_1.TooltipOptions({
        content: this.content,
        placement: this.placement
      });
      var binding = core_1.Injector.resolve([new core_1.Provider(tooltip_options_class_1.TooltipOptions, {useValue: options})]);
      this.tooltip = this.loader.loadNextToLocation(tooltip_container_component_1.TooltipContainer, this.element, binding).then(function(componentRef) {
        componentRef.instance.position(_this.element);
        return componentRef;
      });
    };
    Tooltip.prototype.hide = function() {
      if (!this.visible) {
        return;
      }
      this.visible = false;
      this.tooltip.then(function(componentRef) {
        componentRef.dispose();
        return componentRef;
      });
    };
    __decorate([core_1.Input('tooltip'), __metadata('design:type', String)], Tooltip.prototype, "content", void 0);
    __decorate([core_1.Input('tooltipPlacement'), __metadata('design:type', String)], Tooltip.prototype, "placement", void 0);
    __decorate([core_1.Input('tooltipIsOpen'), __metadata('design:type', Boolean)], Tooltip.prototype, "isOpen", void 0);
    __decorate([core_1.Input('tooltipEnable'), __metadata('design:type', Boolean)], Tooltip.prototype, "enable", void 0);
    __decorate([core_1.Input('tooltipAppendToBody'), __metadata('design:type', Boolean)], Tooltip.prototype, "appendToBody", void 0);
    __decorate([core_1.HostListener('focusin', ['$event', '$target']), core_1.HostListener('mouseenter', ['$event', '$target']), __metadata('design:type', Function), __metadata('design:paramtypes', []), __metadata('design:returntype', void 0)], Tooltip.prototype, "show", null);
    __decorate([core_1.HostListener('focusout', ['$event', '$target']), core_1.HostListener('mouseleave', ['$event', '$target']), __metadata('design:type', Function), __metadata('design:paramtypes', []), __metadata('design:returntype', void 0)], Tooltip.prototype, "hide", null);
    Tooltip = __decorate([core_1.Directive({selector: '[tooltip]'}), __metadata('design:paramtypes', [core_1.ElementRef, core_1.DynamicComponentLoader])], Tooltip);
    return Tooltip;
  })();
  exports.Tooltip = Tooltip;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/tooltip/tooltip-options.class", ["angular2/core"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var TooltipOptions = (function() {
    function TooltipOptions(options) {
      Object.assign(this, options);
    }
    TooltipOptions = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [Object])], TooltipOptions);
    return TooltipOptions;
  })();
  exports.TooltipOptions = TooltipOptions;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/tooltip/tooltip-container.component", ["angular2/core", "angular2/common", "../position", "./tooltip-options.class"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('angular2/core');
  var common_1 = $__require('angular2/common');
  var position_1 = $__require('../position');
  var tooltip_options_class_1 = $__require('./tooltip-options.class');
  var TooltipContainer = (function() {
    function TooltipContainer(element, options) {
      this.element = element;
      Object.assign(this, options);
      this.classMap = {'in': false};
      this.classMap[options.placement] = true;
    }
    TooltipContainer.prototype.position = function(hostEl) {
      this.display = 'block';
      this.top = '0px';
      this.left = '0px';
      var p = position_1.positionService.positionElements(hostEl.nativeElement, this.element.nativeElement.children[0], this.placement, this.appendToBody);
      this.top = p.top + 'px';
      this.left = p.left + 'px';
      this.classMap['in'] = true;
    };
    TooltipContainer = __decorate([core_1.Component({
      selector: 'tooltip-container',
      directives: [common_1.NgClass, common_1.NgStyle],
      template: "\n    <div class=\"tooltip\" role=\"tooltip\"\n     [ngStyle]=\"{top: top, left: left, display: display}\"\n     [ngClass]=\"classMap\" >\n      <div class=\"tooltip-arrow\"></div>\n      <div class=\"tooltip-inner\">\n        {{content}}\n      </div>\n    </div>"
    }), __param(1, core_1.Inject(tooltip_options_class_1.TooltipOptions)), __metadata('design:paramtypes', [core_1.ElementRef, tooltip_options_class_1.TooltipOptions])], TooltipContainer);
    return TooltipContainer;
  })();
  exports.TooltipContainer = TooltipContainer;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/tooltip", ["./tooltip/tooltip.directive", "./tooltip/tooltip-container.component"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var tooltip_directive_1 = $__require('./tooltip/tooltip.directive');
  var tooltip_container_component_1 = $__require('./tooltip/tooltip-container.component');
  var tooltip_directive_2 = $__require('./tooltip/tooltip.directive');
  exports.Tooltip = tooltip_directive_2.Tooltip;
  var tooltip_container_component_2 = $__require('./tooltip/tooltip-container.component');
  exports.TooltipContainer = tooltip_container_component_2.TooltipContainer;
  exports.TOOLTIP_DIRECTIVES = [tooltip_directive_1.Tooltip, tooltip_container_component_1.TooltipContainer];
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/typeahead/typeahead.directive", ["angular2/core", "angular2/common", "./typeahead-utils", "./typeahead-container.component", "./typeahead-options.class"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var common_1 = $__require('angular2/common');
  function setProperty(renderer, elementRef, propName, propValue) {
    renderer.setElementProperty(elementRef.nativeElement, propName, propValue);
  }
  var typeahead_utils_1 = $__require('./typeahead-utils');
  var typeahead_container_component_1 = $__require('./typeahead-container.component');
  var typeahead_options_class_1 = $__require('./typeahead-options.class');
  var Typeahead = (function() {
    function Typeahead(cd, element, renderer, loader) {
      this.cd = cd;
      this.element = element;
      this.renderer = renderer;
      this.loader = loader;
      this.typeaheadLoading = new core_1.EventEmitter();
      this.typeaheadNoResults = new core_1.EventEmitter();
      this.typeaheadOnSelect = new core_1.EventEmitter();
      this.typeaheadAsync = null;
      this.typeaheadLatinize = true;
      this.typeaheadSingleWords = true;
      this.typeaheadWordDelimiters = ' ';
      this.typeaheadPhraseDelimiters = '\'"';
      this._matches = [];
      this.placement = 'bottom-left';
    }
    Object.defineProperty(Typeahead.prototype, "matches", {
      get: function() {
        return this._matches;
      },
      enumerable: true,
      configurable: true
    });
    Typeahead.prototype.debounce = function(func, wait) {
      var timeout;
      var args;
      var timestamp;
      var waitOriginal = wait;
      return function() {
        args = [].slice.call(arguments, 0);
        timestamp = Date.now();
        wait = this.container ? waitOriginal : this.typeaheadWaitMs;
        var later = function() {
          var last = Date.now() - timestamp;
          if (last < wait) {
            timeout = setTimeout(later, wait - last);
          } else {
            timeout = null;
            func.apply(this, args);
          }
        };
        if (!timeout) {
          timeout = setTimeout(later, wait);
        }
      };
    };
    Typeahead.prototype.processMatches = function() {
      this._matches = [];
      if (this.cd.model.toString().length >= this.typeaheadMinLength) {
        var normalizedQuery = (this.typeaheadLatinize ? typeahead_utils_1.TypeaheadUtils.latinize(this.cd.model) : this.cd.model).toString().toLowerCase();
        normalizedQuery = this.typeaheadSingleWords ? typeahead_utils_1.TypeaheadUtils.tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters) : normalizedQuery;
        for (var i = 0; i < this.typeahead.length; i++) {
          var match = void 0;
          if (typeof this.typeahead[i] === 'object' && this.typeahead[i][this.typeaheadOptionField]) {
            match = this.typeaheadLatinize ? typeahead_utils_1.TypeaheadUtils.latinize(this.typeahead[i][this.typeaheadOptionField].toString()) : this.typeahead[i][this.typeaheadOptionField].toString();
          }
          if (typeof this.typeahead[i] === 'string') {
            match = this.typeaheadLatinize ? typeahead_utils_1.TypeaheadUtils.latinize(this.typeahead[i].toString()) : this.typeahead[i].toString();
          }
          if (!match) {
            console.log('Invalid match type', typeof this.typeahead[i], this.typeaheadOptionField);
            continue;
          }
          if (this.testMatch(match.toLowerCase(), normalizedQuery)) {
            this._matches.push(this.typeahead[i]);
            if (this._matches.length > this.typeaheadOptionsLimit - 1) {
              break;
            }
          }
        }
      }
    };
    Typeahead.prototype.testMatch = function(match, test) {
      var spaceLength;
      if (typeof test === 'object') {
        spaceLength = test.length;
        for (var i = 0; i < spaceLength; i += 1) {
          if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
            return false;
          }
        }
        return true;
      } else {
        return match.indexOf(test) >= 0;
      }
    };
    Typeahead.prototype.finalizeAsyncCall = function() {
      this.typeaheadLoading.next(false);
      this.typeaheadNoResults.next(this.cd.model.toString().length >= this.typeaheadMinLength && this.matches.length <= 0);
      if (this.cd.model.toString().length <= 0 || this._matches.length <= 0) {
        this.hide();
        return;
      }
      if (this.container && this._matches.length > 0) {
        var normalizedQuery = (this.typeaheadLatinize ? typeahead_utils_1.TypeaheadUtils.latinize(this.cd.model) : this.cd.model).toString().toLowerCase();
        this.container.query = this.typeaheadSingleWords ? typeahead_utils_1.TypeaheadUtils.tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters) : normalizedQuery;
        this.container.matches = this._matches;
      }
      if (!this.container && this._matches.length > 0) {
        this.show(this._matches);
      }
    };
    Typeahead.prototype.ngOnInit = function() {
      var _this = this;
      this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
      this.typeaheadMinLength = this.typeaheadMinLength || 1;
      this.typeaheadWaitMs = this.typeaheadWaitMs || 0;
      if (this.typeaheadAsync === null && typeof this.typeahead !== 'function') {
        this.typeaheadAsync = false;
      }
      if (typeof this.typeahead === 'function') {
        this.typeaheadAsync = true;
      }
      if (this.typeaheadAsync === true) {
        this.debouncer = this.debounce(function() {
          if (typeof _this.typeahead === 'function') {
            _this.typeahead().then(function(matches) {
              _this._matches = [];
              if (_this.cd.model.toString().length >= _this.typeaheadMinLength) {
                for (var i = 0; i < matches.length; i++) {
                  _this._matches.push(matches[i]);
                  if (_this._matches.length > _this.typeaheadOptionsLimit - 1) {
                    break;
                  }
                }
              }
              _this.finalizeAsyncCall();
            });
          }
          if (typeof _this.typeahead === 'object' && _this.typeahead.length) {
            _this.processMatches();
            _this.finalizeAsyncCall();
          }
        }, 100);
      }
    };
    Typeahead.prototype.onChange = function(e) {
      if (this.container) {
        if (e.keyCode === 27) {
          this.hide();
          return;
        }
        if (e.keyCode === 38) {
          this.container.prevActiveMatch();
          return;
        }
        if (e.keyCode === 40) {
          this.container.nextActiveMatch();
          return;
        }
        if (e.keyCode === 13) {
          this.container.selectActiveMatch();
          return;
        }
      }
      this.typeaheadLoading.next(true);
      if (this.typeaheadAsync === true) {
        this.debouncer();
      }
      if (this.typeaheadAsync === false) {
        this.processMatches();
        this.finalizeAsyncCall();
      }
    };
    Typeahead.prototype.changeModel = function(value) {
      var valueStr = ((typeof value === 'object' && this.typeaheadOptionField) ? value[this.typeaheadOptionField] : value).toString();
      this.cd.viewToModelUpdate(valueStr);
      setProperty(this.renderer, this.element, 'value', valueStr);
      this.hide();
    };
    Typeahead.prototype.show = function(matches) {
      var _this = this;
      var options = new typeahead_options_class_1.TypeaheadOptions({
        placement: this.placement,
        animation: false
      });
      var binding = core_1.Injector.resolve([new core_1.Provider(typeahead_options_class_1.TypeaheadOptions, {useValue: options})]);
      this.popup = this.loader.loadNextToLocation(typeahead_container_component_1.TypeaheadContainer, this.element, binding).then(function(componentRef) {
        componentRef.instance.position(_this.element);
        _this.container = componentRef.instance;
        _this.container.parent = _this;
        var normalizedQuery = (_this.typeaheadLatinize ? typeahead_utils_1.TypeaheadUtils.latinize(_this.cd.model) : _this.cd.model).toString().toLowerCase();
        _this.container.query = _this.typeaheadSingleWords ? typeahead_utils_1.TypeaheadUtils.tokenize(normalizedQuery, _this.typeaheadWordDelimiters, _this.typeaheadPhraseDelimiters) : normalizedQuery;
        _this.container.matches = matches;
        _this.container.field = _this.typeaheadOptionField;
        _this.element.nativeElement.focus();
        return componentRef;
      });
    };
    Typeahead.prototype.hide = function() {
      var _this = this;
      if (this.container) {
        this.popup.then(function(componentRef) {
          componentRef.dispose();
          _this.container = null;
          return componentRef;
        });
      }
    };
    __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], Typeahead.prototype, "typeaheadLoading", void 0);
    __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], Typeahead.prototype, "typeaheadNoResults", void 0);
    __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], Typeahead.prototype, "typeaheadOnSelect", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Object)], Typeahead.prototype, "typeahead", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Number)], Typeahead.prototype, "typeaheadMinLength", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Number)], Typeahead.prototype, "typeaheadWaitMs", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Number)], Typeahead.prototype, "typeaheadOptionsLimit", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], Typeahead.prototype, "typeaheadOptionField", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Typeahead.prototype, "typeaheadAsync", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Typeahead.prototype, "typeaheadLatinize", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Typeahead.prototype, "typeaheadSingleWords", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], Typeahead.prototype, "typeaheadWordDelimiters", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], Typeahead.prototype, "typeaheadPhraseDelimiters", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Typeahead.prototype, "typeaheadAppendToBody", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Typeahead.prototype, "typeaheadEditable", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Typeahead.prototype, "typeaheadFocusFirst", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Object)], Typeahead.prototype, "typeaheadInputFormatter", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Typeahead.prototype, "typeaheadSelectOnExact", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Typeahead.prototype, "typeaheadSelectOnBlur", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], Typeahead.prototype, "typeaheadFocusOnSelect", void 0);
    __decorate([core_1.HostListener('keyup', ['$event']), __metadata('design:type', Function), __metadata('design:paramtypes', [KeyboardEvent]), __metadata('design:returntype', void 0)], Typeahead.prototype, "onChange", null);
    Typeahead = __decorate([core_1.Directive({selector: 'typeahead[ngModel], [ngModel][typeahead]'}), __metadata('design:paramtypes', [common_1.NgModel, core_1.ElementRef, core_1.Renderer, core_1.DynamicComponentLoader])], Typeahead);
    return Typeahead;
  })();
  exports.Typeahead = Typeahead;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/typeahead/latin-map", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports.latinMap = {
    'Á': 'A',
    'Ă': 'A',
    'Ắ': 'A',
    'Ặ': 'A',
    'Ằ': 'A',
    'Ẳ': 'A',
    'Ẵ': 'A',
    'Ǎ': 'A',
    'Â': 'A',
    'Ấ': 'A',
    'Ậ': 'A',
    'Ầ': 'A',
    'Ẩ': 'A',
    'Ẫ': 'A',
    'Ä': 'A',
    'Ǟ': 'A',
    'Ȧ': 'A',
    'Ǡ': 'A',
    'Ạ': 'A',
    'Ȁ': 'A',
    'À': 'A',
    'Ả': 'A',
    'Ȃ': 'A',
    'Ā': 'A',
    'Ą': 'A',
    'Å': 'A',
    'Ǻ': 'A',
    'Ḁ': 'A',
    'Ⱥ': 'A',
    'Ã': 'A',
    'Ꜳ': 'AA',
    'Æ': 'AE',
    'Ǽ': 'AE',
    'Ǣ': 'AE',
    'Ꜵ': 'AO',
    'Ꜷ': 'AU',
    'Ꜹ': 'AV',
    'Ꜻ': 'AV',
    'Ꜽ': 'AY',
    'Ḃ': 'B',
    'Ḅ': 'B',
    'Ɓ': 'B',
    'Ḇ': 'B',
    'Ƀ': 'B',
    'Ƃ': 'B',
    'Ć': 'C',
    'Č': 'C',
    'Ç': 'C',
    'Ḉ': 'C',
    'Ĉ': 'C',
    'Ċ': 'C',
    'Ƈ': 'C',
    'Ȼ': 'C',
    'Ď': 'D',
    'Ḑ': 'D',
    'Ḓ': 'D',
    'Ḋ': 'D',
    'Ḍ': 'D',
    'Ɗ': 'D',
    'Ḏ': 'D',
    'ǲ': 'D',
    'ǅ': 'D',
    'Đ': 'D',
    'Ƌ': 'D',
    'Ǳ': 'DZ',
    'Ǆ': 'DZ',
    'É': 'E',
    'Ĕ': 'E',
    'Ě': 'E',
    'Ȩ': 'E',
    'Ḝ': 'E',
    'Ê': 'E',
    'Ế': 'E',
    'Ệ': 'E',
    'Ề': 'E',
    'Ể': 'E',
    'Ễ': 'E',
    'Ḙ': 'E',
    'Ë': 'E',
    'Ė': 'E',
    'Ẹ': 'E',
    'Ȅ': 'E',
    'È': 'E',
    'Ẻ': 'E',
    'Ȇ': 'E',
    'Ē': 'E',
    'Ḗ': 'E',
    'Ḕ': 'E',
    'Ę': 'E',
    'Ɇ': 'E',
    'Ẽ': 'E',
    'Ḛ': 'E',
    'Ꝫ': 'ET',
    'Ḟ': 'F',
    'Ƒ': 'F',
    'Ǵ': 'G',
    'Ğ': 'G',
    'Ǧ': 'G',
    'Ģ': 'G',
    'Ĝ': 'G',
    'Ġ': 'G',
    'Ɠ': 'G',
    'Ḡ': 'G',
    'Ǥ': 'G',
    'Ḫ': 'H',
    'Ȟ': 'H',
    'Ḩ': 'H',
    'Ĥ': 'H',
    'Ⱨ': 'H',
    'Ḧ': 'H',
    'Ḣ': 'H',
    'Ḥ': 'H',
    'Ħ': 'H',
    'Í': 'I',
    'Ĭ': 'I',
    'Ǐ': 'I',
    'Î': 'I',
    'Ï': 'I',
    'Ḯ': 'I',
    'İ': 'I',
    'Ị': 'I',
    'Ȉ': 'I',
    'Ì': 'I',
    'Ỉ': 'I',
    'Ȋ': 'I',
    'Ī': 'I',
    'Į': 'I',
    'Ɨ': 'I',
    'Ĩ': 'I',
    'Ḭ': 'I',
    'Ꝺ': 'D',
    'Ꝼ': 'F',
    'Ᵹ': 'G',
    'Ꞃ': 'R',
    'Ꞅ': 'S',
    'Ꞇ': 'T',
    'Ꝭ': 'IS',
    'Ĵ': 'J',
    'Ɉ': 'J',
    'Ḱ': 'K',
    'Ǩ': 'K',
    'Ķ': 'K',
    'Ⱪ': 'K',
    'Ꝃ': 'K',
    'Ḳ': 'K',
    'Ƙ': 'K',
    'Ḵ': 'K',
    'Ꝁ': 'K',
    'Ꝅ': 'K',
    'Ĺ': 'L',
    'Ƚ': 'L',
    'Ľ': 'L',
    'Ļ': 'L',
    'Ḽ': 'L',
    'Ḷ': 'L',
    'Ḹ': 'L',
    'Ⱡ': 'L',
    'Ꝉ': 'L',
    'Ḻ': 'L',
    'Ŀ': 'L',
    'Ɫ': 'L',
    'ǈ': 'L',
    'Ł': 'L',
    'Ǉ': 'LJ',
    'Ḿ': 'M',
    'Ṁ': 'M',
    'Ṃ': 'M',
    'Ɱ': 'M',
    'Ń': 'N',
    'Ň': 'N',
    'Ņ': 'N',
    'Ṋ': 'N',
    'Ṅ': 'N',
    'Ṇ': 'N',
    'Ǹ': 'N',
    'Ɲ': 'N',
    'Ṉ': 'N',
    'Ƞ': 'N',
    'ǋ': 'N',
    'Ñ': 'N',
    'Ǌ': 'NJ',
    'Ó': 'O',
    'Ŏ': 'O',
    'Ǒ': 'O',
    'Ô': 'O',
    'Ố': 'O',
    'Ộ': 'O',
    'Ồ': 'O',
    'Ổ': 'O',
    'Ỗ': 'O',
    'Ö': 'O',
    'Ȫ': 'O',
    'Ȯ': 'O',
    'Ȱ': 'O',
    'Ọ': 'O',
    'Ő': 'O',
    'Ȍ': 'O',
    'Ò': 'O',
    'Ỏ': 'O',
    'Ơ': 'O',
    'Ớ': 'O',
    'Ợ': 'O',
    'Ờ': 'O',
    'Ở': 'O',
    'Ỡ': 'O',
    'Ȏ': 'O',
    'Ꝋ': 'O',
    'Ꝍ': 'O',
    'Ō': 'O',
    'Ṓ': 'O',
    'Ṑ': 'O',
    'Ɵ': 'O',
    'Ǫ': 'O',
    'Ǭ': 'O',
    'Ø': 'O',
    'Ǿ': 'O',
    'Õ': 'O',
    'Ṍ': 'O',
    'Ṏ': 'O',
    'Ȭ': 'O',
    'Ƣ': 'OI',
    'Ꝏ': 'OO',
    'Ɛ': 'E',
    'Ɔ': 'O',
    'Ȣ': 'OU',
    'Ṕ': 'P',
    'Ṗ': 'P',
    'Ꝓ': 'P',
    'Ƥ': 'P',
    'Ꝕ': 'P',
    'Ᵽ': 'P',
    'Ꝑ': 'P',
    'Ꝙ': 'Q',
    'Ꝗ': 'Q',
    'Ŕ': 'R',
    'Ř': 'R',
    'Ŗ': 'R',
    'Ṙ': 'R',
    'Ṛ': 'R',
    'Ṝ': 'R',
    'Ȑ': 'R',
    'Ȓ': 'R',
    'Ṟ': 'R',
    'Ɍ': 'R',
    'Ɽ': 'R',
    'Ꜿ': 'C',
    'Ǝ': 'E',
    'Ś': 'S',
    'Ṥ': 'S',
    'Š': 'S',
    'Ṧ': 'S',
    'Ş': 'S',
    'Ŝ': 'S',
    'Ș': 'S',
    'Ṡ': 'S',
    'Ṣ': 'S',
    'Ṩ': 'S',
    'Ť': 'T',
    'Ţ': 'T',
    'Ṱ': 'T',
    'Ț': 'T',
    'Ⱦ': 'T',
    'Ṫ': 'T',
    'Ṭ': 'T',
    'Ƭ': 'T',
    'Ṯ': 'T',
    'Ʈ': 'T',
    'Ŧ': 'T',
    'Ɐ': 'A',
    'Ꞁ': 'L',
    'Ɯ': 'M',
    'Ʌ': 'V',
    'Ꜩ': 'TZ',
    'Ú': 'U',
    'Ŭ': 'U',
    'Ǔ': 'U',
    'Û': 'U',
    'Ṷ': 'U',
    'Ü': 'U',
    'Ǘ': 'U',
    'Ǚ': 'U',
    'Ǜ': 'U',
    'Ǖ': 'U',
    'Ṳ': 'U',
    'Ụ': 'U',
    'Ű': 'U',
    'Ȕ': 'U',
    'Ù': 'U',
    'Ủ': 'U',
    'Ư': 'U',
    'Ứ': 'U',
    'Ự': 'U',
    'Ừ': 'U',
    'Ử': 'U',
    'Ữ': 'U',
    'Ȗ': 'U',
    'Ū': 'U',
    'Ṻ': 'U',
    'Ų': 'U',
    'Ů': 'U',
    'Ũ': 'U',
    'Ṹ': 'U',
    'Ṵ': 'U',
    'Ꝟ': 'V',
    'Ṿ': 'V',
    'Ʋ': 'V',
    'Ṽ': 'V',
    'Ꝡ': 'VY',
    'Ẃ': 'W',
    'Ŵ': 'W',
    'Ẅ': 'W',
    'Ẇ': 'W',
    'Ẉ': 'W',
    'Ẁ': 'W',
    'Ⱳ': 'W',
    'Ẍ': 'X',
    'Ẋ': 'X',
    'Ý': 'Y',
    'Ŷ': 'Y',
    'Ÿ': 'Y',
    'Ẏ': 'Y',
    'Ỵ': 'Y',
    'Ỳ': 'Y',
    'Ƴ': 'Y',
    'Ỷ': 'Y',
    'Ỿ': 'Y',
    'Ȳ': 'Y',
    'Ɏ': 'Y',
    'Ỹ': 'Y',
    'Ź': 'Z',
    'Ž': 'Z',
    'Ẑ': 'Z',
    'Ⱬ': 'Z',
    'Ż': 'Z',
    'Ẓ': 'Z',
    'Ȥ': 'Z',
    'Ẕ': 'Z',
    'Ƶ': 'Z',
    'Ĳ': 'IJ',
    'Œ': 'OE',
    'ᴀ': 'A',
    'ᴁ': 'AE',
    'ʙ': 'B',
    'ᴃ': 'B',
    'ᴄ': 'C',
    'ᴅ': 'D',
    'ᴇ': 'E',
    'ꜰ': 'F',
    'ɢ': 'G',
    'ʛ': 'G',
    'ʜ': 'H',
    'ɪ': 'I',
    'ʁ': 'R',
    'ᴊ': 'J',
    'ᴋ': 'K',
    'ʟ': 'L',
    'ᴌ': 'L',
    'ᴍ': 'M',
    'ɴ': 'N',
    'ᴏ': 'O',
    'ɶ': 'OE',
    'ᴐ': 'O',
    'ᴕ': 'OU',
    'ᴘ': 'P',
    'ʀ': 'R',
    'ᴎ': 'N',
    'ᴙ': 'R',
    'ꜱ': 'S',
    'ᴛ': 'T',
    'ⱻ': 'E',
    'ᴚ': 'R',
    'ᴜ': 'U',
    'ᴠ': 'V',
    'ᴡ': 'W',
    'ʏ': 'Y',
    'ᴢ': 'Z',
    'á': 'a',
    'ă': 'a',
    'ắ': 'a',
    'ặ': 'a',
    'ằ': 'a',
    'ẳ': 'a',
    'ẵ': 'a',
    'ǎ': 'a',
    'â': 'a',
    'ấ': 'a',
    'ậ': 'a',
    'ầ': 'a',
    'ẩ': 'a',
    'ẫ': 'a',
    'ä': 'a',
    'ǟ': 'a',
    'ȧ': 'a',
    'ǡ': 'a',
    'ạ': 'a',
    'ȁ': 'a',
    'à': 'a',
    'ả': 'a',
    'ȃ': 'a',
    'ā': 'a',
    'ą': 'a',
    'ᶏ': 'a',
    'ẚ': 'a',
    'å': 'a',
    'ǻ': 'a',
    'ḁ': 'a',
    'ⱥ': 'a',
    'ã': 'a',
    'ꜳ': 'aa',
    'æ': 'ae',
    'ǽ': 'ae',
    'ǣ': 'ae',
    'ꜵ': 'ao',
    'ꜷ': 'au',
    'ꜹ': 'av',
    'ꜻ': 'av',
    'ꜽ': 'ay',
    'ḃ': 'b',
    'ḅ': 'b',
    'ɓ': 'b',
    'ḇ': 'b',
    'ᵬ': 'b',
    'ᶀ': 'b',
    'ƀ': 'b',
    'ƃ': 'b',
    'ɵ': 'o',
    'ć': 'c',
    'č': 'c',
    'ç': 'c',
    'ḉ': 'c',
    'ĉ': 'c',
    'ɕ': 'c',
    'ċ': 'c',
    'ƈ': 'c',
    'ȼ': 'c',
    'ď': 'd',
    'ḑ': 'd',
    'ḓ': 'd',
    'ȡ': 'd',
    'ḋ': 'd',
    'ḍ': 'd',
    'ɗ': 'd',
    'ᶑ': 'd',
    'ḏ': 'd',
    'ᵭ': 'd',
    'ᶁ': 'd',
    'đ': 'd',
    'ɖ': 'd',
    'ƌ': 'd',
    'ı': 'i',
    'ȷ': 'j',
    'ɟ': 'j',
    'ʄ': 'j',
    'ǳ': 'dz',
    'ǆ': 'dz',
    'é': 'e',
    'ĕ': 'e',
    'ě': 'e',
    'ȩ': 'e',
    'ḝ': 'e',
    'ê': 'e',
    'ế': 'e',
    'ệ': 'e',
    'ề': 'e',
    'ể': 'e',
    'ễ': 'e',
    'ḙ': 'e',
    'ë': 'e',
    'ė': 'e',
    'ẹ': 'e',
    'ȅ': 'e',
    'è': 'e',
    'ẻ': 'e',
    'ȇ': 'e',
    'ē': 'e',
    'ḗ': 'e',
    'ḕ': 'e',
    'ⱸ': 'e',
    'ę': 'e',
    'ᶒ': 'e',
    'ɇ': 'e',
    'ẽ': 'e',
    'ḛ': 'e',
    'ꝫ': 'et',
    'ḟ': 'f',
    'ƒ': 'f',
    'ᵮ': 'f',
    'ᶂ': 'f',
    'ǵ': 'g',
    'ğ': 'g',
    'ǧ': 'g',
    'ģ': 'g',
    'ĝ': 'g',
    'ġ': 'g',
    'ɠ': 'g',
    'ḡ': 'g',
    'ᶃ': 'g',
    'ǥ': 'g',
    'ḫ': 'h',
    'ȟ': 'h',
    'ḩ': 'h',
    'ĥ': 'h',
    'ⱨ': 'h',
    'ḧ': 'h',
    'ḣ': 'h',
    'ḥ': 'h',
    'ɦ': 'h',
    'ẖ': 'h',
    'ħ': 'h',
    'ƕ': 'hv',
    'í': 'i',
    'ĭ': 'i',
    'ǐ': 'i',
    'î': 'i',
    'ï': 'i',
    'ḯ': 'i',
    'ị': 'i',
    'ȉ': 'i',
    'ì': 'i',
    'ỉ': 'i',
    'ȋ': 'i',
    'ī': 'i',
    'į': 'i',
    'ᶖ': 'i',
    'ɨ': 'i',
    'ĩ': 'i',
    'ḭ': 'i',
    'ꝺ': 'd',
    'ꝼ': 'f',
    'ᵹ': 'g',
    'ꞃ': 'r',
    'ꞅ': 's',
    'ꞇ': 't',
    'ꝭ': 'is',
    'ǰ': 'j',
    'ĵ': 'j',
    'ʝ': 'j',
    'ɉ': 'j',
    'ḱ': 'k',
    'ǩ': 'k',
    'ķ': 'k',
    'ⱪ': 'k',
    'ꝃ': 'k',
    'ḳ': 'k',
    'ƙ': 'k',
    'ḵ': 'k',
    'ᶄ': 'k',
    'ꝁ': 'k',
    'ꝅ': 'k',
    'ĺ': 'l',
    'ƚ': 'l',
    'ɬ': 'l',
    'ľ': 'l',
    'ļ': 'l',
    'ḽ': 'l',
    'ȴ': 'l',
    'ḷ': 'l',
    'ḹ': 'l',
    'ⱡ': 'l',
    'ꝉ': 'l',
    'ḻ': 'l',
    'ŀ': 'l',
    'ɫ': 'l',
    'ᶅ': 'l',
    'ɭ': 'l',
    'ł': 'l',
    'ǉ': 'lj',
    'ſ': 's',
    'ẜ': 's',
    'ẛ': 's',
    'ẝ': 's',
    'ḿ': 'm',
    'ṁ': 'm',
    'ṃ': 'm',
    'ɱ': 'm',
    'ᵯ': 'm',
    'ᶆ': 'm',
    'ń': 'n',
    'ň': 'n',
    'ņ': 'n',
    'ṋ': 'n',
    'ȵ': 'n',
    'ṅ': 'n',
    'ṇ': 'n',
    'ǹ': 'n',
    'ɲ': 'n',
    'ṉ': 'n',
    'ƞ': 'n',
    'ᵰ': 'n',
    'ᶇ': 'n',
    'ɳ': 'n',
    'ñ': 'n',
    'ǌ': 'nj',
    'ó': 'o',
    'ŏ': 'o',
    'ǒ': 'o',
    'ô': 'o',
    'ố': 'o',
    'ộ': 'o',
    'ồ': 'o',
    'ổ': 'o',
    'ỗ': 'o',
    'ö': 'o',
    'ȫ': 'o',
    'ȯ': 'o',
    'ȱ': 'o',
    'ọ': 'o',
    'ő': 'o',
    'ȍ': 'o',
    'ò': 'o',
    'ỏ': 'o',
    'ơ': 'o',
    'ớ': 'o',
    'ợ': 'o',
    'ờ': 'o',
    'ở': 'o',
    'ỡ': 'o',
    'ȏ': 'o',
    'ꝋ': 'o',
    'ꝍ': 'o',
    'ⱺ': 'o',
    'ō': 'o',
    'ṓ': 'o',
    'ṑ': 'o',
    'ǫ': 'o',
    'ǭ': 'o',
    'ø': 'o',
    'ǿ': 'o',
    'õ': 'o',
    'ṍ': 'o',
    'ṏ': 'o',
    'ȭ': 'o',
    'ƣ': 'oi',
    'ꝏ': 'oo',
    'ɛ': 'e',
    'ᶓ': 'e',
    'ɔ': 'o',
    'ᶗ': 'o',
    'ȣ': 'ou',
    'ṕ': 'p',
    'ṗ': 'p',
    'ꝓ': 'p',
    'ƥ': 'p',
    'ᵱ': 'p',
    'ᶈ': 'p',
    'ꝕ': 'p',
    'ᵽ': 'p',
    'ꝑ': 'p',
    'ꝙ': 'q',
    'ʠ': 'q',
    'ɋ': 'q',
    'ꝗ': 'q',
    'ŕ': 'r',
    'ř': 'r',
    'ŗ': 'r',
    'ṙ': 'r',
    'ṛ': 'r',
    'ṝ': 'r',
    'ȑ': 'r',
    'ɾ': 'r',
    'ᵳ': 'r',
    'ȓ': 'r',
    'ṟ': 'r',
    'ɼ': 'r',
    'ᵲ': 'r',
    'ᶉ': 'r',
    'ɍ': 'r',
    'ɽ': 'r',
    'ↄ': 'c',
    'ꜿ': 'c',
    'ɘ': 'e',
    'ɿ': 'r',
    'ś': 's',
    'ṥ': 's',
    'š': 's',
    'ṧ': 's',
    'ş': 's',
    'ŝ': 's',
    'ș': 's',
    'ṡ': 's',
    'ṣ': 's',
    'ṩ': 's',
    'ʂ': 's',
    'ᵴ': 's',
    'ᶊ': 's',
    'ȿ': 's',
    'ɡ': 'g',
    'ᴑ': 'o',
    'ᴓ': 'o',
    'ᴝ': 'u',
    'ť': 't',
    'ţ': 't',
    'ṱ': 't',
    'ț': 't',
    'ȶ': 't',
    'ẗ': 't',
    'ⱦ': 't',
    'ṫ': 't',
    'ṭ': 't',
    'ƭ': 't',
    'ṯ': 't',
    'ᵵ': 't',
    'ƫ': 't',
    'ʈ': 't',
    'ŧ': 't',
    'ᵺ': 'th',
    'ɐ': 'a',
    'ᴂ': 'ae',
    'ǝ': 'e',
    'ᵷ': 'g',
    'ɥ': 'h',
    'ʮ': 'h',
    'ʯ': 'h',
    'ᴉ': 'i',
    'ʞ': 'k',
    'ꞁ': 'l',
    'ɯ': 'm',
    'ɰ': 'm',
    'ᴔ': 'oe',
    'ɹ': 'r',
    'ɻ': 'r',
    'ɺ': 'r',
    'ⱹ': 'r',
    'ʇ': 't',
    'ʌ': 'v',
    'ʍ': 'w',
    'ʎ': 'y',
    'ꜩ': 'tz',
    'ú': 'u',
    'ŭ': 'u',
    'ǔ': 'u',
    'û': 'u',
    'ṷ': 'u',
    'ü': 'u',
    'ǘ': 'u',
    'ǚ': 'u',
    'ǜ': 'u',
    'ǖ': 'u',
    'ṳ': 'u',
    'ụ': 'u',
    'ű': 'u',
    'ȕ': 'u',
    'ù': 'u',
    'ủ': 'u',
    'ư': 'u',
    'ứ': 'u',
    'ự': 'u',
    'ừ': 'u',
    'ử': 'u',
    'ữ': 'u',
    'ȗ': 'u',
    'ū': 'u',
    'ṻ': 'u',
    'ų': 'u',
    'ᶙ': 'u',
    'ů': 'u',
    'ũ': 'u',
    'ṹ': 'u',
    'ṵ': 'u',
    'ᵫ': 'ue',
    'ꝸ': 'um',
    'ⱴ': 'v',
    'ꝟ': 'v',
    'ṿ': 'v',
    'ʋ': 'v',
    'ᶌ': 'v',
    'ⱱ': 'v',
    'ṽ': 'v',
    'ꝡ': 'vy',
    'ẃ': 'w',
    'ŵ': 'w',
    'ẅ': 'w',
    'ẇ': 'w',
    'ẉ': 'w',
    'ẁ': 'w',
    'ⱳ': 'w',
    'ẘ': 'w',
    'ẍ': 'x',
    'ẋ': 'x',
    'ᶍ': 'x',
    'ý': 'y',
    'ŷ': 'y',
    'ÿ': 'y',
    'ẏ': 'y',
    'ỵ': 'y',
    'ỳ': 'y',
    'ƴ': 'y',
    'ỷ': 'y',
    'ỿ': 'y',
    'ȳ': 'y',
    'ẙ': 'y',
    'ɏ': 'y',
    'ỹ': 'y',
    'ź': 'z',
    'ž': 'z',
    'ẑ': 'z',
    'ʑ': 'z',
    'ⱬ': 'z',
    'ż': 'z',
    'ẓ': 'z',
    'ȥ': 'z',
    'ẕ': 'z',
    'ᵶ': 'z',
    'ᶎ': 'z',
    'ʐ': 'z',
    'ƶ': 'z',
    'ɀ': 'z',
    'ﬀ': 'ff',
    'ﬃ': 'ffi',
    'ﬄ': 'ffl',
    'ﬁ': 'fi',
    'ﬂ': 'fl',
    'ĳ': 'ij',
    'œ': 'oe',
    'ﬆ': 'st',
    'ₐ': 'a',
    'ₑ': 'e',
    'ᵢ': 'i',
    'ⱼ': 'j',
    'ₒ': 'o',
    'ᵣ': 'r',
    'ᵤ': 'u',
    'ᵥ': 'v',
    'ₓ': 'x'
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/typeahead/typeahead-utils", ["./latin-map"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var latin_map_1 = $__require('./latin-map');
  var TypeaheadUtils = (function() {
    function TypeaheadUtils() {}
    TypeaheadUtils.latinize = function(str) {
      return str.replace(/[^A-Za-z0-9\[\] ]/g, function(a) {
        return TypeaheadUtils.latinMap[a] || a;
      });
    };
    TypeaheadUtils.escapeRegexp = function(queryToEscape) {
      return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    };
    TypeaheadUtils.tokenize = function(str, wordRegexDelimiters, phraseRegexDelimiters) {
      if (wordRegexDelimiters === void 0) {
        wordRegexDelimiters = ' ';
      }
      if (phraseRegexDelimiters === void 0) {
        phraseRegexDelimiters = '';
      }
      var regexStr = '(?:[' + phraseRegexDelimiters + '])([^' + phraseRegexDelimiters + ']+)(?:[' + phraseRegexDelimiters + '])|([^' + wordRegexDelimiters + ']+)';
      var preTokenized = str.split(new RegExp(regexStr, 'g'));
      var result = [];
      var preTokenizedLength = preTokenized.length;
      var token;
      var replacePhraseDelimiters = new RegExp('[' + phraseRegexDelimiters + ']+', 'g');
      for (var i = 0; i < preTokenizedLength; i += 1) {
        token = preTokenized[i];
        if (token && token.length && token !== wordRegexDelimiters) {
          result.push(token.replace(replacePhraseDelimiters, ''));
        }
      }
      return result;
    };
    TypeaheadUtils.latinMap = latin_map_1.latinMap;
    return TypeaheadUtils;
  })();
  exports.TypeaheadUtils = TypeaheadUtils;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/typeahead/typeahead-container.component", ["angular2/core", "angular2/common", "./typeahead-utils", "./typeahead-options.class", "../position", "../ng2-bootstrap-config"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var common_1 = $__require('angular2/common');
  var typeahead_utils_1 = $__require('./typeahead-utils');
  var typeahead_options_class_1 = $__require('./typeahead-options.class');
  var position_1 = $__require('../position');
  var ng2_bootstrap_config_1 = $__require('../ng2-bootstrap-config');
  var TEMPLATE = (_a = {}, _a[ng2_bootstrap_config_1.Ng2BootstrapTheme.BS4] = "\n  <div class=\"dropdown-menu\"\n      [ngStyle]=\"{top: top, left: left, display: display}\"\n      style=\"display: block\">\n      <a href=\"#\"\n         *ngFor=\"#match of matches\"\n         class=\"dropdown-item\"\n         (click)=\"selectMatch(match, $event)\"\n         (mouseenter)=\"selectActive(match)\"\n         [class.active]=\"isActive(match)\"\n         [innerHtml]=\"hightlight(match, query)\"></a>\n  </div>\n  ", _a[ng2_bootstrap_config_1.Ng2BootstrapTheme.BS3] = "\n  <ul class=\"dropdown-menu\"\n      [ngStyle]=\"{top: top, left: left, display: display}\"\n      style=\"display: block\">\n    <li *ngFor=\"#match of matches\"\n        [class.active]=\"isActive(match)\"\n        (mouseenter)=\"selectActive(match)\">\n        <a href=\"#\" (click)=\"selectMatch(match, $event)\" tabindex=\"-1\" [innerHtml]=\"hightlight(match, query)\"></a>\n    </li>\n  </ul>\n  ", _a);
  var TypeaheadContainer = (function() {
    function TypeaheadContainer(element, options) {
      this.element = element;
      this._matches = [];
      Object.assign(this, options);
    }
    Object.defineProperty(TypeaheadContainer.prototype, "matches", {
      get: function() {
        return this._matches;
      },
      set: function(value) {
        this._matches = value;
        if (this._matches.length > 0) {
          this._active = this._matches[0];
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TypeaheadContainer.prototype, "field", {
      set: function(value) {
        this._field = value;
      },
      enumerable: true,
      configurable: true
    });
    TypeaheadContainer.prototype.position = function(hostEl) {
      this.display = 'block';
      this.top = '0px';
      this.left = '0px';
      var p = position_1.positionService.positionElements(hostEl.nativeElement, this.element.nativeElement.children[0], this.placement, false);
      this.top = p.top + 'px';
      this.left = p.left + 'px';
    };
    TypeaheadContainer.prototype.selectActiveMatch = function() {
      this.selectMatch(this._active);
    };
    TypeaheadContainer.prototype.prevActiveMatch = function() {
      var index = this.matches.indexOf(this._active);
      this._active = this.matches[index - 1 < 0 ? this.matches.length - 1 : index - 1];
    };
    TypeaheadContainer.prototype.nextActiveMatch = function() {
      var index = this.matches.indexOf(this._active);
      this._active = this.matches[index + 1 > this.matches.length - 1 ? 0 : index + 1];
    };
    TypeaheadContainer.prototype.selectActive = function(value) {
      this._active = value;
    };
    TypeaheadContainer.prototype.isActive = function(value) {
      return this._active === value;
    };
    TypeaheadContainer.prototype.selectMatch = function(value, e) {
      if (e === void 0) {
        e = null;
      }
      if (e) {
        e.stopPropagation();
        e.preventDefault();
      }
      this.parent.changeModel(value);
      this.parent.typeaheadOnSelect.next({item: value});
      return false;
    };
    TypeaheadContainer.prototype.hightlight = function(item, query) {
      var itemStr = (typeof item === 'object' && this._field ? item[this._field] : item).toString();
      var itemStrHelper = (this.parent.typeaheadLatinize ? typeahead_utils_1.TypeaheadUtils.latinize(itemStr) : itemStr).toLowerCase();
      var startIdx;
      var tokenLen;
      if (typeof query === 'object') {
        var queryLen = query.length;
        for (var i = 0; i < queryLen; i += 1) {
          startIdx = itemStrHelper.indexOf(query[i]);
          tokenLen = query[i].length;
          if (startIdx >= 0 && tokenLen > 0) {
            itemStr = itemStr.substring(0, startIdx) + '<strong>' + itemStr.substring(startIdx, startIdx + tokenLen) + '</strong>' + itemStr.substring(startIdx + tokenLen);
            itemStrHelper = itemStrHelper.substring(0, startIdx) + '        ' + ' '.repeat(tokenLen) + '         ' + itemStrHelper.substring(startIdx + tokenLen);
          }
        }
      } else if (query) {
        startIdx = itemStrHelper.indexOf(query);
        tokenLen = query.length;
        if (startIdx >= 0 && tokenLen > 0) {
          itemStr = itemStr.substring(0, startIdx) + '<strong>' + itemStr.substring(startIdx, startIdx + tokenLen) + '</strong>' + itemStr.substring(startIdx + tokenLen);
        }
      }
      return itemStr;
    };
    TypeaheadContainer = __decorate([core_1.Component({
      selector: 'typeahead-container',
      directives: [common_1.CORE_DIRECTIVES],
      template: TEMPLATE[ng2_bootstrap_config_1.Ng2BootstrapConfig.theme],
      encapsulation: core_1.ViewEncapsulation.None
    }), __metadata('design:paramtypes', [core_1.ElementRef, typeahead_options_class_1.TypeaheadOptions])], TypeaheadContainer);
    return TypeaheadContainer;
  })();
  exports.TypeaheadContainer = TypeaheadContainer;
  var _a;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/typeahead/typeahead-options.class", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var TypeaheadOptions = (function() {
    function TypeaheadOptions(options) {
      Object.assign(this, options);
    }
    return TypeaheadOptions;
  })();
  exports.TypeaheadOptions = TypeaheadOptions;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/typeahead", ["./typeahead/typeahead.directive", "./typeahead/typeahead-container.component", "./typeahead/typeahead-options.class"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var typeahead_directive_1 = $__require('./typeahead/typeahead.directive');
  var typeahead_container_component_1 = $__require('./typeahead/typeahead-container.component');
  var typeahead_directive_2 = $__require('./typeahead/typeahead.directive');
  exports.Typeahead = typeahead_directive_2.Typeahead;
  var typeahead_container_component_2 = $__require('./typeahead/typeahead-container.component');
  exports.TypeaheadContainer = typeahead_container_component_2.TypeaheadContainer;
  var typeahead_options_class_1 = $__require('./typeahead/typeahead-options.class');
  exports.TypeaheadOptions = typeahead_options_class_1.TypeaheadOptions;
  exports.TYPEAHEAD_DIRECTIVES = [typeahead_directive_1.Typeahead, typeahead_container_component_1.TypeaheadContainer];
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/position", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var PositionService = (function() {
    function PositionService() {}
    Object.defineProperty(PositionService.prototype, "window", {
      get: function() {
        return window;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(PositionService.prototype, "document", {
      get: function() {
        return window.document;
      },
      enumerable: true,
      configurable: true
    });
    PositionService.prototype.getStyle = function(nativeEl, cssProp) {
      if (nativeEl.currentStyle) {
        return nativeEl.currentStyle[cssProp];
      }
      if (this.window.getComputedStyle) {
        return this.window.getComputedStyle(nativeEl)[cssProp];
      }
      return nativeEl.style[cssProp];
    };
    PositionService.prototype.isStaticPositioned = function(nativeEl) {
      return (this.getStyle(nativeEl, 'position') || 'static') === 'static';
    };
    PositionService.prototype.parentOffsetEl = function(nativeEl) {
      var offsetParent = nativeEl.offsetParent || this.document;
      while (offsetParent && offsetParent !== this.document && this.isStaticPositioned(offsetParent)) {
        offsetParent = offsetParent.offsetParent;
      }
      return offsetParent || this.document;
    };
    ;
    PositionService.prototype.position = function(nativeEl) {
      var elBCR = this.offset(nativeEl);
      var offsetParentBCR = {
        top: 0,
        left: 0
      };
      var offsetParentEl = this.parentOffsetEl(nativeEl);
      if (offsetParentEl !== this.document) {
        offsetParentBCR = this.offset(offsetParentEl);
        offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
        offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
      }
      var boundingClientRect = nativeEl.getBoundingClientRect();
      return {
        width: boundingClientRect.width || nativeEl.offsetWidth,
        height: boundingClientRect.height || nativeEl.offsetHeight,
        top: elBCR.top - offsetParentBCR.top,
        left: elBCR.left - offsetParentBCR.left
      };
    };
    PositionService.prototype.offset = function(nativeEl) {
      var boundingClientRect = nativeEl.getBoundingClientRect();
      return {
        width: boundingClientRect.width || nativeEl.offsetWidth,
        height: boundingClientRect.height || nativeEl.offsetHeight,
        top: boundingClientRect.top + (this.window.pageYOffset || this.document.documentElement.scrollTop),
        left: boundingClientRect.left + (this.window.pageXOffset || this.document.documentElement.scrollLeft)
      };
    };
    PositionService.prototype.positionElements = function(hostEl, targetEl, positionStr, appendToBody) {
      var positionStrParts = positionStr.split('-');
      var pos0 = positionStrParts[0];
      var pos1 = positionStrParts[1] || 'center';
      var hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
      var targetElWidth = targetEl.offsetWidth;
      var targetElHeight = targetEl.offsetHeight;
      var shiftWidth = {
        center: function() {
          return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
        },
        left: function() {
          return hostElPos.left;
        },
        right: function() {
          return hostElPos.left + hostElPos.width;
        }
      };
      var shiftHeight = {
        center: function() {
          return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
        },
        top: function() {
          return hostElPos.top;
        },
        bottom: function() {
          return hostElPos.top + hostElPos.height;
        }
      };
      var targetElPos;
      switch (pos0) {
        case 'right':
          targetElPos = {
            top: shiftHeight[pos1](),
            left: shiftWidth[pos0]()
          };
          break;
        case 'left':
          targetElPos = {
            top: shiftHeight[pos1](),
            left: hostElPos.left - targetElWidth
          };
          break;
        case 'bottom':
          targetElPos = {
            top: shiftHeight[pos0](),
            left: shiftWidth[pos1]()
          };
          break;
        default:
          targetElPos = {
            top: hostElPos.top - targetElHeight,
            left: shiftWidth[pos1]()
          };
          break;
      }
      return targetElPos;
    };
    return PositionService;
  })();
  exports.PositionService = PositionService;
  exports.positionService = new PositionService();
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/common", ["angular2/core"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('angular2/core');
  var NgTransclude = (function() {
    function NgTransclude(viewRef) {
      this.viewRef = viewRef;
    }
    Object.defineProperty(NgTransclude.prototype, "ngTransclude", {
      get: function() {
        return this._ngTransclude;
      },
      set: function(templateRef) {
        this._ngTransclude = templateRef;
        if (templateRef) {
          this.viewRef.createEmbeddedView(templateRef);
        }
      },
      enumerable: true,
      configurable: true
    });
    NgTransclude = __decorate([core_1.Directive({
      selector: '[ngTransclude]',
      properties: ['ngTransclude']
    }), __param(0, core_1.Inject(core_1.ViewContainerRef)), __metadata('design:paramtypes', [core_1.ViewContainerRef])], NgTransclude);
    return NgTransclude;
  })();
  exports.NgTransclude = NgTransclude;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/components/ng2-bootstrap-config", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(Ng2BootstrapTheme) {
    Ng2BootstrapTheme[Ng2BootstrapTheme["BS3"] = 1] = "BS3";
    Ng2BootstrapTheme[Ng2BootstrapTheme["BS4"] = 2] = "BS4";
  })(exports.Ng2BootstrapTheme || (exports.Ng2BootstrapTheme = {}));
  var Ng2BootstrapTheme = exports.Ng2BootstrapTheme;
  var Ng2BootstrapConfig = (function() {
    function Ng2BootstrapConfig() {}
    Object.defineProperty(Ng2BootstrapConfig, "theme", {
      get: function() {
        var w = window;
        if (w && w.__theme === 'bs4') {
          return Ng2BootstrapTheme.BS4;
        }
        return (this._theme || Ng2BootstrapTheme.BS3);
      },
      set: function(v) {
        this._theme = v;
      },
      enumerable: true,
      configurable: true
    });
    return Ng2BootstrapConfig;
  })();
  exports.Ng2BootstrapConfig = Ng2BootstrapConfig;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-bootstrap/ng2-bootstrap", ["./components/accordion", "./components/alert", "./components/buttons", "./components/carousel", "./components/collapse", "./components/dropdown", "./components/pagination", "./components/progressbar", "./components/rating", "./components/tabs", "./components/timepicker", "./components/tooltip", "./components/typeahead", "./components/position", "./components/common", "./components/ng2-bootstrap-config"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  __export($__require('./components/accordion'));
  __export($__require('./components/alert'));
  __export($__require('./components/buttons'));
  __export($__require('./components/carousel'));
  __export($__require('./components/collapse'));
  __export($__require('./components/dropdown'));
  __export($__require('./components/pagination'));
  __export($__require('./components/progressbar'));
  __export($__require('./components/rating'));
  __export($__require('./components/tabs'));
  __export($__require('./components/timepicker'));
  __export($__require('./components/tooltip'));
  __export($__require('./components/typeahead'));
  __export($__require('./components/position'));
  __export($__require('./components/common'));
  __export($__require('./components/ng2-bootstrap-config'));
  global.define = __define;
  return module.exports;
});
