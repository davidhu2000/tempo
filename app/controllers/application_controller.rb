class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    unless logged_in?
      render json: ['You must be logged in to view this page'], status: 401
    end
  end

  def redirect_all
    url = logged_in? ? "/#/browse" : "/#/splash"
    redirect_to url unless params['controller'] == 'static_pages'
  end

  before_action :redirect_all

end
