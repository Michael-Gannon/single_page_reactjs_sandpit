var CurrentPageMixin = {
  componentWillMount: function() {
    var originalRender = this.render;

    this.render = function() {
      console.log('render in CurrentPageMixin')
      if(this.props.currentPage !== this.props.pageName) {
        return false;
      }
      return originalRender.call(this);
    };
  }
}

module.exports = CurrentPageMixin;