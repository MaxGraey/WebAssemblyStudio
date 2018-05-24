/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

 // Utils provided by monaco editor, but exposed only via AMD require().
 // See index.tsx for initialization.

export class MonacoUtils {
  static Tree: any;
  static ContextMenuService: any;
  static ContextViewService: any;
  static TreeDefaults: any;
  static Action: any;

  static initialize(require: (module: string) => any) {
    this.Tree               = require("vs/base/parts/tree/browser/treeImpl").Tree;
    this.ContextMenuService = require("vs/platform/contextview/browser/contextMenuService").ContextMenuService;
    this.ContextViewService = require("vs/platform/contextview/browser/contextViewService").ContextViewService;
    this.TreeDefaults       = require("vs/base/parts/tree/browser/treeDefaults");
    this.Action             = require("vs/base/common/actions").Action;
  }
}
