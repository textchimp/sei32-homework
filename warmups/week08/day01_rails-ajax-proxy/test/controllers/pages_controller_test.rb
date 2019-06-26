require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get ajax_proxy" do
    get pages_ajax_proxy_url
    assert_response :success
  end

end
