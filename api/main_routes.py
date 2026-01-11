from flask import Blueprint, session, redirect, url_for, render_template, request, jsonify, current_app
import secrets
import hashlib
import requests
import os
import base64
import hmac
from datetime import datetime
from .extensions import db
from .models import User, Referral, Package, UserPackage, Payment
from .paypal import create_paypal_order

bp = Blueprint('main', __name__)

# Route for /affiliate_program to render the affiliate program page
@bp.route('/affiliate_program')
def affiliate_program():
    return render_template('affiliate_program.html')

# Route for /hosting to render the new hosting packages page
@bp.route('/hosting')
def hosting():
    return render_template('hosting_packages.html')

# Route for /payment to render the payment page
@bp.route('/payment')
def payment():
    return render_template('payment.html')

# Route for /privacy-policy
@bp.route('/privacy-policy')
def privacy_policy():
    return render_template('privacy_policy.html')

# Route for /terms
@bp.route('/terms')
def terms():
    return render_template('terms.html')
# Route for /packages to render the main packages page
