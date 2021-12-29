#-----------------------------------------------------------------------------
# Copyright (c) 2012 - 2022, Anaconda, Inc., and Bokeh Contributors.
# All rights reserved.
#
# The full license is in the file LICENSE.txt, distributed with this software.
#-----------------------------------------------------------------------------

#-----------------------------------------------------------------------------
# Boilerplate
#-----------------------------------------------------------------------------
from __future__ import annotations # isort:skip

import pytest ; pytest

#-----------------------------------------------------------------------------
# Imports
#-----------------------------------------------------------------------------

# Bokeh imports
from bokeh.embed.util import RenderItem

# Module under test
import bokeh.embed.elements as bee # isort:skip

#-----------------------------------------------------------------------------
# Setup
#-----------------------------------------------------------------------------

#-----------------------------------------------------------------------------
# General API
#-----------------------------------------------------------------------------

#-----------------------------------------------------------------------------
# Dev API
#-----------------------------------------------------------------------------


class Test_div_for_render_item:
    def test_render(self) -> None:
        render_item = RenderItem(docid="doc123", elementid="foo123")
        assert bee.div_for_render_item(render_item).strip() == """<div id="foo123"></div>"""

class Test_html_page_for_render_items:
    pass

class Test_script_for_render_items:
    pass

#-----------------------------------------------------------------------------
# Private API
#-----------------------------------------------------------------------------

#-----------------------------------------------------------------------------
# Code
#-----------------------------------------------------------------------------
