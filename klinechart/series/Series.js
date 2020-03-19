import { InvalidateLevel } from '../data/ChartData'

export default class Series {
  constructor (container, chartData) {
    this._container = container
    this._chartData = chartData
    this._initElement()
    this._mainWidget = this._createMainWidget(this._mainWidgetCell)
    this._yAxisWidget = this._createYAxisWidget(this._yAxisWidgetCell)
  }

  _initElement (container) {
    this._element = document.createElement('div')
    this._element.style.margin = '0'
    this._element.style.padding = '0'
    this._element.style.position = 'relative'
    this._element.style.overflow = 'hidden'
    this._mainWidgetCell = this._createCell()
    this._yAxisWidgetCell = this._createCell()
    this._element.appendChild(this._mainWidgetCell)
    this._element.appendChild(this._yAxisWidgetCell)
    container.appendChild(this._element)
  }

  _createCell () {
    const cell = document.createElement('div')
    cell.style.position = 'absolute'
    cell.style.margin = '0'
    cell.style.padding = '0'
    cell.style.top = '0'
    cell.style.zIndex = '1'
    return cell
  }

  /**
   * 创建主组件
   * @param container
   * @private
   */
  _createMainWidget (container) {
  }

  /**
   * 创建y轴组件
   * @param container
   * @private
   */
  _createYAxisWidget (container) {
  }

  /**
   * 设置尺寸
   * @param mainWidgetSize
   * @param yAxisWidgetSize
   */
  setSize (mainWidgetSize, yAxisWidgetSize) {
    this._mainWidgetCell.style.width = `${mainWidgetSize.width}px`
    this._mainWidgetCell.style.height = `${mainWidgetSize.height}px`
    this._yAxisWidgetCell.style.height = `${yAxisWidgetSize.width}px`
    this._yAxisWidgetCell.style.height = `${yAxisWidgetSize.height}px`
    this._mainWidget.setSize(mainWidgetSize.width, mainWidgetSize.height)
    if (this._yAxisWidget) {
      this._yAxisWidget.setSize(yAxisWidgetSize.width, yAxisWidgetSize.height)
    }
  }

  _computeAxis () {

  }

  /**
   * 刷新
   * @param level
   */
  invalidate (level) {
    if (level === InvalidateLevel.FULL) {
      this._computeAxis()
    }
    this._mainWidget.invalidate(level)
    if (this._yAxisWidget) {
      this._yAxisWidget.invalidate(level)
    }
  }

  /**
   * 销毁
   */
  destroy () {
    this._container.removeChild(this._element)
  }
}
